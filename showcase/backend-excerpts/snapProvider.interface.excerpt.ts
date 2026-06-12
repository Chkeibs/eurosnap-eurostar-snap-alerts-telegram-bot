import type { SearchResult } from "./domainTypes.excerpt";

export interface ProviderSearchInput {
  routeKind: "london" | "continental";
  originCode: string;
  destinationCode: string;
  travelDate: string;
  seatSources: Array<"allocated" | "unassigned">;
}

export type ProviderOutcome =
  | {
      type: "success";
      result: SearchResult;
    }
  | {
      type: "inconclusive";
      reason: string;
    };

export interface SnapAvailabilityProvider {
  name: string;
  check(input: ProviderSearchInput): Promise<ProviderOutcome>;
}

export function summarizeProviderOutcome(outcome: ProviderOutcome): string {
  if (outcome.type === "inconclusive") {
    return `Provider inconclusive: ${outcome.reason}`;
  }

  return outcome.result.available
    ? `${outcome.result.offers.length} normalized offer(s)`
    : "No normalized offers";
}
