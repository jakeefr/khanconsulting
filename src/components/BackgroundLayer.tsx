"use client";

import dynamic from "next/dynamic";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { faultyTerminalTint } from "@/theme/colors";

const FaultyTerminal = dynamic(
  () => import("@/components/reactbits/FaultyTerminal").then((m) => m.default),
  { ssr: false }
);

const backgroundFallback = (
  <div className="absolute inset-0 w-full h-full bg-white" aria-hidden />
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
            scanlineIntensity={0.3}
            glitchAmount={1}
            flickerAmount={1}
            noiseAmp={1}
            chromaticAberration={0}
            dither={0}
            curvature={0.2}
            tint={faultyTerminalTint}
            mouseReact={false}
            mouseStrength={0.5}
            pageLoadAnimation
            brightness={0.42}
            className="w-full h-full"
          />
        </ErrorBoundary>
      </div>
    </div>
  );
}
