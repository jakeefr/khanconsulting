"use client";

import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";

interface GooeyNavItem {
  label: string;
  href: string;
}

export interface GooeyNavProps {
  items: GooeyNavItem[];
  animationTime?: number;
  particleCount?: number;
  particleDistances?: [number, number];
  particleR?: number;
  timeVariance?: number;
  colors?: number[];
  initialActiveIndex?: number;
  /** When provided, syncs active state to this index (e.g. from current route). */
  activeIndex?: number;
  /** When true, clicking a hash link (e.g. /#results) updates the URL hash so the parent can sync activeIndex. */
  syncHashOnClick?: boolean;
}

const GooeyNav: React.FC<GooeyNavProps> = ({
  items,
  animationTime = 600,
  particleCount = 15,
  particleDistances = [90, 10],
  particleR = 100,
  timeVariance = 300,
  colors = [1, 2, 3, 1, 2, 3, 1, 4],
  initialActiveIndex = 0,
  activeIndex: activeIndexProp,
  syncHashOnClick = false,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLUListElement>(null);
  const filterRef = useRef<HTMLSpanElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const [activeIndexState, setActiveIndexState] = useState<number>(initialActiveIndex);
  const activeIndex = activeIndexProp !== undefined ? activeIndexProp : activeIndexState;

  React.useEffect(() => {
    if (activeIndexProp !== undefined) setActiveIndexState(activeIndexProp);
  }, [activeIndexProp]);

  const noise = (n = 1) => n / 2 - Math.random() * n;
  const getXY = (distance: number, pointIndex: number, totalPoints: number): [number, number] => {
    const angle = ((360 + noise(8)) / totalPoints) * pointIndex * (Math.PI / 180);
    return [distance * Math.cos(angle), distance * Math.sin(angle)];
  };
  const createParticle = (i: number, t: number, d: [number, number], r: number) => {
    let rotate = noise(r / 10);
    return {
      start: getXY(d[0], particleCount - i, particleCount),
      end: getXY(d[1] + noise(7), particleCount - i, particleCount),
      time: t,
      scale: 1 + noise(0.2),
      color: colors[Math.floor(Math.random() * colors.length)],
      rotate: rotate > 0 ? (rotate + r / 20) * 10 : (rotate - r / 20) * 10,
    };
  };
  const makeParticles = (element: HTMLElement) => {
    const d: [number, number] = particleDistances;
    const r = particleR;
    const bubbleTime = animationTime * 2 + timeVariance;
    element.style.setProperty("--time", `${bubbleTime}ms`);
    for (let i = 0; i < particleCount; i++) {
      const t = animationTime * 2 + noise(timeVariance * 2);
      const p = createParticle(i, t, d, r);
      element.classList.remove("active");
      setTimeout(() => {
        const particle = document.createElement("span");
        const point = document.createElement("span");
        particle.classList.add("particle");
        particle.style.setProperty("--start-x", `${p.start[0]}px`);
        particle.style.setProperty("--start-y", `${p.start[1]}px`);
        particle.style.setProperty("--end-x", `${p.end[0]}px`);
        particle.style.setProperty("--end-y", `${p.end[1]}px`);
        particle.style.setProperty("--time", `${p.time}ms`);
        particle.style.setProperty("--scale", `${p.scale}`);
        particle.style.setProperty("--color", `var(--color-${p.color}, white)`);
        particle.style.setProperty("--rotate", `${p.rotate}deg`);
        point.classList.add("point");
        particle.appendChild(point);
        element.appendChild(particle);
        requestAnimationFrame(() => {
          element.classList.add("active");
        });
        setTimeout(() => {
          try {
            element.removeChild(particle);
          } catch {}
        }, t);
      }, 30);
    }
  };
  const updateEffectPosition = (element: HTMLElement) => {
    if (!containerRef.current || !filterRef.current || !textRef.current) return;
    const containerRect = containerRef.current.getBoundingClientRect();
    const pos = element.getBoundingClientRect();
    const styles = {
      left: `${pos.x - containerRect.x}px`,
      top: `${pos.y - containerRect.y}px`,
      width: `${pos.width}px`,
      height: `${pos.height}px`,
    };
    Object.assign(filterRef.current.style, styles);
    Object.assign(textRef.current.style, styles);
    textRef.current.innerText = element.innerText;
  };
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, index: number) => {
    const linkEl = e.currentTarget;
    if (activeIndex === index) return;
    setActiveIndexState(index);
    if (syncHashOnClick && typeof window !== "undefined") {
      const href = items[index]?.href ?? "";
      const hashMatch = href.match(/#(.+)$/);
      const path = window.location.pathname + (window.location.search || "");
      if (hashMatch) {
        const hash = hashMatch[1];
        window.history.replaceState(null, "", path + "#" + hash);
        window.dispatchEvent(new HashChangeEvent("hashchange"));
      } else {
        window.history.replaceState(null, "", path);
        window.dispatchEvent(new HashChangeEvent("hashchange"));
      }
    }
    updateEffectPosition(linkEl);
    if (filterRef.current) {
      const particles = filterRef.current.querySelectorAll(".particle");
      particles.forEach((p) => filterRef.current!.removeChild(p));
    }
    if (textRef.current) {
      textRef.current.classList.remove("active");
      void textRef.current.offsetWidth;
      textRef.current.classList.add("active");
    }
    if (filterRef.current) {
      makeParticles(filterRef.current);
    }
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLAnchorElement>, index: number) => {
    if (e.key === "Enter" || e.key === " ") {
      if (activeIndex !== index) {
        setActiveIndexState(index);
        updateEffectPosition(e.currentTarget);
        if (filterRef.current) {
          const particles = filterRef.current.querySelectorAll(".particle");
          particles.forEach((p) => filterRef.current!.removeChild(p));
        }
        if (textRef.current) {
          textRef.current.classList.remove("active");
          void textRef.current.offsetWidth;
          textRef.current.classList.add("active");
        }
        if (filterRef.current) makeParticles(filterRef.current);
      }
    }
  };
  useEffect(() => {
    if (!navRef.current || !containerRef.current) return;
    const activeLi = navRef.current.querySelectorAll("li")[activeIndex];
    const activeLink = activeLi?.querySelector("a") as HTMLElement;
    if (activeLink) {
      updateEffectPosition(activeLink);
      textRef.current?.classList.add("active");
    }
    const resizeObserver = new ResizeObserver(() => {
      const currentActiveLi = navRef.current?.querySelectorAll("li")[activeIndex];
      const currentLink = currentActiveLi?.querySelector("a") as HTMLElement;
      if (currentLink) updateEffectPosition(currentLink);
    });
    resizeObserver.observe(containerRef.current);
    return () => resizeObserver.disconnect();
  }, [activeIndex]);

  return (
    <div className="gooey-nav relative" ref={containerRef}>
      <span className="effect filter" ref={filterRef} aria-hidden />
      <span className="effect text" ref={textRef} aria-hidden />
      <nav className="flex relative z-10" style={{ transform: "translate3d(0,0,0.01px)" }}>
        <ul
          ref={navRef}
          className="flex gap-8 list-none p-0 px-4 m-0 relative text-neutral-800"
          style={{
            textShadow: "0 1px 1px rgb(255 255 255 / 0.8)",
          }}
        >
          {items.map((item, index) => (
            <li
              key={index}
              className={`rounded-full relative cursor-pointer transition-[background-color_color_box-shadow] duration-300 ease shadow-[0_0_0.5px_1.5px_transparent] text-neutral-800 ${
                activeIndex === index ? "active" : ""
              }`}
            >
              <Link
                href={item.href}
                onClick={(e) => handleClick(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                className="outline-none py-[0.6em] px-[1em] inline-block"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default GooeyNav;
