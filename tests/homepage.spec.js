import { test, expect } from '@playwright/test';

test('production page renders without browser errors or broken local assets', async ({ page }) => {
  const errors = [];
  const failedResponses = [];
  page.on('pageerror', error => errors.push(error.message));
  page.on('console', message => { if (message.type() === 'error') errors.push(message.text()); });
  page.on('response', response => { if (response.status() >= 400) failedResponses.push(response.url()); });
  await page.goto('/', { waitUntil: 'networkidle' });
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Turn conversations');
  await expect(page.getByRole('heading', { name: 'Start small. Grow at your pace.' })).toBeVisible();
  expect(errors).toEqual([]);
  expect(failedResponses).toEqual([]);
});

for (const width of [1440, 768, 390, 320]) {
  test(`responsive layout fits a ${width}px viewport`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.goto('/');
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
    const dimensions = await page.evaluate(() => ({ content: document.documentElement.scrollWidth, viewport: innerWidth }));
    expect(dimensions.content).toBeLessThanOrEqual(dimensions.viewport);
    await expect(page.locator('.ms-plan')).toHaveCount(4);
    if (width < 680) {
      const cards = await page.locator('.ms-plan').evaluateAll(elements => elements.map(el => ({ x: el.getBoundingClientRect().x, y: el.getBoundingClientRect().y })));
      expect(new Set(cards.map(card => card.x)).size).toBe(1);
      expect(cards[1].y).toBeGreaterThan(cards[0].y);
    }
  });
}

test('sales scenarios support selection, keyboard navigation, and voice transcripts', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('tab', { name: 'Bargaining' }).click();
  await expect(page.getByRole('tabpanel')).toContainText('Human review needed');
  await page.getByRole('tab', { name: 'Bargaining' }).press('ArrowRight');
  await expect(page.getByRole('tab', { name: 'Voice messages' })).toBeFocused();
  await expect(page.getByRole('tab', { name: 'Voice messages' })).toHaveAttribute('aria-selected', 'true');
  await page.getByRole('button', { name: 'Read transcript' }).click();
  await expect(page.locator('.voice-message')).toContainText('Do you have the black color?');
  await page.getByRole('button', { name: 'Hide transcript', exact: true }).click();
  await expect(page.locator('.voice-message p')).toHaveCount(0);
  await page.getByRole('tab', { name: 'Taking orders' }).click();
  await expect(page.getByRole('tabpanel')).toContainText('Your team confirms the order.');
  await page.getByRole('tab', { name: 'Taking orders' }).press('Home');
  await expect(page.getByRole('tab', { name: 'Product questions' })).toHaveAttribute('aria-selected', 'true');
});

test('inbox filters, search, and human takeover work', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'Filter WhatsApp' }).click();
  await expect(page.locator('.conversation')).toHaveCount(1);
  await expect(page.locator('.chat-header')).toContainText('Rafi Ahmed');
  await page.getByRole('button', { name: 'Take over', exact: true }).click();
  await page.getByRole('textbox', { name: 'Your reply' }).fill('Delivery to Chattogram is available.');
  await page.getByRole('button', { name: 'Send demo reply' }).click();
  await expect(page.locator('.manual-message')).toHaveText('Delivery to Chattogram is available.');
  await page.getByRole('button', { name: 'Resume AI' }).click();
  await expect(page.getByRole('button', { name: 'Take over', exact: true })).toBeVisible();
  await page.locator('.inbox-channel-tabs').getByRole('button', { name: 'All', exact: true }).click();
  await page.getByRole('textbox', { name: 'Search demo conversations' }).fill('Tanisha');
  await expect(page.locator('.conversation')).toHaveCount(1);
  await page.locator('.conversation').click();
  await expect(page.locator('.chat-header')).toContainText('Tanisha Islam');
  await page.getByRole('textbox', { name: 'Search demo conversations' }).fill('missing customer');
  await expect(page.getByText('No matching conversations.')).toBeVisible();
});

test('trial preview accepts business details and dialogs close with Escape', async ({ page }) => {
  await page.goto('/');
  const trigger = page.locator('.header-actions').getByRole('button', { name: 'Start free trial' });
  await trigger.click();
  await expect(page.getByRole('dialog')).toBeVisible();
  await page.getByRole('textbox', { name: 'Your business name' }).fill('Dhaka Studio');
  await page.getByRole('combobox').selectOption('Instagram');
  await page.getByRole('button', { name: 'Explore my demo workspace' }).click();
  await expect(page.getByRole('dialog')).toHaveCount(0);
  await expect(page.locator('.workspace-switch')).toContainText('Dhaka Studio');
  await trigger.click();
  await page.keyboard.press('Escape');
  await expect(page.getByRole('dialog')).toHaveCount(0);
  await expect(trigger).toBeFocused();
});

test('plans match the brief and enterprise provides a real downloadable brief', async ({ page }) => {
  await page.goto('/');
  const expected = [
    ['Free Trial', '0', '800 AI replies', 'Up to 20 products'],
    ['Starter Tier', '2,499', '4,000 AI replies / mo', 'Up to 150 products'],
    ['Growth Pro', '6,999', '12,000 AI replies / mo', 'Up to 1,500 products'],
    ['Enterprise Scale', '24,999', '50,000 AI replies / mo', 'Unlimited products'],
  ];
  for (const [name, price, replies, products] of expected) {
    const card = page.locator('.ms-plan').filter({ has: page.getByRole('heading', { name, exact: true }) });
    await expect(card.locator('.ms-plan-price')).toContainText(price);
    await expect(card).toContainText(replies);
    await expect(card).toContainText(products);
  }
  await expect(page.locator('.ms-plan-popular')).toContainText('Growth Pro');
  await page.locator('.ms-plan').getByRole('button', { name: 'Contact Sales' }).click();
  await page.getByRole('textbox', { name: 'Your business name' }).fill('Example Business');
  const downloadEvent = page.waitForEvent('download');
  await page.getByRole('button', { name: 'Download workspace brief' }).click();
  const download = await downloadEvent;
  expect(download.suggestedFilename()).toBe('lazychat-workspace-brief.txt');
  expect(await download.failure()).toBeNull();
});

test('mobile menu and FAQ controls work', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/');
  await page.getByRole('button', { name: 'Open navigation' }).click();
  await expect(page.getByRole('navigation', { name: 'Mobile navigation' })).toBeVisible();
  await page.getByRole('navigation', { name: 'Mobile navigation' }).getByRole('link', { name: 'Pricing' }).click();
  await expect(page.getByRole('navigation', { name: 'Mobile navigation' })).toHaveCount(0);
  await expect(page).toHaveURL(/#pricing$/);
  const faq = page.locator('details').filter({ hasText: 'Can LazyChat reply in Bangla and Banglish?' });
  await faq.locator('summary').click();
  await expect(faq).toHaveAttribute('open', '');
  await expect(faq.locator('p')).toBeVisible();
  await faq.locator('summary').click();
  await expect(faq).not.toHaveAttribute('open');
});
