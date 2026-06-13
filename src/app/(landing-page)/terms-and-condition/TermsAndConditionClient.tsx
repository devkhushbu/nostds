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

export default function TermsAndConditionClient() {
  // Simplified project-specific content sections for Terms & Conditions
  const policySections: PolicySection[] = [
    {
      id: "acceptance",
      title: "Acceptance of Terms",
      subtitle: "By accessing NoSTDs, you agree to be bound by these service conditions.",
      icon: ShieldCheck,
      description: "Please read these terms carefully before scheduling appointments or sharing check badges. NoSTDs provides software utility services designed for patient anonymity, which are subject to these guidelines.",
      points: [
        "By accessing our platform, you acknowledge and agree to these terms in full.",
        "If you do not agree with any statement here, you must discontinue platform use immediately.",
        "We reserve the right to modify these rules to align with medical safety standards."
      ]
    },
    {
      id: "platform-nature",
      title: "Nature of Our Service",
      subtitle: "We are an information and booking directory, not a clinical healthcare laboratory.",
      icon: Building2,
      description: "NoSTDs acts as an intermediary database connecting users to independent diagnostic facilities (such as labs and clinics in Patna, Kolkata, and Hyderabad):",
      points: [
        "All blood draws, collection procedures, and analyses are performed by third-party partner labs.",
        "NoSTDs does not employ clinical doctors, venereologists, or medical testing staff.",
        "We do not generate medical results; we only relay encrypted status records."
      ]
    },
    {
      id: "anonymous-use",
      title: "Zero-Identity Guidelines",
      subtitle: "You agree to follow booking protocols to maintain patient anonymity.",
      icon: Lock,
      description: "To protect your medical details, we assign alphanumeric codes instead of database accounts. Users must follow these rules:",
      points: [
        "Do not input real names or phone numbers where alphanumeric tokens are requested.",
        "Keep your dynamic booking identifiers and access tokens confidential and secure.",
        "You are solely responsible for actions performed under your browser session token."
      ]
    },
    {
      id: "sharing-protocol",
      title: "Peer Verification Rules",
      subtitle: "Dynamic status badges are for personal relationship verification only.",
      icon: Key,
      description: "Our status sharing system permits sharing dynamic verified checks (Tested & Cleared badges) with partners. This is governed by strict rules:",
      points: [
        "Status checks must not be used for employment screening, insurance, or legal audits.",
        "You may not sell, trade, or commercially monetize verification links or PIN access details.",
        "We reserve the right to rate-limit bookings if we detect bot traffic or API abuse."
      ]
    },
    {
      id: "expiry-policy",
      title: "Data Erasure & Purging",
      subtitle: "All diagnostic logs expire automatically and cannot be retrieved once deleted.",
      icon: Trash2,
      description: "We enforce absolute data minimization. By using our platform, you accept our automatic deletion policies:",
      points: [
        "Encrypted status records automatically purge from our systems 14 days after delivery.",
        "Manual 'Purge Now' commands delete files permanently and immediately from all relays.",
        "We do not maintain backup servers for deleted reports. Lost codes are unrecoverable."
      ]
    },
    {
      id: "medical-disclaimer",
      title: "Medical Disclaimers",
      subtitle: "Diagnostic results must be interpreted under certified medical supervision.",
      icon: EyeOff,
      description: "NoSTDs is a communication tool, not a diagnostic decision engine. Users must consult licensed specialists:",
      points: [
        "All test panels are run by NABL-accredited laboratories, which are responsible for accuracy.",
        "A 'Cleared' status badge indicates clearance only for the specific tests run on that date.",
        "Consult dermatologists or venereologists to diagnose, treat, or manage health concerns."
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
                Legal Agreements
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-foreground leading-tight">
                Terms &{" "}
                <span className="bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent">
                  Conditions
                </span>
              </h1>
              <p className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed max-w-xl">
                Please read our Terms and Conditions. These rules outline your rights, disclaimers, and guidelines when booking anonymous tests or sharing statuses.
              </p>
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className="text-xs text-muted-foreground bg-muted border border-border px-3 py-1 rounded-full">
                  Last Updated: June 2026
                </span>
                <span className="text-xs text-muted-foreground bg-muted border border-border px-3 py-1 rounded-full">
                  Service Rules: v1.8
                </span>
              </div>
            </div>

            {/* Right side illustration image */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative w-[260px] h-[190px] sm:w-[350px] sm:h-[260px] lg:w-[420px] lg:h-[280px]">
                <img 
                  src="/images/terms-illustration.png" 
                  alt="Terms and Conditions Contract Illustration" 
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
          <div className="lg:col-span-3 sticky top-24 space-y-4">
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
              <h4 className="text-sm font-bold text-foreground mb-1.5">User Consent</h4>
              <p className="text-xs text-muted-foreground leading-normal">
                Using NoSTDs indicates that you accept all medical disclaimers and intermediary terms defined in our documentation.
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
                <h3 className="font-extrabold text-xl">Need Legal Clarifications?</h3>
              </div>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                If you have questions about clinic compliance policies, intermediary obligations, or data handling rules, contact us via:
              </p>
              <p className="text-sm sm:text-base font-mono bg-muted/40 p-4 rounded-xl border border-border/40 text-foreground inline-block select-all">
                securesupport@nostds.in (PGP Key ID: 0x98A1FD88)
              </p>
            </div>

          </div>

        </div>

        {/* Flat Footer Disclaimer */}
        <div className="mt-16 pt-8 text-center max-w-2xl mx-auto space-y-4">
          <ShieldCheck className="size-7 text-primary mx-auto" />
          <h4 className="text-sm uppercase font-black tracking-widest text-foreground">
            Our Service Commitment
          </h4>
          <p className="text-sm text-muted-foreground leading-relaxed">
            We provide privacy-first software scheduling mechanisms. NoSTDs makes no warranties regarding testing accuracy, clinical consultations, or lab delivery times, which are solely governed by your chosen partner diagnostics.
          </p>
        </div>

      </div>
    </div>
  );
}
