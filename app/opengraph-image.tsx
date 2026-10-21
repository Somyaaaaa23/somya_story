import { ImageResponse } from "next/og";

export const alt = "Somya Upadhyay — I didn't start with a master plan. I started by building.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "70px 80px", background: "#F9E4E8", color: "#252522", fontFamily: "Georgia, serif" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div style={{ width: 64, height: 64, background: "#8E2621", color: "#FFF4EE", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 38, fontWeight: 900, transform: "rotate(-7deg)" }}>S</div>
          <div style={{ fontSize: 26, letterSpacing: 4, fontWeight: 700, textTransform: "uppercase" }}>Somya Upadhyay</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 84, lineHeight: 1.02, letterSpacing: -3 }}>I didn&apos;t start with a master plan.</div>
          <div style={{ fontSize: 56, marginTop: 18, color: "#8E2621", fontStyle: "italic" }}>I started by building.</div>
        </div>
        <div style={{ fontSize: 24, color: "#66635B" }}>B.Tech CSE, BIT Mesra · Software & AI/ML</div>
      </div>
    ),
    size,
  );
}
