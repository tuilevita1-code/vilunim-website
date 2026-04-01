# MVP.md — Vilunim Website MVP Scope

## MVP Goal
Ship a fast, professional, conversion-focused landing page on vilunim.com that can be shown to prospects like Simon Richards (Fusion Plumbing) after a demo call.

**Done means**: Live on vilunim.com, mobile-responsive, no errors, CTA working.

---

## In Scope ✅

### Pages
- [ ] Single landing page (/) — all sections as one scroll

### Sections (in order)
- [ ] Navbar — logo + Book a Demo CTA, sticky
- [ ] Hero — headline, sub-headline, two CTAs
- [ ] Problem — 3 pain points for tradies
- [ ] Solution — Lydia introduction, 4 capabilities
- [ ] How It Works — 3-step flow
- [ ] Testimonials — 3 placeholder cards (real ones added later)
- [ ] Pricing — 1 card, setup + monthly, included features
- [ ] FAQ — 5 questions, accordion style
- [ ] Final CTA — closing push to book demo
- [ ] Footer — logo, email, links

### Functionality
- [ ] "Book a Demo" CTA links to a Calendly URL (Tui to provide, placeholder for now)
- [ ] Smooth scroll for anchor links
- [ ] FAQ accordion (open/close)
- [ ] Mobile responsive (375px and up)
- [ ] Sticky navbar

### Tech
- [ ] Next.js 14 App Router
- [ ] TypeScript
- [ ] Tailwind CSS v4
- [ ] Deployed on Vercel
- [ ] Connected to vilunim.com domain
- [ ] GitHub repo set up with main branch protection

### Performance
- [ ] Lighthouse Performance > 90
- [ ] Lighthouse Accessibility > 90
- [ ] No console errors in production
- [ ] Page load < 2 seconds

---

## Out of Scope ❌

These are NOT part of MVP — do not build unless Tui explicitly asks:

- Contact form with backend (email submission)
- CRM integration
- Live chat
- Blog
- Analytics beyond Vercel default
- Authentication
- Animations (beyond simple CSS transitions)
- Multiple pages
- A/B testing
- Real testimonial names (placeholders only for now)
- Real Calendly link (placeholder href for now)

---

## Milestones

| # | Milestone | Done When |
|---|-----------|-----------|
| 0 | Project scaffolded, pushed to GitHub | `git push` succeeds, Vercel connected |
| 1 | Navbar + Hero built | Renders correctly on mobile + desktop |
| 2 | Problem + Solution + How It Works | All 3 sections complete |
| 3 | Testimonials + Pricing + FAQ | Accordion works, pricing card clean |
| 4 | Final CTA + Footer | Page complete top to bottom |
| 5 | Polish pass | Spacing, fonts, colours consistent throughout |
| 6 | Production build passes | `npm run build` clean, Lighthouse > 90 |
| 7 | Live on vilunim.com | DNS resolved, HTTPS working |

---

## Definition of Done
- `npm run build` runs with zero errors
- All 10 sections visible and correct on mobile (375px)
- All 10 sections visible and correct on desktop (1280px)
- "Book a Demo" CTA present and clickable above the fold
- Deployed live at vilunim.com via Vercel
- No console errors in production
