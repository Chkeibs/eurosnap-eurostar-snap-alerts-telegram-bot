import { AbsoluteFill } from "remotion";
import { MaskReveal } from "../components/MaskReveal";
import { PhoneMockup } from "../components/PhoneMockup";
import { colors } from "../lib/theme";
import { ip, toPhoneReferenceFrame } from "../lib/timing";

const CaptionLine: React.FC<{
  frame: number;
  start: number;
  end: number;
  top: number;
  left: number;
  width: number;
  color: string;
  opacity?: number;
  children: React.ReactNode;
}> = ({ frame, start, end, top, left, width, color, opacity = 1, children }) => (
  <div style={{ position: "absolute", top, left, width, color, opacity, textAlign: "center" }}>
    <MaskReveal frame={frame} start={start} end={end} height={60}>
      <span style={{ fontSize: 48, fontWeight: 700 }}>{children}</span>
    </MaskReveal>
  </div>
);

export const PhoneDemoScene: React.FC<{ frame: number }> = ({ frame }) => {
  const phoneFrame = toPhoneReferenceFrame(frame);
  const surroundingTextOpacity = 1 - ip(phoneFrame, 350, 362);

  return (
    <AbsoluteFill style={{ background: colors.bg, color: colors.ink }}>
      <PhoneMockup frame={phoneFrame} />

    <div style={{ position: "absolute", top: 36, width: "100%", opacity: surroundingTextOpacity, textAlign: "center" }}>
      <MaskReveal frame={phoneFrame} start={10} end={34} height={92}>
        <span style={{ fontSize: 62, fontWeight: 700, color: colors.inkMid }}>Welcome to </span>
        <span style={{ fontSize: 62, fontWeight: 700, color: colors.blue }}>Eurosnap</span>
        <span style={{ fontSize: 62, fontWeight: 700, color: colors.blueDark }}>.</span>
      </MaskReveal>
    </div>

    <div style={{ position: "absolute", top: 925, width: "100%", opacity: surroundingTextOpacity, textAlign: "center" }}>
      <MaskReveal frame={phoneFrame} start={36} end={60} height={58}>
        <span style={{ fontSize: 40, fontWeight: 500, color: colors.inkMid }}>The telegram bot that monitors </span>
        <span style={{ fontSize: 40, fontWeight: 500, color: colors.blue }}>Eurostar Snap deals</span>
        <span style={{ fontSize: 40, fontWeight: 500, color: colors.inkMid }}> in real time.</span>
      </MaskReveal>
    </div>

    <CaptionLine frame={phoneFrame} start={12} end={30} top={468} left={86} width={572} color={colors.inkMid} opacity={surroundingTextOpacity}>
      You set your
    </CaptionLine>
    <CaptionLine frame={phoneFrame} start={24} end={42} top={536} left={86} width={572} color={colors.blue} opacity={surroundingTextOpacity}>
      dates, route
    </CaptionLine>
    <CaptionLine frame={phoneFrame} start={36} end={54} top={604} left={86} width={572} color={colors.blueDark} opacity={surroundingTextOpacity}>
      &amp; price.
    </CaptionLine>

    <CaptionLine frame={phoneFrame} start={202} end={218} top={396} left={1262} width={572} color={colors.inkMid} opacity={surroundingTextOpacity}>
      and get
    </CaptionLine>
    <CaptionLine frame={phoneFrame} start={212} end={228} top={462} left={1262} width={572} color={colors.blue} opacity={surroundingTextOpacity}>
      notified
    </CaptionLine>
    <CaptionLine frame={phoneFrame} start={222} end={238} top={528} left={1262} width={572} color={colors.inkMid} opacity={surroundingTextOpacity}>
      as soon as a
    </CaptionLine>
    <CaptionLine frame={phoneFrame} start={232} end={248} top={594} left={1262} width={572} color={colors.blue} opacity={surroundingTextOpacity}>
      matching deal
    </CaptionLine>
    <CaptionLine frame={phoneFrame} start={242} end={258} top={660} left={1262} width={572} color={colors.inkMid} opacity={surroundingTextOpacity}>
      appears.
    </CaptionLine>
    </AbsoluteFill>
  );
};
