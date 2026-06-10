"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import {
  Building2,
  FlaskConical,
  UserRound,
  Package,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

const centerTypes = [
  {
    id: "std-clinics",
    icon: Building2,
    title: "STD Clinics",
    subtitle: "Specialized & Confidential",
    description:
      "Browse our curated network of specialized STD clinics that provide discreet, judgment-free testing and expert counseling. Every facility is verified and committed to your privacy.",
    count: "1,200+",
    countLabel: "Verified Centers",
    image: "/images/std-clinic.png",
    features: ["100% Confidential", "Same-Day Results", "Expert Counseling", "Anonymous Testing"],
    glowRgb: "220,60,70",
    gradientFrom: "from-rose-500",
    gradientTo: "to-orange-500",
    badgeSolid: "bg-rose-500 text-white",
    checkColor: "text-rose-500",
    iconBg: "bg-rose-500/15",
    iconGlow: "shadow-rose-500/40",
    pillSolid: "bg-rose-500/12 text-rose-500 dark:text-rose-300",
    accentColor: "bg-gradient-to-r from-rose-500 to-orange-500",
    countGradient: "from-rose-500 to-orange-400",
  },
  {
    id: "diagnostic-labs",
    icon: FlaskConical,
    title: "Diagnostic Labs",
    subtitle: "Accurate & Certified",
    description:
      "Access state-of-the-art medical laboratories equipped with the latest diagnostic technology. Get precise, lab-certified STD test results with fast turnaround and complete data privacy.",
    count: "850+",
    countLabel: "Certified Labs",
    image: "/images/diagnostic-lab.png",
    features: ["Lab-Certified Results", "Fast Turnaround", "NABL Accredited", "Digital Reports"],
    glowRgb: "124,77,246",
    gradientFrom: "from-violet-500",
    gradientTo: "to-indigo-500",
    badgeSolid: "bg-violet-500 text-white",
    checkColor: "text-violet-500",
    iconBg: "bg-violet-500/15",
    iconGlow: "shadow-violet-500/40",
    pillSolid: "bg-violet-500/12 text-violet-600 dark:text-violet-300",
    accentColor: "bg-gradient-to-r from-violet-500 to-indigo-500",
    countGradient: "from-violet-500 to-indigo-400",
  },
  {
    id: "private-practitioners",
    icon: UserRound,
    title: "Private Practitioners",
    subtitle: "Discreet & Professional",
    description:
      "Connect with qualified private doctors who specialise in sexual health. Enjoy one-on-one discreet consultations, personalised treatment plans, and complete confidentiality at every step.",
    count: "2,400+",
    countLabel: "Registered Doctors",
    image: "/images/private-doctor.png",
    features: ["Private Consultation", "Personalised Care", "Verified Doctors", "Secure Records"],
    glowRgb: "5,170,120",
    gradientFrom: "from-emerald-500",
    gradientTo: "to-teal-500",
    badgeSolid: "bg-emerald-500 text-white",
    checkColor: "text-emerald-500",
    iconBg: "bg-emerald-500/15",
    iconGlow: "shadow-emerald-500/40",
    pillSolid: "bg-emerald-500/12 text-emerald-600 dark:text-emerald-300",
    accentColor: "bg-gradient-to-r from-emerald-500 to-teal-500",
    countGradient: "from-emerald-500 to-teal-400",
  },
  {
    id: "at-home-testing",
    icon: Package,
    title: "At-Home Testing",
    subtitle: "Discreet & Convenient",
    description:
      "Order a discreet home-testing kit and get lab-analysed results from the comfort of your home. No clinic visit required — just collect your sample and receive secure digital results.",
    count: "50+",
    countLabel: "Trusted Brands",
    image: "/images/home-testing.png",
    features: ["No Clinic Visit", "Discreet Packaging", "Lab Analysed", "Digital Results"],
    glowRgb: "230,140,10",
    gradientFrom: "from-amber-500",
    gradientTo: "to-orange-500",
    badgeSolid: "bg-amber-500 text-white",
    checkColor: "text-amber-500",
    iconBg: "bg-amber-500/15",
    iconGlow: "shadow-amber-500/40",
    pillSolid: "bg-amber-500/12 text-amber-600 dark:text-amber-300",
    accentColor: "bg-gradient-to-r from-amber-500 to-orange-500",
    countGradient: "from-amber-500 to-orange-400",
  },
];

export default function FindCentersByTypeSection() {
  return (
    <section className="relative w-full overflow-hidden bg-background pt-0">

      {/* ── Fade into bg-background at TOP ── */}
      <div className="absolute top-0 inset-x-0 h-32 pointer-events-none z-10"
        style={{ background: "linear-gradient(to bottom, var(--background) 0%, var(--background) 20%, transparent 100%)" }}
      />
      {/* ── Fade into bg-background at BOTTOM ── */}
      <div className="absolute bottom-0 inset-x-0 h-32 pointer-events-none z-10"
        style={{ background: "linear-gradient(to top, var(--background) 0%, var(--background) 20%, transparent 100%)" }}
      />

      {/* ── Section Header ── */}
      <div className="relative z-20 max-w-7xl mx-auto px-5 md:px-8 pt-8 md:pt-12 pb-6 md:pb-8">
        <div className="flex flex-col items-center text-center gap-2.5">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/12 text-primary text-[11px] font-bold uppercase tracking-widest">
            <ShieldCheck className="size-3" />
            Trusted Network
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground leading-[1.12]">
            Find Testing Centers{" "}
            <span className="bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent">
              By Type
            </span>
          </h2>

          <p className="max-w-lg text-muted-foreground text-sm sm:text-base leading-relaxed">
            Browse specialized STD testing facilities, diagnostic labs, and
            confidential health centers near you.
          </p>
        </div>
      </div>

      {/* ── Alternating Blocks ── */}
      <div className="relative z-20 max-w-7xl mx-auto px-5 md:px-8 pb-10 md:pb-16">
        <div className="flex flex-col gap-0">
          {centerTypes.map((center, index) => {
            const Icon = center.icon;
            const isEven = index % 2 === 0; // desktop: even → img left, odd → img right

            return (
              <div key={center.id} className="relative py-7 md:py-10">

                {/* Per-block glow — fades at edges naturally */}
                <div
                  className="pointer-events-none absolute inset-y-[-20%] inset-x-[-5%]"
                  style={{
                    background: `radial-gradient(ellipse 60% 70% at 50% 50%, rgba(${center.glowRgb}, 0.07) 0%, transparent 70%)`,
                  }}
                />

                {/* Thin colour-matched rule between rows */}
                {index !== 0 && (
                  <div
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px pointer-events-none"
                    style={{
                      background: `linear-gradient(to right, transparent, rgba(${center.glowRgb},0.18), transparent)`,
                    }}
                  />
                )}

                {/* ── Grid row ── */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 lg:gap-14 items-center">

                  {/* IMAGE — always order-1 on mobile, alternates on desktop */}
                  <div
                    className={`
                      order-1
                      ${isEven ? "lg:order-1" : "lg:order-2"}
                    `}
                  >
                    <div className="relative">
                      {/* Soft glow halo behind image */}
                      <div
                        className="absolute -inset-4 md:-inset-6 rounded-[32px] pointer-events-none"
                        style={{
                          background: `radial-gradient(ellipse at center, rgba(${center.glowRgb}, 0.15) 0%, transparent 65%)`,
                          filter: "blur(28px)",
                        }}
                      />
                      <img
                        src={center.image}
                        alt={center.title}
                        className="relative w-full aspect-[4/3] object-cover rounded-2xl"
                      />
                    </div>
                  </div>

                  {/* TEXT — always order-2 on mobile, alternates on desktop */}
                  <div
                    className={`
                      order-2 flex flex-col gap-3 md:gap-4
                      ${isEven ? "lg:order-2" : "lg:order-1"}
                    `}
                  >
                    {/* Accent line */}
                    <div className={`w-8 h-[3px] rounded-full ${center.accentColor}`} />

                    {/* Badge */}
                    <span
                      className={`self-start inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wide ${center.badgeSolid}`}
                    >
                      <Icon className="size-3" />
                      {center.subtitle}
                    </span>

                    {/* Title */}
                    <h3 className="text-2xl sm:text-3xl md:text-[2.25rem] font-extrabold text-foreground tracking-tight leading-tight">
                      {center.title}
                    </h3>

                    {/* Count */}
                    <div className="flex items-baseline gap-2">
                      <span
                        className={`text-3xl md:text-4xl font-black bg-gradient-to-r ${center.countGradient} bg-clip-text text-transparent leading-none`}
                      >
                        {center.count}
                      </span>
                      <span className="text-sm text-muted-foreground font-medium">
                        {center.countLabel}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                      {center.description}
                    </p>

                    {/* Features */}
                    <ul className="grid grid-cols-2 gap-x-3 gap-y-3">
                      {center.features.map((feat) => (
                        <li key={feat} className="flex items-center gap-2.5 text-xs md:text-sm text-foreground/85">
                          {/* Icon with colored bg + soft glow */}
                          <span
                            className={`flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full ${center.iconBg}`}
                          >
                            <CheckCircle2 className={`size-3.5 ${center.checkColor}`} />
                          </span>
                          {feat}
                        </li>
                      ))}
                    </ul>

                    {/* Pills */}
                    <div className="flex flex-wrap gap-2">
                      {["Anonymous", "Certified", "Secure"].map((tag) => (
                        <span
                          key={tag}
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-semibold ${center.pillSolid}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="pt-1">
                      <Button
                        size="lg"
                        className={`group/btn w-full sm:w-auto font-bold rounded-xl bg-gradient-to-r ${center.gradientFrom} ${center.gradientTo} text-white text-sm md:text-base px-7 hover:-translate-y-0.5 transition-all duration-200`}
                      >
                        Browse Centers
                        <ArrowRight className="size-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-200" />
                      </Button>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </div>

    </section>
  );
}
