"use client";

import React from "react";
import { MapPin, Clock, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CenterItem } from "../../_components/data";

interface LocationSectionProps {
  details: CenterItem;
  locationRef: React.RefObject<HTMLDivElement | null>;
}

export function LocationSection({ details, locationRef }: LocationSectionProps) {
  return (
    <div
      id="location"
      ref={locationRef}
      className="scroll-mt-24 py-8 border-t border-border flex flex-col gap-6"
    >
      <div>
        <h2 className="text-xl sm:text-2xl font-black text-foreground tracking-tight">
          Clinic Location & Timing Details
        </h2>
      </div>

      {/* Grid split */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
        
        {/* Details side */}
        <div className="flex flex-col justify-between gap-5 p-5 bg-muted/20 border border-border/30 rounded-2xl">
          <div className="flex flex-col gap-3">
            <div className="flex gap-2.5">
              <MapPin className="size-5 text-primary shrink-0 mt-0.5" />
              <div>
                <span className="block text-[10px] font-extrabold text-muted-foreground uppercase tracking-wider mb-1">ADDRESS</span>
                <span className="text-sm font-extrabold text-foreground leading-snug">{details.address}</span>
                <span className="block text-xs text-muted-foreground font-medium mt-1">({details.distance})</span>
              </div>
            </div>

            <div className="h-px bg-border" />

            <div className="flex gap-2.5">
              <Clock className="size-5 text-primary shrink-0 mt-0.5" />
              <div>
                <span className="block text-[10px] font-extrabold text-muted-foreground uppercase tracking-wider mb-1">OPERATING HOURS</span>
                {(() => {
                  const hours = details.operatingHoursText || "Mon-Sat: 8 AM to 8 PM";
                  const parts = hours.split(",");
                  return (
                    <>
                      <span className="text-sm font-extrabold text-foreground leading-snug block">{parts[0]}</span>
                      {parts[1] && (
                        <span className="text-sm font-extrabold text-rose-500 block mt-0.5">{parts[1].trim()}</span>
                      )}
                    </>
                  );
                })()}
                <span className="block text-xs text-muted-foreground font-semibold mt-1.5">Walk-ins welcome • Appointments preferred</span>
              </div>
            </div>
          </div>

          {/* Directions CTA */}
          <Button
            variant="outline"
            onClick={() => window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(details.name + " " + details.address)}`)}
            className="w-full font-bold text-xs gap-1.5 rounded-xl border border-border hover:bg-muted cursor-pointer"
          >
            Get Directions
            <ExternalLink className="size-3.5" />
          </Button>
        </div>

        {/* Stylish Map mockup */}
        <div className="relative rounded-2xl overflow-hidden min-h-[200px] border border-border/70 group">
          <div className="absolute inset-0 bg-neutral-100 dark:bg-neutral-900 flex flex-col items-center justify-center p-6 text-center">
            
            {/* Grid map pattern background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-size-[14px_24px] dark:bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)]" />
            
            <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center border border-primary/20 animate-bounce duration-1000 mb-3 z-10">
              <MapPin className="size-6 text-primary" />
            </div>
            <span className="text-xs font-black text-foreground leading-none z-10">{details.name}</span>
            <span className="text-[10px] text-muted-foreground font-semibold mt-1 z-10 max-w-[200px]">{details.area}</span>
            
            <Button
              onClick={() => window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(details.name + " " + details.address)}`)}
              size="xs"
              className="mt-4 font-bold text-[10px] rounded-lg z-10 cursor-pointer"
            >
              Open Google Maps
            </Button>
          </div>
        </div>

      </div>
    </div>
  );
}
