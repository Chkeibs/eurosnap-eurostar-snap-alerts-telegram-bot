import type { AlertCriteria, SearchResult, SnapOffer } from "./domainTypes.excerpt";

function matchesTimeSlot(alert: AlertCriteria, offer: SnapOffer): boolean {
  return alert.timeSlot === "any" || offer.slotLabel.toLowerCase() === alert.timeSlot;
}

function matchesSeatPreference(alert: AlertCriteria, offer: SnapOffer): boolean {
  return alert.seatPreference === "any" || alert.seatPreference === offer.seatType;
}

function matchesMaxPrice(alert: AlertCriteria, offer: SnapOffer): boolean {
  return alert.maxPrice == null || offer.price == null || offer.price <= alert.maxPrice;
}

export function filterOffersForAlert(alert: AlertCriteria, result: SearchResult): SearchResult {
  const offers = result.offers.filter((offer) =>
    matchesTimeSlot(alert, offer) &&
    matchesSeatPreference(alert, offer) &&
    matchesMaxPrice(alert, offer),
  );

  return {
    ...result,
    available: offers.length > 0,
    offers,
    summary: offers.length > 0
      ? `${offers.length} matching offer(s) found`
      : "No offer matched this alert's filters",
  };
}
