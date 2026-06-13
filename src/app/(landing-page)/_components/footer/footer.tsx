"use client";

import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type PlayStoreButtonProps = React.ComponentProps<typeof Button>;

export function PlayStoreButton({
  className,
  ...props
}: Omit<PlayStoreButtonProps, "children">) {
  return (
    <Button
      variant="outline"
      className={cn(
        "h-11 gap-2.5 bg-muted/40 hover:bg-muted/80 border-border text-foreground rounded-lg transition-all duration-200 px-4",
        className
      )}
      {...props}
    >
      <PlayStoreIcon className="size-5 fill-current text-foreground" />
      <div className="text-left flex flex-col items-start justify-center pr-1">
        <span className="text-[9px] leading-none font-light tracking-wider text-muted-foreground">
          GET IT ON
        </span>
        <p className="text-[14px] font-bold leading-none mt-0.5 text-foreground">Google Play</p>
      </div>
    </Button>
  );
}

function PlayStoreIcon({
  fill = "currentColor",
  ...props
}: React.ComponentProps<"svg">) {
  return (
    <svg viewBox="0 0 24 24" fill={fill} {...props}>
      <path d="m21.762,9.942L4.67.378c-.721-.466-1.635-.504-2.393-.099-.768.411-1.246,1.208-1.246,2.08v19.282c0,.872.477,1.668,1.246,2.079.755.404,1.668.37,2.393-.098l17.092-9.564c.756-.423,1.207-1.192,1.207-2.058s-.451-1.635-1.207-2.058Zm-5.746-1.413l-2.36,2.36L5.302,2.534l10.714,5.995ZM2.604,21.906V2.094l9.941,9.906L2.604,21.906Zm2.698-.439l8.355-8.355,2.36,2.36-10.714,5.995Zm15.692-8.78l-3.552,1.987-2.674-2.674,2.674-2.674,3.552,1.987c.363.203.402.548.402.686s-.039.483-.402.686Z" />
    </svg>
  );
}

type AppStoreButtonProps = React.ComponentProps<typeof Button>;

export function AppStoreButton({
  className,
  ...props
}: Omit<AppStoreButtonProps, "children">) {
  return (
    <Button
      variant="outline"
      className={cn(
        "h-11 gap-2.5 bg-muted/40 hover:bg-muted/80 border-border text-foreground rounded-lg transition-all duration-200 px-4",
        className
      )}
      {...props}
    >
      <AppleIcon className="size-5 fill-current text-foreground" />
      <div className="text-left flex flex-col items-start justify-center pr-1">
        <span className="text-[9px] leading-none font-light tracking-wider text-muted-foreground">
          Download on the
        </span>
        <p className="text-[14px] font-bold leading-none mt-0.5 text-foreground">App Store</p>
      </div>
    </Button>
  );
}

function AppleIcon({
  fill = "currentColor",
  ...props
}: React.ComponentProps<"svg">) {
  return (
    <svg viewBox="0 0 24 24" fill={fill} {...props}>
      <g id="_Group_2">
        <g id="_Group_3">
          <path
            id="_Path_"
            d="M18.546,12.763c0.024-1.87,1.004-3.597,2.597-4.576c-1.009-1.442-2.64-2.323-4.399-2.378    c-1.851-0.194-3.645,1.107-4.588,1.107c-0.961,0-2.413-1.088-3.977-1.056C6.122,5.927,4.25,7.068,3.249,8.867    c-2.131,3.69-0.542,9.114,1.5,12.097c1.022,1.461,2.215,3.092,3.778,3.035c1.529-0.063,2.1-0.975,3.945-0.975    c1.828,0,2.364,0.975,3.958,0.938c1.64-0.027,2.674-1.467,3.66-2.942c0.734-1.041,1.299-2.191,1.673-3.408    C19.815,16.788,18.548,14.879,18.546,12.763z"
          />
          <path
            id="_Path_2"
            d="M15.535,3.847C16.429,2.773,16.87,1.393,16.763,0c-1.366,0.144-2.629,0.797-3.535,1.829    c-0.895,1.019-1.349,2.351-1.261,3.705C13.352,5.548,14.667,4.926,15.535,3.847z"
          />
        </g>
      </g>
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-neutral-950 text-neutral-300 relative overflow-hidden border-t border-neutral-900 rounded-t-[36px] shadow-[0_-12px_40px_rgba(0,0,0,0.4)]">
      
      {/* Ambient center glow spot - mixes seamlessly with the theme bg */}
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-[450px] h-[60px] bg-gradient-to-b from-primary/20 to-transparent rounded-full filter blur-2xl pointer-events-none z-10" />

      <div className="max-w-7xl mx-auto px-6 pt-12 pb-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Logo & Description Column */}
          <div className="md:col-span-4 flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2 group">
              <Image
                src="/images/logo-light.png"
                alt="SafeConnect Logo"
                width={28}
                height={28}
                className="h-7 w-auto transition-transform duration-200 group-hover:scale-[1.02]"
              />
              <span className="text-white text-xl font-extrabold tracking-tight">
                SafeConnect
              </span>
            </Link>
            <p className="text-sm text-neutral-400 leading-relaxed max-w-sm">
              A confidential directory for STD testing centers and secure status verification for relationships.
            </p>
            
            {/* Social Icons */}
            <div className="flex gap-2.5 mt-2">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-8 h-8 rounded-full bg-neutral-900 hover:bg-primary hover:text-white flex items-center justify-center text-neutral-400 transition-all duration-300 hover:scale-110 shadow-sm" 
                aria-label="Facebook"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-8 h-8 rounded-full bg-neutral-900 hover:bg-primary hover:text-white flex items-center justify-center text-neutral-400 transition-all duration-300 hover:scale-110 shadow-sm" 
                aria-label="Twitter"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-8 h-8 rounded-full bg-neutral-900 hover:bg-primary hover:text-white flex items-center justify-center text-neutral-400 transition-all duration-300 hover:scale-110 shadow-sm" 
                aria-label="LinkedIn"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-8 h-8 rounded-full bg-neutral-900 hover:bg-primary hover:text-white flex items-center justify-center text-neutral-400 transition-all duration-300 hover:scale-110 shadow-sm" 
                aria-label="Instagram"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2c-3.259 0-3.668.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0 3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-2 md:col-start-6">
            <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-200">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link href="/" className="text-sm text-neutral-400 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/listings" className="text-sm text-neutral-400 hover:text-primary transition-colors">
                  Browse Listings
                </Link>
              </li>
              <li>
                <Link href="/#how-it-works" className="text-sm text-neutral-400 hover:text-primary transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/diagnostic-centers" className="text-sm text-neutral-400 hover:text-primary transition-colors">
                  Add Your Center
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-sm text-neutral-400 hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div className="md:col-span-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-200">
              Resources
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link href="/resources/std-info" className="text-sm text-neutral-400 hover:text-primary transition-colors">
                  STD Information
                </Link>
              </li>
              <li>
                <Link href="/resources/testing-guidelines" className="text-sm text-neutral-400 hover:text-primary transition-colors">
                  Testing Guidelines
                </Link>
              </li>
              <li>
                <Link href="/resources/safe-dating-tips" className="text-sm text-neutral-400 hover:text-primary transition-colors">
                  Safe Dating Tips
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-sm text-neutral-400 hover:text-primary transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-neutral-400 hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Stay Updated Column */}
          <div className="md:col-span-3 flex flex-col gap-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-200">
              Stay Updated
            </h3>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Subscribe to our newsletter for updates on new testing centers and health resources.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="flex gap-2 w-full mt-1">
              <input 
                type="email" 
                placeholder="Your email" 
                required
                className="h-10 px-3.5 rounded-lg border border-neutral-800 bg-neutral-900 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-primary/50 w-full"
              />
              <Button type="submit" size="sm" className="h-10 px-4 bg-primary text-white hover:bg-primary/90">
                Subscribe
              </Button>
            </form>
          </div>

        </div>

        {/* Bottom Disclaimer */}
        <div className="mt-10 pt-6 border-t border-neutral-900 text-[11px] md:text-xs text-neutral-500 leading-relaxed text-center md:text-left">
          {/* Copyright, Privacy Policy, Terms of Service */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-4">
            <p className="text-sm text-neutral-400">
              &copy; 2026 Laravel. All rights reserved. | <Link href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link> | <Link href="/terms-and-condition" className="hover:text-primary transition-colors">Terms of Service</Link>
            </p>
          </div>
          <p>
            This directory is for informational purposes only. Always consult healthcare professionals for medical advice.
          </p>
        </div>

      </div>
    </footer>
  );
}
