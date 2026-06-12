# Eurosnap | Eurostar Snap Alerts Telegram Bot

EuroSnap is a Telegram bot that monitors Eurostar Snap availability and sends fast alerts when matching last-minute offers appear.

- Website: https://eurosnap-422cf.web.app
- Telegram bot: https://t.me/Eurosnapbot

## What It Does

Eurostar Snap tickets can appear and disappear quickly. EuroSnap lets a user create an alert with:

- a route
- a travel date
- a preferred time slot
- optional seat-type preferences on supported routes
- an optional maximum price

The production bot then checks availability automatically and sends a Telegram notification when a matching offer is found.

## Why This Repository Is Partial

This is a public showcase repository. It is intentionally not the full production codebase and cannot be cloned to run the real bot.

The private production system includes Firebase Functions, Firestore persistence, Telegram webhooks, Stripe billing, Eurostar Snap providers, admin tooling, operational scripts, and private configuration. Those pieces are not published here to protect the product, users, and operational security.

## What Is Included

- `public/`: the public EuroSnap website source that is already visible online.
- `video-remotion/`: the Remotion/React source for a EuroSnap promo animation.
- `showcase/backend-excerpts/`: selected non-runnable TypeScript excerpts that demonstrate the backend approach without exposing production implementation details.

## Technical Overview

The private production system is built around:

- Firebase Functions v2 for scheduled jobs and webhooks.
- Firestore for users, alerts, and shared search jobs.
- Telegram Bot API for the user flow and notifications.
- Stripe Checkout and Billing Portal for subscriptions.
- TypeScript for the main backend.
- Python for support tooling.
- Remotion/React for video generation.

The main design idea is to group multiple user alerts into shared route/date search jobs. A single search result can then be filtered per user by time slot, seat type, departure window, and price.

## Monitoring Model

The production bot uses policy-based scheduling rather than checking every alert blindly.

- Farther-out tickets are checked less often.
- Nearer travel dates are checked more frequently.
- Different seat sources and route groups can have different monitoring windows.
- Notifications are deduplicated so users do not receive the same matching offer again and again.

The simplified policy excerpt in this repository shows the shape of that idea without the full production implementation.

## Repository Structure

```text
.
├── public/
│   └── Static website files
├── video-remotion/
│   └── Remotion promo video source
└── showcase/
    └── backend-excerpts/
        └── Selected TypeScript excerpts, not production-runnable
```

## Public Links

- Try the bot: https://t.me/Eurosnapbot
- Visit the site: https://eurosnap-422cf.web.app

## Note

EuroSnap is an independent project and is not affiliated with Eurostar.
