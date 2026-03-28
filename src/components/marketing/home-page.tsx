'use client';

import Footer from '@/components/layout/footer';
import Navbar from '@/components/layout/navbar';
import DownloadSection from '@/components/marketing/home/DownloadSection';
import FeaturesSection from '@/components/marketing/home/FeaturesSection';
import FlowSection from '@/components/marketing/home/FlowSection';
import Hero from '@/components/marketing/home/hero/Hero';
import PlatformSection from '@/components/marketing/home/PlatformSection';
import PricingPreviewSection from '@/components/marketing/home/PricingPreviewSection';
import { FAQSection } from '@/components/marketing/sections/FAQSection';
import { TestimonialsSection } from '@/components/marketing/sections/TestimonialsSection';
import {
  homeFAQs,
  homeProfessionalTestimonials,
  homeUserTestimonials,
} from '@/components/marketing/content-data';

const homeTestimonials = [...homeUserTestimonials, ...homeProfessionalTestimonials];

export default function HomePage() {
  return (
    <div id="top" className="shell">
      <Navbar />
      <main className="page-main">
        <Hero />
        <FeaturesSection />
        <PlatformSection />
        <FlowSection />
        <PricingPreviewSection />
        <TestimonialsSection title="Trusted by patients and modern care teams." testimonials={homeTestimonials} />
        <FAQSection id="faq" title="Common questions about MedRex" faqs={homeFAQs} />
        <DownloadSection />
      </main>
      <Footer />
    </div>
  );
}
