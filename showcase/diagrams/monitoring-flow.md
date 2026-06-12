# Monitoring Flow

This diagram shows how EuroSnap avoids checking every alert independently.

```mermaid
flowchart TD
  Scheduler["Scheduled trigger"] --> DueJobs["Load due shared search jobs"]
  DueJobs --> Policy{"Policy says check now?"}
  Policy -- "No" --> Reschedule["Store next eligible check time"]
  Policy -- "Yes" --> Provider["Run availability provider boundary"]
  Provider --> Normalize["Normalize offers"]
  Normalize --> Alerts["Load active alerts for route/date"]
  Alerts --> Filter["Filter by time, seat, windows, price"]
  Filter --> Dedupe{"New matching offer?"}
  Dedupe -- "No" --> State["Update job state only"]
  Dedupe -- "Yes" --> Notify["Send Telegram alert"]
  Notify --> Seen["Store seen offer fingerprint"]
  State --> Next["Compute next check"]
  Seen --> Next
```

## Notes

- The provider boundary is private and not included here.
- Filtering is per alert, but fetching is shared by route/date.
- Notification dedupe is per alert, so users can keep monitoring without duplicate spam.
