import React from "react";
import type { Metadata } from "next";
import AboutHero from "./_components/about-hero";
import AboutContent from "./_components/about-content";
import { aboutPageData } from "./data";

export const metadata: Metadata = {
  title: "About Us | NoSTDs - 100% Confidential STD Status Verification",
  description: "Discover the NoSTDs story. Learn how we are dismantling sexual health stigma, partnering with NABL accredited labs, and protecting patient anonymity with secure barcodes.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <article className="min-h-screen bg-white dark:bg-neutral-950">
      {/* About Page Hero Section */}
      <AboutHero data={aboutPageData.hero} />

      {/* About Page Content & Stats Sidebar */}
      <AboutContent data={aboutPageData} />
    </article>
  );
}
