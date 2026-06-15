"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Eye, EyeOff, ArrowLeft, Mail, Lock, User } from "lucide-react";

export default function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreeTerms) {
      alert("Please agree to the terms and conditions.");
      return;
    }
    setIsLoading(true);
    // Simulate sign up
    setTimeout(() => {
      setIsLoading(false);
      alert("Account registration simulated successfully!");
    }, 1500);
  };

  return (
    <div className="flex min-h-screen w-full flex-col md:flex-row bg-background font-sans text-foreground">
      {/* Left Panel: Stunning 3D Graphic */}
      <div className="relative w-full h-[280px] md:h-auto md:w-1/2 overflow-hidden bg-zinc-950 p-6 md:p-12 flex items-center justify-center rounded-none">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/auth-bg.png"
            alt="Secure Authentication Background"
            fill
            priority
            className="object-cover opacity-90 transition-transform duration-10000 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 via-transparent to-background/20 mix-blend-overlay" />
          <div className="absolute inset-0 bg-black/5" />
        </div>

        {/* Back Link Overlay on Mobile (top left of image) */}
        <div className="absolute left-6 top-6 z-10 md:hidden">
          <Link
            href="/"
            className="inline-flex size-9 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-md transition-colors hover:bg-black/60"
            aria-label="Back to home"
          >
            <ArrowLeft className="size-5" />
          </Link>
        </div>

        {/* Glassmorphic Quote Box (Visible on medium screens and up) */}
        <div className="hidden md:block relative z-10 w-full max-w-md rounded-2xl border border-white/15 bg-white/10 p-8 text-white backdrop-blur-xl shadow-2xl transition-all hover:border-white/25">
          <div className="flex flex-col space-y-6">
            {/* Top quote icon or brand mini */}
            <div className="inline-flex size-9 items-center justify-center rounded-lg bg-white/10 border border-white/10">
              <svg className="size-4 fill-white" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-4.765 2.627-4.765 5.986h4.754V21h-9.967zm-11 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-4.765 2.627-4.765 5.986h4.753V21H3.017z" />
              </svg>
            </div>
            
            <p className="text-lg font-medium leading-relaxed tracking-wide text-white/95">
              &ldquo;We take privacy seriously. All user registration and health data are stored with end-to-end encryption. Protecting your health status is our highest priority.&rdquo;
            </p>

            <div className="border-t border-white/10 pt-4">
              <p className="font-semibold text-white">Security & Integrity Team</p>
              <p className="text-xs text-white/60">NoSTDs Operations & Privacy Group</p>
            </div>
          </div>
        </div>

        {/* Brand floating label */}
        <div className="absolute bottom-6 right-6 z-10 rounded-full border border-white/10 bg-black/30 px-3.5 py-1 text-xs font-semibold text-white/70 backdrop-blur-md">
          Encryption v2.4.9
        </div>
      </div>

      {/* Right Panel: Auth Form */}
      <div className="flex w-full flex-col justify-between bg-background px-6 pt-5 pb-8 md:py-8 md:w-1/2 md:px-12 lg:px-20 xl:px-24 -mt-6 relative z-10 rounded-t-[30px] md:mt-0 md:rounded-none">
        {/* Top Header: Logo & Back Link */}
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="hidden md:group md:inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
            Back to home
          </Link>
          <div className="md:hidden" />
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold tracking-tight text-foreground">NoSTDs</span>
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
          </div>
        </div>

        {/* Center: Form Card Container */}
        <div className="mx-auto mt-4 mb-6 md:my-auto w-full max-w-[400px]">
          {/* Logo Badge (Centered) */}
          <div className="mb-4 flex justify-start justify-center">
            <div className="relative flex size-10 items-center justify-center rounded-xl bg-primary/10 border border-primary/20 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
              <span className="text-lg font-bold text-primary">N</span>
              <div className="absolute -right-0.5 -top-0.5 size-2 rounded-full bg-primary border-2 border-background" />
            </div>
          </div>

          {/* Heading & Description (Centered) */}
          <div className="space-y-1 mb-6 text-center">
            <h1 className="text-2xl font-semibold tracking-tight text-foreground">Create an account</h1>
            <p className="text-sm text-muted-foreground">
              Sign up today to start testing anonymously.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name Field */}
            <div className="space-y-1.5">
              <label htmlFor="name" className="text-sm font-medium text-foreground">
                Name
              </label>
              <div className="relative flex items-center">
                <User className="absolute left-3 size-4 text-muted-foreground pointer-events-none" />
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="pl-10 h-10.5 border-border focus-visible:border-primary/50 focus-visible:ring-primary/20"
                />
              </div>
            </div>

            {/* Email Field */}
            <div className="space-y-1.5">
              <label htmlFor="email" className="text-sm font-medium text-foreground">
                Email
              </label>
              <div className="relative flex items-center">
                <Mail className="absolute left-3 size-4 text-muted-foreground pointer-events-none" />
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 h-10.5 border-border focus-visible:border-primary/50 focus-visible:ring-primary/20"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-1.5">
              <label htmlFor="password" className="text-sm font-medium text-foreground">
                Password
              </label>
              <div className="relative flex items-center">
                <Lock className="absolute left-3 size-4 text-muted-foreground pointer-events-none" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••••••"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10 pr-10 h-10.5 border-border focus-visible:border-primary/50 focus-visible:ring-primary/20"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 p-1 text-muted-foreground hover:text-foreground transition-colors outline-none"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <EyeOff className="size-4" />
                  ) : (
                    <Eye className="size-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Terms and Conditions Checkbox */}
            <div className="flex items-start space-x-2 pt-1.5">
              <Checkbox
                id="terms"
                checked={agreeTerms}
                onCheckedChange={(checked) => setAgreeTerms(!!checked)}
              />
              <label
                htmlFor="terms"
                className="text-xs font-medium leading-none text-muted-foreground cursor-pointer select-none"
              >
                I agree to the{" "}
                <Link
                  href="/terms-and-condition"
                  className="font-semibold text-primary hover:underline"
                >
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link
                  href="/privacy-policy"
                  className="font-semibold text-primary hover:underline"
                >
                  Privacy Policy
                </Link>
                .
              </label>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full h-11 bg-primary text-primary-foreground font-semibold hover:bg-primary/95 transition-all shadow-md active:scale-[0.98] mt-2"
            >
              {isLoading ? (
                <span className="flex items-center gap-2">
                  <span className="size-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                  Creating account...
                </span>
              ) : (
                "Create account"
              )}
            </Button>

            {/* Google SSO Button */}
            <Button
              type="button"
              variant="outline"
              className="w-full h-11 font-medium border-border hover:bg-muted text-foreground transition-all flex items-center justify-center gap-2.5"
            >
              <svg className="size-4.5" viewBox="0 0 24 24" width="18" height="18">
                <path
                  fill="#EA4335"
                  d="M12 5.04c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 1.74 14.96 1 12 1 7.37 1 3.4 3.63 1.45 7.45l3.79 2.93C6.12 6.82 8.84 5.04 12 5.04z"
                />
                <path
                  fill="#4285F4"
                  d="M23.49 12.27c0-.81-.07-1.59-.2-2.34H12v4.43h6.48c-.28 1.47-1.11 2.72-2.36 3.56l3.66 2.84c2.14-1.97 3.71-4.88 3.71-8.49z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.24 14.88c-.23-.69-.37-1.43-.37-2.2s.13-1.51.37-2.2L1.45 7.55C.52 9.4.01 11.49.01 13.7s.51 4.3 1.44 6.15l3.79-2.97z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c3.24 0 5.97-1.08 7.96-2.91l-3.66-2.84c-1.01.68-2.31 1.09-4.3 1.09-3.16 0-5.88-1.78-6.84-4.39L1.37 16.9C3.31 20.72 7.29 23 12 23z"
                />
              </svg>
              Sign up with Google
            </Button>
          </form>

          {/* Bottom link to Login */}
          <div className="mt-6 text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-semibold text-primary hover:text-primary/80 transition-colors"
            >
              Sign in
            </Link>
          </div>
        </div>

        {/* Bottom Footer: Copyright */}
        <div className="flex items-center justify-between text-xs text-muted-foreground/60 pt-4">
          <span>&copy; NoSTDs {new Date().getFullYear()}</span>
          <div className="flex gap-4">
            <Link href="/privacy-policy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link href="/terms-and-condition" className="hover:text-foreground transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
