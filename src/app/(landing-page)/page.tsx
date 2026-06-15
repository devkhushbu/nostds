import React from "react";
import HeroSection from "./sections/HeroSection";
import FindCentersByTypeSection from "./sections/FindCentersByTypeSection";
import FeaturedCentersSection from "./sections/FeaturedCentersSection";
import HowItWorksSection from "./sections/HowItWorksSection";
import CtaBannerSection from "./sections/CtaBannerSection";
import StatsSection from "./sections/StatsSection";
import TestimonialSection from "./sections/TestimonialSection";
import ContactSection from "./sections/ContactSection";


export default function LandingPage() {
  return (
    <div className="relative overflow-hidden">
      <HeroSection />
      <FindCentersByTypeSection />
      <FeaturedCentersSection />
      <HowItWorksSection />
      <StatsSection />
      <TestimonialSection />
      <CtaBannerSection />
      <ContactSection />
    </div>
  );
}
