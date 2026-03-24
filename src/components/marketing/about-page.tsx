'use client';

import Link from 'next/link';
import { ArrowRight, Globe2, HeartHandshake, LockKeyhole, ShieldCheck, Sparkles, Stethoscope } from 'lucide-react';
import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';
import { Reveal } from '@/components/ui/reveal';
import { DashboardMockup } from './mockups';

const principles = [
  {
    title: 'Care should feel reassuring',
    copy: 'We design patient experiences that reduce stress, not add another complicated dashboard to someone already navigating health decisions.',
    icon: HeartHandshake,
  },
  {
    title: 'Trust is a product feature',
    copy: 'Security, permissions, and transparent health communication are built into MedRex from the first screen onward.',
    icon: ShieldCheck,
  },
  {
    title: 'Technology should support clinicians',
    copy: 'We use AI and automation to remove admin weight so providers can spend more time on real care.',
    icon: Stethoscope,
  },
];

const timeline = [
  { year: '2023', title: 'Concept and clinical discovery', copy: 'Mapped patient pain points, provider workflows, and fragmented record experiences.' },
  { year: '2024', title: 'Prototype and validation', copy: 'Tested consultation, AI summary, and reminder flows with real care operators.' },
  { year: '2025', title: 'Platform consolidation', copy: 'Unified records, telemedicine, and payments into one coherent experience.' },
  { year: '2026', title: 'Launch-ready brand system', copy: 'Prepared a premium, global-facing product experience for scale.' },
];

export default function AboutPage() {
  return (
    <div className="shell">
      <Navbar />
      <main className="page-main">
        <section className="section">
          <div className="container">
            <Reveal>
              <span className="eyebrow">About MedRex</span>
              <div className="mt-8 grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
                <div>
                  <h1 className="text-[clamp(2.45rem,10vw,5.6rem)] font-semibold leading-[0.95]">
                    Building a health platform that feels more like <span className="text-gradient">clarity</span> than complexity.
                  </h1>
                  <p className="mt-6 max-w-xl text-base leading-8 sm:text-lg">
                    MedRex exists to make digital healthcare feel trustworthy, modern, and deeply usable for patients, providers, and care organizations.
                  </p>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <Link href="/#download" className="inline-flex items-center gap-2 rounded-full px-6 py-4 text-sm font-semibold text-white teal-purple shadow-[var(--shadow-lg)] hover:bg-[var(--color-primary-dark)]">
                      Download App
                      <ArrowRight size={16} />
                    </Link>
                    <Link href="/pricing" className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-6 py-4 text-sm font-semibold text-[var(--color-text)]">
                      View Pricing
                    </Link>
                  </div>
                </div>

                <DashboardMockup title="About the platform" caption="Brand, product, and trust story" />
              </div>
            </Reveal>
          </div>
        </section>

        <section id="why-medrex" className="section">
          <div className="container">
            <Reveal>
              <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                <div>
                  <span className="eyebrow">Why MedRex</span>
                  <h2 className="section-title mt-6 max-w-3xl">A premium digital care experience rooted in empathy, privacy, and speed.</h2>
                </div>
                <p className="section-copy">
                  The product language takes cues from premium consumer technology while staying grounded in clinical usefulness.
                </p>
              </div>
            </Reveal>

            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              {principles.map((principle, index) => (
                <Reveal key={principle.title} delay={index * 0.05}>
                  <div className="surface-panel h-full rounded-[2rem] p-6">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--color-accent)] text-[var(--color-primary)]">
                      <principle.icon size={22} />
                    </div>
                    <h3 className="mt-6 text-2xl font-semibold">{principle.title}</h3>
                    <p className="mt-4 text-sm leading-7">{principle.copy}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <Reveal>
              <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
                <div>
                  <span className="eyebrow">Global-ready care</span>
                  <h2 className="mt-6 text-3xl font-semibold sm:text-4xl">Built for distributed patients, clinics, and modern health programs.</h2>
                  <p className="mt-5 text-base leading-8">
                    MedRex is designed for mobile-first care environments where people need timely answers, accessible records, and confidence that their information is protected.
                  </p>
                  <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-[1.5rem] bg-[var(--color-surface)] p-5 shadow-[var(--shadow-sm)]">
                      <Globe2 size={18} className="text-[var(--color-secondary)]" />
                      <p className="mt-3 font-semibold text-[var(--color-text)]">Cross-border friendly</p>
                      <p className="mt-2 text-sm leading-7">Supports organizations serving patients across regions and time zones.</p>
                    </div>
                    <div className="rounded-[1.5rem] bg-[var(--color-surface)] p-5 shadow-[var(--shadow-sm)]">
                      <LockKeyhole size={18} className="text-[var(--color-primary)]" />
                      <p className="mt-3 font-semibold text-[var(--color-text)]">Permission-aware</p>
                      <p className="mt-2 text-sm leading-7">Makes it easier to share the right information with the right people at the right time.</p>
                    </div>
                  </div>
                </div>
                <div className="rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-[var(--shadow-md)]">
                    <p className="text-sm uppercase tracking-[0.24em] text-[var(--color-primary)]">Operating belief</p>
                    <p className="mt-6 text-2xl font-semibold sm:text-3xl">Health products should feel humane, not bureaucratic.</p>
                    <div className="mt-8 grid gap-4">
                      {[
                        'Patient language first',
                        'Provider-grade context in every workflow',
                        'A calm interface for stressful moments',
                        'AI that supports care teams instead of replacing them',
                      ].map((item) => (
                        <div key={item} className="rounded-[1.4rem] border border-[var(--color-border)] bg-[var(--color-background)] px-4 py-4 text-sm text-[var(--color-text)]">
                          {item}
                        </div>
                      ))}
                    </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <Reveal>
              <span className="eyebrow">Journey so far</span>
              <h2 className="section-title mt-6 max-w-3xl">A focused timeline from product idea to launch-ready system.</h2>
            </Reveal>

            <div className="mt-12 grid gap-5 lg:grid-cols-4">
              {timeline.map((item, index) => (
                <Reveal key={item.year} delay={index * 0.04}>
                  <div className="surface-panel h-full rounded-[2rem] p-6">
                    <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--color-primary)]">{item.year}</p>
                    <h3 className="mt-5 text-xl font-semibold">{item.title}</h3>
                    <p className="mt-4 text-sm leading-7">{item.copy}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="trust" className="section">
          <div className="container">
            <Reveal>
              <div className="surface-panel rounded-[2.4rem] p-6 lg:p-10">
                <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
                  <div>
                    <span className="eyebrow">
                      <Sparkles size={14} className="text-[var(--color-primary)]" />
                      Trust and privacy
                    </span>
                    <h2 className="mt-6 text-3xl font-semibold sm:text-4xl">Designed to support privacy-first healthcare from day one.</h2>
                    <p className="mt-5 text-base leading-8">
                      Placeholder trust content below can be replaced with your exact compliance claims, legal posture, certifications, and infrastructure notes.
                    </p>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {[
                      'Role-based access controls',
                      'Encrypted data flows',
                      'Audit-ready care history',
                      'Provider and caregiver sharing controls',
                    ].map((item) => (
                      <div key={item} className="rounded-[1.5rem] bg-[var(--color-background)] p-5">
                        <p className="font-semibold text-[var(--color-text)]">{item}</p>
                        <p className="mt-3 text-sm leading-7">
                          Placeholder copy for your final compliance and platform security messaging.
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
