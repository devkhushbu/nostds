"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck, MapPin, Smile, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import Marquee from "./_components/Marquee";
import { TESTIMONIALS_COL1, TESTIMONIALS_COL2 } from "./_components/testimonialsData";

const STATS = [
  { 
    value: "25K+", 
    label: "Confidential checks completed",
    icon: <ShieldCheck className="size-4 text-primary" />
  },
  { 
    value: "500+", 
    label: "Verified testing centers",
    icon: <MapPin className="size-4 text-primary" />
  },
  { 
    value: "98%", 
    label: "User satisfaction rate",
    icon: <Smile className="size-4 text-primary" />
  },
  { 
    value: "4,500+", 
    label: "Happy users monthly",
    icon: <Users className="size-4 text-primary" />
  },
];

export default function TestimonialSection() {
  return (
    <section 
      className="bg-background text-foreground py-10 lg:py-16 border-y border-border/40 relative overflow-hidden" 
      role="region"
      aria-label="User testimonials"
    >
      {/* Subtle Background Glows */}
      <div className="absolute inset-0 size-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/4 left-[-10%] w-[400px] h-[400px] rounded-full bg-primary/5 blur-[100px]" />
        <div className="absolute bottom-1/4 right-[-10%] w-[400px] h-[400px] rounded-full bg-primary/8 blur-[100px]" />
      </div>

      <div className="max-w-[1360px] mx-auto px-6 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* Left Column: Title, Intro & Stats */}
          <div className="lg:col-span-5 flex flex-col justify-center text-left">
            <span className="text-[11px] font-extrabold text-primary tracking-widest uppercase block mb-1">
              REAL STORIES
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-foreground leading-tight">
              Loved by Thousands of Safety-First Daters
            </h2>
            
            <div className="flex items-center gap-1 mt-2.5 mb-4">
              <span className="w-16 h-1.5 bg-primary rounded-full" />
              <span className="w-2.5 h-1.5 bg-primary/60 rounded-full" />
              <span className="w-1.5 h-1.5 bg-primary/30 rounded-full" />
            </div>

            <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-6 max-w-xl">
              SafeConnect takes the awkwardness out of sexual health conversations. Share your verified STD status securely and privately with our Clean Check ID before your first date.
            </p>

            {/* Performance Stats Grid */}
            <div className="grid grid-cols-2 gap-x-6 gap-y-5 mb-6 max-w-md">
              {STATS.map((stat, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="size-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    {stat.icon}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-lg sm:text-xl font-extrabold text-foreground tracking-tight">
                      {stat.value}
                    </span>
                    <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wide leading-tight">
                      {stat.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex">
              <Button asChild size="lg" className="w-fit text-xs h-10 pl-5 pr-3 group/btn">
                <Link id="cta-testimonials-register" href="/register" className="inline-flex items-center gap-2.5">
                  <span>Get Your Clean Check ID</span>
                  <span className="bg-primary-foreground/20 p-1.5 rounded-full flex items-center justify-center transition-colors group-hover/btn:bg-primary-foreground/35">
                    <ArrowRight className="size-3 transition-transform duration-200 group-hover/btn:translate-x-0.5" />
                  </span>
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Column (Desktop): Dual Vertical Marquee Columns */}
          <div className="hidden lg:block lg:col-span-7 relative w-full h-[500px] xl:h-[550px] overflow-hidden py-2 px-1">
            {/* Top and Bottom Fades for Seamless Masking Effect */}
            <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />

            <div className="grid grid-cols-2 gap-4 h-full w-full">
              <div className="flex flex-col h-full overflow-hidden w-full relative">
                <Marquee direction="vertical" items={TESTIMONIALS_COL1} />
              </div>
              <div className="flex flex-col h-full overflow-hidden w-full relative">
                <Marquee direction="vertical" reverse items={TESTIMONIALS_COL2} />
              </div>
            </div>
          </div>

          {/* Mobile/Tablet View: Dual Horizontal Marquee Rows (Bleeding edge-to-edge with negative margin & px-0) */}
          <div className="lg:hidden w-[calc(100%+3rem)] -mx-6 relative flex flex-col gap-4 py-4 mt-6 overflow-hidden px-0">
            {/* Left & Right fading masking overlays */}
            <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
            
            <Marquee direction="horizontal" items={TESTIMONIALS_COL1} />
            <Marquee direction="horizontal" reverse items={TESTIMONIALS_COL2} />
          </div>

        </div>
      </div>
    </section>
  );
}
