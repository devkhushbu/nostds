"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Star,
  MapPin,
  ArrowUpRight,
  Heart,
  Share2,
  Camera,
  Flame,
  ArrowRight,
} from "lucide-react";
import { featuredCenters } from "../listings/_components/data";

/* ─────────────────────── STAR RATING ─────────────────────── */
function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <Star
          key={s}
          className={`size-3 ${
            rating >= s
              ? "fill-amber-400 text-amber-400"
              : rating >= s - 0.5
              ? "fill-amber-200 text-amber-400"
              : "text-neutral-200 dark:text-neutral-700"
          }`}
        />
      ))}
    </div>
  );
}

/* ─────────────────────── CARD ─────────────────────── */
function CenterCard({ center }: { center: (typeof featuredCenters)[0] }) {
  const [liked, setLiked] = useState(false);
  const [hoverBtn, setHoverBtn] = useState(false);

  return (
    <div
      className="
        group relative flex flex-col
        rounded-[22px] overflow-hidden
        bg-white dark:bg-neutral-900
        border border-neutral-100 dark:border-neutral-800
        shadow-[0_2px_20px_rgba(0,0,0,0.07)]
        hover:shadow-[0_12px_48px_rgba(0,0,0,0.13)]
        transition-all duration-300 hover:-translate-y-1.5
      "
    >
      {/* ══ IMAGE ══ */}
      <div className="relative h-[196px] overflow-hidden rounded-[18px] m-2.5 mb-0 flex-shrink-0">
        <Image
          src={center.image}
          alt={center.name}
          width={400}
          height={250}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/28 via-transparent to-black/32 rounded-[18px]" />

        {/* Top-left chips */}
        <div className="absolute top-3 left-3 flex items-center gap-1.5">
          <span className="px-2.5 py-[5px] rounded-full bg-white/92 dark:bg-neutral-900/90 backdrop-blur-sm text-[11px] font-semibold text-neutral-700 dark:text-neutral-200 shadow-sm leading-none">
            {center.tags[0]}
          </span>
          <span className={`px-2.5 py-[5px] rounded-full text-[11px] font-bold text-white shadow-sm leading-none ${center.accentTagBg}`}>
            {center.tags[1]}
          </span>
        </div>

        {/* Top-right: photo count */}
        <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-[5px] rounded-full bg-black/38 backdrop-blur-sm">
          <Camera className="size-3 text-white" />
          <span className="text-white text-[11px] font-semibold leading-none">{center.photoCount}</span>
        </div>

        {/* Carousel dots */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1">
          <span className={`block w-[18px] h-[5px] rounded-full ${center.accentDot}`} />
          <span className="block w-[5px] h-[5px] rounded-full bg-white/50" />
          <span className="block w-[5px] h-[5px] rounded-full bg-white/50" />
        </div>
      </div>

      {/* ══ BODY ══ */}
      <div className="flex flex-col px-4 pt-[18px] pb-4 gap-0">

        {/* ── Title ── */}
        <h3 className="text-[15px] font-bold text-neutral-900 dark:text-white leading-snug">
          {center.name}
        </h3>

        {/* ── Description ── */}
        <p className="mt-[6px] text-[12.5px] text-neutral-500 dark:text-neutral-400 leading-[1.55] line-clamp-2">
          {center.description}
        </p>

        {/* ── Location ── */}
        <div className="mt-[10px] flex items-center gap-[5px]">
          <MapPin className={`size-[13px] flex-shrink-0 ${center.accentText}`} />
          <span className={`text-[11px] font-bold tracking-[0.06em] ${center.accentText}`}>
            {center.area}
          </span>
        </div>

        {/* ── Divider ── */}
        <div className="mt-[16px] mb-[14px] h-px bg-neutral-100 dark:bg-neutral-800" />

        {/* ── Stats row — 3 columns with rounded pill bg ── */}
        <div className="grid grid-cols-3 gap-2">
          {center.stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div key={i} className="flex flex-col items-center gap-[7px]">
                {/* Pill container */}
                <div
                  className="w-full flex items-center justify-center rounded-xl py-2.5"
                  style={{ backgroundColor: center.accentIconBg }}
                >
                  <Icon
                    className="size-[18px]"
                    style={{ color: center.accentIconColor }}
                    strokeWidth={1.8}
                  />
                </div>
                <span className="text-[10.5px] font-bold tracking-[0.04em] text-neutral-500 dark:text-neutral-400 text-center">
                  {stat.label}
                </span>
              </div>
            );
          })}
        </div>

        {/* ── Divider ── */}
        <div className="mt-[14px] mb-[14px] h-px bg-neutral-100 dark:bg-neutral-800" />

        {/* ── Doctor / agent row ── */}
        <div className="flex items-center justify-between">
          {/* Avatar + name + stars */}
          <div className="flex items-center gap-2.5">
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: center.accentAvatarBg }}
            >
              <span
                className="text-[11px] font-black"
                style={{ color: center.accentAvatarFg }}
              >
                {center.doctor.avatar}
              </span>
            </div>
            <div className="flex flex-col gap-[3px]">
              <span className="text-[12.5px] font-bold text-neutral-800 dark:text-neutral-100 leading-none">
                {center.doctor.name}
              </span>
              <div className="flex items-center gap-1">
                <StarRating rating={center.rating} />
                <span className="text-[10px] text-neutral-400 font-medium">
                  ({center.reviews})
                </span>
              </div>
            </div>
          </div>

          {/* Action icons */}
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => setLiked((v) => !v)}
              className="w-8 h-8 rounded-full border border-neutral-200 dark:border-neutral-700 flex items-center justify-center hover:border-rose-300 hover:bg-rose-50 dark:hover:bg-rose-950/20 transition-all duration-200"
            >
              <Heart
                className={`size-[14px] transition-colors duration-200 ${
                  liked ? "fill-rose-500 text-rose-500" : "text-neutral-400"
                }`}
              />
            </button>
            <button className="w-8 h-8 rounded-full border border-neutral-200 dark:border-neutral-700 flex items-center justify-center hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-all duration-200">
              <Share2 className="size-[14px] text-neutral-400" />
            </button>
          </div>
        </div>

        {/* ── Full-width pill CTA ── */}
        <button
          onMouseEnter={() => setHoverBtn(true)}
          onMouseLeave={() => setHoverBtn(false)}
          className="
            mt-[16px] w-full flex items-center justify-center gap-2
            rounded-[50px] py-[13px]
            text-white font-bold text-[13.5px] tracking-wide
            transition-all duration-200 hover:-translate-y-[1px]
            relative overflow-hidden
          "
          style={{
            backgroundColor: hoverBtn ? center.accentBtnHover : center.accentBtn,
            boxShadow: `0 5px 20px ${center.accentShadow}`,
          }}
        >
          View Details
          {/* Arrow circle — same as reference */}
          <span
            className="absolute right-3 flex items-center justify-center w-7 h-7 rounded-full bg-white/20"
          >
            <ArrowUpRight className="size-[14px] text-white" />
          </span>
        </button>

      </div>
    </div>
  );
}

/* ─────────────────────── SECTION ─────────────────────── */
export default function FeaturedCentersSection() {
  return (
    <section className="relative w-full overflow-hidden bg-neutral-50/80 dark:bg-neutral-950/50 py-0">

      {/* Fades */}
      <div
        className="absolute top-0 inset-x-0 h-20 pointer-events-none z-10"
        style={{ background: "linear-gradient(to bottom, var(--background), transparent)" }}
      />
      <div
        className="absolute bottom-0 inset-x-0 h-20 pointer-events-none z-10"
        style={{ background: "linear-gradient(to top, var(--background), transparent)" }}
      />

      <div className="relative z-20 max-w-7xl mx-auto px-5 md:px-8 pt-14 md:pt-20 pb-14 md:pb-20">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-3 mb-10 md:mb-14">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/12 text-primary text-[11px] font-bold uppercase tracking-widest">
            <Flame className="size-3" />
            Featured Centers
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground leading-[1.12]">
            Top-Rated{" "}
            <span className="bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent">
              Diagnostic Centers
            </span>
          </h2>

          <p className="max-w-lg text-muted-foreground text-sm sm:text-base leading-relaxed">
            Handpicked, verified diagnostic centers across India — offering
            confidential STD testing with certified accuracy.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {featuredCenters.map((center, idx) => (
            <div key={center.id} className={idx >= 3 ? "hidden lg:block" : "block"}>
              <CenterCard center={center} />
            </div>
          ))}
        </div>

        {/* View All */}
        <div className="flex justify-center mt-10 md:mt-12">
          <button className="group inline-flex items-center gap-2 px-8 py-3 rounded-[50px] border-2 border-primary/30 text-primary font-bold text-sm hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-200">
            View All Centers
            <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform duration-200" />
          </button>
        </div>
      </div>
    </section>
  );
}
