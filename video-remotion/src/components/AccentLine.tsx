import { colors } from "../lib/theme";
import { ip } from "../lib/timing";

type AccentLineProps = {
  frame: number;
  start: number;
  end: number;
  width: number;
  top: number;
  thickness?: number;
};

export const AccentLine: React.FC<AccentLineProps> = ({
  frame,
  start,
  end,
  width,
  top,
  thickness = 4,
}) => {
  const progress = ip(frame, start, end);

  return (
    <div
      style={{
        position: "absolute",
        top,
        left: "50%",
        width,
        height: thickness,
        transform: "translateX(-50%)",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          width: `${progress * 100}%`,
          height: "100%",
          background: colors.blue,
          borderRadius: 999,
        }}
      />
    </div>
  );
};
