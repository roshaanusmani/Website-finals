# Usmani Property Management

Professional property management landing page for Windsor-Essex landlords.

## Tech Stack

- Next.js 15 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Copy environment variables:

```bash
cp .env.example .env.local
```

3. Add your Resend API key and contact email to `.env.local`:

```
RESEND_API_KEY=your_key_here
CONTACT_TO_EMAIL=your@email.com
CONTACT_FROM_EMAIL=onboarding@resend.dev
```

4. Run the development server:

```bash
npm run dev
```

5. Open [http://localhost:3000/property-management-windsor-essex](http://localhost:3000/property-management-windsor-essex)

## Project Structure

- `src/app/property-management-windsor-essex/page.tsx` — Main landing page
- `src/lib/content.ts` — All page copy and content
- `src/components/sections/` — 14 landing page sections
- `src/app/api/contact/route.ts` — Lead form email API

## Build

```bash
npm run build
npm start
```
