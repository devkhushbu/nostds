import React from "react";
import type { Metadata } from "next";
import PrivacyPolicyClient from "./PrivacyPolicyClient";

export const metadata: Metadata = {
  title: "Privacy Policy | NoSTDs - 100% Confidential & Anonymous STD Status Booking",
  description: "Read how NoSTDs implements double-blind protocols, zero-knowledge storage, and dynamic token bookings to protect your diagnostic report privacy. We collect no personal name or identity tracking information.",
};

export default function PrivacyPolicyPage() {
  return (
    <PrivacyPolicyClient />
  );
}
