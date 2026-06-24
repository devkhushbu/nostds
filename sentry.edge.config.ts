import * as Sentry from "@sentry/nextjs";

// Edge runtime Sentry init (middleware, edge routes). DSN blank by default ->
// SDK disabled / no-op.
Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  tracesSampleRate: 1.0,
  enabled: Boolean(process.env.NEXT_PUBLIC_SENTRY_DSN),
});
