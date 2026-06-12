import { describe, expect, it } from "vitest";
import { decideNextCheck, monitoringWindowDays, nextMonitoringStart } from "./monitoringPolicy.excerpt";

describe("monitoring policy excerpt", () => {
  it("starts unassigned-seat monitoring earlier than allocated-seat monitoring", () => {
    expect(monitoringWindowDays("continental", "unassigned")).toBe(21);
    expect(monitoringWindowDays("continental", "allocated")).toBe(12);
    expect(monitoringWindowDays("london", "allocated")).toBe(14);
  });

  it("computes the first monitoring marker at 03:30", () => {
    expect(nextMonitoringStart("2026-06-24", "continental", "allocated")).toBe("2026-06-12T03:30");
  });

  it("does not check before the monitoring window opens", () => {
    const decision = decideNextCheck({
      travelDate: "2026-06-24",
      routeKind: "continental",
      seatSource: "allocated",
      now: new Date("2026-06-01T12:00:00.000Z"),
    });

    expect(decision.shouldCheck).toBe(false);
    expect(decision.reason).toBe("Outside monitoring window");
  });
});
