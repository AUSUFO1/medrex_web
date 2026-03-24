'use client';

import Link from 'next/link';
import { ArrowRight, BadgeCheck, Building2, CreditCard, ShieldCheck, Sparkles } from 'lucide-react';
import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';
import { Reveal } from '@/components/ui/reveal';
import { QRPlaceholder } from './mockups';

const plans = [
  {
    name: 'Free',
    price: '$0',
    cadence: '/month',
    copy: 'A gentle starting point for individuals.',
    features: ['Personal dashboard', 'Basic health record vault', 'Appointment reminders', 'Single user access'],
  },
  {
    name: 'Pro',
    price: '$12',
    cadence: '/month',
    copy: 'For active patients and families who want the full MedRex layer.',
    features: ['Unlimited records', 'AI summaries', 'Priority telemedicine', 'Caregiver sharing', 'Advanced reminder logic'],
    featured: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    cadence: '',
    copy: 'For providers, clinics, employers, and digital health programs.',
    features: ['Admin console', 'Organization billing', 'Paystack-ready collections', 'Onboarding support', 'Custom agreements'],
  },
];

const faqs = [
  {
    title: 'Can MedRex billing connect to Paystack?',
    copy: 'Yes. This page is prepared for a Paystack-backed flow. The current buttons are placeholder CTAs until your real checkout integration is connected.',
  },
  {
    title: 'Can I start on Free and upgrade later?',
    copy: 'Yes. The pricing system is designed for progressive upgrade paths from individual use to premium care coordination.',
  },
  {
    title: 'What does Enterprise include?',
    copy: 'Shared dashboards, admin controls, pricing support, onboarding guidance, and custom care or payment workflows.',
  },
];

export default function PricingPage() {
  return (
    <div className="shell">
      <Navbar />
      <main className="page-main">
        <section className="section">
          <div className="container">
            <Reveal>
              <span className="eyebrow">Pricing</span>
              <div className="mt-8 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
                <div>
                  <h1 className="text-[clamp(2.45rem,10vw,5.6rem)] font-semibold leading-[0.95]">
                    Pricing that scales from one patient to an <span className="text-gradient">entire care network.</span>
                  </h1>
                  <p className="mt-6 max-w-xl text-base leading-8 sm:text-lg">
                    Built for a simple consumer upgrade path today and a Paystack-backed billing rollout when you are ready to connect your real payment flow.
                  </p>
                </div>
                <div className="surface-panel rounded-[2.2rem] p-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--color-primary)]">Billing setup</p>
                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-[1.5rem] bg-[var(--color-background)] p-5">
                      <CreditCard size={18} className="text-[var(--color-primary)]" />
                      <p className="mt-4 text-lg font-semibold text-[var(--color-text)]">Paystack ready</p>
                      <p className="mt-2 text-sm leading-7">Prepared for checkout links, subscriptions, and payment references.</p>
                    </div>
                    <div className="rounded-[1.5rem] bg-[var(--color-background)] p-5">
                      <ShieldCheck size={18} className="text-[var(--color-secondary)]" />
                      <p className="mt-4 text-lg font-semibold text-[var(--color-text)]">Role-based access</p>
                      <p className="mt-2 text-sm leading-7">Supports patient, family, clinic, and enterprise billing visibility.</p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="grid gap-5 xl:grid-cols-3">
              {plans.map((plan, index) => (
                <Reveal key={plan.name} delay={index * 0.05}>
                  <div className={`h-full rounded-[2.2rem] border p-6 ${plan.featured ? 'border-[var(--color-primary)] bg-[var(--color-surface)] shadow-[var(--shadow-lg)]' : 'surface-panel'}`}>
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className={`text-sm uppercase tracking-[0.22em] ${plan.featured ? 'text-[var(--color-primary)]' : 'text-[var(--color-text-soft)]'}`}>{plan.name}</p>
                          <p className="mt-4 text-4xl font-semibold sm:text-5xl">{plan.price}</p>
                          <p className="mt-2 text-sm">{plan.cadence}</p>
                        </div>
                        {plan.featured && (
                          <div className="rounded-full bg-[var(--color-accent)] px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--color-primary)] sm:text-xs sm:tracking-[0.18em]">Recommended</div>
                        )}
                      </div>
                      <p className="mt-5 text-sm leading-7">{plan.copy}</p>
                      <div className="mt-8 space-y-3">
                        {plan.features.map((feature) => (
                          <div key={feature} className="flex items-center gap-3 rounded-[1.3rem] bg-[var(--color-background)] px-4 py-3 text-sm">
                            <BadgeCheck size={16} className="text-[var(--color-primary)]" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                      <Link
                        href="/#download"
                        className={`mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition ${
                          plan.featured ? 'bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-dark)]' : 'border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text)]'
                        }`}
                      >
                        Get Started
                        <ArrowRight size={16} />
                      </Link>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="enterprise" className="section">
          <div className="container">
            <Reveal>
              <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                <div className="surface-panel rounded-[2.4rem] p-6 lg:p-10">
                  <span className="eyebrow">
                    <Building2 size={14} className="text-[var(--color-primary)]" />
                    Enterprise rollouts
                  </span>
                  <h2 className="mt-6 text-3xl font-semibold sm:text-4xl">Launch a premium care experience for your organization.</h2>
                  <p className="mt-5 max-w-2xl text-base leading-8">
                    Use MedRex for provider groups, insurer wellness programs, clinics, or digital health initiatives that need clean patient experiences and organized operations.
                  </p>
                  <div className="mt-8 grid gap-4 md:grid-cols-3">
                    {[
                      'Custom onboarding',
                      'Shared care dashboards',
                      'Paystack-enabled payment flows',
                    ].map((item) => (
                      <div key={item} className="rounded-[1.5rem] bg-[var(--color-background)] p-5 text-sm font-medium text-[var(--color-text)]">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="justify-self-start lg:justify-self-auto">
                  <QRPlaceholder />
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <Reveal>
              <span className="eyebrow">
                <Sparkles size={14} className="text-[var(--color-primary)]" />
                Pricing FAQ
              </span>
              <h2 className="section-title mt-6 max-w-3xl">A few practical questions before you connect your real checkout.</h2>
            </Reveal>

            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              {faqs.map((faq, index) => (
                <Reveal key={faq.title} delay={index * 0.04}>
                  <div className="surface-panel h-full rounded-[2rem] p-6">
                    <h3 className="text-2xl font-semibold">{faq.title}</h3>
                    <p className="mt-4 text-sm leading-7">{faq.copy}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
