"use client";

import React from "react";
import { CenterItem } from "../../_components/data";

interface AboutSectionProps {
  details: CenterItem;
  overviewRef: React.RefObject<HTMLDivElement | null>;
}

function parseBoldText(text: string) {
  if (!text) return "";
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="font-bold text-foreground">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
}

function renderRichContent(text: string) {
  if (!text) return null;

  // Split by double newlines into logical blocks
  const blocks = text.split("\n\n");

  return blocks.map((block, index) => {
    const trimmed = block.trim();
    if (!trimmed) return null;

    // Check if block contains list items
    if (trimmed.startsWith("- ") || trimmed.startsWith("• ") || trimmed.includes("\n- ") || trimmed.includes("\n• ")) {
      const items = trimmed
        .split(/\n[-•]\s+|^[-•]\s+/)
        .map(i => i.trim())
        .filter(Boolean);
      return (
        <ul key={index} className="space-y-4 my-6">
          {items.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-sm sm:text-[15px] text-neutral-600 dark:text-neutral-300 font-normal hover:text-foreground transition-colors duration-200 leading-relaxed">
              <span className="mt-[9px] w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
              <span>{parseBoldText(item)}</span>
            </li>
          ))}
        </ul>
      );
    }

    // Check if it's a markdown-like heading
    if (trimmed.startsWith("###")) {
      return (
        <h3 key={index} className="text-xl sm:text-2xl font-bold text-foreground tracking-tight mt-10 mb-4">
          {parseBoldText(trimmed.replace(/^###\s*/, ""))}
        </h3>
      );
    }

    // Check if it is a short structural line that works as a subheader
    if (trimmed.length < 80 && !trimmed.endsWith(".")) {
      return (
        <h4 key={index} className="text-xs font-bold text-primary uppercase tracking-wider mt-6 mb-2">
          {parseBoldText(trimmed)}
        </h4>
      );
    }

    // Normal paragraph
    return (
      <p key={index} className="text-sm sm:text-[15px] text-neutral-600 dark:text-neutral-300 leading-relaxed font-normal hover:text-foreground transition-colors duration-200 my-4">
        {parseBoldText(trimmed)}
      </p>
    );
  });
}

function getBlogContent(details: CenterItem) {
  const name = details.name || "This Diagnostic Center";
  const state = details.locationState || "your state";
  const area = details.area || "your city";
  
  return `For patients in **${state.toUpperCase()}** looking to get tested professionally, understanding clinical diagnostics is crucial. **${name}** is a specialized diagnostic manifest designed for commercial health profiles processed via advanced lab mode. Unlike standard public hospitals (which are meant for general consultations with long queue times), **${name}** is the golden key for private reports, particularly because it allows patients to claim complete diagnostic privacy and secure online reporting under strict quality controls.

### The Pain of Public Testing & Stigma

Traditionally, getting tested for STDs or general health profiles required coordination with public doctors, manual entry of sensitive details, and compiling physical paper sheets in public view. This process took days, leading to delays in treatment, increased anxiety, and potential privacy leaks due to handling errors. At **${name}**, we saw how these confidentiality hurdles were bottlenecking wellness for private individuals and couples in **${area}**.

### Enter ${name}: Private & Automated Diagnostics

We designed **${name}** to simplify cross-border/private clinical testing. Our platform automatically generates compliant, secure, and anonymous test registrations. As soon as a patient books an appointment, our system pulls the test details, maps the patient to a secure barcode ID, and generates the necessary digital clearance and reports.

- **Automated Report Generation**: Seamlessly access test results online without manual clinic visits or physical paper trails.
- **Coded Patient Registration**: Avoid disclosing sensitive personal identifiers through our secure barcoding system.
- **Home Collection Ready**: Automatically receive sample collection at your preferred location in unmarked, discreet packaging.

### Best Practices for Smooth Health Screening

To ensure your clinical tests and reports pass through without friction, keep these rules in mind: first, ensure you follow fasting requirements (usually 8-12 hours for blood panels); second, verify that your contact details are correct so secure reports reach only you; and third, use a trusted diagnostic partner like **${name}** to automate the entire workflow from booking to digital clearance.`;
}

export function AboutSection({ details, overviewRef }: AboutSectionProps) {
  const blogContent = React.useMemo(() => {
    return getBlogContent(details);
  }, [details]);

  return (
    <div
      id="overview"
      ref={overviewRef}
      className="scroll-mt-24 py-6 flex flex-col gap-6"
    >
      <div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground tracking-tight leading-tight">
          What is {details.name} Clinical Screening?
        </h2>
        <div className="flex items-center gap-2 text-[10px] sm:text-[11px] font-bold text-muted-foreground uppercase tracking-wide mt-2">
          <span>Medical Review</span>
          <span>•</span>
          <span>5 Min Read</span>
          <span>•</span>
          <span className="text-primary font-black">Verified Source</span>
        </div>
      </div>

      {/* Long text details - Styled like a premium blog editor */}
      <div className="space-y-4">
        {renderRichContent(blogContent)}
      </div>

      {/* Modalities Badges */}
      <div className="flex flex-col gap-3.5 mt-4 pt-6 border-t border-border/50">
        <span className="text-xs font-bold text-foreground uppercase tracking-wider">
          Available Diagnostics & Equipment:
        </span>
        <div className="flex flex-wrap gap-2.5">
          {details.facilities?.map((fac, i) => (
            <span
              key={i}
              className="px-3.5 py-2 rounded-xl bg-muted border border-border text-xs font-bold text-foreground hover:bg-muted/80 transition-colors flex items-center gap-1.5"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              {fac}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
