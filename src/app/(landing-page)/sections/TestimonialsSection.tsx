"use client";

import React from "react";
import { Star, Quote } from "lucide-react";

/* ─────────────── DATA ─────────────── */
const row1 = [
  {
    name: "Rahul Mehta",
    role: "Software Engineer, Pune",
    avatar: "RM",
    avatarBg: "#6366f1",
    quote:
      "I used SafeConnect's Clean Check ID to share my STD status with my partner before our first date. It felt safe, private, and completely judgement-free. This platform is genuinely needed.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Marketing Manager, Delhi",
    avatar: "PS",
    avatarBg: "#e11d48",
    quote:
      "I scanned my partner's QR code on SafeConnect before meeting. Knowing his status was verified gave me real peace of mind. I wish this existed years ago — absolute must-have.",
    rating: 5,
  },
  {
    name: "Aditya Nair",
    role: "Student, Bangalore",
    avatar: "AN",
    avatarBg: "#0284c7",
    quote:
      "Booked an anonymous STD panel at a NABL-certified lab near my college through SafeConnect. Results came digitally in 6 hours. No awkward counter conversation — just clean, fast, private.",
    rating: 5,
  },
  {
    name: "Sneha Kapoor",
    role: "Nurse, Hyderabad",
    avatar: "SK",
    avatarBg: "#059669",
    quote:
      "I recommend SafeConnect to patients who are hesitant about clinic visits. The verified diagnostic centres, digital reports, and Clean Check ID system are exactly what sexual healthcare needs.",
    rating: 5,
  },
  {
    name: "Vikram Joshi",
    role: "Entrepreneur, Mumbai",
    avatar: "VJ",
    avatarBg: "#d97706",
    quote:
      "Used the at-home testing kit from SafeConnect. Discreet packaging, easy sample collection, and lab-certified results on my phone in under 24 hours. Effortless and completely private.",
    rating: 5,
  },
  {
    name: "Ananya Reddy",
    role: "Graphic Designer, Chennai",
    avatar: "AR",
    avatarBg: "#db2777",
    quote:
      "The centre listings with real ratings helped me pick a trusted clinic in 2 minutes. I shared my verified Clean Check badge on a dating app — it actually sparked a healthy conversation.",
    rating: 5,
  },
];


const row2 = [
  {
    name: "Karan Singh",
    role: "General Physician, Chandigarh",
    avatar: "KS",
    avatarBg: "#7c3aed",
    quote:
      "I now direct patients to SafeConnect before I refer them elsewhere. The Clean Check ID verification is medically sound and reduces stigma enormously. It's changing how people approach STD testing.",
    rating: 5,
  },
  {
    name: "Meera Iyer",
    role: "HR Professional, Kolkata",
    avatar: "MI",
    avatarBg: "#0891b2",
    quote:
      "My partner and I both verified our status through SafeConnect before committing. Sharing QR codes felt modern and responsible — not embarrassing at all. Truly brilliant concept.",
    rating: 5,
  },
  {
    name: "Rohan Das",
    role: "Teacher, Jaipur",
    avatar: "RD",
    avatarBg: "#16a34a",
    quote:
      "Found a verified STD clinic 1 km from home, booked anonymously, and got a digital report. SafeConnect made an intimidating process feel completely routine and stress-free.",
    rating: 5,
  },
  {
    name: "Divya Patel",
    role: "Pharmacist, Ahmedabad",
    avatar: "DP",
    avatarBg: "#ea580c",
    quote:
      "The anonymous booking feature is what sold me. No name on the appointment slip, no awkward registration — just a QR code and accurate lab results. SafeConnect gets privacy right.",
    rating: 5,
  },
  {
    name: "Arjun Menon",
    role: "Architect, Kochi",
    avatar: "AM",
    avatarBg: "#be185d",
    quote:
      "I used the Clean Check ID on a matrimonial platform. My match appreciated the transparency. SafeConnect is quietly but meaningfully improving how India approaches sexual health conversations.",
    rating: 5,
  },
  {
    name: "Lakshmi Venkat",
    role: "Data Analyst, Hyderabad",
    avatar: "LV",
    avatarBg: "#1d4ed8",
    quote:
      "Ordered a home STD kit through SafeConnect — arrived in plain packaging, simple instructions, and results in 18 hours via app. Zero clinic anxiety. This is the future of healthcare access.",
    rating: 5,
  },
];

/* ─────────────── STAR RATING ─────────────── */
function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="size-3.5 fill-amber-400 text-amber-400" />
      ))}
    </div>
  );
}

/* ─────────────── TESTIMONIAL CARD ─────────────── */
function TestimonialCard({
  item,
}: {
  item: (typeof row1)[0];
}) {
  return (
    <div
      className="
        relative flex-shrink-0 w-[310px] md:w-[340px]
        flex flex-col gap-4
        rounded-2xl p-5
        bg-card border border-border
        shadow-sm
      "
    >
      {/* Quote icon */}
      <Quote className="size-6 text-primary/20 absolute top-4 right-4" />

      {/* Stars */}
      <Stars count={item.rating} />

      {/* Quote text */}
      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-4 pr-2">
        {item.quote}
      </p>

      {/* Author */}
      <div className="flex items-center gap-3 mt-auto pt-1 border-t border-border">
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 text-[11px] font-black text-white"
          style={{ backgroundColor: item.avatarBg }}
        >
          {item.avatar}
        </div>
        <div className="flex flex-col">
          <span className="text-[13px] font-bold text-foreground leading-tight">
            {item.name}
          </span>
          <span className="text-[11px] text-muted-foreground">{item.role}</span>
        </div>
      </div>
    </div>
  );
}

/* ─────────────── MARQUEE ROW ─────────────── */
function MarqueeRow({
  items,
  direction = "left",
  speed = 40,
}: {
  items: (typeof row1);
  direction?: "left" | "right";
  speed?: number;
}) {
  // Duplicate for seamless loop
  const doubled = [...items, ...items];
  const totalWidth = doubled.length * (340 + 16); // card width + gap
  const duration = totalWidth / speed;

  return (
    <div className="relative overflow-hidden w-full">
      {/* Left fade */}
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to right, var(--background), transparent)" }}
      />
      {/* Right fade */}
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to left, var(--background), transparent)" }}
      />

      <div
        className="flex gap-4 w-max"
        style={{
          animation: `marquee-${direction} ${duration}s linear infinite`,
        }}
      >
        {doubled.map((item, i) => (
          <TestimonialCard key={`${item.name}-${i}`} item={item} />
        ))}
      </div>
    </div>
  );
}

/* ─────────────── SECTION ─────────────── */
export default function TestimonialsSection() {
  return (
    <section className="relative w-full bg-background overflow-hidden py-16 md:py-24">

      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(99,102,241,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10">

        {/* ── Header ── */}
        <div className="flex flex-col items-center text-center gap-3 mb-10 md:mb-14 px-5">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-[11px] font-bold uppercase tracking-widest">
            <Star className="size-3 fill-primary" />
            Testimonials
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground leading-[1.1]">
            Loved by{" "}
            <span className="bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent">
              Thousands
            </span>
          </h2>

          <p className="max-w-md text-muted-foreground text-sm sm:text-base leading-relaxed">
            Real stories from people who found trusted STD testing through SafeConnect.
          </p>
        </div>

        {/* ── Rows ── */}
        <div className="flex flex-col gap-4">
          <MarqueeRow items={row1} direction="left"  speed={38} />
          <MarqueeRow items={row2} direction="right" speed={34} />
        </div>

      </div>

      {/* ── Keyframes injected as style tag ── */}
      <style>{`
        @keyframes marquee-left {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0%   { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </section>
  );
}
