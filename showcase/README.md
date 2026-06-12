# Showcase

This folder contains public, non-production material that explains how EuroSnap is engineered without exposing the private bot implementation.

## Contents

- `backend-excerpts/`: selected TypeScript excerpts and illustrative tests.
- `diagrams/`: Mermaid diagrams for the alert creation and monitoring flows.
- `mock-data/`: anonymized Firestore-style records.

## What Is Not Here

This showcase intentionally excludes production Firebase Functions entrypoints, Telegram webhook handlers, Stripe billing internals, Firestore write logic, the real availability provider, admin tooling, and secrets.
