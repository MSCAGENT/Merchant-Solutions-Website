# PRD: Merchant Solutions Corp Website

## Original Problem Statement
Build and maintain a comprehensive marketing/sales website for a merchant services company. Key goals: expand content for SEO, enhance existing pages, automate blog creation, and create lead qualification tools.

## What's Been Implemented

### ACH & eCheck Processing Page (March 2026) - COMPLETED
- New page at `/ach-echeck-processing` with full SEO (Service, FAQ, Breadcrumb, Organization schemas)
- Placed under Solutions > Payments & Processing in navigation
- 11 content sections: Hero, What is ACH, eCheck, Benefits, How it Works, Accept ACH Online, Recurring Billing, Security, Industries, Why MSC, FAQ, CTA
- All schemas and canonicals use `merchantsolutionscorp.com` domain
- 4 FAQs with toggle, internal links, lead form modal

### Dejavoo Terminal Cards & Maverick Forms (March 2026) - COMPLETED
- Flat Rate: 2.60% + $0.10, Free Placement disclosure, Create Account opens Maverick form
- All 8 terminal buttons: "Subscribe Now", XerochargeGO monthly fees ($9.99/$14.95)
- Modal: $79 annual fee, MOST POPULAR badge, Advantage Program disclosure
- Dual Price Apply Now → Maverick id:1180, Flat Rate → id:1497
- Progress stepper design with MSC logo on both forms

### Previous Dejavoo Updates (March 2026) - COMPLETED
- Standard/Premium features, Xerocharge 0%, P18 image, modal glitch fix
- Updated testimonials, activation flow, Create Account buttons

### Smart Terminals (March 2026) - COMPLETED
- Purchase Now buttons on 4 cards, 5 new FAQs with schema

### Navigation (March 2026) - COMPLETED
- PayAnywhere moved to Payment Terminals
- ACH & eCheck Processing under Solutions > Payments & Processing

### Site-wide SEO (March 2026) - COMPLETED
- 50+ pages with full JSON-LD schemas and canonical URLs

## Known Limitations
- Maverick form button color (cross-origin iframe from merchantsolutionscorpdb.com)

## Prioritized Backlog
- P1: Qualifier Wizard (multi-step lead form)
- P2: PDF Upload for Document Portal
- P2: Embed Payment Link in PayAnywhere flow
- P3: "How to Get a Free POS System" page
- P3: DocuSign Integration
- P4: Backend CMS migration, Component refactoring

## Credentials
- Blog Admin: `/resources/blog/admin` - marketing@merchantsolutionscorp.com / Mscpay$1
- Document Portal: `/resources/documents` - admin1 / 12345
