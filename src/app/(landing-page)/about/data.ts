export interface AboutHeroData {
  backgroundImage: string;
  tag: string;
  title: string;
  subtitle: string;
}

export interface AboutPageData {
  hero: AboutHeroData;
  meta: {
    readTime: string;
    author: string;
    publishDate: string;
    verified: boolean;
  };
  introduction: string;
  content: string;
  sidebarStats: {
    value: string;
    label: string;
    description: string;
  }[];
}

export const aboutPageData: AboutPageData = {
  hero: {
    backgroundImage: "/images/hero-bg.png",
    tag: "ABOUT NoSTDs PLATFORM",
    title: "About NoSTDs",
    subtitle: "Empowering safer relationships through confidential STD testing, secure result sharing, and verified health status."
  },
  meta: {
    readTime: "4 Min Read",
    author: "NoSTDs Editorial Board",
    publishDate: "Updated June 2026",
    verified: true
  },
  introduction: "Empowering safer relationships through confidential STD testing, secure result sharing, and verified health status.\n\nWe bridge patients, testing centers, and modern relationships with privacy-first technology — because knowing is the first step to protecting.",
  content: `NoSTDs exists to make STD testing **simple, confidential, and meaningful** — helping people protect their health and build trust in relationships without fear or stigma.

> **Our Mission**: We bridge patients, testing centers, and modern relationships with privacy-first technology — because knowing is the first step to protecting.

### What We Do
NoSTDs provides a unified platform to support safety at every stage of dating and relationship building:
- **Search & Booking**: Provide a nationwide directory of trusted STD testing centers, diagnostic labs, clinics, and at-home options.
- **Verification passes**: Allow patients to securely upload or receive verified STD test results and generate private shareable verification (Clean Check ID / QR code).
- **Automation & Sync**: Enable diagnostic centers and labs to perform tests and digitally sync verified results to patient profiles — increasing reach and efficiency.
- **Dating APIs**: Offer API integrations for dating and matrimonial platforms to verify status securely and privately.

### Why We Started
In a world where sexual health conversations are still difficult, many people face uncertainty before new relationships. We created NoSTDs to remove barriers — giving individuals control over their status, helping testing centers connect with those who need them, and promoting honesty without compromising privacy.

**Health + Trust = Safer Connections**

### Our Core Values
**Absolute Confidentiality** is at the heart of our platform. Your data is encrypted end-to-end, and no personal health information is ever shared without your explicit consent.

We believe in putting **Health First**. Regular testing saves lives, and we make it simple to know your status and protect yourself and your partners.

Lastly, we value **Transparency & Trust**. Verification builds confidence, allowing patients and centers to work together in a secure, honest ecosystem.

### Join the Movement for Safer Health
Whether you're looking to get tested, share your status securely, or run a testing center — NoSTDs is here for you.

- **Get Tested Now**: Book an anonymous test at a partner diagnostic center.
- **List Your Center**: Join our certified laboratory network to extend your reach.`,
  sidebarStats: [
    {
      value: "100%",
      label: "Confidentiality",
      description: "Bookings processed using dynamic alphanumeric barcodes."
    },
    {
      value: "NABL",
      label: "Accredited Labs",
      description: "Partnered with India's top-tier certified diagnostics."
    },
    {
      value: "12 Hours",
      label: "Average Turnaround",
      description: "Instant digital updates pushed straight to your dashboard."
    }
  ]
};
