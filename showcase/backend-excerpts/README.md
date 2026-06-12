# Backend Excerpts

These files are selected TypeScript excerpts inspired by the private EuroSnap backend.

They are intentionally not production-runnable. They omit:

- Firebase Functions entrypoints
- Firestore reads/writes
- Telegram webhook handlers
- Stripe billing code
- Eurostar Snap provider implementation
- admin dashboard code
- private configuration and secrets

The goal is to show the engineering shape of the project without publishing the full bot.

## Files

- `domainTypes.excerpt.ts`: simplified domain types.
- `monitoringPolicy.excerpt.ts`: simplified monitoring-window and cadence policy.
- `offerMatching.excerpt.ts`: simplified per-alert offer filtering.
- `telegramMessages.excerpt.ts`: safe Telegram message builders.
