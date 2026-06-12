# Alert Creation Flow

This diagram shows the public high-level alert creation flow. It is simplified and does not include private implementation details.

```mermaid
sequenceDiagram
  participant U as User
  participant T as Telegram bot
  participant B as Backend
  participant S as Stripe
  participant DB as Firestore

  U->>T: Start alert setup
  T->>U: Ask for route
  U->>T: Select route
  T->>U: Ask for date and time slot
  U->>T: Select criteria
  T->>U: Ask for optional price limit
  U->>T: Confirm alert
  T->>B: Submit pending alert draft
  B->>DB: Save/update Telegram user state
  B->>S: Check premium access when needed
  alt Premium active
    B->>DB: Create alert
    B->>DB: Sync shared search job
    B->>T: Send alert created message
  else Payment required
    B->>S: Create checkout session
    B->>T: Send subscribe link
  end
```

## Notes

- The real production conversation has more validation and edge-case handling.
- Payment and webhook internals are intentionally omitted from the public repository.
- The shared search job is synced after alert creation so future checks can be grouped.
