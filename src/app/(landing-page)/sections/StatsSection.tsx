"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Building2, FlaskConical, SmilePlus, TrendingUp } from "lucide-react";

/* ─────────── DATA ─────────── */
const stats = [
  {
    icon: Building2,
    value: 500,
    suffix: "+",
    label: "Verified Centers",
    sublabel: "STD testing facilities across India",
    duration: 1800,
    accentFrom: "#f43f5e",
    accentTo: "#fb923c",
    iconColor: "#f43f5e",
    iconBg: "rgba(244,63,94,0.10)",
  },
  {
    icon: FlaskConical,
    value: 25,
    suffix: "K+",
    label: "Tests Verified",
    sublabel: "Confidential checks completed",
    duration: 2000,
    accentFrom: "#8b5cf6",
    accentTo: "#6366f1",
    iconColor: "#8b5cf6",
    iconBg: "rgba(139,92,246,0.10)",
  },
  {
    icon: SmilePlus,
    value: 98,
    suffix: "%",
    label: "User Satisfaction",
    sublabel: "Feel more secure in relationships",
    duration: 1600,
    accentFrom: "#10b981",
    accentTo: "#14b8a6",
    iconColor: "#10b981",
    iconBg: "rgba(16,185,129,0.10)",
  },
  {
    icon: TrendingUp,
    value: 4500,
    suffix: "+",
    label: "Happy Users",
    sublabel: "Trusting SafeConnect monthly",
    duration: 2200,
    accentFrom: "#f59e0b",
    accentTo: "#f97316",
    iconColor: "#f59e0b",
    iconBg: "rgba(245,158,11,0.10)",
  },
];

/* ─────────── COUNT-UP HOOK ─────────── */
function useCountUp(target: number, duration: number, started: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started) return;
    setCount(0);
    let raf: number;
    const startTime = performance.now();
    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) raf = requestAnimationFrame(animate);
      else setCount(target);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [started, target, duration]);

  return count;
}

/* ─────────── STAT ITEM ─────────── */
function StatItem({
  stat,
  started,
}: {
  stat: (typeof stats)[0];
  started: boolean;
}) {
  const Icon = stat.icon;
  const count = useCountUp(stat.value, stat.duration, started);

  return (
    <div className="flex flex-col items-center text-center gap-3 flex-1 py-8 px-4 group">
      {/* Icon */}
      <div
        className="w-11 h-11 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
        style={{ background: stat.iconBg }}
      >
        <Icon className="size-5" style={{ color: stat.iconColor }} strokeWidth={1.8} />
      </div>

      {/* Count */}
      <div className="flex flex-col items-center gap-1.5">
        <span
          className="text-3xl md:text-4xl font-extrabold leading-none tabular-nums bg-clip-text text-transparent"
          style={{
            backgroundImage: `linear-gradient(135deg, ${stat.accentFrom} 0%, ${stat.accentTo} 100%)`,
          }}
        >
          {count.toLocaleString()}
          {stat.suffix}
        </span>
        <div
          className="h-[2.5px] w-8 rounded-full"
          style={{
            background: `linear-gradient(90deg, ${stat.accentFrom}, ${stat.accentTo})`,
          }}
        />
      </div>

      {/* Labels */}
      <div className="flex flex-col gap-0.5">
        <p className="text-foreground font-semibold text-[13.5px]">{stat.label}</p>
        <p className="text-muted-foreground text-[11.5px] leading-snug max-w-[150px] mx-auto">
          {stat.sublabel}
        </p>
      </div>
    </div>
  );
}

/* ─────────── SECTION ─────────── */
export default function StatsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-background overflow-hidden py-8 md:py-10"
    >
      {/* ── Red Ribbon — exact Wikipedia SVG as <img> ── */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <Image
          src="/images/red-ribbon.svg"
          alt=""
          width={340}
          height={340}
          aria-hidden="true"
          className="w-[260px] md:w-[340px] h-auto select-none opacity-40 dark:opacity-[0.10]"
        />
      </div>

      {/* Subtle radial glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 55% 55% at 50% 50%, rgba(244,63,94,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8">

        {/* Header */}
        <div className="flex flex-col items-center text-center gap-3 mb-10 md:mb-14">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-[11px] font-bold uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Live Stats
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground leading-[1.1]">
            Trusted by{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, #f43f5e 0%, #fb923c 60%, #fbbf24 100%)",
              }}
            >
              Thousands
            </span>
          </h2>

          <p className="max-w-md text-muted-foreground text-sm sm:text-base leading-relaxed">
            SafeConnect helps people make informed decisions about their sexual health.
          </p>
        </div>

        {/* Stats row */}
        <div className="flex flex-col sm:flex-row items-stretch divide-y sm:divide-y-0 sm:divide-x divide-border">
          {stats.map((stat, i) => (
            <StatItem key={i} stat={stat} started={started} />
          ))}
        </div>

      </div>
    </section>
  );
}
