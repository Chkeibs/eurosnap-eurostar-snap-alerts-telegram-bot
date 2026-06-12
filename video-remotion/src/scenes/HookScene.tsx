import { AbsoluteFill } from "remotion";
import { AccentLine } from "../components/AccentLine";
import { MaskReveal } from "../components/MaskReveal";
import { colors } from "../lib/theme";

export const HookScene: React.FC<{ frame: number }> = ({ frame }) => (
  <AbsoluteFill style={{ background: colors.bg, color: colors.ink }}>
    <AccentLine frame={frame} start={0} end={6} width={290} top={276} />
    <div style={{ position: "absolute", top: 274, width: "100%", textAlign: "center" }}>
      <MaskReveal frame={frame} start={4} end={24} height={156}>
        <span style={{ fontSize: 148, fontWeight: 700 }}>Tired of missing</span>
      </MaskReveal>
      <MaskReveal frame={frame} start={20} end={40} height={156} style={{ marginTop: 8 }}>
        <span style={{ fontSize: 148, fontWeight: 700, color: colors.blue }}>Eurostar </span>
        <span style={{ fontSize: 148, fontWeight: 700 }}>Snap deals?</span>
      </MaskReveal>
    </div>
  </AbsoluteFill>
);
