"use client";

import React from "react";
import { ArrowRight, Building2, Info, ShieldCheck, Users, TrendingUp } from "lucide-react";

import Image from "next/image";

const trustStats = [
  { icon: Users,      value: "50,000+", label: "Monthly Users"     },
  { icon: Building2,  value: "4,500+",  label: "Listed Centers"    },
  { icon: TrendingUp, value: "3×",      label: "More Bookings"     },
  { icon: ShieldCheck,value: "100%",    label: "Verified Listings" },
];

export default function CtaBannerSection() {
  return (
    <section className="relative w-full overflow-hidden py-0">



      {/* ── Background image ── */}
      <Image
        src="/images/cta-background.png"
        alt="CTA Background"
        fill
        sizes="100vw"
        className="object-cover"
      />

      {/* ── Light scrim for text readability ── */}
      <div className="absolute inset-0 bg-black/30" />

      {/* ── Content ── */}
      <div className="relative z-10 max-w-6xl mx-auto px-5 md:px-8 pt-8 pb-10 md:pt-10 md:pb-12 flex flex-col items-center text-center gap-6">

        {/* Eyebrow pill */}
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 text-white text-[11px] font-bold uppercase tracking-widest">
          <Building2 className="size-3 text-primary" />
          For Testing Centers
        </span>

        {/* Headline */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.08] max-w-3xl">
          Are You a{" "}
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage: "linear-gradient(135deg, #f87171 0%, #fb923c 50%, #fbbf24 100%)",
            }}
          >
            Testing Center?
          </span>
        </h2>

        {/* Description */}
        <p className="max-w-xl text-neutral-300 text-base sm:text-lg leading-relaxed">
          List your facility on{" "}
          <span className="text-white font-semibold">SafeConnect</span> and reach
          thousands of users seeking confidential STD testing services — completely free to get started.
        </p>

        {/* ── Stat pills row ── */}
        <div className="flex flex-wrap items-center justify-center gap-3 mt-1">
          {trustStats.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.label}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/8 backdrop-blur-sm border border-white/12"
              >
                <Icon className="size-3.5 text-primary flex-shrink-0" />
                <span className="text-white font-black text-sm">{s.value}</span>
                <span className="text-neutral-400 text-xs">{s.label}</span>
              </div>
            );
          })}
        </div>

        {/* ── CTA Buttons ── */}
        <div className="flex flex-col sm:flex-row items-center gap-3 mt-2">

          {/* Primary */}
          <button
            className="
              group relative inline-flex items-center gap-2.5
              px-8 py-[14px] rounded-[50px]
              text-white font-bold text-[15px] tracking-wide
              overflow-hidden transition-all duration-300
              hover:-translate-y-0.5
            "
            style={{
              background: "linear-gradient(135deg, #e11d48 0%, #f97316 100%)",
              boxShadow: "0 6px 28px rgba(225,29,72,0.45)",
            }}
          >
            {/* Shine sweep */}
            <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: "linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.18) 50%, transparent 70%)",
              }}
            />
            <Building2 className="size-[18px] relative z-10" />
            <span className="relative z-10">Add Your Listing</span>
            <span className="relative z-10 flex items-center justify-center w-6 h-6 rounded-full bg-white/20">
              <ArrowRight className="size-3.5 group-hover:translate-x-0.5 transition-transform duration-200" />
            </span>
          </button>

          {/* Secondary */}
          <button
            className="
              group inline-flex items-center gap-2
              px-8 py-[13px] rounded-[50px]
              border border-white/25 text-white font-bold text-[15px]
              bg-white/8 backdrop-blur-sm
              hover:bg-white/14 hover:border-white/40 hover:-translate-y-0.5
              transition-all duration-300
            "
          >
            <Info className="size-[17px] text-neutral-300 group-hover:text-white transition-colors duration-200" />
            Learn More
          </button>
        </div>

        {/* Fine-print trust note */}
        <p className="text-neutral-500 text-[12px] mt-1">
          <ShieldCheck className="inline size-3.5 mr-1 text-emerald-400 align-[-2px]" />
          Free listing · No credit card required · Verified within 24 hrs
        </p>

      </div>
    </section>
  );
}
