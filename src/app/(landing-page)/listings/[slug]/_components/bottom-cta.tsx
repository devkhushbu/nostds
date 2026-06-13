"use client";

import React from "react";
import Image from "next/image";
import { Activity } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BottomCTAProps {
  accentBtn: string;
  openBookingModal: () => void;
}

export function BottomCTA({ accentBtn, openBookingModal }: BottomCTAProps) {
  return (
    <div className="relative overflow-hidden border border-white/10 rounded-[28px] p-8 sm:p-10 text-center flex flex-col items-center justify-center min-h-[260px] w-full mt-6">
      {/* Background Image with Priority loading */}
      <Image
        src="/images/cta-background.png"
        alt="CTA Background Image"
        fill
        priority
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover z-0 pointer-events-none"
      />
      {/* Balanced Overlay to make background details visible while keeping text legible */}
      <div className="absolute inset-0 bg-black/55 z-0 pointer-events-none" />

      {/* Content wrapper */}
      <div className="relative z-10 flex flex-col items-center gap-4.5 max-w-lg mx-auto">
        <div className="w-12 h-12 rounded-2xl bg-white/10 text-white flex items-center justify-center border border-white/20 backdrop-blur-xs">
          <Activity className="size-6 text-white animate-pulse" />
        </div>
        <div className="space-y-2">
          <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
            Take Control of Your Health Today
          </h3>
          <p className="text-xs sm:text-sm text-neutral-200 font-medium leading-relaxed max-w-md mx-auto">
            Book your confidential test at City Health Diagnostic Center — quick, private, and reliable.
          </p>
        </div>
        <Button
          onClick={openBookingModal}
          className="mt-2 px-8 py-5 text-xs font-extrabold tracking-wide rounded-full cursor-pointer uppercase animate-pulse transition-all duration-150 active:scale-[0.98]"
          style={{ backgroundColor: accentBtn }}
        >
          Book Appointment Now
        </Button>
      </div>
    </div>
  );
}
