import type { CheckDecision, RouteKind, SeatSource } from "./domainTypes.excerpt";

const DAY_MS = 86_400_000;

function toDateOnly(value: Date): string {
  return value.toISOString().slice(0, 10);
}

function addDays(date: string, days: number): string {
  const value = new Date(`${date}T00:00:00.000Z`);
  value.setUTCDate(value.getUTCDate() + days);
  return toDateOnly(value);
}

function diffDays(fromDate: string, toDate: string): number {
  return Math.round(
    (Date.parse(`${toDate}T00:00:00.000Z`) - Date.parse(`${fromDate}T00:00:00.000Z`)) / DAY_MS,
  );
}

export function monitoringWindowDays(routeKind: RouteKind, seatSource: SeatSource): number {
  if (seatSource === "unassigned") {
    return 21;
  }

  return routeKind === "continental" ? 12 : 14;
}

export function nextMonitoringStart(travelDate: string, routeKind: RouteKind, seatSource: SeatSource): string {
  return `${addDays(travelDate, -monitoringWindowDays(routeKind, seatSource))}T03:30`;
}

export function decideNextCheck(params: {
  travelDate: string;
  routeKind: RouteKind;
  seatSource: SeatSource;
  now: Date;
}): CheckDecision {
  const today = toDateOnly(params.now);
  const daysUntilTravel = diffDays(today, params.travelDate);
  const windowDays = monitoringWindowDays(params.routeKind, params.seatSource);

  if (daysUntilTravel <= 0) {
    return {
      shouldCheck: false,
      reason: "Travel date reached or passed",
      nextEligibleCheckAt: null,
    };
  }

  if (daysUntilTravel > windowDays) {
    return {
      shouldCheck: false,
      reason: "Outside monitoring window",
      nextEligibleCheckAt: nextMonitoringStart(params.travelDate, params.routeKind, params.seatSource),
    };
  }

  return {
    shouldCheck: true,
    reason: daysUntilTravel <= 7 ? "Near travel date: frequent checks" : "Monitoring window active",
    nextEligibleCheckAt: null,
  };
}
