"use client";

import React from "react";
import { Filter, X } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";

interface SidebarFilterProps {
  selectedFilters: string[];
  onChange: (filters: string[]) => void;
}

export function SidebarFilter({ selectedFilters, onChange }: SidebarFilterProps) {
  const categories = [
    { id: "clinic", label: "STD Clinics", group: "Facility Type" },
    { id: "lab", label: "Labs & Pathology", group: "Facility Type" },
    { id: "sameday", label: "Same-Day Results", group: "Features" },
    { id: "anonymous", label: "100% Anonymous", group: "Features" },
    { id: "home", label: "Home Collection", group: "Features" },
  ];

  const toggleFilter = (id: string) => {
    if (selectedFilters.includes(id)) {
      onChange(selectedFilters.filter((f) => f !== id));
    } else {
      onChange([...selectedFilters, id]);
    }
  };

  const clearAll = () => {
    onChange([]);
  };

  return (
    <div className="w-full flex flex-col gap-4 bg-card border border-border rounded-3xl p-4 md:p-5">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-bold text-foreground uppercase tracking-wider flex items-center gap-2">
          <Filter className="size-4 text-primary" />
          Filter Centers
        </h3>
        {selectedFilters.length > 0 && (
          <button
            onClick={clearAll}
            className="text-xs text-muted-foreground hover:text-primary transition-colors flex items-center gap-1 font-semibold"
          >
            Clear All
            <X className="size-3" />
          </button>
        )}
      </div>

      {/* Filter items grouped */}
      <div className="flex flex-col gap-4">
        {/* Quick Filter: All Centers */}
        <div>
          <button
            onClick={clearAll}
            className={`w-full text-left px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
              selectedFilters.length === 0
                ? "bg-primary/10 text-primary"
                : "text-muted-foreground hover:bg-muted"
            }`}
          >
            All Centers
          </button>
        </div>

        {/* Facility Types */}
        <div className="flex flex-col gap-1.5">
          <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
            Facility Type
          </span>
          <div className="flex flex-col gap-1">
            {categories
              .filter((c) => c.group === "Facility Type")
              .map((cat) => {
                const isActive = selectedFilters.includes(cat.id);
                return (
                  <div
                    key={cat.id}
                    onClick={() => toggleFilter(cat.id)}
                    className="flex items-center justify-between px-3 py-1.5 rounded-xl text-xs font-semibold text-foreground hover:bg-muted transition-all cursor-pointer"
                  >
                    <span>{cat.label}</span>
                    <Checkbox
                      checked={isActive}
                      className="pointer-events-none"
                    />
                  </div>
                );
              })}
          </div>
        </div>

        {/* Features */}
        <div className="flex flex-col gap-1.5">
          <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
            Service Features
          </span>
          <div className="flex flex-col gap-1">
            {categories
              .filter((c) => c.group === "Features")
              .map((cat) => {
                const isActive = selectedFilters.includes(cat.id);
                return (
                  <div
                    key={cat.id}
                    onClick={() => toggleFilter(cat.id)}
                    className="flex items-center justify-between px-3 py-1.5 rounded-xl text-xs font-semibold text-foreground hover:bg-muted transition-all cursor-pointer"
                  >
                    <span>{cat.label}</span>
                    <Checkbox
                      checked={isActive}
                      className="pointer-events-none"
                    />
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}
