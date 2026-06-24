# NoSTDs Frontend

Next.js (App Router, TypeScript) frontend for NoSTDs.com. All UI lives here; it
holds no business logic and never touches the database directly — everything goes
through the Laravel API (`../nostds_backend`) via a typed client + TanStack Query.

## API / Auth

- **API client:** `src/lib/api/client.ts` — a single typed Axios instance.
  `baseURL` comes from `NEXT_PUBLIC_API_URL`. A response interceptor normalizes
  Laravel 422 validation errors into `{ field: message }` for React Hook Form.
- **Auth mode:** **Sanctum Bearer tokens** (matching the backend's decoupled
  setup — see `../nostds_backend/README.md`). The token is stored in
  `localStorage` and injected as `Authorization: Bearer {token}` on each request.
  We do **not** use SPA cookie/CSRF mode. This decision is fixed for the project.
- **Server state:** TanStack Query, provided at the root layout via
  `src/components/providers/query-provider.tsx`.

## Environment

Copy `.env.local.example` to `.env.local` and fill in values:

```bash
cp .env.local.example .env.local
```

- `NEXT_PUBLIC_API_URL` — base URL of the Laravel API (e.g. `http://localhost:8000/api/v1`)
- `NEXT_PUBLIC_SENTRY_DSN` — leave blank locally; Sentry stays disabled when empty

## Scripts

```bash
npm run dev         # start dev server (Turbopack)
npm run build       # production build
npm run lint        # ESLint
npm run type-check  # tsc --noEmit
```

## Design system

The existing homepage already defines the design tokens (colors, radius, fonts)
as CSS variables in `src/app/globals.css`. Reuse those — do not introduce a
second token system.

## Getting Started

First, run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev

```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


