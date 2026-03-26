// Navigation
export interface NavItem {
  label: string;
  href: string;
}

// Features
export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

// Testimonials
export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar: string;
}

// FAQ
export interface FAQItem {
  question: string;
  answer: string;
}

// Pricing
export interface PricingPlan {
  id: string;
  name: string;
  price: number;
  currency: string;
  interval: string;
  description: string;
  features: string[];
  isPopular: boolean;
  ctaLabel: string;
}

// Stats
export interface Stat {
  id: string;
  label: string;
  value: string;
  suffix: string;
}

// Team / Doctor
export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  avatar: string;
}