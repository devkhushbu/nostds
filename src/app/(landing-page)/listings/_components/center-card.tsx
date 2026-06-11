"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  LucideIcon,
  Star,
  MapPin,
  ArrowUpRight,
  Heart,
  Share2,
  Camera,
  Phone,
} from "lucide-react";

export interface Center {
  id: string;
  name: string;
  area: string;
  locationState: string;
  rating: number;
  reviews: number;
  image: string;
  photoCount: number;
  description: string;
  tags: string[];
  categories: string[];
  stats: { icon: LucideIcon; label: string }[];
  doctor: { name: string; avatar: string };
  accentTagBg: string;
  accentText: string;
  accentIconBg: string;
  accentIconColor: string;
  accentAvatarBg: string;
  accentAvatarFg: string;
  accentBtn: string;
  accentBtnHover: string;
  accentDot: string;
  accentShadow: string;
}

/* ─────────────────────── STAR RATING ─────────────────────── */
export function StarRating({ rating }: { rating: number }) {
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

/* ─────────────────────── GRID CARD (Vertical) ─────────────────────── */
export function CenterCard({ center }: { center: Center }) {
  const [liked, setLiked] = useState(false);
  const [hoverBtn, setHoverBtn] = useState(false);

  return (
    <div
      className="
        group relative flex flex-col h-full
        rounded-[22px] overflow-hidden
        bg-card
        border border-border
        shadow-[0_2px_20px_rgba(0,0,0,0.07)]
        hover:shadow-[0_12px_48px_rgba(0,0,0,0.13)]
        transition-all duration-300 hover:-translate-y-1.5
      "
    >
      {/* IMAGE */}
      <div className="relative h-[196px] overflow-hidden rounded-[18px] m-2.5 mb-0 flex-shrink-0">
        <Image
          src={center.image}
          alt={center.name}
          width={400}
          height={250}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30 rounded-[18px]" />

        {/* Top-left chips */}
        <div className="absolute top-3 left-3 flex items-center gap-1.5">
          <span className="px-2.5 py-[5px] rounded-full bg-background/95 dark:bg-card/95 backdrop-blur-sm text-[11px] font-semibold text-foreground shadow-sm leading-none">
            {center.tags[0]}
          </span>
          <span
            className={`px-2.5 py-[5px] rounded-full text-[11px] font-bold text-white shadow-sm leading-none ${center.accentTagBg}`}
          >
            {center.tags[1]}
          </span>
        </div>

        {/* Top-right photo count */}
        <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-[5px] rounded-full bg-black/40 backdrop-blur-sm">
          <Camera className="size-3 text-white" />
          <span className="text-white text-[11px] font-semibold leading-none">
            {center.photoCount}
          </span>
        </div>

        {/* Carousel dots */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1">
          <span className={`block w-[18px] h-[5px] rounded-full ${center.accentDot}`} />
          <span className="block w-[5px] h-[5px] rounded-full bg-white/50" />
          <span className="block w-[5px] h-[5px] rounded-full bg-white/50" />
        </div>
      </div>

      {/* BODY */}
      <div className="flex flex-col px-4 pt-[18px] pb-4 flex-1">
        {/* Title */}
        <h3 className="text-[15px] font-bold text-foreground leading-snug">
          {center.name}
        </h3>

        {/* Description */}
        <p className="mt-[6px] text-[12.5px] text-muted-foreground leading-[1.55] line-clamp-2">
          {center.description}
        </p>

        {/* Location */}
        <div className="mt-[10px] flex items-center gap-[5px] mt-auto">
          <MapPin className={`size-[13px] flex-shrink-0 ${center.accentText}`} />
          <span className={`text-[11px] font-bold tracking-[0.06em] uppercase ${center.accentText}`}>
            {center.area}
          </span>
        </div>

        {/* Divider */}
        <div className="mt-[16px] mb-[14px] h-px bg-border" />

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-2">
          {center.stats.map((stat, i) => {
            const Icon = stat.icon;
            const isCall = Icon === Phone;
            const bgCol = isCall ? "rgba(16,185,129,0.1)" : center.accentIconBg;
            const iconCol = isCall ? "#10b981" : center.accentIconColor;
            return (
              <div key={i} className="flex flex-col items-center gap-[7px]">
                <div
                  className="w-full flex items-center justify-center rounded-xl py-2.5"
                  style={{ backgroundColor: bgCol }}
                >
                  <Icon
                    className="size-[18px]"
                    style={{ color: iconCol }}
                    strokeWidth={1.8}
                  />
                </div>
                <span className="text-[10.5px] font-bold tracking-[0.04em] text-muted-foreground text-center">
                  {stat.label}
                </span>
              </div>
            );
          })}
        </div>

        {/* Divider */}
        <div className="mt-[14px] mb-[14px] h-px bg-border" />

        {/* Doctor row */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: center.accentAvatarBg }}
            >
              <span className="text-[11px] font-black" style={{ color: center.accentAvatarFg }}>
                {center.doctor.avatar}
              </span>
            </div>
            <div className="flex flex-col gap-[3px]">
              <span className="text-[12.5px] font-bold text-foreground leading-none">
                {center.doctor.name}
              </span>
              <div className="flex items-center gap-1">
                <StarRating rating={center.rating} />
                <span className="text-[10px] text-muted-foreground font-medium">
                  ({center.reviews})
                </span>
              </div>
            </div>
          </div>

          {/* Action icons */}
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => setLiked((v) => !v)}
              className="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:border-rose-300 hover:bg-rose-50 dark:hover:bg-rose-950/20 transition-all duration-200"
            >
              <Heart
                className={`size-[14px] transition-colors duration-200 ${
                  liked ? "fill-rose-500 text-rose-500" : "text-muted-foreground"
                }`}
              />
            </button>
            <button className="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-all duration-200">
              <Share2 className="size-[14px] text-muted-foreground" />
            </button>
          </div>
        </div>

        {/* View Details & Call Now CTA Buttons side-by-side in a row */}
        <div className="flex gap-2 mt-4 flex-shrink-0">
          <button
            onClick={() => window.open(`tel:${center.id}`)}
            className="
              flex-1 flex items-center justify-center gap-1.5
              bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs tracking-wide
              rounded-full py-2.5 hover:-translate-y-[1px] transition-all duration-200
              shadow-md shadow-emerald-600/10 hover:shadow-emerald-600/20 cursor-pointer
            "
          >
            <Phone className="size-3.5" />
            Call Now
          </button>
          
          <button
            onMouseEnter={() => setHoverBtn(true)}
            onMouseLeave={() => setHoverBtn(false)}
            className="
              flex-1 flex items-center justify-center gap-1
              text-white font-bold text-xs tracking-wide
              rounded-full py-2.5 hover:-translate-y-[1px] transition-all duration-200 cursor-pointer
            "
            style={{
              backgroundColor: hoverBtn ? center.accentBtnHover : center.accentBtn,
              boxShadow: `0 4px 15px ${center.accentShadow}`,
            }}
          >
            Details
            <ArrowUpRight className="size-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────── LIST CARD (Horizontal) ─────────────────────── */
export function CenterListCard({ center }: { center: Center }) {
  const [liked, setLiked] = useState(false);
  const [hoverBtn, setHoverBtn] = useState(false);

  return (
    <div
      className="
        group relative flex flex-col md:flex-row w-full
        rounded-[24px] overflow-hidden
        bg-card
        border border-border
        shadow-[0_2px_20px_rgba(0,0,0,0.06)]
        hover:shadow-[0_12px_40px_rgba(0,0,0,0.11)]
        transition-all duration-300 hover:-translate-y-1
      "
    >
      {/* LEFT SIDE: IMAGE (Responsive height/width) */}
      <div className="relative w-full md:w-[260px] lg:w-[300px] h-[200px] md:h-auto overflow-hidden m-2.5 rounded-[18px] flex-shrink-0">
        <Image
          src={center.image}
          alt={center.name}
          width={400}
          height={250}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-black/20" />

        {/* Top-left chips inside image */}
        <div className="absolute top-3 left-3 flex items-center gap-1.5">
          <span className="px-2.5 py-[5px] rounded-full bg-background/95 dark:bg-card/95 backdrop-blur-sm text-[11px] font-semibold text-foreground shadow-sm leading-none">
            {center.tags[0]}
          </span>
          <span
            className={`px-2.5 py-[5px] rounded-full text-[11px] font-bold text-white shadow-sm leading-none ${center.accentTagBg}`}
          >
            {center.tags[1]}
          </span>
        </div>

        {/* Top-right: photo count */}
        <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-[5px] rounded-full bg-black/40 backdrop-blur-sm">
          <Camera className="size-3 text-white" />
          <span className="text-white text-[11px] font-semibold leading-none">
            {center.photoCount}
          </span>
        </div>
      </div>

      {/* RIGHT SIDE: CONTENT DETAILS */}
      <div className="flex flex-col flex-1 p-6 justify-between">
        <div>
          {/* Header row: Title + Rating */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <h3 className="text-[17px] font-extrabold text-foreground leading-snug">
              {center.name}
            </h3>

            <div className="flex items-center gap-1 flex-shrink-0">
              <StarRating rating={center.rating} />
              <span className="text-xs text-muted-foreground font-medium">
                ({center.reviews} reviews)
              </span>
            </div>
          </div>

          {/* Description */}
          <p className="mt-2 text-[13px] text-muted-foreground leading-relaxed max-w-2xl">
            {center.description}
          </p>

          {/* Location row */}
          <div className="mt-3 flex items-center gap-[5px]">
            <MapPin className={`size-[14px] flex-shrink-0 ${center.accentText}`} />
            <span className={`text-[11px] font-bold tracking-[0.06em] uppercase ${center.accentText}`}>
              {center.area}
            </span>
          </div>

          {/* Stats row - flat horizontal layout on list card */}
          <div className="flex flex-wrap gap-4 mt-5 mb-1">
            {center.stats.map((stat, i) => {
              const Icon = stat.icon;
              const isCall = Icon === Phone;
              const bgCol = isCall ? "rgba(16,185,129,0.1)" : `${center.accentIconBg}50`;
              const iconCol = isCall ? "#10b981" : center.accentIconColor;
              return (
                <div
                  key={i}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-xl border border-border"
                  style={{ backgroundColor: bgCol }}
                >
                  <Icon
                    className="size-[15px]"
                    style={{ color: iconCol }}
                    strokeWidth={2}
                  />
                  <span className="text-[11px] font-bold tracking-wide text-foreground">
                    {stat.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Divider */}
        <div className="mt-6 mb-4 h-px bg-border" />

        {/* Footer row: Doctor Avatar + Actions */}
        <div className="flex flex-col sm:flex-row gap-4 sm:items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: center.accentAvatarBg }}
            >
              <span className="text-[11px] font-black" style={{ color: center.accentAvatarFg }}>
                {center.doctor.avatar}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-[13px] font-bold text-foreground leading-none">
                {center.doctor.name}
              </span>
              <span className="text-[11px] text-muted-foreground mt-0.5">
                Lab Consultant & Specialist
              </span>
            </div>
          </div>

          {/* Actions Column */}
          <div className="flex items-center gap-3">
            {/* Heart and Share */}
            <div className="flex gap-2">
              <button
                onClick={() => setLiked((v) => !v)}
                className="w-9 h-9 rounded-full border border-border flex items-center justify-center hover:border-rose-300 hover:bg-rose-50 dark:hover:bg-rose-950/20 transition-all duration-200"
              >
                <Heart
                  className={`size-[15px] transition-colors duration-200 ${
                    liked ? "fill-rose-500 text-rose-500" : "text-muted-foreground"
                  }`}
                />
              </button>
              <button className="w-9 h-9 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-all duration-200">
                <Share2 className="size-[15px] text-muted-foreground" />
              </button>
            </div>

            {/* Call Now and View Details side-by-side in a row */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => window.open(`tel:${center.id}`)}
                className="
                  flex items-center justify-center gap-1.5
                  bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs tracking-wide
                  rounded-full py-2.5 px-4 hover:-translate-y-[1px] transition-all duration-200
                  shadow-md shadow-emerald-600/10 hover:shadow-emerald-600/20 cursor-pointer
                "
              >
                <Phone className="size-3.5" />
                Call Now
              </button>

              <button
                onMouseEnter={() => setHoverBtn(true)}
                onMouseLeave={() => setHoverBtn(false)}
                className="
                  flex items-center justify-center gap-1.5
                  text-white font-bold text-xs tracking-wide
                  rounded-full py-2.5 px-4 hover:-translate-y-[1px] transition-all duration-200 cursor-pointer
                  min-w-[120px]
                "
                style={{
                  backgroundColor: hoverBtn ? center.accentBtnHover : center.accentBtn,
                  boxShadow: `0 4px 15px ${center.accentShadow}`,
                }}
              >
                View Details
                <ArrowUpRight className="size-[13px] text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
