import React from "react";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="w-full border-t border-border/40 bg-card/50 backdrop-blur-md py-8 px-4 md:px-8 text-neutral-400 z-10 relative">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-foreground text-sm">NoSTDs</span>
          <span className="text-xs text-neutral-500">| Secure Wellness Network</span>
        </div>
        <p className="text-xs text-center md:text-left">
          &copy; {new Date().getFullYear()} NoSTDs. All rights reserved. 100% HIPAA compliant testing.
        </p>
        <div className="flex gap-6 text-xs">
          <Link href="/privacy" className="hover:text-foreground transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-foreground transition-colors">
            Terms of Service
          </Link>
          <Link href="/support" className="hover:text-foreground transition-colors">
            Support
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;