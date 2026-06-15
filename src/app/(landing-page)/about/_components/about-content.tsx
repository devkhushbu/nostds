"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import { AboutPageData } from "../data";

interface AboutContentProps {
  data: AboutPageData;
}

// Simple parsing helper for bold text (**text**)
function parseBoldText(text: string) {
  if (!text) return "";
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="font-extrabold text-neutral-900 dark:text-neutral-50">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
}

// Rich text renderer for paragraph content blocks
function renderRichBlock(text: string) {
  if (!text) return null;

  const lines = text.split("\n");
  const elements: React.ReactNode[] = [];
  let currentListItems: string[] = [];

  const flushList = (key: string | number) => {
    if (currentListItems.length > 0) {
      elements.push(
        <ul key={`list-${key}`} className="space-y-3.5 my-6 pl-1">
          {currentListItems.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-base text-neutral-600 dark:text-neutral-300 leading-relaxed font-normal hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors duration-200">
              <span className="mt-[9px] w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
              <span>{parseBoldText(item)}</span>
            </li>
          ))}
        </ul>
      );
      currentListItems = [];
    }
  };

  lines.forEach((line, idx) => {
    const trimmed = line.trim();
    if (!trimmed) {
      flushList(idx);
      return;
    }

    // Check if it's a list item (starts with - or •)
    if (trimmed.startsWith("- ") || trimmed.startsWith("• ")) {
      const itemContent = trimmed.substring(2).trim();
      currentListItems.push(itemContent);
    } else {
      flushList(idx);

      // Check if it's a blockquote (starts with >)
      if (trimmed.startsWith("> ")) {
        const quoteContent = trimmed.substring(2).trim();
        elements.push(
          <blockquote key={idx} className="border-l-4 border-primary bg-primary/5 dark:bg-primary/10 px-6 py-4 my-6 rounded-r-xl text-base sm:text-lg font-medium italic text-neutral-850 dark:text-neutral-200 leading-relaxed">
            {parseBoldText(quoteContent)}
          </blockquote>
        );
      } else if (trimmed.startsWith("###")) {
        // Check if it's a heading
        elements.push(
          <h3 key={idx} className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50 mt-10 mb-4 border-l-4 border-primary pl-4">
            {parseBoldText(trimmed.replace(/^###\s*/, ""))}
          </h3>
        );
      } else {
        // Normal paragraph
        elements.push(
          <p key={idx} className="text-[15px] sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed font-normal hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors duration-200 my-4">
            {parseBoldText(trimmed)}
          </p>
        );
      }
    }
  });

  flushList("final");
  return elements;
}

export default function AboutContent({ data }: AboutContentProps) {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 md:px-12 pt-6 pb-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-12">
        
        {/* Left Side: Article Content (Spans 2 columns on large screens) */}
        <div className="lg:col-span-2 space-y-12">
          {/* Lead Paragraph / Introduction */}
          <p className="text-base sm:text-lg text-neutral-800 dark:text-neutral-200 leading-relaxed font-semibold mb-8">
            {parseBoldText(data.introduction)}
          </p>

          {/* Main Rich-Text Content (styled like a single continuous text editor/blog document) */}
          <div className="space-y-6 prose prose-neutral dark:prose-invert max-w-none">
            {renderRichBlock(data.content)}
          </div>
        </div>

        {/* Right Side: Sticky Stats & Trust Sidebar (Spans 1 column) */}
        <div className="lg:col-span-1">
          <div className="sticky top-28 space-y-8">
            
            {/* Trust Stats Box */}
            <div className="p-6 rounded-2xl border border-neutral-205 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/40 backdrop-blur-sm">
              <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-6">
                Platform Statistics
              </h4>
              
              <div className="space-y-6">
                {data.sidebarStats.map((stat, idx) => (
                  <div key={idx} className="flex flex-col space-y-1 group">
                    <span className="text-3xl font-black text-primary group-hover:scale-105 transition-transform duration-200 origin-left">
                      {stat.value}
                    </span>
                    <span className="text-sm font-bold text-neutral-800 dark:text-neutral-100">
                      {stat.label}
                    </span>
                    <span className="text-xs text-neutral-500 dark:text-neutral-400 leading-normal">
                      {stat.description}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Booking CTA Box */}
            <div className="relative p-6 rounded-2xl overflow-hidden border border-neutral-850 dark:border-neutral-800 shadow-2xl text-white min-h-[260px] flex flex-col justify-between">
              {/* Background Image with Overlay */}
              <div className="absolute inset-0 z-0">
                <Image
                  src="/images/cta-background.png"
                  alt="CTA Background"
                  fill
                  sizes="(max-width: 1024px) 100vw, 350px"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-neutral-950/50 z-0" />
              </div>

              <div className="relative z-10">
                <ShieldCheck className="size-8 text-primary mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]" />
                <h4 className="text-lg font-bold text-white mb-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">
                  Need Confidential Testing?
                </h4>
                <p className="text-xs text-neutral-100 leading-relaxed mb-6 font-medium drop-shadow-[0_1.5px_3px_rgba(0,0,0,0.6)]">
                  NoSTDs coordinates bookings with private barcodes. No real names or government IDs are required during checkout.
                </p>
              </div>
              
              <div className="relative z-10">
                <Link 
                  href="/listings"
                  className="w-full inline-flex items-center justify-center py-2.5 px-4 rounded-xl bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider hover:bg-primary/95 transition-all duration-200 shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98]"
                >
                  Find Testing Centers
                </Link>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
