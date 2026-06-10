"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Search, MapPin, Check, ShieldCheck, Lock, ArrowRight } from "lucide-react";

export default function HeroSection() {
  const [checkReportId, setCheckReportId] = useState("");
  const [shareReportLocation, setShareReportLocation] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [searchLocation, setSearchLocation] = useState("");

  const handleCheckReport = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Checking report:", checkReportId);
  };

  const handleShareReport = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Sharing report for location:", shareReportLocation);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery, "in:", searchLocation);
  };

  return (
    <div className="relative min-h-[95vh] w-full flex flex-col items-center justify-center py-20 px-4 md:px-8 overflow-hidden">
      {/* Background Image */}
      <img
        src="/images/hero-bg.png"
        alt="Premium Clinic Lobby"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      {/* Light/Dark overlay for readability - clear background image */}
      <div className="absolute inset-0 bg-white/20 dark:bg-neutral-950/60 z-0" />

      {/* Premium ambient glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-primary/10 dark:bg-primary/5 blur-[100px] z-0 pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-80 h-80 rounded-full bg-purple-500/5 dark:bg-purple-500/5 blur-[120px] z-0 pointer-events-none" />

      {/* Main Content */}
      <div className="relative w-full max-w-4xl mx-auto z-10 flex flex-col items-center text-center">
        
        {/* Secure & Confidential Badge */}
        <div className="mb-6 flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/20 text-xs font-bold uppercase tracking-wider">
          <ShieldCheck className="size-4" />
          <span>100% Confidential & Anonymous</span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-neutral-955 dark:text-white max-w-3xl leading-tight drop-shadow-[0_2px_12px_rgba(255,255,255,0.95)] dark:drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]">
          Check <span className="text-primary">STD Status</span> Before Meeting
        </h1>

        {/* Subtitle */}
        <p className="mt-4 text-base sm:text-lg md:text-xl text-neutral-900 dark:text-neutral-200 max-w-2xl font-semibold drop-shadow-[0_1.5px_8px_rgba(255,255,255,0.95)] dark:drop-shadow-[0_1.5px_8px_rgba(0,0,0,0.95)]">
          Find verified STD testing centers, check partner status safely, and protect your health with complete confidentiality.
        </p>

        {/* Unified Search Dashboard Card */}
        <div className="mt-12 w-full p-6 md:p-8 rounded-3xl border border-neutral-200/80 dark:border-white/10 bg-white/85 dark:bg-black/50 backdrop-blur-xl shadow-2xl flex flex-col text-left">
          
          {/* Top Section: Check & Share Reports */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Left Section: Check STDs Report */}
            <form onSubmit={handleCheckReport} className="flex flex-col space-y-3">
              <label className="text-sm font-semibold text-neutral-800 dark:text-white/90 flex items-center gap-2">
                <Lock className="size-4 text-primary" />
                Check STDs Report
              </label>
              <div className="relative flex items-center gap-2 bg-white/90 dark:bg-neutral-900/40 border border-neutral-200 dark:border-white/10 rounded-xl p-1.5 focus-within:ring-2 focus-within:ring-primary/45 focus-within:border-primary/50 transition-all duration-300">
                <div className="pl-3 text-neutral-500 dark:text-neutral-400">
                  <Search className="size-4" />
                </div>
                <input
                  type="text"
                  placeholder="STD Testing, Diagnostic Cer..."
                  value={checkReportId}
                  onChange={(e) => setCheckReportId(e.target.value)}
                  className="w-full bg-transparent border-0 text-neutral-900 dark:text-white placeholder-neutral-500 dark:placeholder-neutral-400 text-sm focus:outline-none focus:ring-0 py-1.5"
                />
                <Button 
                  type="submit"
                  size="sm"
                  variant="default"
                  className="font-medium px-4 h-9 rounded-lg"
                >
                  Check <Check className="size-3.5 ml-1" />
                </Button>
              </div>
            </form>

            {/* Right Section: Share STDs Report */}
            <form onSubmit={handleShareReport} className="flex flex-col space-y-3">
              <label className="text-sm font-semibold text-neutral-800 dark:text-white/90 flex items-center gap-2">
                <ShieldCheck className="size-4 text-primary" />
                Share STDs Report
              </label>
              <div className="relative flex items-center gap-2 bg-white/90 dark:bg-neutral-900/40 border border-neutral-200 dark:border-white/10 rounded-xl p-1.5 focus-within:ring-2 focus-within:ring-primary/45 focus-within:border-primary/50 transition-all duration-300">
                <div className="pl-3 text-neutral-500 dark:text-neutral-400">
                  <MapPin className="size-4" />
                </div>
                <input
                  type="text"
                  placeholder="City, State or Zip Code"
                  value={shareReportLocation}
                  onChange={(e) => setShareReportLocation(e.target.value)}
                  className="w-full bg-transparent border-0 text-neutral-900 dark:text-white placeholder-neutral-500 dark:placeholder-neutral-400 text-sm focus:outline-none focus:ring-0 py-1.5"
                />
                <Button 
                  type="submit"
                  size="sm"
                  variant="secondary"
                  className="font-medium px-4 h-9 rounded-lg"
                >
                  Search <Search className="size-3.5 ml-1" />
                </Button>
              </div>
            </form>
          </div>

          {/* Divider */}
          <div className="h-px bg-neutral-200 dark:bg-white/10 my-6" />

          {/* Bottom Section: Main Search Clinic */}
          <form onSubmit={handleSearch} className="flex flex-col gap-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Search For */}
              <div className="flex flex-col space-y-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-neutral-700 dark:text-neutral-300">
                  Search For
                </label>
                <div className="relative flex items-center bg-white/90 dark:bg-neutral-900/40 border border-neutral-200 dark:border-white/10 rounded-xl p-2.5 focus-within:ring-2 focus-within:ring-primary/45 focus-within:border-primary/50 transition-all duration-300">
                  <Search className="absolute left-3.5 text-neutral-500 dark:text-neutral-400 size-4" />
                  <input
                    type="text"
                    placeholder="STDs & Skin (Both Doctors)"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-transparent border-0 pl-7 text-neutral-900 dark:text-white placeholder-neutral-500 dark:placeholder-neutral-400 text-sm focus:outline-none focus:ring-0"
                  />
                </div>
              </div>

              {/* Location */}
              <div className="flex flex-col space-y-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-neutral-700 dark:text-neutral-300">
                  Location
                </label>
                <div className="relative flex items-center bg-white/90 dark:bg-neutral-900/40 border border-neutral-200 dark:border-white/10 rounded-xl p-2.5 focus-within:ring-2 focus-within:ring-primary/45 focus-within:border-primary/50 transition-all duration-300">
                  <MapPin className="absolute left-3.5 text-neutral-500 dark:text-neutral-400 size-4" />
                  <input
                    type="text"
                    placeholder="Bihar"
                    value={searchLocation}
                    onChange={(e) => setSearchLocation(e.target.value)}
                    className="w-full bg-transparent border-0 pl-7 text-neutral-900 dark:text-white placeholder-neutral-500 dark:placeholder-neutral-400 text-sm focus:outline-none focus:ring-0"
                  />
                </div>
              </div>
            </div>

            {/* Bottom Actions & Caption */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 mt-2">
              <p className="text-xs text-neutral-500 dark:text-neutral-400 text-center md:text-left">
                Search for confidential STD testing centers near you. Results are <span className="text-primary font-semibold">100% anonymous</span>.
              </p>
              <Button 
                type="submit"
                size="lg"
                variant="default"
                className="w-full md:w-auto font-bold px-8 h-11 rounded-xl shadow-lg shadow-primary/10 hover:shadow-primary/20 hover:-translate-y-0.5 transition-all duration-200"
              >
                Search <ArrowRight className="size-4 ml-1.5" />
              </Button>
            </div>
          </form>

        </div>
      </div>
    </div>
  );
}
