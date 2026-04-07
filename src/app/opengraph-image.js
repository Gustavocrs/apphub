import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background:
          "linear-gradient(135deg, rgb(17, 24, 39) 0%, rgb(71, 85, 105) 45%, rgb(99, 102, 241) 100%)",
        color: "white",
        padding: "64px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "16px",
          fontSize: 30,
        }}
      >
        <div
          style={{
            width: "56px",
            height: "56px",
            borderRadius: "14px",
            background: "rgba(255,255,255,0.14)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: 700,
          }}
        >
          AH
        </div>
        <span style={{ fontWeight: 600 }}>AppHub</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
        <p style={{ margin: 0, fontSize: 22, opacity: 0.92 }}>
          Portfolio de projetos de valor
        </p>
        <h1 style={{ margin: 0, fontSize: 62, lineHeight: 1.05 }}>
          Automatizando rotinas.
          <br />
          Gerando resultados.
        </h1>
      </div>
    </div>,
    size,
  );
}
