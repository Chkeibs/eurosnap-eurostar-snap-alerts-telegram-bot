import "./index.css";
import { Composition } from "remotion";
import { EuroSnapAd } from "./EuroSnapAd";
import { FPS, HEIGHT, TOTAL_FRAMES, WIDTH } from "./lib/timing";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="EurosnapAd"
        component={EuroSnapAd}
        durationInFrames={TOTAL_FRAMES}
        fps={FPS}
        width={WIDTH}
        height={HEIGHT}
      />
    </>
  );
};
