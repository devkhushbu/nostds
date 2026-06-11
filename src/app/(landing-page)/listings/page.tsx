"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { ListingsHeroSection } from "./_components/hero-section";
import { SidebarFilter } from "./_components/sidebar-filter";
import { SidebarCta } from "./_components/sidebar-cta";
import { CenterCard, CenterListCard } from "./_components/center-card";
import { mockCenters } from "./_components/data";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Activity,
  LayoutGrid,
  List as ListIcon,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function ListingsPage() {
  const [searchQuery, setSearchQuery] = useState("Blood Test ( Diagnostics )");
  const [searchLocation, setSearchLocation] = useState("Bihar");
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  // Reset pagination when search queries or filters change
  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, searchLocation, selectedFilters]);

  // Handle new search from Hero section
  const handleSearch = (query: string, location: string) => {
    setSearchQuery(query);
    setSearchLocation(location);
  };

  // Filter centers dynamically based on current query, location, and sidebar states
  const filteredCenters = useMemo(() => {
    return mockCenters.filter((center) => {
      // Location match (case-insensitive state or area match)
      const locationQuery = searchLocation.trim().toLowerCase();
      const matchesLocation =
        !locationQuery ||
        center.locationState.includes(locationQuery) ||
        center.area.toLowerCase().includes(locationQuery);

      // Category match
      const matchesCategory = !searchQuery || center.categories.includes(searchQuery);

      // Sidebar filters match (must match ALL checked filters)
      if (selectedFilters.length > 0) {
        const matchesFilters = selectedFilters.every((filterId) => {
          if (filterId === "clinic") return center.isClinic;
          if (filterId === "lab") return center.isLab;
          if (filterId === "sameday") return center.hasSameDayResults;
          if (filterId === "anonymous") return center.isAnonymous;
          if (filterId === "home") return center.hasHomeCollection;
          return true;
        });
        return matchesLocation && matchesCategory && matchesFilters;
      }

      return matchesLocation && matchesCategory;
    });
  }, [searchQuery, searchLocation, selectedFilters]);

  // Paginated matching results
  const paginatedCenters = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredCenters.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredCenters, currentPage]);

  const totalPages = Math.ceil(filteredCenters.length / itemsPerPage);

  return (
    <div className="relative bg-background min-h-screen">
      {/* Listings Hero Section */}
      <ListingsHeroSection
        initialQuery={searchQuery}
        initialLocation={searchLocation}
        onSearch={handleSearch}
      />

      {/* Main Results Container */}
      <div className="max-w-[1440px] mx-auto px-5 md:px-8 py-12 md:py-16">
        
        {/* Results Info & Tabs Toggles */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-6 border-b border-border">
          <div>
            <h2 className="text-xl md:text-2xl font-extrabold text-foreground flex items-center gap-2">
              <Activity className="size-5 text-primary animate-pulse" />
              {filteredCenters.length > 0 ? (
                <span>
                  Showing {filteredCenters.length} Center
                  {filteredCenters.length > 1 ? "s" : ""}
                </span>
              ) : (
                <span>No Centers Found</span>
              )}
            </h2>
            <p className="text-xs md:text-sm text-muted-foreground mt-1">
              For test type{" "}
              <span className="font-semibold text-primary">{searchQuery}</span> in{" "}
              <span className="font-semibold text-foreground capitalize">
                {searchLocation || "All Locations"}
              </span>
            </p>
          </div>

          {/* Shadcn Tabs view switcher (Grid vs List) */}
          <Tabs
            value={viewMode}
            onValueChange={(val) => setViewMode(val as "grid" | "list")}
            className="self-start sm:self-auto"
          >
            <TabsList className="bg-muted border border-border p-[3px] rounded-xl flex items-center h-9">
              <TabsTrigger
                value="grid"
                className="px-3.5 py-1.5 flex items-center gap-1.5 text-xs rounded-lg cursor-pointer"
              >
                <LayoutGrid className="size-3.5" />
                <span>Grid View</span>
              </TabsTrigger>
              <TabsTrigger
                value="list"
                className="px-3.5 py-1.5 flex items-center gap-1.5 text-xs rounded-lg cursor-pointer"
              >
                <ListIcon className="size-3.5" />
                <span>List View</span>
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {/* 2-Column Sidebar + Results Layout (Tighter gap & narrower sidebar) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
          
          {/* Left Side: Sidebar Filter & CTA (Span 4 on md for padding, 3 on lg = 25% width) */}
          <div className="col-span-12 md:col-span-4 lg:col-span-3 md:sticky md:top-24 md:self-start flex flex-col gap-6">
            <SidebarFilter
              selectedFilters={selectedFilters}
              onChange={setSelectedFilters}
            />
            <SidebarCta />
          </div>

          {/* Right Side: Listings Results (Span 8 on md, 9 on lg = 75% width) */}
          <div className="col-span-12 md:col-span-8 lg:col-span-9 flex flex-col gap-8">
            {paginatedCenters.length > 0 ? (
              <>
                {viewMode === "grid" ? (
                  /* Grid View (Show 2 columns on lg to prevent squeezing, 3 columns on xl) */
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5">
                    {paginatedCenters.map((center) => (
                      <CenterCard key={center.id} center={center} />
                    ))}
                  </div>
                ) : (
                  /* List View (Horizontal layout) */
                  <div className="flex flex-col gap-5">
                    {paginatedCenters.map((center) => (
                      <CenterListCard key={center.id} center={center} />
                    ))}
                  </div>
                )}

                {/* Pagination Controls */}
                {totalPages > 1 && (
                  <div className="flex items-center justify-center gap-3 mt-4 pt-6 border-t border-border">
                    <button
                      disabled={currentPage === 1}
                      onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                      className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:bg-muted disabled:opacity-40 disabled:hover:bg-transparent transition-all cursor-pointer shadow-sm hover:shadow"
                    >
                      <span className="sr-only">Previous Page</span>
                      <ChevronLeft className="size-4" />
                    </button>

                    {Array.from({ length: totalPages }).map((_, i) => {
                      const pageNumber = i + 1;
                      const isActive = pageNumber === currentPage;
                      return (
                        <button
                          key={pageNumber}
                          onClick={() => setCurrentPage(pageNumber)}
                          className={`w-10 h-10 rounded-full text-xs font-bold transition-all cursor-pointer flex items-center justify-center shadow-sm ${
                            isActive
                              ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20 scale-105"
                              : "text-muted-foreground bg-card hover:bg-muted border border-border"
                          }`}
                        >
                          {String(pageNumber).padStart(2, "0")}
                        </button>
                      );
                    })}

                    <button
                      disabled={currentPage === totalPages}
                      onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                      className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:bg-muted disabled:opacity-40 disabled:hover:bg-transparent transition-all cursor-pointer shadow-sm hover:shadow"
                    >
                      <span className="sr-only">Next Page</span>
                      <ChevronRight className="size-4" />
                    </button>
                  </div>
                )}
              </>
            ) : (
              /* Empty State */
              <div className="w-full flex flex-col items-center justify-center py-16 px-6 text-center bg-muted/30 dark:bg-muted/10 backdrop-blur-md rounded-[32px] max-w-xl mx-auto">
                <Image
                  src="/images/empty-state.png"
                  alt="No Centers Found"
                  width={224}
                  height={224}
                  className="object-contain mb-6 animate-pulse duration-[3000ms]"
                />
                <h3 className="text-xl font-bold text-foreground">
                  No matches found for your filter criteria
                </h3>
                <p className="mt-2 text-sm text-muted-foreground max-w-md">
                  We couldn&apos;t find any centers matching your combined search terms and active sidebar filters. Try clearing your filters or resetting the search location.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery("Blood Test ( Diagnostics )");
                    setSearchLocation("Bihar");
                    setSelectedFilters([]);
                  }}
                  className="mt-6 font-bold text-sm text-primary hover:underline cursor-pointer"
                >
                  Reset All Filters
                </button>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
