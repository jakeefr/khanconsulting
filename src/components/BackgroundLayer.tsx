"use client";

import dynamic from "next/dynamic";
import { ErrorBoundary } from "@/components/ErrorBoundary";

const FaultyTerminal = dynamic(
  () => import("@/components/reactbits/FaultyTerminal").then((m) => m.default),
  { ssr: false }
);

const backgroundFallback = (
  <div className="absolute inset-0 w-full h-full bg-navy" aria-hidden />
);

export function BackgroundLayer() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none" aria-hidden>
      <div className="absolute inset-0 w-full h-full">
        <ErrorBoundary fallback={backgroundFallback}>
          <FaultyTerminal
            scale={2.5}
            gridMul={[2, 1]}
            digitSize={2.3}
            timeScale={0.5}
            pause={false}
            scanlineIntensity={0.5}
            glitchAmount={1}
            flickerAmount={1}
            noiseAmp={1}
            chromaticAberration={0}
            dither={0}
            curvature={0.2}
            tint="#172d4a"
            mouseReact={false}
            mouseStrength={0.5}
            pageLoadAnimation
            brightness={0.6}
            className="w-full h-full"
          />
        </ErrorBoundary>
      </div>
      <div
        className="absolute inset-0 w-full h-full bg-gradient-to-b from-[#0b1b33]/70 via-[#0f2747]/70 to-[#0b1b33]/80"
        aria-hidden
      />
    </div>
  );
}
