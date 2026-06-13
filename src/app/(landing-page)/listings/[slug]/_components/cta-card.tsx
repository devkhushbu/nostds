"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Heart, Phone, CalendarRange, CheckCircle2 } from "lucide-react";
import { CenterItem } from "../../_components/data";

interface CTACardProps {
  details: CenterItem;
  liked: boolean;
  setLiked: (liked: boolean) => void;
  openBookingModal: () => void;
}

export function CTACard({ details, liked, setLiked, openBookingModal }: CTACardProps) {
  return (
    <div className="bg-card border border-border rounded-[28px] p-6 flex flex-col gap-6">
      <div className="flex justify-between items-start">
        <div>
          <span className="text-[10px] font-extrabold text-muted-foreground uppercase tracking-wider block">Full Panel Testing</span>
          <div className="flex items-baseline gap-1.5 mt-1">
            <span className="text-3xl font-black text-foreground">₹{details.startingPrice}</span>
            <span className="text-xs text-muted-foreground font-semibold">starting from</span>
          </div>
        </div>
        
        {/* Save Heart action */}
        <button
          onClick={() => setLiked(!liked)}
          className="w-11 h-11 rounded-2xl border border-border flex items-center justify-center hover:bg-rose-50 dark:hover:bg-rose-950/20 hover:border-rose-300 transition-all duration-200 cursor-pointer"
        >
          <Heart className={`size-5 transition-colors duration-300 ${liked ? "fill-rose-500 text-rose-500" : "text-muted-foreground"}`} />
        </button>
      </div>

      {/* Divider */}
      <div className="h-px bg-border" />

      {/* Lab / Doctor details */}
      <div className="flex items-center gap-3 bg-muted/30 p-3 rounded-2xl border border-border/30">
        <div className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-black" style={{ backgroundColor: details.accentAvatarBg, color: details.accentAvatarFg }}>
          {details.doctor.avatar}
        </div>
        <div>
          <span className="text-[10px] font-bold text-muted-foreground block leading-none mb-1">SUPERVISING PATHOLOGIST</span>
          <span className="text-xs font-black text-foreground">{details.doctor.name}</span>
        </div>
      </div>

      {/* Big CTA buttons (Flat, no shadows) */}
      <div className="flex flex-col gap-2.5">
        <Button
          onClick={openBookingModal}
          className="w-full py-6 font-extrabold tracking-wide text-xs rounded-full transition-transform hover:-translate-y-0.5 cursor-pointer uppercase"
          style={{
            backgroundColor: details.accentBtn,
          }}
        >
          <CalendarRange className="size-4 mr-1.5" />
          Book Appointment Now
        </Button>

        <Button
          variant="outline"
          onClick={() => window.open(`tel:${details.id}`)}
          className="w-full py-6 font-extrabold tracking-wide text-xs rounded-full border border-emerald-200 hover:border-emerald-300 bg-emerald-50/50 hover:bg-emerald-50 text-emerald-700 dark:bg-emerald-950/20 dark:text-emerald-400 dark:border-emerald-800/40 hover:dark:bg-emerald-950/30 transition-transform hover:-translate-y-0.5 cursor-pointer uppercase"
        >
          <Phone className="size-4 mr-1.5" />
          Call Labs Now
        </Button>
      </div>

      {/* Assurance list */}
      <div className="flex flex-col gap-2.5 text-xs text-muted-foreground mt-1">
        <div className="flex items-center gap-2">
          <CheckCircle2 className="size-4 text-emerald-500 shrink-0" />
          <span>100% Confidential Private Reporting</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle2 className="size-4 text-emerald-500 shrink-0" />
          <span>Free Doctor Consultation Support</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle2 className="size-4 text-emerald-500 shrink-0" />
          <span>NABL Quality Accredited Standards</span>
        </div>
      </div>
    </div>
  );
}
