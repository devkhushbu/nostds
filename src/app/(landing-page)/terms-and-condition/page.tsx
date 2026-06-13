import React from "react";
import type { Metadata } from "next";
import TermsAndConditionClient from "./TermsAndConditionClient";

export const metadata: Metadata = {
  title: "Terms & Conditions | NoSTDs - 100% Confidential & Anonymous STD Status Booking",
  description: "Review our user agreements, platform usage policies, and liability disclaimers for anonymous clinical bookings on NoSTDs. Understand intermediary regulations.",
};

export default function TermsAndConditionPage() {
  return (
    <TermsAndConditionClient />
  );
}
