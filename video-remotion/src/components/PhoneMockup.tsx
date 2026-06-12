import { AbsoluteFill, interpolate } from "remotion";
import { colors } from "../lib/theme";
import { easeSoft, ip } from "../lib/timing";

const shell = {
  width: 340,
  height: 680,
  left: 790,
  top: 182,
};

const screen = {
  width: shell.width - 24,
  height: shell.height - 24,
};

const Bubble: React.FC<{
  side: "bot" | "user";
  top: number;
  children: React.ReactNode;
  opacity: number;
  bold?: boolean;
}> = ({ side, top, children, opacity, bold }) => {
  const isUser = side === "user";

  return (
    <div
      style={{
        position: "absolute",
        top,
        [isUser ? "right" : "left"]: 10,
        maxWidth: 258,
        padding: "7px 9px",
        borderRadius: 14,
        background: isUser ? colors.blue : colors.phoneBot,
        color: "#fff",
        fontSize: 14,
        fontWeight: bold ? 700 : 400,
        opacity,
        transform: `translateY(${(1 - opacity) * 12}px)`,
        lineHeight: 1.15,
      }}
    >
      {children}
    </div>
  );
};

const KeyboardButton: React.FC<{
  left: number;
  top: number;
  width: number;
  label: string;
  active?: boolean;
  opacity: number;
}> = ({ left, top, width, label, active, opacity }) => (
  <div
    style={{
      position: "absolute",
      left,
      top,
      width,
      height: 30,
      borderRadius: 10,
      border: `1px solid rgba(42, 171, 238, ${0.6 * opacity})`,
      background: active ? colors.blue : colors.phoneKeyboard,
      color: active ? "#fff" : colors.blue,
      opacity,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 10.5,
      fontWeight: 600,
      overflow: "hidden",
      whiteSpace: "nowrap",
    }}
  >
    {label}
  </div>
);

const TelegramHeader: React.FC = () => (
  <div
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      height: 60,
      background: colors.phoneHeader,
      borderTopLeftRadius: 44,
      borderTopRightRadius: 44,
      color: colors.softWhite,
    }}
  >
    <div style={{ position: "absolute", top: 9, left: 24, fontSize: 12, fontWeight: 700 }}>
      9:41
    </div>
    <div
      style={{
        position: "absolute",
        top: 29,
        left: 13,
        width: 30,
        height: 30,
        borderRadius: 15,
        background: colors.blue,
      }}
    >
      <div
        style={{
          position: "absolute",
          left: 9,
          top: 10,
          width: 0,
          height: 0,
          borderTop: "6px solid transparent",
          borderBottom: "6px solid transparent",
          borderLeft: "18px solid #fff",
          transform: "skewX(-16deg)",
        }}
      />
    </div>
    <div style={{ position: "absolute", top: 27, left: 50, fontSize: 16, fontWeight: 700 }}>
      Eurosnap
    </div>
    <div style={{ position: "absolute", top: 44, left: 50, fontSize: 11, color: colors.blue }}>
      bot
    </div>
  </div>
);

const ChatScreen: React.FC<{ frame: number; opacity: number }> = ({ frame, opacity }) => {
  const third = (screen.width - 28) / 3;
  const priceWidth = (screen.width - 34) / 3;

  return (
    <div style={{ opacity }}>
      <TelegramHeader />
      <Bubble side="bot" top={70} opacity={ip(frame, 30, 44)} bold>
        Choose your route:
      </Bubble>
      <KeyboardButton left={11} top={108} width={third} label="Paris to London" active={frame >= 60} opacity={ip(frame, 42, 56)} />
      <KeyboardButton left={13 + third} top={108} width={third} label="London to Paris" opacity={ip(frame, 42, 56) * 0.65} />
      <KeyboardButton left={15 + third * 2} top={108} width={third} label="Other" opacity={ip(frame, 42, 56) * 0.55} />

      <Bubble side="user" top={150} opacity={ip(frame, 62, 76)}>
        Paris to London
      </Bubble>
      <Bubble side="bot" top={190} opacity={ip(frame, 82, 96)} bold>
        Pick your travel date:
      </Bubble>
      <KeyboardButton left={11} top={228} width={third} label="Saturday" active={frame >= 116} opacity={ip(frame, 100, 114)} />
      <KeyboardButton left={13 + third} top={228} width={third} label="Sunday" opacity={ip(frame, 100, 114) * 0.65} />
      <KeyboardButton left={15 + third * 2} top={228} width={third} label="Other" opacity={ip(frame, 100, 114) * 0.55} />

      <Bubble side="user" top={270} opacity={ip(frame, 118, 132)}>
        Saturday
      </Bubble>
      <Bubble side="bot" top={310} opacity={ip(frame, 138, 152)} bold>
        Set your max price:
      </Bubble>
      <KeyboardButton left={11} top={348} width={priceWidth} label="29 EUR" active={frame >= 172} opacity={ip(frame, 156, 170)} />
      <KeyboardButton left={14 + priceWidth} top={348} width={priceWidth} label="49 EUR" opacity={ip(frame, 156, 170) * 0.5} />
      <KeyboardButton left={17 + priceWidth * 2} top={348} width={priceWidth} label="Any" opacity={ip(frame, 156, 170) * 0.5} />

      <Bubble side="user" top={390} opacity={ip(frame, 174, 188)}>
        Max 29 EUR
      </Bubble>
      <Bubble side="bot" top={430} opacity={ip(frame, 194, 210)} bold>
        Alert set! I&apos;ll notify you.
      </Bubble>
    </div>
  );
};

const Lockscreen: React.FC<{ opacity: number }> = ({ opacity }) => (
  <div
    style={{
      position: "absolute",
      inset: 0,
      opacity,
      background: `linear-gradient(180deg, #1c2a6e, ${colors.violet})`,
      color: "#f5f8ff",
      borderRadius: 44,
    }}
  >
    <div style={{ position: "absolute", top: 18, left: 18, fontSize: 14, fontWeight: 700 }}>
      14:32
    </div>
    <div style={{ position: "absolute", top: 18, right: 20, width: 24, height: 12, border: "1px solid #ebf0fa", borderRadius: 3 }}>
      <div style={{ position: "absolute", top: 2, left: 3, width: 14, height: 6, background: "#ebf0fa" }} />
    </div>
    <div style={{ position: "absolute", top: 70, width: "100%", textAlign: "center", fontSize: 72, fontWeight: 500, lineHeight: 1 }}>
      14:32
    </div>
    <div style={{ position: "absolute", top: 160, width: "100%", textAlign: "center", fontSize: 16, color: "#e1e6f5" }}>
      Tuesday, April 21
    </div>
    <div
      style={{
        position: "absolute",
        top: 322,
        left: 10,
        width: screen.width - 16,
        height: 114,
        borderRadius: 18,
        background: colors.notif,
        border: "1px solid #afc6de",
        color: colors.notifText,
        padding: "10px 12px",
      }}
    >
      <div style={{ position: "absolute", top: 12, left: 10, width: 32, height: 32, borderRadius: 16, background: colors.blue }} />
      <div style={{ marginLeft: 40, display: "flex", justifyContent: "space-between", fontSize: 14, fontWeight: 700 }}>
        <span>Eurosnap</span>
        <span style={{ fontSize: 12, fontWeight: 400 }}>now</span>
      </div>
      <div style={{ marginLeft: 40, marginTop: 8, fontSize: 13, fontWeight: 700, whiteSpace: "nowrap" }}>
        Deal found: Paris to London
      </div>
      <div style={{ marginLeft: 40, marginTop: 7, fontSize: 11, whiteSpace: "nowrap" }}>
        Saturday - EUR 27 (max EUR 29)
      </div>
      <div style={{ marginLeft: 40, marginTop: 6, fontSize: 11, color: colors.blueDark, fontWeight: 700 }}>
        Tap to book
      </div>
    </div>
  </div>
);

export const PhoneMockup: React.FC<{ frame: number }> = ({ frame }) => {
  const phoneOpacity = ip(frame, 0, 24);
  const y = ip(frame, 0, 28, 80, 0);
  const chatOpacity = 1 - ip(frame, 282, 294);
  const lockOpacity = ip(frame, 324, 342, 0, 1, easeSoft);
  const zoomProgress = ip(frame, 360, 414, 0, 1, easeSoft);
  const zoom = interpolate(zoomProgress, [0, 1], [1, 4]);
  const flash = ip(frame, 408, 420);

  return (
    <AbsoluteFill
      style={{
        opacity: phoneOpacity,
        transform: `translateY(${y}px) scale(${zoom})`,
        transformOrigin: "960px 570px",
      }}
    >
      <div
        style={{
          position: "absolute",
          left: shell.left,
          top: shell.top,
          width: shell.width,
          height: shell.height,
          borderRadius: 56,
          background: colors.phoneShell,
          border: "2px solid #303442",
          boxSizing: "border-box",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 14,
            left: (shell.width - 128) / 2,
            width: 128,
            height: 30,
            borderRadius: 15,
            background: "#080a0e",
            zIndex: 4,
          }}
        />
        <div
          style={{
            position: "absolute",
            left: 12,
            top: 12,
            width: screen.width,
            height: screen.height,
            borderRadius: 44,
            background: colors.phoneChat,
            overflow: "hidden",
          }}
        >
          <ChatScreen frame={frame} opacity={chatOpacity} />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "#000",
              opacity: 1 - chatOpacity,
            }}
          />
          <Lockscreen opacity={lockOpacity} />
          <div
            style={{
              position: "absolute",
              left: "50%",
              bottom: 10,
              width: 96,
              height: 4,
              transform: "translateX(-50%)",
              borderRadius: 2,
              background: "#465064",
              opacity: Math.max(chatOpacity, lockOpacity),
            }}
          />
          <div style={{ position: "absolute", inset: 0, background: "#fff", opacity: flash }} />
        </div>
      </div>
      <div style={{ position: "absolute", inset: 0, background: "#fff", opacity: flash }} />
    </AbsoluteFill>
  );
};
