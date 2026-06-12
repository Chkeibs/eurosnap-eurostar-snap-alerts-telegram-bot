import { AbsoluteFill, Audio, staticFile, useCurrentFrame } from "remotion";
import { G1, G2, G3, G4, G5, S1, S2, S3, S4, S5, fadeInOut } from "./lib/timing";
import { HookScene } from "./scenes/HookScene";
import { ProblemScene } from "./scenes/ProblemScene";
import { FoundSolutionScene } from "./scenes/FoundSolutionScene";
import { PhoneDemoScene } from "./scenes/PhoneDemoScene";
import { CtaScene } from "./scenes/CtaScene";

const Layer: React.FC<{
  start: number;
  duration: number;
  children: (localFrame: number) => React.ReactNode;
}> = ({ start, duration, children }) => {
  const frame = useCurrentFrame();
  const opacity = fadeInOut(frame, start, start + duration);
  const localFrame = frame - start;

  if (opacity <= 0) {
    return null;
  }

  return <AbsoluteFill style={{ opacity }}>{children(localFrame)}</AbsoluteFill>;
};

export const EuroSnapAd: React.FC = () => (
  <AbsoluteFill style={{ background: "#fff" }}>
    <Audio src={staticFile("audio/eurosnap-audio.wav")} />
    <Layer start={G1} duration={S1}>
      {(frame) => <HookScene frame={frame} />}
    </Layer>
    <Layer start={G2} duration={S2}>
      {(frame) => <ProblemScene frame={frame} />}
    </Layer>
    <Layer start={G3} duration={S3}>
      {(frame) => <FoundSolutionScene frame={frame} />}
    </Layer>
    <Layer start={G4} duration={S4}>
      {(frame) => <PhoneDemoScene frame={frame} />}
    </Layer>
    <Layer start={G5} duration={S5}>
      {(frame) => <CtaScene frame={frame} />}
    </Layer>
  </AbsoluteFill>
);
