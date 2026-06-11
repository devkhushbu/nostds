"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { ShieldCheck, ArrowRight } from "lucide-react";

export function SidebarCta() {
  return (
    <div className="relative w-full overflow-hidden rounded-3xl border border-neutral-100 dark:border-neutral-800/80 bg-neutral-900 shadow-xl shadow-primary/5 min-h-[340px] flex flex-col justify-between p-6 text-white group">
      {/* Background Image */}
      <img
        src="/images/cta-background.png"
        alt="Discreet Packaging"
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-40 group-hover:scale-105 transition-transform duration-700"
      />
      {/* Gradient Overlay matching brand */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/80 to-purple-950/90 z-0 mix-blend-multiply" />

      {/* Content */}
      <div className="relative z-10 flex flex-col gap-4">
        {/* Top Icon Badge */}
        <div className="size-10 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
          <ShieldCheck className="size-5 text-white" />
        </div>

        {/* Header */}
        <div className="flex flex-col gap-1.5">
          <h4 className="text-lg font-black tracking-tight leading-tight">
            100% Private Home Testing
          </h4>
          <p className="text-xs text-white/80 leading-relaxed font-medium">
            Order a confidential kit delivered straight to your door in completely discreet, unmarked packaging. Fast same-day dispatch.
          </p>
        </div>
      </div>

      {/* Action Footer */}
      <div className="relative z-10 mt-6 flex flex-col gap-3">
        {/* Divider */}
        <div className="h-px bg-white/10 w-full" />
        
        {/* Premium Button */}
        <Button
          variant="secondary"
          size="lg"
          className="w-full bg-white hover:bg-neutral-100 text-neutral-900 font-bold rounded-xl h-11 shadow-lg shadow-black/10 hover:shadow-black/20 hover:-translate-y-0.5 transition-all duration-200 text-xs"
        >
          Order Test Kit <ArrowRight className="size-3.5 ml-1.5" />
        </Button>

        {/* Disclaimer */}
        <span className="text-[10px] text-white/60 text-center font-semibold tracking-wide uppercase">
          Packaged anonymously
        </span>
      </div>
    </div>
  );
}
