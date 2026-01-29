import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          borderRadius: "50%",
          background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span
          style={{
            fontSize: 15,
            fontWeight: 800,
            color: "white",
            letterSpacing: "-0.5px",
            lineHeight: 1,
          }}
        >
          IJ
        </span>
      </div>
    ),
    { ...size }
  );
}
