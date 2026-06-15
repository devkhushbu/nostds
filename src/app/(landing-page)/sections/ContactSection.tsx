"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Clock, Send, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "General Inquiry",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setIsSubmitting(false);
    setIsSuccess(true);
    setFormData({ name: "", email: "", subject: "General Inquiry", message: "" });
    setTimeout(() => setIsSuccess(false), 5000);
  };

  return (
    <section
      id="contact"
      className="relative w-full overflow-hidden bg-neutral-50/50 dark:bg-neutral-950/30 border-t border-border/40 py-8 md:py-10"
      role="region"
      aria-label="Contact support"
    >
      {/* Background ambient glows */}
      <div className="absolute inset-0 size-full overflow-hidden pointer-events-none z-0">
        <div className="absolute bottom-0 left-[10%] w-[300px] h-[300px] rounded-full bg-primary/5 blur-[80px]" />
        <div className="absolute top-10 right-[10%] w-[300px] h-[300px] rounded-full bg-orange-500/5 blur-[80px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Info Card */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-white dark:bg-neutral-900 border border-border/50 rounded-3xl p-6 md:p-8 shadow-xl shadow-neutral-100/50 dark:shadow-none">
            <div className="flex flex-col gap-4">
              <span className="self-start inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[11px] font-bold uppercase tracking-widest">
                <ShieldCheck className="size-3.5" />
                100% Secure & Private
              </span>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-foreground leading-tight">
                Confidential Support
              </h2>

              <p className="text-muted-foreground text-sm leading-relaxed">
                Have questions about anonymous reports, testing options, or clinic listings? Reach out to our privacy-focused support team. You don&apos;t have to share your real name.
              </p>
            </div>

            {/* Support Details */}
            <div className="flex flex-col gap-5 mt-6 pt-6 border-t border-border/50">
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="size-10 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail className="size-5 text-primary" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Secure Email</span>
                  <a href="mailto:support@safeconnect.org" className="text-sm font-semibold text-foreground hover:text-primary transition-colors mt-0.5">
                    support@safeconnect.org
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="size-10 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="size-5 text-primary" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Toll-Free Hotline</span>
                  <a href="tel:18001234567" className="text-sm font-semibold text-foreground hover:text-primary transition-colors mt-0.5">
                    1800-123-4567
                  </a>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-4">
                <div className="size-10 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Clock className="size-5 text-primary" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Availability</span>
                  <span className="text-sm font-semibold text-foreground mt-0.5">
                    Mon - Sun · 24/7 support
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-7 bg-white dark:bg-neutral-900/60 border border-border/50 rounded-3xl p-6 md:p-8 shadow-xl shadow-neutral-100/50 dark:shadow-none backdrop-blur-xl">
            {isSuccess ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12 px-4">
                <div className="size-16 rounded-full bg-emerald-500/10 flex items-center justify-center mb-4 text-emerald-500 animate-bounce">
                  <CheckCircle2 className="size-8" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Message Sent Privately</h3>
                <p className="text-sm text-muted-foreground mt-2 max-w-sm">
                  Thank you for reaching out. We have received your query and will reply to your secure inbox shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name (Optional) */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-neutral-600 dark:text-neutral-300">
                      Name <span className="text-[10px] text-muted-foreground font-normal">(Optional)</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Anonymous User"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white dark:bg-neutral-900/40 border border-border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/50 transition-all duration-300"
                    />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-neutral-600 dark:text-neutral-300">
                      Secure Email <span className="text-primary">*</span>
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="you@secure-mail.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white dark:bg-neutral-900/40 border border-border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/50 transition-all duration-300"
                    />
                  </div>
                </div>

                {/* Subject Selector */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-neutral-600 dark:text-neutral-300">
                    Subject
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-white dark:bg-neutral-900/40 border border-border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/50 transition-all duration-300 text-foreground"
                  >
                    <option value="General Inquiry" className="bg-background text-foreground">General Inquiry</option>
                    <option value="Clinic Listing" className="bg-background text-foreground">Clinic Listing Questions</option>
                    <option value="Report Verification" className="bg-background text-foreground">Report Verification Support</option>
                    <option value="Privacy Policy" className="bg-background text-foreground">Privacy & Security</option>
                  </select>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-neutral-600 dark:text-neutral-300">
                    Your Message <span className="text-primary">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Describe your request in detail..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-white dark:bg-neutral-900/40 border border-border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/50 transition-all duration-300 resize-none"
                  />
                </div>

                {/* Submit button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full font-bold px-6 py-2.5 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 flex items-center justify-center gap-2 mt-2 shadow-lg shadow-primary/10 hover:shadow-primary/20"
                >
                  {isSubmitting ? (
                    <span className="inline-block size-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>Send Secure Message</span>
                      <Send className="size-4" />
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
