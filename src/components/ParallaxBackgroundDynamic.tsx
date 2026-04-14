"use client";

import dynamic from "next/dynamic";

const ParallaxBackground = dynamic(
  () => import("@/components/ParallaxBackground").then((m) => m.ParallaxBackground),
  { ssr: false }
);

export default ParallaxBackground;
