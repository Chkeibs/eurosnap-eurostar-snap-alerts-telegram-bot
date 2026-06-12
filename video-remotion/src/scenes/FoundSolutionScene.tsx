import { AbsoluteFill } from "remotion";
import { MaskReveal } from "../components/MaskReveal";
import { colors } from "../lib/theme";

export const FoundSolutionScene: React.FC<{ frame: number }> = ({ frame }) => (
  <AbsoluteFill style={{ background: colors.bg, color: colors.ink }}>
    <div style={{ position: "absolute", top: 248, width: "100%", textAlign: "center" }}>
      <MaskReveal frame={frame} start={4} end={20} height={120}>
        <span style={{ fontSize: 112, fontWeight: 700 }}>We found</span>
      </MaskReveal>
      <MaskReveal frame={frame} start={16} end={32} height={120} style={{ marginTop: 8 }}>
        <span style={{ fontSize: 112, fontWeight: 700, color: colors.blue }}>the solution</span>
      </MaskReveal>
      <MaskReveal frame={frame} start={28} end={44} height={120} style={{ marginTop: 8 }}>
        <span style={{ fontSize: 112, fontWeight: 700 }}>for you.</span>
      </MaskReveal>
    </div>
  </AbsoluteFill>
);
