# PRD — Merchant Solutions Corp Payment Processing Website

## Original Problem Statement
Build a comprehensive, SEO-optimized payment processing website. Multi-page frontend with specific design language, complex navigation, numerous content pages with specific layouts, functional forms (Lead Connector, Calendly, Formstack), and granular UI/UX and SEO enhancements.

## Tech Stack
- **Frontend**: React.js, TailwindCSS, Shadcn/UI
- **Backend**: None (frontend-only, all content hardcoded)
- **Third-Party**: Lead Connector (forms), Calendly (scheduling), Formstack, SimpleIcons CDN

## Pages Built (75+)
- Home, Contact, About, Security, Login, Careers
- Solutions: Payment Processing, MSC TranzAction Gateway, Crypto, Loyalty, Gift Cards, Business Loans, ATMs, Payroll, IT Services
- Industries: Restaurants, Healthcare, Chiropractors, Dental, Medical Clinics, High-Risk, Salon & Spa, Specialty Merchants
- POS & Hardware: PayAnywhere, Clover, Square, DaySmart Salon, Dejavoo, Ingenico, **Exatouch**, Restaurant POS, Retail POS, QSR POS, Self-Ordering Kiosks
- Partnerships: Agent & ISO, ISV, Careers
- Resources: Blog, Payment Processing Articles, POS Systems Guide, Industry Guides

## What's Been Implemented
### Mar 1, 2026 — Solutions Pages Updates (4 changes)
1. **Transaction Gateway Integration**: Renamed from "MSC TranzAction Gateway" in nav + page title + all references. Added Developer Integration Portal section with form → grants access to NMI integration portal URL.
2. **Business Loans & Cash Advances**: Added "Apply Now" buttons with specific links — Cash Advance → cashbuoy.biz, Business Loans/LOC/SBA → Lendio. Added SBA Loans as 5th funding option.
3. **ATM Solutions**: Updated footer text to include Canada, Puerto Rico, and "through our network" language.
4. **Payroll Services**: Renamed from "Payroll Services by ADP" to "Payroll Services". Added Clover as ADP integration partner. Added Square Native Payroll section (Square offers payroll natively). Updated hero badges, benefits bar, CTA, and SEO footer.

### Feb 28, 2026 — Retail Payment Solutions Page
- Created `/app/frontend/src/pages/RetailSolutions.jsx` — comprehensive Retail industry page at `/retail-payment-solutions`
- Sections: Hero, High-Volume Retail Features, 3 POS Platform deep-dives (Clover/Exatouch/Square with "Best for" tags, features, internal links), Inventory Management, Payment Processing, 10 Retail Niches grid, Why MSC, FAQ (5 Qs), Final CTA, SEO Footer
- Internal links to `/pos/clover`, `/pos/exatouch`, `/pos/square`
- Route aliases: `/retail-payment-solutions` and `/industries/retail`
- Updated Navigation "Retail" link under Industries
- **Testing**: 17/17 tests passed (100% success rate)

### Feb 28, 2026 — Exatouch POS Page
- Created `/app/frontend/src/pages/Exatouch.jsx` — comprehensive Exatouch POS product page at `/pos/exatouch`
- Sections: Hero, Industry Vertical Tabs (Grocery, Liquor, Retail, Smoke/Tobacco), Core Features Grid, Hardware Bundle, Scan Data Integration, Free Offers, Payment Types, FAQ (8 Qs), Final CTA, SEO Footer
- **Testing**: 14/14 tests passed (100% success rate)

### Previous Sessions
- Square POS page overhaul (dual-video hero, 5-step launch plan, accordion, hardware grid, integrations, Calendly)
- Salon & Spa page (video hero, Square/Clover deep dives, Lead Connector/Calendly)
- DaySmart Salon page (SEO, 5-tier pricing, Calendly)
- Specialty Merchant B2B page (B2B solutions, compliance, modals)

## Prioritized Backlog

### P1 — Outstanding Tasks
- Add images to Agents & ISO Partnership page (skipped from earlier sessions)

### P1 — Backend Integration (Future)
- Database schema, FastAPI endpoints, refactor frontend to fetch dynamic content

### P2 — Component Refactoring
- Break down monolithic page files (ITServices, SquarePOS, SalonSpa, Exatouch are 300-500+ lines)
- Abstract common elements (modals, hero sections, content grids) into reusable components

### P3 — SEO & Performance
- Structured data (JSON-LD) for product pages
- Image optimization, lazy loading
- Sitemap generation
