"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Search, MapPin, ShieldCheck, ArrowRight } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";

interface ListingsHeroSectionProps {
  initialQuery?: string;
  initialLocation?: string;
  onSearch?: (query: string, location: string) => void;
}

export function ListingsHeroSection({
  initialQuery = "Blood Test ( Diagnostics )",
  initialLocation = "Bihar",
  onSearch,
}: ListingsHeroSectionProps) {
  const [query, setQuery] = useState(initialQuery);
  const [location, setLocation] = useState(initialLocation);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(query, location);
    }
  };

  return (
    <div className="relative min-h-[50vh] md:min-h-[60vh] w-full flex flex-col items-center justify-center py-16 px-4 md:px-8 overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/hero-bg.png"
        alt="Premium Clinic Background"
        fill
        sizes="100vw"
        priority
        className="object-cover z-0"
      />
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-background/30 dark:bg-background/70 z-0" />

      {/* Ambient glows */}
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
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground max-w-3xl leading-tight drop-shadow-[0_2px_12px_rgba(255,255,255,0.95)] dark:drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]">
          Search <span className="text-primary">STD & Diagnostic</span> Centers
        </h1>

        {/* Subtitle */}
        <p className="mt-4 text-sm sm:text-base md:text-lg text-foreground max-w-2xl font-semibold drop-shadow-[0_1.5px_8px_rgba(255,255,255,0.95)] dark:drop-shadow-[0_1.5px_8px_rgba(0,0,0,0.95)]">
          Find top-rated local laboratories, view anonymous reviews, and choose private health testing with complete piece of mind.
        </p>

        {/* Search Dashboard Card */}
        <div className="mt-8 w-full p-6 md:p-8 rounded-3xl border border-border bg-card/90 backdrop-blur-xl shadow-2xl flex flex-col text-left">
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Search For (Select) */}
              <div className="flex flex-col space-y-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Search For
                </label>
                <div className="relative flex items-center bg-background border border-border rounded-xl h-12 transition-all duration-300 focus-within:ring-2 focus-within:ring-primary/45 focus-within:border-primary/50">
                  <Search className="absolute left-3.5 text-muted-foreground size-4 pointer-events-none z-10" />
                  <Select value={query} onValueChange={setQuery}>
                    <SelectTrigger className="w-full h-full border-0 focus:ring-0 focus-visible:ring-0 bg-transparent pl-10 pr-4 shadow-none justify-between">
                      <SelectValue placeholder="Select search category" />
                    </SelectTrigger>
                    <SelectContent position="popper" className="bg-card border border-border">
                      <SelectItem value="STDs & Skin (Both Doctors)" className="py-2.5 pl-3 pr-8 cursor-pointer">
                        STDs & Skin (Both Doctors)
                      </SelectItem>
                      <SelectItem value="Blood Test ( Diagnostics )" className="py-2.5 pl-3 pr-8 cursor-pointer">
                        Blood Test ( Diagnostics )
                      </SelectItem>
                      <SelectItem value="STDs Clinics ( Venereologist )" className="py-2.5 pl-3 pr-8 cursor-pointer">
                        STDs Clinics ( Venereologist )
                      </SelectItem>
                      <SelectItem value="Skin Clinics ( Dermatologist )" className="py-2.5 pl-3 pr-8 cursor-pointer">
                        Skin Clinics ( Dermatologist )
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Location (Input) */}
              <div className="flex flex-col space-y-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Location
                </label>
                <div className="relative flex items-center bg-background border border-border rounded-xl h-12 transition-all duration-300 focus-within:ring-2 focus-within:ring-primary/45 focus-within:border-primary/50">
                  <MapPin className="absolute left-3.5 text-muted-foreground size-4 pointer-events-none" />
                  <Input
                    type="text"
                    placeholder="Enter City or State (e.g. Bihar)"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full h-full border-0 focus-visible:ring-0 focus-visible:ring-offset-0 bg-transparent pl-10 pr-4 shadow-none"
                  />
                </div>
              </div>
            </div>

            {/* Actions & Disclaimer */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 mt-2">
              <p className="text-xs text-muted-foreground text-center md:text-left">
                Search for confidential STD testing centers near you. Results are{" "}
                <span className="text-primary font-semibold">100% anonymous</span>.
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
