import React from 'react';
import {
  ArrowRight, AudioLines, Check, ChevronDown, CircleCheck,
  Clock3, Globe2, Image, Inbox, Layers3, Link2, LockKeyhole, MessageCircle,
  MessagesSquare, Package, PlugZap, ShieldCheck, ShoppingBag, SlidersHorizontal,
  Sparkles, Truck, UserRound, UsersRound, Zap,
} from 'lucide-react';
import './marketing-sections.css';

const steps = [
  { icon: Link2, title: 'Connect your channels', text: 'Bring your Facebook, Instagram, WhatsApp, and web conversations together.' },
  { icon: Package, title: 'Make it your business', text: 'Add your products, prices, FAQs, and the way you like to talk to customers.' },
  { icon: Sparkles, title: 'Let conversations flow', text: 'AI helps with everyday questions and guides interested customers toward an order.' },
  { icon: SlidersHorizontal, title: 'Stay in the driver’s seat', text: 'Review conversations, adjust responses, and step in whenever you need to.' },
];

export function IntroSections() {
  return <>
    <section className="section ms-problems" aria-labelledby="problems-title">
      <div className="container ms-problem-layout">
        <div className="ms-problem-copy">
          <p className="eyebrow">GOOD CONVERSATIONS. BETTER BUSINESS.</p>
          <h2 id="problems-title">Your inbox is busy.<br />Your business should<br /><span className="text-gradient">be growing.</span></h2>
          <p>Every “price koto?” is a potential customer. Give each one the attention they deserve, without spending your whole day in the inbox.</p>
          <a className="ms-text-link" href="#live-demo">See a conversation in action <ArrowRight size={16} /></a>
        </div>
        <div className="ms-before-after">
          <div className="ms-comparison-labels"><span>The everyday struggle</span><span><Sparkles size={13} /> The LazyChat way</span></div>
          {[
            { icon: Clock3, before: 'Replies that come too late', after: 'Keep the conversation moving', detail: 'Help customers while they’re ready to buy.' },
            { icon: MessagesSquare, before: 'The same questions, all day', after: 'Helpful answers, on repeat', detail: 'From prices to delivery, leave FAQs to AI.' },
            { icon: Layers3, before: 'Messages everywhere', after: 'One inbox. A clearer picture.', detail: 'Keep your team and conversations together.' },
          ].map(({ icon: Icon, before, after, detail }) => <div className="ms-comparison-row" key={before}>
            <div className="ms-before"><Icon size={18} /><span>{before}</span></div>
            <ArrowRight className="ms-comparison-arrow" size={16} />
            <div className="ms-after"><h3>{after}</h3><p>{detail}</p></div>
          </div>)}
          <div className="ms-comparison-note"><CircleCheck size={15} /><span>Less catching up. More meaningful conversations.</span></div>
        </div>
      </div>
    </section>

    <section className="section ms-how" id="how-it-works" aria-labelledby="how-title">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">SMALL SETUP. BIG POSSIBILITIES.</p>
          <h2 id="how-title">From connected to <span className="text-gradient">conversational.</span></h2>
          <p>Your business knowledge. Your channels. A little AI assistance.</p>
        </div>
        <div className="ms-steps">
          {steps.map(({ icon: Icon, title, text }, index) => <article className="ms-step" key={title}>
            <div className="ms-step-top"><span className="ms-step-icon"><Icon size={23} /></span><span className="ms-step-number">0{index + 1}</span></div>
            <h3>{title}</h3><p>{text}</p>
          </article>)}
        </div>
      </div>
    </section>
  </>;
}

const features = [
  { icon: Inbox, title: 'One beautifully organized inbox', text: 'Keep conversations across channels in one place, so your team can pick up where you left off.', benefit: 'Fewer tabs. More context.' },
  { icon: Sparkles, title: 'Replies that know your business', text: 'Answer everyday questions using the products, FAQs, and business information you provide.', benefit: 'Helpful, even after hours.' },
  { icon: Globe2, title: 'Speak your customers’ language', text: 'Keep the conversation natural in Bangla, Banglish, or English. Just like your customers do.', benefit: 'Less friction. More connection.' },
  { icon: Image, title: 'Make product questions clearer', text: 'Use customer images to help identify products and share the product visuals you have available.', benefit: 'Help them find the right fit.' },
  { icon: ShoppingBag, title: 'Move from “interested” to “ordered”', text: 'Guide customers through product selection and collect the details your team needs for an order.', benefit: 'A smoother path to purchase.' },
  { icon: AudioLines, title: 'Make room for voice messages', text: 'Help your team understand voice enquiries and continue the conversation with the right context.', benefit: 'Meet customers how they chat.' },
  { icon: UserRound, title: 'Human when it matters', text: 'Take over tricky questions, special requests, or negotiations. Your team always has a role.', benefit: 'Automation with a human touch.' },
  { icon: PlugZap, title: 'Be where your customers are', text: 'Bring Facebook, Instagram, WhatsApp, and Web Chat into your workflow, with channels by plan.', benefit: 'More channels. Less juggling.' },
  { icon: Truck, title: 'Keep the next step organized', text: 'Support order handoff and delivery workflows, with multi-warehouse dispatch on Enterprise Scale.', benefit: 'From conversation to coordination.' },
];

const plans = [
  { name: 'Free Trial', description: 'Meet your new sales assistant.', price: '0', period: 'for 14 days', action: 'Start Free Trial', kind: 'trial', features: ['800 AI replies', '1 staff login', 'Up to 20 products'], channels: 'Facebook, Web Chat' },
  { name: 'Starter Tier', description: 'For businesses finding their flow.', price: '2,499', period: '/ month', action: 'Choose Starter Tier', kind: 'trial', features: ['4,000 AI replies / mo', '2 staff logins', 'Up to 150 products'], channels: 'Facebook, Instagram, Web Chat' },
  { name: 'Growth Pro', description: 'For busy inboxes and bigger plans.', price: '6,999', period: '/ month', action: 'Choose Growth Pro', kind: 'trial', popular: true, features: ['12,000 AI replies / mo', '5 staff logins', 'Up to 1,500 products'], channels: 'Facebook, Instagram, WhatsApp, Web Chat' },
  { name: 'Enterprise Scale', description: 'For teams ready to scale together.', price: '24,999', period: '/ month', action: 'Contact Sales', kind: 'sales', features: ['50,000 AI replies / mo', 'Unlimited staff logins', 'Unlimited products'], channels: 'Facebook, Instagram, WhatsApp, Web Chat', extras: ['Multi-warehouse dispatch', '24/7 dedicated account manager'] },
];

const faqs = [
  ['Is my business and customer data safe?', 'Privacy matters when you connect your business inbox. Review the data access, retention, and privacy terms with the LazyChat team before connecting a live account. Limit staff access to the people who need it and only add business information you want your assistant to use.'],
  ['Can LazyChat reply in Bangla and Banglish?', 'Yes. The experience is designed for Bangla, Banglish, and English conversations, so customers can ask questions in the way that feels natural to them. You can explore examples in the conversation demo above.'],
  ['Can I control the AI’s responses?', 'Your business information, product details, and FAQs give the assistant its context. Review conversations, update that information, and let your team take over whenever a customer needs a personal answer. Test your common questions before turning on automation for live conversations.'],
  ['What happens when a customer negotiates?', 'A customer asking for a discount should get an answer based on your business rules. Requests outside those rules can be handed to your team. The assistant should never promise an unapproved price or discount.'],
  ['What if a customer sends a voice message or asks for real photos?', 'Voice enquiries and product image requests are part of the intended sales workflow. Responses depend on the message quality and the product information and images available. If a request cannot be answered confidently, your team can step in.'],
  ['Can I connect Facebook, Instagram, and WhatsApp?', 'Facebook and Web Chat are included in every plan. Instagram is available from Starter Tier, and WhatsApp is included in Growth Pro and Enterprise Scale. Channel connection is subject to the platform’s account requirements and permissions.'],
  ['What happens after my 14-day free trial?', 'The trial includes 800 AI replies, one staff login, and up to 20 products. Choose the paid plan that fits your business when you are ready to continue. Confirm payment, renewal, and any additional channel charges with the team before subscribing.'],
];

export default function MarketingSections({ onAction }) {
  return <>
    <section className="section ms-features" id="features" aria-labelledby="features-title">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">ONE ASSISTANT. THE WHOLE CONVERSATION.</p>
          <h2 id="features-title">Built for the way <span className="text-gradient">you sell.</span></h2>
          <p>From the first “hello” to the next order, keep your business moving.</p>
        </div>
        <div className="ms-feature-grid">
          {features.map(({ icon: Icon, title, text, benefit }, index) => <article className={`ms-feature ms-feature-${index}`} key={title}>
            <span className="ms-feature-icon"><Icon size={21} strokeWidth={1.6} /></span>
            <h3>{title}</h3><p>{text}</p><span className="ms-feature-benefit">{benefit}</span>
          </article>)}
        </div>
      </div>
    </section>

    <section className="section ms-benefits" aria-labelledby="benefits-title">
      <div className="container ms-benefits-layout">
        <div><p className="eyebrow">GET BACK TO THE BIGGER PICTURE</p><h2 id="benefits-title">More time for the business<br /><span className="text-gradient">you’re building.</span></h2><p className="ms-section-description">A better customer experience starts with a team that has room to breathe.</p></div>
        <div className="ms-benefit-list">
          <div><Zap size={20} /><div><h3>Be there at the right moment</h3><p>Help interested customers get answers while they’re ready to shop.</p></div></div>
          <div><Clock3 size={20} /><div><h3>Give your team time back</h3><p>Spend less time repeating answers and more time on valuable conversations.</p></div></div>
          <div><ShoppingBag size={20} /><div><h3>Make every next step easier</h3><p>Keep customer context and order details organized as your business grows.</p></div></div>
        </div>
      </div>
    </section>

    <section className="section ms-control" id="security" aria-labelledby="control-title">
      <div className="container ms-control-panel">
        <div className="ms-security-visual" aria-hidden="true">
          <div className="ms-security-orbit ms-orbit-outer" /><div className="ms-security-orbit ms-orbit-inner" />
          <div className="ms-shield"><ShieldCheck size={54} strokeWidth={1.2} /></div>
          <span className="ms-security-tag ms-tag-one"><LockKeyhole size={13} /> Your business data</span>
          <span className="ms-security-tag ms-tag-two"><UsersRound size={13} /> Your team’s access</span>
          <span className="ms-security-tag ms-tag-three"><SlidersHorizontal size={13} /> Your rules</span>
          <div className="ms-human-badge"><span /> Human control, always.</div>
        </div>
        <div className="ms-control-copy"><p className="eyebrow">YOUR BUSINESS. YOUR RULES.</p><h2 id="control-title">AI lends a hand.<br />You keep <span className="text-gradient">the control.</span></h2><p>Confidence comes from knowing what your assistant can do—and when your team should take over.</p>
          <ul className="ms-control-list">
            <li><Check size={17} /><div><strong>Choose what your assistant knows</strong><span>Give it the business information you want it to use.</span></div></li>
            <li><Check size={17} /><div><strong>Give the right people access</strong><span>Keep staff roles and inbox responsibilities clear.</span></div></li>
            <li><Check size={17} /><div><strong>Keep people in the conversation</strong><span>Review responses and step in for sensitive requests.</span></div></li>
          </ul>
          <button className="ms-text-link" onClick={() => onAction('demo')}>Talk through privacy and permissions <ArrowRight size={16} /></button>
        </div>
      </div>
    </section>

    <section className="section ms-stories" id="results" aria-labelledby="stories-title">
      <div className="container">
        <div className="ms-stories-heading"><div><p className="eyebrow">MADE FOR REAL-WORLD SELLING</p><h2 id="stories-title">Different businesses.<br /><span className="text-gradient">The same possibilities.</span></h2></div><p>Explore where an assistant could help your team.<span className="ms-illustrative-label">Illustrative workflows · not customer results</span></p></div>
        <div className="ms-stories-grid">
          {[
            { icon: ShoppingBag, type: 'FASHION & LIFESTYLE', title: 'Help a “does it fit?” become a decision.', text: 'Share available sizes, product photos, and delivery details from your catalog.', result: 'Clearer product conversations', tone: 'violet' },
            { icon: MessageCircle, type: 'SOCIAL COMMERCE', title: 'Give every DM a place to go.', text: 'Bring scattered channel enquiries into a shared inbox your team can follow.', result: 'Less switching between platforms', tone: 'blue' },
            { icon: Package, type: 'GROWING RETAIL TEAMS', title: 'Keep the handoff as good as the hello.', text: 'Collect the details your team needs and carry the context into order handling.', result: 'More organized order handoffs', tone: 'mint' },
          ].map(({ icon: Icon, type, title, text, result, tone }) => <article className={`ms-story ms-story-${tone}`} key={type}>
            <div className="ms-story-top"><span className="ms-story-icon"><Icon size={22} strokeWidth={1.5} /></span><span>{type}</span></div><h3>{title}</h3><p>{text}</p><div className="ms-story-result"><ArrowRight size={15} />{result}</div>
          </article>)}
        </div>
      </div>
    </section>

    <section className="section ms-pricing" id="pricing" aria-labelledby="pricing-title">
      <div className="container">
        <div className="section-heading"><p className="eyebrow">A PLAN FOR YOUR NEXT CHAPTER</p><h2 id="pricing-title">Start small. <span className="text-gradient">Grow at your pace.</span></h2><p>Try it with your business. Find your flow. Scale when you’re ready.</p></div>
        <div className="ms-billing-note"><span /> Monthly billing<span className="ms-billing-separator">·</span>Prices in Bangladeshi taka (BDT)</div>
        <div className="ms-pricing-grid">
          {plans.map(plan => <article className={`ms-plan${plan.popular ? ' ms-plan-popular' : ''}`} key={plan.name}>
            {plan.popular && <div className="ms-popular-label"><Sparkles size={12} /> MOST POPULAR</div>}
            <div className="ms-plan-header"><h3>{plan.name}</h3><p>{plan.description}</p><div className="ms-plan-price"><span className="ms-currency">৳</span><span>{plan.price}</span></div><p className="ms-plan-period">{plan.period}</p></div>
            <button className={`btn ${plan.popular ? 'btn-primary' : 'btn-secondary'} ms-plan-button`} onClick={() => onAction(plan.kind, plan.name)}>{plan.action}<ArrowRight size={15} /></button>
            <div className="ms-plan-divider" />
            <ul className="ms-plan-features">{plan.features.map(feature => <li key={feature}><Check size={15} /><span>{feature}</span></li>)}<li><Check size={15} /><span>{plan.channels}</span></li>{plan.extras?.map(feature => <li key={feature}><Check size={15} /><span>{feature}</span></li>)}</ul>
          </article>)}
        </div>
        <p className="ms-pricing-footnote">Not sure what fits? <button onClick={() => onAction('demo')}>Let’s find your plan <ArrowRight size={13} /></button></p>
      </div>
    </section>

    <section className="section ms-faq" id="faq" aria-labelledby="faq-title">
      <div className="container ms-faq-layout"><div className="ms-faq-intro"><p className="eyebrow">A LITTLE MORE CLARITY</p><h2 id="faq-title">Good questions.<br /><span className="text-gradient">Straight answers.</span></h2><p>Still have something on your mind?<br />We’re happy to walk you through it.</p><button className="ms-text-link" onClick={() => onAction('demo')}>Let’s talk <ArrowRight size={16} /></button></div><div className="ms-faq-list">{faqs.map(([question, answer], index) => <details className="ms-faq-item" key={question} open={index === 0 ? true : undefined}><summary>{question}<ChevronDown size={18} /></summary><p>{answer}</p></details>)}</div></div>
    </section>
  </>;
}
