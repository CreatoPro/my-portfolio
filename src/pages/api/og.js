import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

export const config = {
  runtime: "edge", // Required for @vercel/og
};

export default function handler(req) {
  const { searchParams } = new URL(req.url);
  const title = searchParams.get("title") || "Shreesat Sahu's Portfolio";

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "1200px",
          height: "630px",
          background: "black",
          color: "white",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "50px",
          fontWeight: "bold",
        }}
      >
        Shreesat Sahu's Portfolio
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
