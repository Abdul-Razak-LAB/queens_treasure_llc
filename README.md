# Queens Treasure Ecommerce (Next.js)

Fullstack ecommerce implementation for Queens Treasure LLC aligned to the PRD.

## Stack
- Next.js 16 (App Router) + TypeScript + Tailwind
- Neon Postgres + Prisma ORM
- NextAuth (email/password ready)
- Stripe checkout + webhook flow
- Resend notifications (email + SMS)

## Quick Start
1. Install dependencies:
   - npm.cmd install
2. Create env file:
   - copy .env.example .env
3. Set Neon, Stripe, Resend variables in .env
4. Generate Prisma client and migrate:
   - npm.cmd run prisma:generate
   - npm.cmd run prisma:migrate
5. Seed products:
   - npm.cmd run prisma:seed
6. Start app:
   - npm.cmd run dev

## Features
- MVP: storefront, product pages, cart, checkout, account area, admin
- Phase 2: bundles, reviews, subscriptions, wholesale inquiry
- SEO metadata + JSON-LD baseline
- Legal and policy pages

## Notes
- Build script uses webpack fallback for this Windows environment.
- Stripe and Resend handlers are included as route handlers and require valid keys.
