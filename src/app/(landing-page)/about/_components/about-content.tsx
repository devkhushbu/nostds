"use client";

import React from "react";
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
              <span className="mt-[9px] w-1.5 h-1.5 rounded-full bg-neutral-900 dark:bg-neutral-100 shrink-0" />
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
          <h3 key={idx} className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50 mt-10 mb-4">
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
    <div className="w-full max-w-6xl mx-auto px-6 md:px-12 pt-6 pb-8">
      <div className="space-y-12">
        {/* Lead Paragraph / Introduction */}
        <p className="text-base sm:text-lg text-neutral-800 dark:text-neutral-200 leading-relaxed font-semibold mb-8">
          {parseBoldText(data.introduction)}
        </p>

        {/* Main Rich-Text Content (styled like a single continuous text editor/blog document) */}
        <div className="space-y-6 prose prose-neutral dark:prose-invert max-w-none">
          {renderRichBlock(data.content)}
        </div>
      </div>
    </div>
  );
}
