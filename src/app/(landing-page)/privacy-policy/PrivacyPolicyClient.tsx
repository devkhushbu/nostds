"use client";

import React from "react";
import { 
  ShieldCheck, 
  Lock, 
  Key, 
  Trash2, 
  EyeOff, 
  Sparkles,
  HelpCircle,
  Building2
} from "lucide-react";

interface PolicySection {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ComponentType<any>;
  points: string[];
  description: string;
}

export default function PrivacyPolicyClient() {
  // Simplified project-specific content sections
  const policySections: PolicySection[] = [
    {
      id: "zero-identity",
      title: "Zero-Identity Bookings",
      subtitle: "We book your medical tests without collecting your personal identity details.",
      icon: Lock,
      description: "Traditional healthcare systems require names, phone numbers, and IDs. NoSTDs changes that. We protect your privacy by booking everything under a generated patient code.",
      points: [
        "No email or phone registration is required to find diagnostic labs or book screenings.",
        "Your booking is tied only to a unique alphanumeric booking ID (e.g., NST-772A).",
        "Your biological identity stays disconnected from your testing files."
      ]
    },
    {
      id: "double-blind",
      title: "Double-Blind Collections",
      subtitle: "Couriers and sample collection tubes carry zero diagnostic descriptions.",
      icon: EyeOff,
      description: "Whether you get tested at a clinic in Patna, Hyderabad, or Bangalore, or request a home sample pickup, we employ double-blind safety protocols:",
      points: [
        "Home collection kits are delivered in plain, unmarked secure packaging with no health labels.",
        "Collection couriers only see a geographic pickup location and a package token.",
        "Test vials are labeled only with your anonymous booking ID for clinical safety."
      ]
    },
    {
      id: "peer-sharing",
      title: "Patient-Controlled Sharing",
      subtitle: "Share verification checks with a partner safely, without exposing full reports.",
      icon: Key,
      description: "Our platform lets you show your sexual health status badge to a partner (e.g., before physical meetings) with complete control:",
      points: [
        "Generate a temporary 6-digit access PIN that reveals a status badge (Tested & Cleared).",
        "Individual lab readings, clinic names, and detailed parameters are masked by default.",
        "You can revoke the link instantly at any time, blocking all future lookups immediately."
      ]
    },
    {
      id: "data-erasure",
      title: "Automatic Data Expiry",
      subtitle: "Encrypted results are automatically deleted after 14 days, or sooner by you.",
      icon: Trash2,
      description: "We believe health data should not live online indefinitely. Your reports have built-in expiry parameters:",
      points: [
        "Reports are secured with zero-knowledge keys stored locally on your device.",
        "All test records automatically self-destruct and erase from our relays after 14 days.",
        "A one-click 'Purge Now' button is available for instant manual deletion."
      ]
    },
    {
      id: "clinic-standards",
      title: "Clinic & Laboratory Auditing",
      subtitle: "Listed diagnostic partners must comply with strict isolation standards.",
      icon: Building2,
      description: "Every laboratory and clinic listed on our platform (including leading networks in New Delhi, Kolkata, and Mumbai) must pass our audit requirements:",
      points: [
        "Clinics are strictly prohibited from linking our booking codes to your Aadhaar or local records.",
        "Staff are trained in discreet, private patient handling for all sexual health consultations.",
        "Data transmission runs on secure, isolated networks that delete records after delivery."
      ]
    },
    {
      id: "no-ad-pledge",
      title: "No-Ads & Zero Data Sharing",
      icon: ShieldCheck,
      subtitle: "We do not host tracking scripts, target ads, or coordinate with insurance.",
      description: "NoSTDs is a utilities platform, not a marketing database. Your medical lookup history is never monetized:",
      points: [
        "No ad pixels (such as Google or Facebook trackers) are loaded anywhere on our screens.",
        "We never sell diagnostic trends or user stats to insurers, employers, or third parties.",
        "Minimal server logs scrub IP addresses automatically to prevent household tracking."
      ]
    }
  ];

  return (
    <div className="relative w-full bg-background min-h-screen">
      
      {/* Full-width Top Banner */}
      <div className="relative w-full bg-muted/10 overflow-hidden">
        {/* Decorative Background Glows */}
        <div className="absolute top-0 left-1/3 -translate-x-1/2 w-[600px] h-[300px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute top-10 right-1/4 w-[400px] h-[200px] bg-orange-400/5 rounded-full blur-[90px] pointer-events-none" />

        <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left side text */}
            <div className="lg:col-span-7 space-y-3.5">
              <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-extrabold uppercase tracking-widest">
                <Sparkles className="size-3.5 text-primary" />
                100% Privacy Guarantee
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-foreground leading-tight">
                Privacy & Zero-Identity{" "}
                <span className="bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent">
                  Protocol
                </span>
              </h1>
              <p className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed max-w-xl">
                At NoSTDs, privacy is not a checkbox. It is our core architectural foundation. We design our platforms to protect your medical details, keeping you fully anonymous.
              </p>
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className="text-xs text-muted-foreground bg-muted border border-border px-3 py-1 rounded-full">
                  Last Updated: June 2026
                </span>
                <span className="text-xs text-muted-foreground bg-muted border border-border px-3 py-1 rounded-full">
                  Release: v2.4 (Secure Release)
                </span>
              </div>
            </div>

            {/* Right side illustration image */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative w-[260px] h-[190px] sm:w-[350px] sm:h-[260px] lg:w-[420px] lg:h-[280px]">
                <img 
                  src="/images/privacy-illustration.png" 
                  alt="Privacy Security Shield Illustration" 
                  className="object-contain w-full h-full drop-shadow-md select-none pointer-events-none"
                />
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Main Full Layout Area */}
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-12">
        
        {/* 12-Column Responsive Full Width Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Navigation: Chapters Index (Sticky, 3 columns) */}
          <div className="lg:col-span-3 lg:sticky lg:top-24 space-y-4">
            <div className="space-y-2">
              <h3 className="text-sm uppercase font-extrabold tracking-widest text-muted-foreground px-2">
                On This Page
              </h3>
              <nav className="space-y-0.5">
                {policySections.map((section) => {
                  const Icon = section.icon;
                  return (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        const el = document.getElementById(section.id);
                        if (el) {
                          window.scrollTo({
                            top: el.offsetTop - 100,
                            behavior: "smooth"
                          });
                        }
                      }}
                      className="flex items-center gap-2.5 px-3 py-2 text-sm font-bold text-muted-foreground hover:text-primary rounded-lg hover:bg-muted/50 transition-all duration-200"
                    >
                      <Icon className="size-4 text-muted-foreground/80 shrink-0" />
                      <span className="truncate">{section.title}</span>
                    </a>
                  );
                })}
              </nav>
            </div>

            <div className="pt-4">
              <h4 className="text-sm font-bold text-foreground mb-1.5">Immutable Privacy Policy</h4>
              <p className="text-xs text-muted-foreground leading-normal">
                Our code has zero third-party integrations that link testing parameters to identifiable information. Your data belongs to you.
              </p>
            </div>
          </div>

          {/* Right Content Column: (9 columns, Wide Layout) */}
          <div className="lg:col-span-9 space-y-12">
            {policySections.map((section) => {
              const Icon = section.icon;
              return (
                <section 
                  key={section.id} 
                  id={section.id} 
                  className="scroll-mt-28 space-y-3.5"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <Icon className="size-5" />
                    </div>
                    <div>
                      <h2 className="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight">
                        {section.title}
                      </h2>
                      <p className="text-xs sm:text-sm text-primary font-bold tracking-wide uppercase mt-0.5">
                        {section.subtitle}
                      </p>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {section.description}
                  </p>

                  {/* Clean Ordered List Layout (No cards or grid boxes) */}
                  <ol className="list-decimal pl-5 space-y-2 pt-1">
                    {section.points.map((point, index) => (
                      <li 
                        key={index} 
                        className="text-sm sm:text-base text-foreground leading-relaxed pl-1"
                      >
                        {point}
                      </li>
                    ))}
                  </ol>

                  <div className="pt-6" />
                </section>
              );
            })}

            {/* Simple Contact / Help Section */}
            <div className="pt-6 space-y-3">
              <div className="flex items-center gap-2 text-foreground">
                <HelpCircle className="size-6 text-primary" />
                <h3 className="font-extrabold text-xl">Have Privacy Questions?</h3>
              </div>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                If you suspect a listed lab partner is asking for your identity or violating our anonymous guidelines, please notify us immediately through our encrypted compliance channel:
              </p>
              <p className="text-xs sm:text-sm md:text-base font-mono bg-muted/40 p-4 rounded-xl border border-border/40 text-foreground block sm:inline-block select-all break-words">
                securesupport@nostds.in (PGP Key ID: 0x98A1FD88)
              </p>
            </div>

          </div>

        </div>

        {/* Flat Footer Disclaimer */}
        <div className="mt-16 pt-8 text-center max-w-2xl mx-auto space-y-4">
          <ShieldCheck className="size-7 text-primary mx-auto" />
          <h4 className="text-sm uppercase font-black tracking-widest text-foreground">
            Our Data Minimization Pledge
          </h4>
          <p className="text-sm text-muted-foreground leading-relaxed">
            We will never track cookies for marketing. We will never share logs with third-party networks. All medical bookings are fully isolated, temporary, and self-expiring. Your health record belongs to you alone.
          </p>
        </div>

      </div>
    </div>
  );
}

