import React from "react";
import Image from "next/image";
import { AboutHeroData } from "../data";

interface AboutHeroProps {
  data: AboutHeroData;
}

export default function AboutHero({ data }: AboutHeroProps) {
  return (
    <div className="relative w-full h-[60vh] min-h-[450px] md:h-[65vh] flex flex-col justify-end overflow-hidden">
      {/* Background Image */}
      <Image
        src={data.backgroundImage}
        alt="SafeConnect Lobby"
        fill
        sizes="100vw"
        priority
        className="object-cover z-0 object-center transition-scale duration-1000 ease-out hover:scale-105"
      />
      
      {/* Premium Dark Gradient Overlay */}
      {/* It fades from transparent at the top to a rich black gradient at the bottom for perfect text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/70 to-neutral-950/20 z-10" />

      {/* Ambient Radial Glows */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[150px] z-10 pointer-events-none -translate-x-1/3 translate-y-1/3" />

      {/* Hero Content aligned to bottom */}
      <div className="relative w-full max-w-7xl mx-auto px-6 md:px-12 pb-12 md:pb-16 z-20 flex flex-col items-start text-left">
        
        {/* Animated Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-white text-[10px] sm:text-xs font-semibold uppercase tracking-widest mb-4 animate-pulse">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
          </span>
          <span>{data.tag}</span>
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white max-w-4xl leading-tight">
          {data.title}
        </h1>

        {/* Subtitle */}
        <p className="mt-4 text-sm sm:text-base md:text-lg lg:text-xl text-neutral-300 max-w-2xl font-normal leading-relaxed">
          {data.subtitle}
        </p>
      </div>
    </div>
  );
}
