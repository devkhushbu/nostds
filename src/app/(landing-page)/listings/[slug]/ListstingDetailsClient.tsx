"use client";

import React, { useState, useMemo, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ShieldCheck,
  ChevronLeft,
  X,
  Award,
  Clock,
  MapPin,
  FlaskConical,
  Star,
} from "lucide-react";
import { CTACard } from "./_components/cta-card";
import { BookingModal } from "./_components/booking-modal";
import { AboutSection } from "./_components/about-section";
import { ServicesSection } from "./_components/services-section";
import { LocationSection } from "./_components/location-section";
import { ReviewsSection } from "./_components/reviews-section";
import { BottomCTA } from "./_components/bottom-cta";
import { mockCenters } from "../_components/data";

interface ListingsDetailsClientProps {
  centerId: string;
}

export default function ListstingDetailsClient({ centerId }: ListingsDetailsClientProps) {
  // Find center on client side to avoid serialization issues with icons
  const center = useMemo(() => {
    return mockCenters.find((c) => c.id === centerId || c.slug === centerId);
  }, [centerId]);

  // Find recommended similar centers (excluding the current one)
  const recommendedCenters = useMemo(() => {
    let list = mockCenters.filter((c) => c.id !== centerId && c.locationState === center?.locationState);
    if (list.length === 0) {
      list = mockCenters.filter((c) => c.id !== centerId);
    }
    return list.slice(0, 2);
  }, [centerId, center]);

  // Enhanced details helper
  const details = useMemo(() => {
    if (!center) return null;

    return {
      ...center,
      subHeading: center.subHeading || `Confidential STD & Sexual Health Testing • ${center.locationState}`,
      operatingHoursText: center.operatingHoursText || "Mon- Sat: 8 Am To 8 Pm ,Sun : 8 Am To 4 Pm",
      certificates: center.certificates || ["Verified Center", "NABL Certified Lab"],
      startingPrice: center.startingPrice || 999,
      aboutText: center.aboutText || `${center.name} is located in ${center.area}. This center has an excellent reputation in ${center.locationState}. It is equipped with advanced diagnostic equipment offering blood tests, STD screens, and highly confidential medical checks. All tests are supervised by qualified pathologists. Online test booking is fully supported with up to 50% discount.`,
      facilities: center.facilities || ["Blood Tests", "ECG", "STD Screening", "Confidential Consultation"],
      services: center.services || [
        { name: "Blood Tests and Health Checkup Packages (Free Home Collection)", provider: "Redcliffe Labs " + center.locationState, price: 2499, timing: "Home Collection: 7 AM to 3 PM" },
        { name: "MRI Scans, CT Scans, X-Rays, Blood Tests and Health Checkups", provider: "Aarthi Scans & Labs " + center.area, price: 2499, timing: "24 Hours. Ultrasound Time May Vary." },
        { name: "Full Panel Sexually Transmitted Infection (STI) Profile", provider: center.name, price: 1999, timing: "Same Day Reporting" }
      ],
      address: center.address || `P 336, CIT Road, ${center.area}, ${center.locationState}, India`,
      distance: center.distance || "~2.8 km from city center",
      reviewsList: center.reviewsList || [
        {
          author: "Anonymous Patient",
          date: "January 15, 2026",
          rating: 5,
          comment: "Very professional, discreet, and fast. Got results the same evening. Staff made me feel comfortable — highly recommend for anyone anxious about testing."
        },
        {
          author: "Verified Patient",
          date: "February 22, 2026",
          rating: 4,
          comment: "Clean labs, well-mannered staff. The booking process was simple and got my blood test reports online."
        }
      ]
    };
  }, [center]);

  // States
  const [liked, setLiked] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");
  const [isBookModalOpen, setIsBookModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  // References for scroll-to functionality
  const overviewRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const locationRef = useRef<HTMLDivElement>(null);
  const reviewsRef = useRef<HTMLDivElement>(null);

  // Navigate & scroll to tab
  const scrollToSection = (sectionId: string) => {
    setActiveTab(sectionId);
    let targetRef;
    if (sectionId === "overview") targetRef = overviewRef;
    if (sectionId === "services") targetRef = servicesRef;
    if (sectionId === "location") targetRef = locationRef;
    if (sectionId === "reviews") targetRef = reviewsRef;

    if (targetRef && targetRef.current) {
      const offset = 90; // Header offset
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = targetRef.current.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  if (!details) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[70vh] p-8 text-center bg-background border border-border">
        <div className="w-16 h-16 rounded-full bg-destructive/10 text-destructive flex items-center justify-center mb-6 border border-destructive/20">
          <X className="size-8" />
        </div>
        <h2 className="text-2xl font-bold text-foreground">Center Not Found</h2>
        <p className="text-muted-foreground mt-2 max-w-md">
          We could not find the clinic or diagnostic center you are looking for. It may have been relocated or updated.
        </p>
        <Link href="/listings" className="mt-6">
          <Button variant="default" className="cursor-pointer">
            Back to Listings
          </Button>
        </Link>
      </div>
    );
  }

  // Handle book click
  const openBookingModal = (serviceName = "") => {
    setSelectedService(serviceName || `Starting Panel Package - ₹${details.startingPrice}`);
    setIsBookModalOpen(true);
  };

  return (
    <div className="relative bg-background min-h-screen pb-16">
      
      {/* 1. Header / Hero section with Background Image (Full Width Layout) */}
      <div className="relative min-h-[50vh] md:min-h-[60vh] w-full flex flex-col justify-center py-16 px-4 md:px-8 overflow-hidden border-b border-border bg-background">
        {/* Background Image */}
        <Image
          src="/images/hero-bg.png"
          alt="Premium Clinic Background"
          fill
          sizes="100vw"
          priority
          className="object-cover z-0"
        />
        {/* Overlay for readability - slight dark overlay */}
        <div className="absolute inset-0 bg-black/10 dark:bg-black/40 z-0" />

        {/* Ambient glows */}
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-primary/10 dark:bg-primary/5 blur-[100px] z-0 pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-80 h-80 rounded-full bg-purple-500/5 dark:bg-purple-500/5 blur-[120px] z-0 pointer-events-none" />

        <div className="relative max-w-[1280px] mx-auto w-full px-5 md:px-8 z-10">
          
          {/* Breadcrumbs */}
          <Link href="/listings" className="inline-flex items-center gap-1 text-xs font-bold text-neutral-300 hover:text-white transition-colors mb-6 group relative z-20 drop-shadow-sm">
            <ChevronLeft className="size-4 transition-transform group-hover:-translate-x-0.5" />
            <span>BACK TO ALL LISTINGS</span>
          </Link>

          {/* Details Dashboard Card - Premium Dark Glassmorphism */}
          <div 
            className="w-full max-w-4xl p-6 md:p-8 rounded-3xl border border-white/15 shadow-2xl flex flex-col text-left text-white"
            style={{
              backgroundColor: "rgba(15, 23, 42, 0.3)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
            }}
          >
            <div className="flex flex-col gap-4">
              {/* Badges / Certificates */}
              <div className="flex flex-wrap gap-2">
                {details.certificates.map((cert: string, index: number) => (
                  <span
                    key={index}
                    className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 backdrop-blur-md"
                  >
                    <ShieldCheck className="size-3.5" />
                    {cert}
                  </span>
                ))}
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-white/5 text-neutral-300 border border-white/10 backdrop-blur-md">
                  <Award className="size-3.5" />
                  Kolkata Premier Center
                </span>
              </div>

              {/* Title */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white leading-tight">
                {details.name}
              </h1>

              {/* Subheading info */}
              <p className="text-sm md:text-base text-neutral-200 font-semibold">
                {details.subHeading}
              </p>

              {/* Rating block */}
              <div className="flex flex-wrap items-center gap-3 mt-1 pb-1">
                <div className="flex items-center gap-1 bg-amber-500/20 text-amber-400 px-3 py-1 rounded-xl font-black text-sm border border-amber-500/30 backdrop-blur-md">
                  <Star className="size-4 fill-amber-500 text-amber-500" />
                  {details.rating.toFixed(1)}
                </div>
                <span className="text-sm font-semibold text-neutral-200">
                  ({details.reviews} Verified Reviews)
                </span>
                <span className="text-neutral-400">•</span>
                <span className="text-sm font-semibold text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                  Active Pathology Lab
                </span>
              </div>

              {/* Divider */}
              <div className="h-px bg-white/10 my-1" />

              {/* General details grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-1">
                <div 
                  className="flex items-center gap-3 p-3.5 border border-white/10 rounded-2xl"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.06)",
                    backdropFilter: "blur(8px)",
                    WebkitBackdropFilter: "blur(8px)",
                  }}
                >
                  <div className="p-2 rounded-xl bg-rose-500/20 text-rose-300 border border-rose-500/25">
                    <Clock className="size-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] text-slate-400 uppercase tracking-wider font-extrabold">Timings</span>
                    <span className="text-xs font-extrabold text-white">{details.operatingHoursText.split(",")[0]}</span>
                  </div>
                </div>

                <div 
                  className="flex items-center gap-3 p-3.5 border border-white/10 rounded-2xl"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.06)",
                    backdropFilter: "blur(8px)",
                    WebkitBackdropFilter: "blur(8px)",
                  }}
                >
                  <div className="p-2 rounded-xl bg-violet-500/20 text-violet-300 border border-violet-500/25">
                    <MapPin className="size-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] text-slate-400 uppercase tracking-wider font-extrabold">Distance</span>
                    <span className="text-xs font-extrabold text-white">{details.distance}</span>
                  </div>
                </div>

                <div 
                  className="flex items-center gap-3 p-3.5 border border-white/10 rounded-2xl col-span-2 sm:col-span-1"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.06)",
                    backdropFilter: "blur(8px)",
                    WebkitBackdropFilter: "blur(8px)",
                  }}
                >
                  <div className="p-2 rounded-xl bg-emerald-500/20 text-emerald-300 border border-emerald-500/25">
                    <FlaskConical className="size-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] text-slate-400 uppercase tracking-wider font-extrabold">Pricing</span>
                    <span className="text-xs font-extrabold text-white">Starts ₹{details.startingPrice}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Mobile CTA Widget - Only shown under the hero on mobile viewports */}
      <div className="lg:hidden px-5 py-6 bg-muted/20 border-b border-border">
        <div className="max-w-[1280px] mx-auto">
          <CTACard
            details={details}
            liked={liked}
            setLiked={setLiked}
            openBookingModal={openBookingModal}
          />
        </div>
      </div>

      {/* 2. Tab Nav Bar */}
      <div className="relative bg-background border-b border-border z-20">
        <div className="max-w-[1280px] mx-auto px-5 md:px-8">
          <div className="flex overflow-x-auto no-scrollbar gap-6 h-14 items-center">
            {["overview", "services", "location", "reviews"].map((tab) => (
              <button
                key={tab}
                onClick={() => scrollToSection(tab)}
                className={`h-full border-b-2 px-1 text-xs font-bold tracking-wider uppercase transition-all whitespace-nowrap cursor-pointer flex items-center ${
                  activeTab === tab
                    ? "border-primary text-primary"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 3. Main Sections Layout */}
      <div className="max-w-[1280px] mx-auto px-5 md:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Main Info Blocks Column */}
          <div className="lg:col-span-8 flex flex-col gap-2">
            
            {/* Overview Section */}
            <AboutSection details={details} overviewRef={overviewRef} />

            {/* Services & Pricing Section */}
            <ServicesSection 
              details={details} 
              servicesRef={servicesRef} 
              openBookingModal={openBookingModal} 
            />

            {/* Location & Hours Section */}
            <LocationSection details={details} locationRef={locationRef} />

            {/* Reviews Section */}
            <ReviewsSection details={details} reviewsRef={reviewsRef} />

            {/* Bottom Footer CTA block */}
            <BottomCTA
              accentBtn={details.accentBtn}
              openBookingModal={() => openBookingModal()}
            />

            {/* Share This Center block (exactly like Share This Article) */}
            <div className="bg-card border border-border rounded-3xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-6">
              <div>
                <h3 className="text-sm font-extrabold text-foreground">Share This Center</h3>
                <p className="text-xs text-muted-foreground mt-1">
                  Help your friends and family discover private, secure, and reliable diagnostic centers.
                </p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => window.open(`https://facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`)}
                  className="w-8.5 h-8.5 rounded-full bg-muted hover:bg-primary hover:text-white flex items-center justify-center text-muted-foreground transition-all duration-200 cursor-pointer"
                  aria-label="Share on Facebook"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                  </svg>
                </button>
                <button
                  onClick={() => window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(details.name + " - " + window.location.href)}`)}
                  className="w-8.5 h-8.5 rounded-full bg-muted hover:bg-primary hover:text-white flex items-center justify-center text-muted-foreground transition-all duration-200 cursor-pointer"
                  aria-label="Share on WhatsApp"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.449 5.376 0 9.738-4.363 9.74-9.74.002-2.585-1.002-5.016-2.829-6.842S13.918 1.21 11.33 1.21c-5.378 0-9.74 4.363-9.742 9.74-.001 1.77.467 3.498 1.356 5.038l-1.012 3.693 3.785-.992c1.478.807 3.013 1.21 4.708 1.21z"/>
                  </svg>
                </button>
                <button
                  onClick={() => window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(details.name)}`)}
                  className="w-8.5 h-8.5 rounded-full bg-muted hover:bg-primary hover:text-white flex items-center justify-center text-muted-foreground transition-all duration-200 cursor-pointer"
                  aria-label="Share on Twitter"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </button>
              </div>
            </div>

          </div>

          {/* Right Column - Booking Card + Recommended Pathology Labs (exactly like Recommended Reads) */}
          <div className="lg:col-span-4 flex flex-col gap-8 md:sticky md:top-24 md:self-start">
            {/* Booking Card on Desktop */}
            <div className="hidden lg:block">
              <CTACard
                details={details}
                liked={liked}
                setLiked={setLiked}
                openBookingModal={openBookingModal}
              />
            </div>

            {/* Recommended Centers Header */}
            <div>
              <h3 className="text-lg font-black text-foreground pb-2.5 border-b border-border">
                Recommended <span className="bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent">Centers</span>
              </h3>
            </div>

            <div className="flex flex-col gap-8 mt-2">
              {recommendedCenters.map((recCenter) => (
                <div key={recCenter.id} className="group flex flex-col gap-3.5">
                  {/* Image container */}
                  <div className="relative w-full h-[180px] rounded-2xl overflow-hidden border border-border/80">
                    <Image
                      src={recCenter.image}
                      alt={recCenter.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 30vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 z-10">
                      <span className="px-2.5 py-[5px] rounded-full bg-background/95 dark:bg-card/95 backdrop-blur-sm text-[10px] font-bold text-foreground shadow-sm uppercase tracking-wide">
                        {recCenter.tags[0] || "Verified"}
                      </span>
                    </div>
                  </div>

                  {/* Doctor Info */}
                  <div className="flex items-center gap-2">
                    <div 
                      className="w-5.5 h-5.5 rounded-full flex items-center justify-center text-[9px] font-black" 
                      style={{ backgroundColor: recCenter.accentAvatarBg || "#f5f3ff", color: recCenter.accentAvatarFg || "#7c3aed" }}
                    >
                      {recCenter.doctor.avatar}
                    </div>
                    <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wide">
                      {recCenter.doctor.name} &bull; {recCenter.rating} ★
                    </span>
                  </div>

                  {/* Center Title */}
                  <Link href={`/listings/${recCenter.id}`}>
                    <h4 className="text-sm font-extrabold text-foreground group-hover:text-primary transition-colors leading-snug">
                      {recCenter.name}
                    </h4>
                  </Link>

                  {/* Excerpt */}
                  <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                    {recCenter.description}
                  </p>

                  {/* Read Article styled link */}
                  <Link 
                    href={`/listings/${recCenter.id}`} 
                    className="text-[10px] font-extrabold text-primary hover:text-primary/80 flex items-center gap-1 uppercase tracking-wider transition-colors"
                  >
                    <span>View Center</span>
                    <span className="text-xs">&rarr;</span>
                  </Link>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* 4. Booking Appointment Modal */}
      <BookingModal
        isOpen={isBookModalOpen}
        onClose={() => setIsBookModalOpen(false)}
        details={details}
        selectedService={selectedService}
      />

    </div>
  );
}
