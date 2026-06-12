import { AbsoluteFill } from "remotion";
import { MaskReveal } from "../components/MaskReveal";
import { colors } from "../lib/theme";

export const ProblemScene: React.FC<{ frame: number }> = ({ frame }) => (
  <AbsoluteFill style={{ background: colors.bg, color: colors.ink }}>
    <div style={{ position: "absolute", top: 318, width: "100%", textAlign: "center" }}>
      <MaskReveal frame={frame} start={4} end={24} height={132}>
        <span style={{ fontSize: 118, fontWeight: 700 }}>Stop checking for</span>
      </MaskReveal>
      <MaskReveal frame={frame} start={18} end={38} height={132} style={{ marginTop: 6 }}>
        <span style={{ fontSize: 118, fontWeight: 700 }}>tickets all day.</span>
      </MaskReveal>
    </div>
  </AbsoluteFill>
);
