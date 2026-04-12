"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// ─── Types ───────────────────────────────────────────────────────────────────

interface NodeDef { cx: number; cy: number; r: number }
interface ClusterDef {
  id           : string
  top          : string   // % down the full page-height container
  left         : string   // any CSS left value: '25%', 'calc(100% - 260px)', etc.
  width        : number   // SVG bounding width  (px)
  height       : number   // SVG bounding height (px)
  scrollSpeed  : number   // total Y shift scroll top→bottom (px, ±25 max)
  floatDuration: number   // ambient float period (s, 4–8)
  floatDelay   : number   // stagger so nothing starts in sync (s)
  floatRange   : number   // ± Y drift (px, 8–12)
  baseOpacity  : number   // 0.07–0.09
  paths        : string[] // SVG 'd' (right-angle H/V only)
  nodes        : NodeDef[]
}

// ─── Cluster definitions ─────────────────────────────────────────────────────
//
// 15 clusters distributed across FULL page width and height.
// left-edge positions (approx % on 1440 px viewport):
//   3, 5, 8, 18, 22, 25, 32, 37, 43, 50, 59, 65, 78, ~81, ~82
// vertical spread: 2% → 95%, roughly every 6–7 %.
//
// All junction node (cx,cy) positions verified to lie on a trace path.

const CLUSTERS: ClusterDef[] = [

  // ── C1  left 3%, top 2% ──────────────────────────────────────────────────
  // T-junction: main horiz + branch up from midpoint + tail down from end
  // P1: M 30,90 H 180  (→150px)   P2: M 105,90 V 30  [105∈(30,180)✓]
  // P3: M 180,90 V 190 (↓100px)
  {
    id:"c1", top:"2%", left:"3%", width:265, height:215,
    scrollSpeed:-18, floatDuration:5.8, floatDelay:0,   floatRange:10, baseOpacity:0.08,
    paths:["M 30,90 H 180","M 105,90 V 30","M 180,90 V 190"],
    nodes:[{cx:30,cy:90,r:3},{cx:180,cy:90,r:4},{cx:105,cy:90,r:3.5},{cx:105,cy:30,r:3},{cx:180,cy:190,r:3}],
  },

  // ── C2  left 65%, top 7% ─────────────────────────────────────────────────
  // L-shape with midpoint branch up
  // P1: M 210,70 H 60 (←150px)  P2: M 135,70 V 20  [135∈(60,210)✓]
  // P3: M 60,70 V 170 (↓100px)
  {
    id:"c2", top:"7%", left:"65%", width:240, height:200,
    scrollSpeed:-22, floatDuration:7.2, floatDelay:1.5, floatRange:12, baseOpacity:0.07,
    paths:["M 210,70 H 60","M 135,70 V 20","M 60,70 V 170"],
    nodes:[{cx:210,cy:70,r:3},{cx:60,cy:70,r:4},{cx:135,cy:70,r:3.5},{cx:135,cy:20,r:3},{cx:60,cy:170,r:3}],
  },

  // ── C3  left 18%, top 14% ────────────────────────────────────────────────
  // Step right-down-right
  // P1: M 30,80 H 150  P2: M 150,80 V 170  P3: M 150,170 H 270
  {
    id:"c3", top:"14%", left:"18%", width:295, height:200,
    scrollSpeed:15,  floatDuration:6.5, floatDelay:2.8, floatRange:8,  baseOpacity:0.09,
    paths:["M 30,80 H 150","M 150,80 V 170","M 150,170 H 270"],
    nodes:[{cx:30,cy:80,r:3},{cx:150,cy:80,r:4},{cx:150,cy:170,r:4},{cx:270,cy:170,r:3}],
  },

  // ── C4  left ≈81%, top 20% ───────────────────────────────────────────────
  // Z-shape (right-anchored via calc)
  // P1: M 240,60 H 80  P2: M 80,60 V 150  P3: M 80,150 H 230
  {
    id:"c4", top:"20%", left:"calc(100% - 275px)", width:265, height:185,
    scrollSpeed:20,  floatDuration:4.8, floatDelay:0.7, floatRange:11, baseOpacity:0.08,
    paths:["M 240,60 H 80","M 80,60 V 150","M 80,150 H 230"],
    nodes:[{cx:240,cy:60,r:3},{cx:80,cy:60,r:4},{cx:80,cy:150,r:4},{cx:230,cy:150,r:3}],
  },

  // ── C5  left 37%, top 28% ────────────────────────────────────────────────
  // Wide T — spans center of viewport (340px wide, covering ~37–61%)
  // P1: M 40,100 H 220  P2: M 130,100 V 30  [130∈(40,220)✓]
  // P3: M 220,100 V 190
  {
    id:"c5", top:"28%", left:"37%", width:340, height:220,
    scrollSpeed:-12, floatDuration:8.0, floatDelay:3.5, floatRange:9,  baseOpacity:0.07,
    paths:["M 40,100 H 220","M 130,100 V 30","M 220,100 V 190"],
    nodes:[{cx:40,cy:100,r:3},{cx:130,cy:100,r:3.5},{cx:220,cy:100,r:4},{cx:130,cy:30,r:3},{cx:220,cy:190,r:3}],
  },

  // ── C6  left 78%, top 36% ────────────────────────────────────────────────
  // L with base right
  // P1: M 215,70 H 65  P2: M 65,70 V 165  P3: M 65,165 H 190
  {
    id:"c6", top:"36%", left:"78%", width:250, height:195,
    scrollSpeed:18,  floatDuration:5.2, floatDelay:1.1, floatRange:10, baseOpacity:0.09,
    paths:["M 215,70 H 65","M 65,70 V 165","M 65,165 H 190"],
    nodes:[{cx:215,cy:70,r:3},{cx:65,cy:70,r:4},{cx:65,cy:165,r:4},{cx:190,cy:165,r:3}],
  },

  // ── C7  left 8%, top 43% ─────────────────────────────────────────────────
  // Reverse step — extends toward center from left edge
  // P1: M 30,185 H 155  P2: M 155,185 V 90  P3: M 155,90 H 280
  {
    id:"c7", top:"43%", left:"8%", width:305, height:215,
    scrollSpeed:-20, floatDuration:6.8, floatDelay:4.2, floatRange:12, baseOpacity:0.08,
    paths:["M 30,185 H 155","M 155,185 V 90","M 155,90 H 280"],
    nodes:[{cx:30,cy:185,r:3},{cx:155,cy:185,r:4},{cx:155,cy:90,r:4},{cx:280,cy:90,r:3}],
  },

  // ── C8  left 50%, top 51% ────────────────────────────────────────────────
  // T-junction (three branches, covers dead center of viewport)
  // P1: M 235,95 H 70  P2: M 70,95 V 30  P3: M 70,95 V 185
  {
    id:"c8", top:"51%", left:"50%", width:265, height:215,
    scrollSpeed:25,  floatDuration:7.5, floatDelay:2.3, floatRange:8,  baseOpacity:0.07,
    paths:["M 235,95 H 70","M 70,95 V 30","M 70,95 V 185"],
    nodes:[{cx:235,cy:95,r:3},{cx:70,cy:95,r:4},{cx:70,cy:30,r:3},{cx:70,cy:185,r:3}],
  },

  // ── C9  left 25%, top 58% ────────────────────────────────────────────────
  // Step right-down-right
  // P1: M 30,65 H 165  P2: M 165,65 V 155  P3: M 165,155 H 275
  {
    id:"c9", top:"58%", left:"25%", width:300, height:185,
    scrollSpeed:-15, floatDuration:5.5, floatDelay:0.3, floatRange:10, baseOpacity:0.09,
    paths:["M 30,65 H 165","M 165,65 V 155","M 165,155 H 275"],
    nodes:[{cx:30,cy:65,r:3},{cx:165,cy:65,r:4},{cx:165,cy:155,r:4},{cx:275,cy:155,r:3}],
  },

  // ── C10 left ≈82%, top 65% ───────────────────────────────────────────────
  // L with midpoint branch up (right-anchored)
  // P1: M 220,75 H 70  P2: M 145,75 V 20  [145∈(70,220)✓]  P3: M 70,75 V 190
  {
    id:"c10", top:"65%", left:"calc(100% - 260px)", width:255, height:215,
    scrollSpeed:22,  floatDuration:6.2, floatDelay:3.0, floatRange:9,  baseOpacity:0.08,
    paths:["M 220,75 H 70","M 145,75 V 20","M 70,75 V 190"],
    nodes:[{cx:220,cy:75,r:3},{cx:70,cy:75,r:4},{cx:145,cy:75,r:3.5},{cx:145,cy:20,r:3},{cx:70,cy:190,r:3}],
  },

  // ── C11 left 5%, top 73% ─────────────────────────────────────────────────
  // L with branch
  // P1: M 30,85 H 180  P2: M 100,85 V 30  [100∈(30,180)✓]  P3: M 180,85 V 175
  {
    id:"c11", top:"73%", left:"5%", width:275, height:200,
    scrollSpeed:-25, floatDuration:7.8, floatDelay:1.9, floatRange:11, baseOpacity:0.07,
    paths:["M 30,85 H 180","M 100,85 V 30","M 180,85 V 175"],
    nodes:[{cx:30,cy:85,r:3},{cx:100,cy:85,r:3.5},{cx:180,cy:85,r:4},{cx:100,cy:30,r:3},{cx:180,cy:175,r:3}],
  },

  // ── C12 left 43%, top 80% ────────────────────────────────────────────────
  // Z-shape in lower center
  // P1: M 240,65 H 80  P2: M 80,65 V 155  P3: M 80,155 H 220
  {
    id:"c12", top:"80%", left:"43%", width:270, height:185,
    scrollSpeed:15,  floatDuration:5.0, floatDelay:4.8, floatRange:8,  baseOpacity:0.09,
    paths:["M 240,65 H 80","M 80,65 V 155","M 80,155 H 220"],
    nodes:[{cx:240,cy:65,r:3},{cx:80,cy:65,r:4},{cx:80,cy:155,r:4},{cx:220,cy:155,r:3}],
  },

  // ── C13 left 22%, top 26% ────────────────────────────────────────────────  NEW
  // Step right-down-right (fills left-center gap between C3 and C5 vertically)
  // P1: M 25,75 H 155  P2: M 155,75 V 165  P3: M 155,165 H 265
  {
    id:"c13", top:"26%", left:"22%", width:285, height:195,
    scrollSpeed:-10, floatDuration:6.0, floatDelay:2.1, floatRange:9,  baseOpacity:0.08,
    paths:["M 25,75 H 155","M 155,75 V 165","M 155,165 H 265"],
    nodes:[{cx:25,cy:75,r:3},{cx:155,cy:75,r:4},{cx:155,cy:165,r:4},{cx:265,cy:165,r:3}],
  },

  // ── C14 left 59%, top 56% ────────────────────────────────────────────────  NEW
  // Wide T spanning center-right (fills gap between C8 and C9 vertically)
  // P1: M 35,95 H 200  P2: M 120,95 V 25  [120∈(35,200)✓]  P3: M 200,95 V 185
  {
    id:"c14", top:"56%", left:"59%", width:280, height:210,
    scrollSpeed:16,  floatDuration:7.0, floatDelay:3.8, floatRange:11, baseOpacity:0.07,
    paths:["M 35,95 H 200","M 120,95 V 25","M 200,95 V 185"],
    nodes:[{cx:35,cy:95,r:3},{cx:120,cy:95,r:3.5},{cx:200,cy:95,r:4},{cx:120,cy:25,r:3},{cx:200,cy:185,r:3}],
  },

  // ── C15 left 32%, top 88% ────────────────────────────────────────────────  NEW
  // Reverse step toward center (fills lower-center gap below C12)
  // P1: M 25,170 H 155  P2: M 155,170 V 80  P3: M 155,80 H 275
  {
    id:"c15", top:"88%", left:"32%", width:295, height:200,
    scrollSpeed:-18, floatDuration:5.5, floatDelay:1.6, floatRange:9,  baseOpacity:0.08,
    paths:["M 25,170 H 155","M 155,170 V 80","M 155,80 H 275"],
    nodes:[{cx:25,cy:170,r:3},{cx:155,cy:170,r:4},{cx:155,cy:80,r:4},{cx:275,cy:80,r:3}],
  },
];

// ─── Component ───────────────────────────────────────────────────────────────

export function ParallaxBackground() {
  // Outer wrapper  → scroll parallax Y (ScrollTrigger)
  // Inner SVG      → ambient float Y + opacity pulse
  // Two separate elements, two separate GSAP tweens — no property conflict.
  const scrollRefs = useRef<(HTMLDivElement | null)[]>([]);
  const svgRefs    = useRef<(SVGSVGElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      CLUSTERS.forEach((c, i) => {
        const wrapper = scrollRefs.current[i];
        const svg     = svgRefs.current[i];
        if (!wrapper || !svg) return;

        // Ambient Y float ─────────────────────────────────────────────────────
        gsap.to(svg, {
          y        : c.floatRange,
          duration : c.floatDuration,
          ease     : "sine.inOut",
          repeat   : -1,
          yoyo     : true,
          delay    : c.floatDelay,
        });

        // Opacity pulse (slightly different period so float & fade desync) ────
        gsap.to(svg, {
          opacity  : c.baseOpacity * 0.4,
          duration : c.floatDuration * 1.35,
          ease     : "sine.inOut",
          repeat   : -1,
          yoyo     : true,
          delay    : c.floatDelay * 0.8 + 0.4,
        });

        // Scroll parallax on outer wrapper ────────────────────────────────────
        gsap.to(wrapper, {
          y: c.scrollSpeed,
          ease: "none",
          scrollTrigger: {
            trigger: document.body,
            start  : "top top",
            end    : "bottom bottom",
            scrub  : 1.5,
          },
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div
      className="absolute inset-0 z-[1] pointer-events-none overflow-hidden"
      aria-hidden="true"
    >
      {CLUSTERS.map((c, i) => (
        <div
          key={c.id}
          ref={el => { scrollRefs.current[i] = el; }}
          style={{
            position : "absolute",
            top      : c.top,
            left     : c.left,
            width    : c.width,
            height   : c.height,
          }}
        >
          <svg
            ref={el => { svgRefs.current[i] = el; }}
            width={c.width}
            height={c.height}
            viewBox={`0 0 ${c.width} ${c.height}`}
            style={{ display: "block", opacity: c.baseOpacity, overflow: "visible" }}
            xmlns="http://www.w3.org/2000/svg"
          >
            {c.paths.map((d, pi) => (
              <path
                key={pi}
                d={d}
                fill="none"
                stroke="#111111"
                strokeWidth="0.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            ))}
            {c.nodes.map((n, ni) => (
              <circle
                key={ni}
                cx={n.cx}
                cy={n.cy}
                r={n.r}
                fill="#111111"
              />
            ))}
          </svg>
        </div>
      ))}
    </div>
  );
}
