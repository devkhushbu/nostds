"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState, useCallback } from "react";

const menuItems = [
  { name: "Home", href: "/" },
  { name: "Listings", href: "/listings" },
  { name: "API Partners", href: "/api-partners" },
  { name: "Diagnostic Centers", href: "/diagnostic-centers" },
  { name: "About", href: "/about" },
];

export const Navbar = () => {
  const [menuState, setMenuState] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleRouteChange = () => {
      setMenuState(false);
    };

    window.addEventListener("routeChangeStart", handleRouteChange);
    window.addEventListener("hashchange", handleRouteChange);

    return () => {
      window.removeEventListener("routeChangeStart", handleRouteChange);
      window.removeEventListener("hashchange", handleRouteChange);
    };
  }, []);

  // Optimized scroll handler
  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 50);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const nav = document.querySelector("nav");
      if (menuState && nav && !nav.contains(event.target as Node)) {
        setMenuState(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuState]);

  return (
    <header>
      <nav
        data-state={menuState && "active"}
        className={cn(
          "fixed z-50 w-full transition-all duration-300",
          isScrolled ? "top-0 md:top-3 px-0 md:px-4" : "top-0 px-4"
        )}
      >
        <div
          className={cn(
            "mx-auto w-full transition-all duration-300",
            isScrolled
              ? "bg-background/85 border-b border-border/40 backdrop-blur-md px-6 py-3 shadow-lg md:max-w-5xl md:border md:rounded-full md:py-1.5"
              : "max-w-6xl px-6 py-4"
          )}
        >
          <div className="flex items-center justify-between gap-4">
            
            {/* Left: Logo */}
            <div className="flex items-center space-x-2 z-10 flex-shrink-0">
              <Link
                href="/"
                aria-label="home"
                className="flex items-center gap-2"
                onClick={() => setMenuState(false)}
              >
                <Image
                  src="/images/logo-dark.png"
                  alt="NoSTDs Logo"
                  width={28}
                  height={28}
                  className="h-6 sm:h-7 w-auto dark:hidden"
                />
                <Image
                  src="/images/logo-light.png"
                  alt="NoSTDs Logo"
                  width={28}
                  height={28}
                  className="h-6 sm:h-7 w-auto hidden dark:block"
                />
                <span className="text-foreground sm:text-lg md:text-xl lg:text-2xl font-bold tracking-tight">
                  NoSTDs
                </span>
              </Link>
            </div>

            {/* Center: Nav links (never wraps, flex-1 centers it cleanly) */}
            <div className="hidden lg:flex items-center justify-center flex-1">
              <ul className="flex gap-8 text-sm font-semibold">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className="block text-neutral-800 dark:text-neutral-200 hover:text-primary dark:hover:text-white transition-colors duration-200"
                      onClick={() => setMenuState(false)}
                    >
                      <span>{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: Auth buttons (standard shadcn, no gradient backgrounds) */}
            <div className="hidden lg:flex items-center gap-3 z-10 flex-shrink-0">
              <Button
                asChild
                variant="outline"
                size="sm"
              >
                <Link href="#contact" onClick={() => setMenuState(false)}>
                  <span>Login</span>
                </Link>
              </Button>
              <Button
                asChild
                variant="default"
                size="sm"
              >
                <Link href="#contact" onClick={() => setMenuState(false)}>
                  <span>Sign Up</span>
                </Link>
              </Button>
            </div>

            {/* Mobile toggler */}
            <div className="flex items-center lg:hidden z-10">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setMenuState(!menuState)}
                aria-label={menuState ? "Close Menu" : "Open Menu"}
                className="rounded-full flex items-center justify-center border border-border bg-background hover:bg-muted text-foreground transition-all duration-200"
              >
                {menuState ? <X className="size-4" /> : <Menu className="size-4" />}
              </Button>
            </div>
          </div>

          {/* Mobile menu dropdown */}
          {menuState && (
            <div className="bg-background w-full flex flex-col items-center mt-3 space-y-6 rounded-2xl border border-border p-6 shadow-xl lg:hidden">
              <ul className="w-full space-y-4 text-center">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className="text-muted-foreground hover:text-foreground text-sm font-medium block py-1 duration-150"
                      onClick={() => setMenuState(false)}
                    >
                      <span>{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="flex w-full flex-col space-y-2 sm:flex-row sm:justify-center sm:gap-4 sm:space-y-0">
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="w-full sm:w-auto"
                >
                  <Link href="#contact" onClick={() => setMenuState(false)}>
                    <span>Login</span>
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="default"
                  size="sm"
                  className="w-full sm:w-auto"
                >
                  <Link href="#contact" onClick={() => setMenuState(false)}>
                    <span>Sign Up</span>
                  </Link>
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;