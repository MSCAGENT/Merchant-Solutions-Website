# Merchant Solutions Corp - Payment Processing Website

## Original Problem Statement
Build a comprehensive, SEO-optimized payment processing website with a blog CMS, secure document portal, interactive tools, and extensive industry/solution pages.

## Architecture
- **Frontend**: React + TailwindCSS + Shadcn UI
- **Backend**: FastAPI + MongoDB
- **Integrations**: Calendly popups, Lead Connector iframes, Emergent Object Storage

## What's Been Implemented
- Full-stack blog CMS with admin panel
- Secure document portal (login-protected)
- Interactive savings calculator (Dual Pricing page)
- Numerous SEO-optimized industry/solution pages
- Calendly popup standardization across all pages
- Video hero backgrounds on Gas Station and Dual Pricing pages
- Self Ordering Kiosk page removed per user request (2026-03-03)

## Key Pages
- Home, Contact, About, Security, Pricing, Careers
- Solutions: Payment Processing, Dual Pricing, Gift Cards, Crypto, Loyalty, Business Loans, ATMs, Payroll, IT Services, Gateway
- Industries: Restaurants, Healthcare, Chiropractors, Dental, Medical, Salon/Spa, Gas Station, Professional Services, Retail, High Risk, Specialty
- POS/Hardware: Clover, Square, Exatouch, PayAnywhere, Dejavoo, Ingenico, DaySmart Salon
- Blog: /resources/blog (public), /resources/blog/admin (admin)
- Documents: /resources/documents (login-protected)

## Completed (2026-03-08)
- MSC Gateway: "Explore Developer Docs" hero button now scrolls to #dev-api-section instead of external link
- MSC Gateway: Added auto-scrolling industry carousel (16 industries) below "Ideal for Your Industry"
- Payment Processing: Added 4 new integration logos (ADP, Epicor, IRIS CRM, Oracle) with clear backgrounds
- Payment Processing: "Apply Now" CTA now links to https://www.signuplink.ai/register/merchant-solutions-corp
- Crypto Processing: Added AI-generated images for Merchant Benefits and Integration Options sections
- Crypto Processing: Added scrolling coin logo carousel (16 cryptocurrencies) above CTA section
- Loyalty & Rewards: Refocused POS integration to Clover, Square, and iTab only; removed Toast, Lightspeed, Shopify
- Gift Cards: Replaced black-background gift card image with clean white-background AI-generated version
- **Hero Background Images**: Added full-bleed stock photo hero backgrounds to ALL solution pages:
  - Payment Processing (credit card transaction), Crypto Processing (bitcoin coins), Loyalty & Rewards (shoppers), Gift Cards (gift boxes), Business Loans (handshake), Payroll Services (finance workspace), MSC TranzAction Gateway (server tech)
  - Pattern: dark overlay with purple gradient, white text, matching IT Services/ATMs/Dual Pricing style

## Completed (2026-03-03)
- P0: Added video background to Dual Pricing hero section
- Deleted Self Ordering Kiosk page and cleaned up routes/navigation

## Known Issues
- Hero section videos may be broken on some pages (user will address later with custom forms)

## Upcoming Tasks
- P1: DocuSign integration for document portal
- P2: Full backend content migration (hardcoded to DB)

## Backlog
- P3: Component refactoring (break large pages into smaller components)
- P4: Abstract common hero/content grid patterns

## Credentials
- Document Portal: admin1 / 12345
- Blog Admin: marketing@merchantsolutionscorp.com / Mscpay$1
