export interface Testimonial {
  name: string;
  role: string;
  avatar?: string;
  avatarBg?: string;
  quote: string;
  rating: number;
}

export const TESTIMONIALS_COL1: Testimonial[] = [
  {
    name: "Rahul Mehta",
    role: "Software Engineer, Pune",
    avatar: "RM",
    avatarBg: "#6366f1",
    quote: "I used SafeConnect's Clean Check ID to share my STD status with my partner before our first date. It felt safe, private, and completely judgement-free. This platform is genuinely needed.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Marketing Executive, Bangalore",
    avatar: "PS",
    avatarBg: "#ec4899",
    quote: "Sharing test results before getting intimate used to be so awkward and stressful. SafeConnect made it a normal, healthy, and routine part of our dating conversations.",
    rating: 5,
  },
  {
    name: "Arjun Nair",
    role: "Product Designer, Kochi",
    avatar: "AN",
    avatarBg: "#10b981",
    quote: "The verification process is fast and the Clean Check ID looks super clean and professional. It gives real peace of mind to both partners.",
    rating: 5,
  },
  {
    name: "Kriti Sen",
    role: "Content Creator, Mumbai",
    avatar: "KS",
    avatarBg: "#f59e0b",
    quote: "I love that I can show my status without revealing sensitive personal details like my phone number or email. The privacy controls are top-notch.",
    rating: 5,
  }
];

export const TESTIMONIALS_COL2: Testimonial[] = [
  {
    name: "Kabir Malhotra",
    role: "Consultant, Delhi",
    avatar: "KM",
    avatarBg: "#8b5cf6",
    quote: "Finding verified testing centers near me was incredibly simple, and the whole flow to securely share results is completely seamless.",
    rating: 5,
  },
  {
    name: "Sneha Iyer",
    role: "Research Scholar, Chennai",
    avatar: "SI",
    avatarBg: "#3b82f6",
    quote: "A brilliant initiative. SafeConnect takes away the anxiety of dating by promoting transparency, consent, and safety in modern relationships.",
    rating: 5,
  },
  {
    name: "Vikram Rathore",
    role: "Entrepreneur, Jaipur",
    avatar: "VR",
    avatarBg: "#ef4444",
    quote: "Clean Check ID is a game-changer. My partner and I both verified our status before taking things further. Highly recommended for everyone!",
    rating: 5,
  },
  {
    name: "Ananya Gupta",
    role: "Data Analyst, Hyderabad",
    avatar: "AG",
    avatarBg: "#06b6d4",
    quote: "Super secure and extremely private. The QR code sharing system makes verification seamless, instant, and completely secure.",
    rating: 5,
  }
];
