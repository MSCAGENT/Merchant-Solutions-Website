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
### Feb 28, 2026 — Exatouch POS Page
- Created `/app/frontend/src/pages/Exatouch.jsx` — comprehensive, SEO-optimized Exatouch POS product page
- Sections: Hero, Industry Vertical Tabs (Grocery, Liquor, Retail, Smoke/Tobacco), Core Features Grid, Hardware Bundle, Scan Data Integration (4-step process + stats), Free Offers, Payment Types, FAQ (8 Qs), Final CTA, SEO Footer
- Interactive vertical tabs switching content + images for each industry
- Lead Connector quote modal + Calendly demo modal
- Route: `/pos/exatouch` in App.js, Navigation link in POS & Hardware dropdown
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
