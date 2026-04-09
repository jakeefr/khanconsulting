"use client";

import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import type { ReactNode } from "react";

type GradientTextClientProps = {
  children: ReactNode;
  className?: string;
  colors?: string[];
  animationSpeed?: number;
  showBorder?: boolean;
  direction?: "horizontal" | "vertical" | "diagonal";
  pauseOnHover?: boolean;
  yoyo?: boolean;
};

const GradientText = dynamic(
  () => import("@/components/reactbits/GradientText").then((m) => m.default),
  { ssr: false }
);

export default function GradientTextClient(props: GradientTextClientProps) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <span className={`text-neutral-900 ${props.className ?? ""}`}>
        {props.children}
      </span>
    );
  }
  return <GradientText {...props} />;
}
