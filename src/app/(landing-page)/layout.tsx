import React from "react";
import { Navbar } from "./_components/navbar/navbar";
import { Footer } from "./_components/footer/footer";

export default function LandingPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="flex-1 w-full">
        {children}
      </main>
      <Footer />
    </div>
  );
}
