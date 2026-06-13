"use client";

import React, { useState, useMemo } from "react";
import { Search, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CenterItem } from "../../_components/data";

interface ServicesSectionProps {
  details: CenterItem;
  servicesRef: React.RefObject<HTMLDivElement | null>;
  openBookingModal: (serviceName: string) => void;
}

export function ServicesSection({ details, servicesRef, openBookingModal }: ServicesSectionProps) {
  const [searchTest, setSearchTest] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const serviceCategories = [
    { id: "all", label: "All Tests" },
    { id: "blood", label: "Blood Tests" },
    { id: "radiology", label: "Scans & Imaging" },
  ];

  const categorizedServices = useMemo(() => {
    if (!details?.services) return [];

    const query = searchTest.toLowerCase();
    const searched = details.services.filter(
      (s) =>
        s.name.toLowerCase().includes(query) ||
        s.provider.toLowerCase().includes(query)
    );

    if (selectedCategory === "all") {
      return searched;
    }

    if (selectedCategory === "blood") {
      return searched
        .filter((s) => {
          const name = s.name.toLowerCase();
          return (
            name.includes("blood") ||
            name.includes("hemogram") ||
            name.includes("health checkup") ||
            name.includes("profile")
          );
        });
    }

    if (selectedCategory === "radiology") {
      return searched
        .filter((s) => {
          const name = s.name.toLowerCase();
          return (
            name.includes("mri") ||
            name.includes("ct") ||
            name.includes("scan") ||
            name.includes("x-ray") ||
            name.includes("ultrasound") ||
            name.includes("echo")
          );
        });
    }

    return searched;
  }, [details, searchTest, selectedCategory]);

  return (
    <div
      id="services"
      ref={servicesRef}
      className="scroll-mt-24 py-8 border-t border-border flex flex-col gap-6"
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-black text-foreground tracking-tight">
            Available Diagnostics & Test Packages
          </h2>
        </div>

        {/* Inline Service Search */}
        <div className="relative w-full sm:w-64">
          <Search className="absolute left-3 top-2.5 size-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search tests..."
            value={searchTest}
            onChange={(e) => setSearchTest(e.target.value)}
            className="w-full bg-muted/50 border border-border rounded-xl pl-9 pr-4 py-1.5 text-xs font-semibold placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary focus:bg-background transition-all"
          />
        </div>
      </div>

      {/* Services Sub-Category Tabs */}
      <div className="flex gap-2 border-b border-border pb-3 flex-wrap">
        {serviceCategories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
              selectedCategory === cat.id
                ? "bg-primary text-primary-foreground border-primary"
                : "bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground border-border"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Services Table List */}
      <div className="flex flex-col gap-4 mt-2">
        {categorizedServices.length > 0 ? (
          categorizedServices.map((service, idx) => (
            <div
              key={idx}
              className="group/service p-5 rounded-2xl border border-border hover:border-primary/20 hover:bg-muted/20 transition-all duration-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
              <div className="flex flex-col gap-1.5">
                <span className="text-[9px] font-bold text-primary tracking-wider uppercase bg-primary/10 dark:bg-primary/25 px-2 py-0.5 rounded-md self-start">
                  {service.provider}
                </span>
                <h4 className="text-sm sm:text-[15px] font-bold text-foreground leading-snug group-hover/service:text-primary transition-colors">
                  {service.name}
                </h4>
                <div className="flex items-center gap-4 text-xs text-muted-foreground font-semibold mt-1">
                  <span className="flex items-center gap-1">
                    <Clock className="size-3.5 text-emerald-500" />
                    {service.timing}
                  </span>
                </div>
              </div>

              <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center gap-3 border-t sm:border-t-0 border-border/50 pt-3 sm:pt-0">
                <div className="flex flex-col sm:items-end">
                  <span className="text-xl font-extrabold text-foreground">₹{service.price}</span>
                  <span className="text-[9px] text-muted-foreground font-bold tracking-wider uppercase">ALL INCLUSIVE</span>
                </div>
                <Button
                  onClick={() => openBookingModal(service.name + ` (${service.provider})`)}
                  size="sm"
                  className="px-4 py-1.5 font-bold text-xs rounded-xl cursor-pointer transition-all duration-150 active:scale-[0.98]"
                >
                  Book Test
                </Button>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-8 border border-dashed border-border rounded-2xl bg-muted/10">
            <p className="text-sm font-semibold text-muted-foreground">No tests match the selected category.</p>
          </div>
        )}
      </div>
    </div>
  );
}
