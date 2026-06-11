"use client";

import React from "react";
import { Star, Quote } from "lucide-react";
import { Testimonial } from "./testimonialsData";

interface MarqueeProps {
  direction?: "horizontal" | "vertical";
  reverse?: boolean;
  items: Testimonial[];
}

interface TestimonialCardProps extends Testimonial {
  direction: "horizontal" | "vertical";
}

const Avatar = ({ name, avatar, avatarBg }: { name: string; avatar?: string; avatarBg?: string }) => {
  const initials = avatar || name.split(" ").map(n => n[0]).join("").slice(0, 2).toUpperCase();
  
  return (
    <div 
      className="size-10 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-sm shrink-0 border border-white/10"
      style={{ backgroundColor: avatarBg || '#6366f1' }}
    >
      {initials}
    </div>
  );
};

// Unified Testimonial Card that adjusts its width/layout dynamically
const TestimonialCard = ({ name, role, avatar, avatarBg, rating, quote, direction }: TestimonialCardProps) => {
  const isHorizontal = direction === "horizontal";
  
  return (
    <div className={`bg-card/50 border border-border/40 rounded-2xl p-4 hover:bg-card/85 hover:border-primary/30 hover:scale-[1.02] hover:shadow-[0_8px_30px_rgba(0,0,0,0.02)] dark:hover:shadow-[0_0_25px_rgba(251,146,60,0.05)] transition-all duration-300 flex flex-col ${isHorizontal ? "w-[290px] shrink-0 gap-3" : "w-full gap-4"}`}>
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <Avatar name={name} avatar={avatar} avatarBg={avatarBg} />
          <div>
            <h4 className={`font-extrabold text-foreground leading-tight tracking-tight ${isHorizontal ? "text-xs" : "text-sm"}`}>
              {name}
            </h4>
            <p className="text-[10px] text-muted-foreground mt-0.5 font-bold leading-none">
              {role}
            </p>
            <div className={`flex items-center gap-0.5 ${isHorizontal ? "mt-1.5" : "mt-2"}`}>
              {[...Array(rating)].map((_, i) => (
                <Star key={i} className={`fill-primary text-primary ${isHorizontal ? "size-2.5" : "size-3"}`} />
              ))}
            </div>
          </div>
        </div>
        <Quote className={`text-primary/10 shrink-0 self-start ${isHorizontal ? "size-5 mt-0.5" : "size-6 mt-1"}`} />
      </div>

      <p className={`text-muted-foreground leading-relaxed font-semibold ${isHorizontal ? "text-[11px]" : "text-xs"}`}>
        &ldquo;{quote}&rdquo;
      </p>
    </div>
  );
};

export default function Marquee({ direction = "horizontal", reverse = false, items }: MarqueeProps) {
  const isHorizontal = direction === "horizontal";

  if (isHorizontal) {
    const animationClass = reverse ? "animate-marquee-reverse" : "animate-marquee";
    return (
      <div className="relative w-full overflow-hidden">
        <div className={`flex w-max gap-4 ${animationClass} py-1 shrink-0`}>
          {/* First loop */}
          {items.map((item, idx) => (
            <TestimonialCard 
              key={`h-1-${idx}`} 
              {...item}
              direction="horizontal"
            />
          ))}
          {/* Duplicate loop for seamless infinite scroll */}
          {items.map((item, idx) => (
            <TestimonialCard 
              key={`h-2-${idx}`} 
              {...item}
              direction="horizontal"
            />
          ))}
        </div>
      </div>
    );
  }

  // Vertical scroll
  const animationClass = reverse ? "animate-marquee-vertical-down" : "animate-marquee-vertical-up";
  return (
    <div className="flex flex-col gap-4 py-1 relative h-full overflow-hidden">
      <div className={`flex flex-col gap-4 ${animationClass} py-1 w-full`}>
        {/* First loop */}
        {items.map((item, idx) => (
          <TestimonialCard 
            key={`v-1-${idx}`} 
            {...item}
            direction="vertical"
          />
        ))}
        {/* Duplicate loop for seamless infinite scroll */}
        {items.map((item, idx) => (
          <TestimonialCard 
            key={`v-2-${idx}`} 
            {...item}
            direction="vertical"
          />
        ))}
      </div>
    </div>
  );
}
