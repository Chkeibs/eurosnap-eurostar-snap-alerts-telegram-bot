export type TimeSlot = "morning" | "afternoon" | "any";
export type SeatPreference = "allocated" | "unassigned" | "any";
export type SeatSource = Exclude<SeatPreference, "any">;
export type RouteKind = "london" | "continental";

export interface AlertCriteria {
  routeKind: RouteKind;
  originLabel: string;
  destinationLabel: string;
  travelDate: string;
  timeSlot: TimeSlot;
  seatPreference: SeatPreference;
  maxPrice: number | null;
  departureWindowIds: number[];
}

export interface SnapOffer {
  key: string;
  seatType: SeatSource;
  slotLabel: string;
  price: number | null;
  priceLabel: string;
  purchaseUrl: string;
  earliestDeparture: string | null;
  latestDeparture: string | null;
}

export interface SearchResult {
  available: boolean;
  fingerprint: string;
  summary: string;
  offers: SnapOffer[];
}

export interface CheckDecision {
  shouldCheck: boolean;
  reason: string;
  nextEligibleCheckAt: string | null;
}
