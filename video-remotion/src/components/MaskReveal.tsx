import type { ReactNode } from "react";
import { ip } from "../lib/timing";

type MaskRevealProps = {
  frame: number;
  start: number;
  end: number;
  children: ReactNode;
  height: number;
  style?: React.CSSProperties;
};

export const MaskReveal: React.FC<MaskRevealProps> = ({
  frame,
  start,
  end,
  children,
  height,
  style,
}) => {
  const progress = ip(frame, start, end);
  const clipHeight = height + 24;

  return (
    <div
      style={{
        height: clipHeight,
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        ...style,
      }}
    >
      <div
        style={{
          transform: `translateY(${(1 - progress) * clipHeight * 1.15}px)`,
          opacity: progress,
          willChange: "transform, opacity",
          whiteSpace: "nowrap",
          lineHeight: 1.05,
          paddingBottom: 8,
        }}
      >
        {children}
      </div>
    </div>
  );
};
