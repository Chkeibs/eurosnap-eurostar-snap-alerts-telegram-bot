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
- `snapProvider.interface.excerpt.ts`: provider boundary design without real provider logic.
- `monitoringPolicy.excerpt.test.ts`: illustrative Vitest scenarios for monitoring windows.
- `offerMatching.excerpt.test.ts`: illustrative Vitest scenarios for filtering.

## Boundary

The provider implementation, database layer, billing flow, admin dashboard, webhook controller, and production configuration are deliberately excluded.

The tests are included to show how the private codebase is reasoned about. They are showcase examples, not a complete production test suite.
