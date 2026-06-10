"use client";

import React from "react";
import {
  FlaskConical,
  CloudUpload,
  BadgeCheck,
  Share2,
  Sparkles,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: FlaskConical,
    title: "Get Tested",
    description:
      "Visit any listed diagnostic center or clinic for a comprehensive STD checkup at your convenience.",
    glowRgb: "220,60,70",
    gradientFrom: "from-rose-500",
    gradientTo: "to-orange-400",
    iconBg: "bg-rose-500/10",
    iconColor: "text-rose-500",
    numGradient: "from-rose-500 to-orange-400",
  },
  {
    number: "02",
    icon: CloudUpload,
    title: "Digital Sync",
    description:
      "Lab uploads your results directly to your encrypted profile — secure, instant, and tamper-proof.",
    glowRgb: "139,92,246",
    gradientFrom: "from-violet-500",
    gradientTo: "to-indigo-400",
    iconBg: "bg-violet-500/10",
    iconColor: "text-violet-500",
    numGradient: "from-violet-500 to-indigo-400",
  },
  {
    number: "03",
    icon: BadgeCheck,
    title: "Get Verified",
    description:
      'Receive a unique "Clean Check" ID or scannable QR code confirming your verified health status.',
    glowRgb: "16,185,129",
    gradientFrom: "from-emerald-500",
    gradientTo: "to-teal-400",
    iconBg: "bg-emerald-500/10",
    iconColor: "text-emerald-500",
    numGradient: "from-emerald-500 to-teal-400",
  },
  {
    number: "04",
    icon: Share2,
    title: "Share Privately",
    description:
      "Share your verified status on dating or matrimonial platforms privately via our secure API.",
    glowRgb: "59,130,246",
    gradientFrom: "from-blue-500",
    gradientTo: "to-cyan-400",
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-500",
    numGradient: "from-blue-500 to-cyan-400",
  },
];

export default function HowItWorksSection() {
  return (
    <section className="relative w-full overflow-hidden bg-background py-14 md:py-24">

      {/* Top & bottom bg fade */}
      <div
        className="pointer-events-none absolute top-0 inset-x-0 h-28 z-10"
        style={{ background: "linear-gradient(to bottom, var(--background) 0%, var(--background) 15%, transparent 100%)" }}
      />
      <div
        className="pointer-events-none absolute bottom-0 inset-x-0 h-28 z-10"
        style={{ background: "linear-gradient(to top, var(--background) 0%, var(--background) 15%, transparent 100%)" }}
      />

      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 50%, rgba(220,60,70,0.05) 0%, transparent 65%)",
        }}
      />

      <div className="relative z-20 max-w-6xl mx-auto px-5 md:px-8">

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-10 md:mb-16 gap-2.5">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-primary/12 text-primary text-[11px] font-bold uppercase tracking-widest">
            <Sparkles className="size-3" />
            Simple Process
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground leading-[1.1]">
            How It{" "}
            <span className="bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent">
              Works
            </span>
          </h2>
          <p className="max-w-sm md:max-w-md text-muted-foreground text-sm md:text-base leading-relaxed">
            Simple steps to verified safety — fast, private, and trusted.
          </p>
        </div>

        {/* ── MOBILE: Vertical timeline ── */}
        <div className="flex flex-col gap-0 lg:hidden">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isLast = index === steps.length - 1;

            return (
              <div key={step.number} className="relative flex gap-4">

                {/* Left column: dot + line */}
                <div className="flex flex-col items-center flex-shrink-0">
                  {/* Icon circle */}
                  <div className="relative">
                    <div
                      className="absolute inset-0 rounded-2xl blur-xl"
                      style={{ background: `rgba(${step.glowRgb},0.25)` }}
                    />
                    <div className={`relative z-10 w-12 h-12 rounded-2xl ${step.iconBg} flex items-center justify-center`}>
                      <Icon className={`size-5 ${step.iconColor}`} />
                    </div>
                  </div>

                  {/* Connector line */}
                  {!isLast && (
                    <div
                      className="w-px flex-1 mt-2 mb-0 min-h-[32px]"
                      style={{
                        background: `linear-gradient(to bottom, rgba(${step.glowRgb},0.35), rgba(${steps[index + 1].glowRgb},0.15))`,
                      }}
                    />
                  )}
                </div>

                {/* Right column: content */}
                <div className={`flex flex-col gap-1 pt-2.5 ${isLast ? "pb-0" : "pb-7"}`}>
                  {/* Step number */}
                  <span
                    className={`text-[10px] font-black uppercase tracking-[0.15em] bg-gradient-to-r ${step.numGradient} bg-clip-text text-transparent`}
                  >
                    Step {step.number}
                  </span>
                  <h3 className="text-base font-bold text-foreground tracking-tight leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed pr-2">
                    {step.description}
                  </p>
                  <div
                    className={`w-6 h-[2px] rounded-full bg-gradient-to-r ${step.gradientFrom} ${step.gradientTo} mt-1`}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* ── DESKTOP: 4-column horizontal ── */}
        <div className="hidden lg:block relative">

          {/* Horizontal connecting line */}
          <div className="absolute top-[26px] left-[calc(12.5%)] right-[calc(12.5%)] h-px z-0">
            <div
              className="w-full h-full"
              style={{
                background:
                  "linear-gradient(to right, rgba(220,60,70,0.35), rgba(139,92,246,0.35), rgba(16,185,129,0.35), rgba(59,130,246,0.35))",
              }}
            />
            {/* Dashed shimmer overlay */}
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(to right, transparent 0, transparent 6px, rgba(255,255,255,0.06) 6px, rgba(255,255,255,0.06) 12px)",
              }}
            />
          </div>

          <div className="grid grid-cols-4 gap-6 xl:gap-10">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.number} className="relative flex flex-col items-center text-center gap-4">

                  {/* Icon circle */}
                  <div className="relative z-10">
                    <div
                      className="absolute inset-0 rounded-2xl blur-xl"
                      style={{ background: `rgba(${step.glowRgb}, 0.28)` }}
                    />
                    <div
                      className={`relative z-10 w-14 h-14 rounded-2xl ${step.iconBg} flex items-center justify-center`}
                    >
                      <Icon className={`size-6 ${step.iconColor}`} />
                    </div>
                  </div>

                  {/* Step number */}
                  <span
                    className={`text-[10px] font-black uppercase tracking-[0.18em] bg-gradient-to-r ${step.numGradient} bg-clip-text text-transparent`}
                  >
                    Step {step.number}
                  </span>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-foreground tracking-tight leading-tight -mt-2">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed -mt-1">
                    {step.description}
                  </p>

                  {/* Accent line */}
                  <div
                    className={`w-8 h-[2px] rounded-full bg-gradient-to-r ${step.gradientFrom} ${step.gradientTo}`}
                  />
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
