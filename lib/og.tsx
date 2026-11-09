import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

/**
 * Carte de partage commune aux trois pages.
 * Reprend la palette du site : fond ink, halo accent, typographie serrée.
 */
export function renderOgImage({
  badge,
  title,
  accent,
  subtitle,
}: {
  badge: string;
  title: string;
  /** Fin du titre, mise en couleur. */
  accent: string;
  subtitle: string;
}) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #1D1D1F 0%, #1D1D1F 55%, #123155 100%)",
          padding: "72px 80px",
          position: "relative",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div style={{ width: 10, height: 10, borderRadius: 5, background: "#0066CC", display: "flex" }} />
          <div style={{ fontSize: 26, color: "rgba(255,255,255,0.55)", letterSpacing: -0.5 }}>
            {badge}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 74,
              fontWeight: 700,
              color: "#FFFFFF",
              letterSpacing: -3.2,
              lineHeight: 1.05,
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            <span>{title}</span>
            <span style={{ color: "#7FB2FF", marginLeft: 18 }}>{accent}</span>
          </div>
          <div
            style={{
              marginTop: 24,
              fontSize: 30,
              color: "rgba(255,255,255,0.6)",
              letterSpacing: -0.8,
              lineHeight: 1.35,
              maxWidth: 900,
              display: "flex",
            }}
          >
            {subtitle}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(255,255,255,0.12)",
            paddingTop: 28,
          }}
        >
          <div style={{ display: "flex", fontSize: 28, fontWeight: 700, color: "#FFFFFF", letterSpacing: -1 }}>
            <span>Atsugo</span>
            <span style={{ fontWeight: 400, color: "rgba(255,255,255,0.5)", marginLeft: 8 }}>
              Consulting
            </span>
          </div>
          <div style={{ fontSize: 24, color: "rgba(255,255,255,0.45)", letterSpacing: -0.5 }}>
            Hugo Moulard · Ivry-sur-Seine
          </div>
        </div>
      </div>
    ),
    ogSize,
  );
}
