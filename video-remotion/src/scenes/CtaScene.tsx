import { AbsoluteFill } from "remotion";
import { AccentLine } from "../components/AccentLine";
import { MaskReveal } from "../components/MaskReveal";
import { colors } from "../lib/theme";
import { ip } from "../lib/timing";

const Feature: React.FC<{ frame: number; start: number; top: number; children: React.ReactNode }> = ({
  frame,
  start,
  top,
  children,
}) => {
  const opacity = ip(frame, start, start + 18);
  const y = ip(frame, start, start + 18, 18, 0);

  return (
    <div
      style={{
        position: "absolute",
        top: top + y,
        left: 0,
        right: 0,
        opacity,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 22,
        color: colors.inkMid,
        fontSize: 34,
      }}
    >
      <div style={{ width: 16, height: 16, borderRadius: 8, background: colors.blue }} />
      <span>{children}</span>
    </div>
  );
};

export const CtaScene: React.FC<{ frame: number }> = ({ frame }) => {
  const cta = ip(frame, 96, 124);

  return (
    <AbsoluteFill style={{ background: colors.bg, color: colors.ink }}>
      <AccentLine frame={frame} start={16} end={26} width={270} top={176} />
      <div style={{ position: "absolute", top: 204, width: "100%", textAlign: "center" }}>
        <MaskReveal frame={frame} start={20} end={50} height={190}>
          <span style={{ fontSize: 172, fontWeight: 700 }}>EUR 1.99/month</span>
        </MaskReveal>
      </div>

      <Feature frame={frame} start={58} top={444}>Unlimited alerts</Feature>
      <Feature frame={frame} start={74} top={502}>Up to 3 active alerts at once</Feature>
      <Feature frame={frame} start={90} top={560}>Very easy to use</Feature>

      <div
        style={{
          position: "absolute",
          top: 760 + ip(frame, 96, 124, 22, 0),
          left: 0,
          right: 0,
          textAlign: "center",
          color: colors.blue,
          fontSize: 50,
          fontWeight: 700,
          opacity: cta,
        }}
      >
        Get ready now by clicking on the link
        <div
          style={{
            width: 820 * cta,
            height: 2,
            background: colors.blue,
            margin: "14px auto 0",
            borderRadius: 999,
          }}
        />
      </div>
    </AbsoluteFill>
  );
};
