import { describe, expect, it } from "vitest";
import type { AlertCriteria, SearchResult } from "./domainTypes.excerpt";
import { filterOffersForAlert } from "./offerMatching.excerpt";

const alert: AlertCriteria = {
  routeKind: "continental",
  originLabel: "Paris",
  destinationLabel: "Amsterdam",
  travelDate: "2026-06-24",
  timeSlot: "morning",
  seatPreference: "allocated",
  maxPrice: 50,
  departureWindowIds: [],
};

const result: SearchResult = {
  available: true,
  fingerprint: "demo-fingerprint",
  summary: "2 offer(s)",
  offers: [
    {
      key: "offer-1",
      seatType: "allocated",
      slotLabel: "morning",
      price: 39,
      priceLabel: "€39",
      purchaseUrl: "https://example.com/book/offer-1",
      earliestDeparture: "08:00",
      latestDeparture: "12:00",
    },
    {
      key: "offer-2",
      seatType: "allocated",
      slotLabel: "afternoon",
      price: 69,
      priceLabel: "€69",
      purchaseUrl: "https://example.com/book/offer-2",
      earliestDeparture: "13:00",
      latestDeparture: "17:00",
    },
  ],
};

describe("offer matching excerpt", () => {
  it("keeps only offers matching time slot, seat preference, and max price", () => {
    const filtered = filterOffersForAlert(alert, result);

    expect(filtered.available).toBe(true);
    expect(filtered.offers).toHaveLength(1);
    expect(filtered.offers[0]?.key).toBe("offer-1");
  });
});
