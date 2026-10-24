# LazyChat homepage

A responsive React/Vite homepage concept with a dark violet design, an interactive inbox, sales scenarios, four pricing plans, FAQs, and local workspace previews.

## Development

Use Node.js 22.12+ or 24 and npm. The prepared cloud environment uses Node.js 24.

```bash
cd /workspace/my-fast
npm ci --cache /workspace/.cache/npm --no-audit --no-fund
npm run dev -- --port 3000 --strictPort
```

The server binds to all interfaces. In a development environment with port forwarding, open the preview for port **3000**. On your own computer, open the local URL Vite prints in the terminal. The onboarding interface itself may not provide an app preview; its visualization panel is not required to run the site.

## Production build and preview

```bash
npm run build
npm run preview -- --port 4173 --strictPort
```

Preview the production build using port **4173**. Static deployment files are generated in `dist/`. This is a client-rendered site with no backend or environment-variable requirements.

## Browser checks

```bash
npm run build
npm test
```

Tests use the existing `/usr/bin/chromium` and start the production preview server automatically. To use a different installed Chromium, set `CHROMIUM_PATH` to its executable. Tests cover browser errors and assets, desktop/tablet/mobile layouts, demo scenarios, human takeover, modal focus, pricing, downloads, mobile navigation, and FAQs.

## Design concept boundaries

- Inbox messages, business examples, and product data are illustrative.
- The trial buttons open an interactive workspace preview; they do not create accounts or subscriptions.
- Contact Sales creates a downloadable workspace brief; it does not send a request.
- Demo inputs are kept only in React memory. They are not sent to a server or retained after reload.
- Real channel integrations, signup, billing, published legal documents, customer logos/results, and sales contact details need verified production services and content before launch.

## Startup error fixed

Vite's current JSX transform uses `React.createElement`. `src/App.jsx` originally imported React hooks without importing the `React` binding, so the browser threw `ReferenceError: React is not defined` before rendering. The React import fixes this runtime error. A build can succeed despite this kind of missing runtime binding; the browser smoke test now guards page rendering as well.

Cloud tasks already have an isolated checkout. Use the existing repository; do not create a Git worktree unless explicitly requested.
