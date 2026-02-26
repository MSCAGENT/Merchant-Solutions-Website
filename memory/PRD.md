# PRD - Merchant Solutions Corp Website

## Original Problem Statement
Build a comprehensive, SEO-optimized payment processing website for Merchant Solutions Corp. Multi-page frontend with white background, purple/yellow gradients design language. Complex navigation, numerous content pages, functional forms, and SEO enhancements.

## Tech Stack
- **Frontend**: React.js, TailwindCSS, Shadcn UI, react-router-dom
- **Backend**: Not yet implemented (planned: FastAPI + MongoDB)
- **Third-Party**: Lead Connector (forms), Calendly (scheduling), Maverick (applications), DocuSign (external)

## What's Been Implemented

### Pages Completed
- Home, About, Contact, Security, Login, Careers
- Solutions: Payment Processing, Gift Cards, Crypto, Loyalty, Business Loans, ATMs, Payroll, IT Services, TranzAction Gateway
- Industries: Restaurants (SEO overhaul - Feb 2026), Healthcare, Chiropractors
- POS: Clover, Square, Dejavoo (full overhaul), Ingenico (full overhaul), PayAnywhere, POS Hardware
- Gateway: MSC Gateway, Virtual Terminal
- Partnerships, ISV Partnerships, Resources

### Restaurant Page (Feb 2026 - Latest)
- Full SEO content rewrite with Florida-focused keywords
- H1: "Restaurant Payment Processing & POS Installation in Florida | Nationwide Dealer Support"
- Sections: Credit card processing, POS installation, platform comparison, Florida cities, hardware solutions, cash discount, installation process, why choose us, FAQ
- Lead Connector modal for "Get a Restaurant Quote"
- Calendly modal for "Book a Demo" / "Schedule a Demo"
- SEO meta tags (title, description)
- URL: `/restaurant-payment-processing-florida`
- Internal links to Payment Processing, Clover, Square, Self Ordering

### Dejavoo Page (Previous Session)
- Hero carousel, terminal 2x4 grid, modals (Purchase Now, Maverick Apply Now via iframe)
- FAQ accordion, SEO content

### Ingenico Page (Previous Session)
- Hero video, TETRA/AXIUM terminal grids, SEO content rewrite
- Lead Connector + Calendly modals

## Prioritized Backlog

### P0 - Immediate
- User verification of Restaurant page

### P1 - Next
- Additional page overhauls as requested by user

### P2 - Future
- Backend implementation (FastAPI + MongoDB)
- Component refactoring (split large pages, abstract modal patterns)
- Replace hardcoded content with API calls

## Key Patterns
- Modals for forms: Lead Connector via iframe, Calendly via widget script, Maverick via static HTML iframe
- SEO: document.title + meta description in useEffect
- Consistent design: purple/blue gradient CTAs, white/gray alternating sections
