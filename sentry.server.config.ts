import * as Sentry from "@sentry/nextjs";

// Server-side Sentry init. DSN is left blank by default — when empty the SDK
// stays disabled and all calls become no-ops, so this is safe in dev/local.
Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  tracesSampleRate: 1.0,
  enabled: Boolean(process.env.NEXT_PUBLIC_SENTRY_DSN),
});
