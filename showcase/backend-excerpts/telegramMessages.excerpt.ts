import type { AlertCriteria, SnapOffer } from "./domainTypes.excerpt";

export function formatAlertLabel(alert: AlertCriteria): string {
  return `${alert.originLabel} -> ${alert.destinationLabel} on ${alert.travelDate}`;
}

export function buildAlertCreatedMessage(alert: AlertCriteria): string {
  return [
    "Alert created.",
    "",
    `Route: ${alert.originLabel} -> ${alert.destinationLabel}`,
    `Date: ${alert.travelDate}`,
    `Time: ${alert.timeSlot}`,
    `Seat: ${alert.seatPreference}`,
    alert.maxPrice == null ? "Max price: no limit" : `Max price: ${alert.maxPrice}`,
  ].join("\n");
}

export function buildOfferNotificationMessage(alert: AlertCriteria, offers: SnapOffer[]): string {
  const offerLines = offers.map((offer, index) =>
    [
      `${index + 1}. ${offer.slotLabel} | ${offer.seatType}`,
      `Price: ${offer.priceLabel}`,
      offer.earliestDeparture && offer.latestDeparture
        ? `Departure window: ${offer.earliestDeparture} - ${offer.latestDeparture}`
        : null,
      `Book: ${offer.purchaseUrl}`,
    ].filter(Boolean).join("\n"),
  );

  return [
    "EuroSnap found a matching offer.",
    "",
    formatAlertLabel(alert),
    "",
    ...offerLines,
    "",
    "If you keep monitoring, you will only be notified again when a different matching offer appears.",
  ].join("\n");
}
