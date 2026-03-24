'use client';

import Link from 'next/link';
import {
  ArrowRight,
  BellRing,
  BrainCircuit,
  CreditCard,
  FileStack,
  HeartPulse,
  Sparkles,
  Stethoscope,
} from 'lucide-react';
import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';
import { Reveal } from '@/components/ui/reveal';
import { Counter } from '@/components/ui/counter';
import { TestimonialsCarousel } from '@/components/ui/testimonials-carousel';
import { AppBadge, ChatMockup, DashboardMockup, PhoneMockup, QRPlaceholder } from './mockups';

const features = [
  {
    title: 'Telemedicine',
    copy: 'Book same-day consultations, follow up after visits, and keep the full care thread in one place.',
    icon: Stethoscope,
  },
  {
    title: 'Medical Records',
    copy: 'Merge lab results, prescriptions, and visit notes into a record patients can actually understand.',
    icon: FileStack,
  },
  {
    title: 'AI Assistant',
    copy: 'Explain treatment plans in plain language, summarize visits, and surface next-best actions fast.',
    icon: BrainCircuit,
  },
  {
    title: 'Mood Tracker',
    copy: 'Capture emotional patterns between appointments and connect them to medication or life events.',
    icon: HeartPulse,
  },
  {
    title: 'Reminders',
    copy: 'Medication, refill, and appointment reminders stay synced across patients, caregivers, and teams.',
    icon: BellRing,
  },
  {
    title: 'Payments',
    copy: 'Handle secure plan upgrades, visit payments, and enterprise billing with Paystack-ready pricing.',
    icon: CreditCard,
  },
];

const steps = [
  'Create a care profile and import your health history.',
  'Book a consultation, upload records, or start with AI guidance.',
  'Follow reminders, track mood, and keep your health timeline current.',
  'Share trusted summaries with doctors, clinics, or your care circle.',
];

const spotlights = [
  {
    title: 'Records without the paper chase',
    copy:
      'MedRex turns fragmented test results, prescriptions, and specialist notes into one living patient record with clean summaries and clear history.',
    caption: 'Records Spotlight',
  },
  {
    title: 'Consultations that continue after the call',
    copy:
      'From pre-visit intake to post-visit follow-up, every consultation stays connected to reminders, messages, and care plans.',
    caption: 'Care Spotlight',
  },
  {
    title: 'AI that helps people feel less lost',
    copy:
      'The assistant explains instructions, highlights concerns, and knows when to escalate to a human clinician.',
    caption: 'AI Spotlight',
  },
];

const testimonials = [
  {
    name: 'Ada N.',
    role: 'Patient managing chronic care',
    quote:
      'For the first time I can see my visits, prescriptions, and reminders in one calm place. I feel prepared before every appointment.',
    metric: '41% fewer missed medication windows',
  },
  {
    name: 'Dr. Hassan R.',
    role: 'Telemedicine physician',
    quote:
      'MedRex gives me the right context before I even join the consultation. That means better conversations and faster decisions.',
    metric: '2.3x faster follow-up preparation',
  },
  {
    name: 'Monica A.',
    role: 'Clinic operations lead',
    quote:
      'Patients respond to the reminders, staff spend less time chasing records, and the AI summaries help us move with confidence.',
    metric: '58% improvement in visit readiness',
  },
];

const pricingCards = [
  {
    name: 'Free',
    price: '$0',
    copy: 'Great for individual patients starting their digital care journey.',
    features: ['Personal health profile', 'Basic record storage', 'Medication reminders', 'One active clinician connection'],
  },
  {
    name: 'Pro',
    price: '$12',
    copy: 'Ideal for patients who need consultations, AI support, and family coordination.',
    features: ['Unlimited records', 'AI assistant summaries', 'Priority telemedicine', 'Caregiver sharing', 'Advanced reminders'],
    featured: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    copy: 'For clinics, provider networks, insurers, and digital health programs.',
    features: ['Team administration', 'Audit trails', 'Custom onboarding', 'Paystack billing setup', 'Dedicated support'],
  },
];

export default function HomePage() {
  return (
    <div id="top" className="shell">
      <Navbar />
      <main className="page-main">
        <section className="section">
          <div className="container">
            <div className="grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
              <Reveal className="max-w-2xl">
                <span className="eyebrow">
                  <Sparkles size={14} className="text-[var(--color-primary)]" />
                  Modern care, designed like a premium product
                </span>
                <h1 className="mt-8 text-[clamp(2.55rem,11vw,6.4rem)] font-semibold leading-[0.95]">
                  Healthcare that feels <span className="text-gradient">clear, calm, and connected.</span>
                </h1>
                <p className="mt-6 max-w-xl text-base leading-8 sm:text-lg">
                  MedRex brings telemedicine, records, AI support, reminders, mood tracking, and secure payments into one polished health companion for patients and providers.
                </p>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <Link
                    href="#download"
                    className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-4 text-sm font-semibold text-white teal-purple shadow-[var(--shadow-lg)] transition hover:-translate-y-0.5"
                  >
                    Download App
                    <ArrowRight size={16} />
                  </Link>
                  <Link
                    href="/pricing"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-6 py-4 text-sm font-semibold text-[var(--color-text)] transition hover:border-[var(--color-border-strong)] hover:-translate-y-0.5"
                  >
                    View Pricing
                  </Link>
                </div>

                <div className="mt-8 grid gap-3 sm:flex sm:flex-wrap">
                  <AppBadge label="App Store" caption="Available on" />
                  <AppBadge label="Google Play" caption="Get it on" />
                </div>

                <div className="mt-10 grid gap-4 sm:grid-cols-3">
                  {[
                    { label: 'Trusted by teams', value: '120+' },
                    { label: 'Avg consult wait', value: '< 5 min' },
                    { label: 'Records synced', value: '1.8M+' },
                  ].map((stat) => (
                    <div key={stat.label} className="surface-panel rounded-[1.5rem] p-4">
                      <p className="text-2xl font-semibold text-[var(--color-text)]">{stat.value}</p>
                      <p className="mt-2 text-sm">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </Reveal>

              <Reveal delay={0.08}>
                <div className="noise rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-3 shadow-[var(--shadow-lg)] sm:rounded-[2.6rem] sm:p-6">
                  <PhoneMockup />
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section id="features" className="section">
          <div className="container">
            <Reveal>
              <span className="eyebrow">Feature grid</span>
              <div className="mt-6 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
                <div>
                  <h2 className="section-title max-w-3xl">Six core experiences, designed to work like one product.</h2>
                </div>
                <p className="section-copy">
                  Every feature feels part of the same care journey, not a patchwork of disconnected tools.
                </p>
              </div>
            </Reveal>

            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {features.map((feature, index) => (
                <Reveal key={feature.title} delay={index * 0.04}>
                  <div className="surface-panel h-full rounded-[2rem] p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-md)]">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--color-accent)] text-[var(--color-primary)]">
                      <feature.icon size={24} />
                    </div>
                    <h3 className="mt-6 text-2xl font-semibold">{feature.title}</h3>
                    <p className="mt-4 text-sm leading-7">{feature.copy}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="how-it-works" className="section">
          <div className="container">
            <Reveal>
              <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                <div>
                  <span className="eyebrow">How it works</span>
                  <h2 className="section-title mt-6 max-w-3xl">A simple four-step flow that feels premium on every screen.</h2>
                </div>
                <p className="section-copy">
                  Patients get clarity fast, while providers keep the structure and context they need.
                </p>
              </div>
            </Reveal>

            <div className="mt-10 grid gap-5 lg:grid-cols-4">
              {steps.map((step, index) => (
                <Reveal key={step} delay={index * 0.05}>
                  <div className="surface-panel relative h-full rounded-[2rem] p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-primary)] text-sm font-semibold text-white">
                      0{index + 1}
                    </div>
                    <p className="mt-8 text-lg font-semibold text-[var(--color-text)]">{step}</p>
                    <div className="mt-8 h-2 w-24 rounded-full bg-[var(--color-accent)]">
                      <div
                        className="h-2 rounded-full bg-[var(--color-primary)]"
                        style={{ width: `${55 + index * 12}%` }}
                      />
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container space-y-8">
            {spotlights.map((spotlight, index) => (
              <div key={spotlight.title} className="grid items-center gap-8 lg:grid-cols-2">
                <Reveal className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="max-w-xl">
                    <span className="eyebrow">{spotlight.caption}</span>
                    <h2 className="mt-6 text-3xl font-semibold sm:text-4xl">{spotlight.title}</h2>
                    <p className="mt-5 text-base leading-8">{spotlight.copy}</p>
                    <div className="mt-8 flex flex-wrap gap-3">
                      {['Fast onboarding', 'Mobile-first', 'Secure by design'].map((pill) => (
                        <span key={pill} className="rounded-full bg-[var(--color-accent)] px-4 py-2 text-sm font-medium text-[var(--color-text)]">
                          {pill}
                        </span>
                      ))}
                    </div>
                  </div>
                </Reveal>
                <Reveal delay={0.06} className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <DashboardMockup title={spotlight.title} caption={spotlight.caption} reverse={index % 2 === 1} />
                </Reveal>
              </div>
            ))}
          </div>
        </section>

        <section id="ai-assistant" className="section">
          <div className="container">
            <Reveal>
              <div className="grid items-center gap-10 lg:grid-cols-[0.88fr_1.12fr]">
                <div>
                  <span className="eyebrow">AI assistant spotlight</span>
                  <h2 className="section-title mt-6">A trusted AI layer that reduces confusion, not confidence.</h2>
                  <p className="mt-6 max-w-xl text-base leading-8">
                    MedRex AI is designed to feel like the best product teams in health and the clearest human care coordinators had built one shared assistant. It summarizes visits, explains records, and guides next steps with care.
                  </p>
                  <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    {[
                      'Plain-language visit summaries',
                      'Medication and symptom guidance',
                      'Escalation to human care teams',
                      'Always linked to source records',
                    ].map((item) => (
                      <div key={item} className="rounded-[1.4rem] bg-[var(--color-surface)] p-4 text-sm font-medium text-[var(--color-text)] shadow-[var(--shadow-sm)]">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
                <Reveal delay={0.08}>
                  <ChatMockup />
                </Reveal>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="rounded-[2.5rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-4 shadow-[var(--shadow-lg)] sm:p-6 xl:p-8">
              <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
                {[
                  { label: 'Users', value: 250000, suffix: '+' },
                  { label: 'Doctors', value: 1800, suffix: '+' },
                  { label: 'Records', value: 1800000, suffix: '+' },
                  { label: 'Countries', value: 24, suffix: '' },
                ].map((stat) => (
                  <div key={stat.label} className="rounded-[1.75rem] border border-[var(--color-border)] bg-[var(--color-surface-muted)] p-5">
                    <p className="text-xs uppercase tracking-[0.24em] text-[var(--color-text-soft)]">{stat.label}</p>
                    <Counter value={stat.value} suffix={stat.suffix} className="mt-5 block text-3xl font-semibold sm:text-4xl" />
                    <p className="mt-3 text-sm">Placeholder growth number for launch narrative.</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="testimonials" className="section">
          <div className="container">
            <Reveal>
              <TestimonialsCarousel items={testimonials} />
            </Reveal>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <Reveal>
              <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                <div>
                  <span className="eyebrow">Pricing overview</span>
                  <h2 className="section-title mt-6 max-w-3xl">Flexible plans for patients, care teams, and enterprise rollouts.</h2>
                </div>
                <p className="section-copy">
                  Built to work with a Paystack checkout flow when you connect your real pricing and billing backend.
                </p>
              </div>
            </Reveal>

            <div className="mt-12 grid gap-5 xl:grid-cols-3">
              {pricingCards.map((card, index) => (
                <Reveal key={card.name} delay={index * 0.05}>
                  <div className={`h-full rounded-[2rem] border p-6 ${card.featured ? 'border-[var(--color-primary)] bg-[var(--color-surface)] shadow-[var(--shadow-lg)]' : 'surface-panel'}`}>
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className={`text-sm uppercase tracking-[0.22em] ${card.featured ? 'text-[var(--color-primary)]' : 'text-[var(--color-text-soft)]'}`}>
                            {card.name}
                          </p>
                          <p className="mt-4 text-5xl font-semibold">{card.price}</p>
                        </div>
                        {card.featured && (
                          <span className="rounded-full bg-[var(--color-accent)] px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-primary)]">
                            Best Value
                          </span>
                        )}
                      </div>
                      <p className="mt-5 text-sm leading-7">{card.copy}</p>
                      <div className="mt-8 space-y-3">
                        {card.features.map((item) => (
                          <div key={item} className="rounded-[1.2rem] bg-[var(--color-background)] px-4 py-3 text-sm text-[var(--color-text)]">
                            {item}
                          </div>
                        ))}
                      </div>
                      <Link
                        href="/pricing"
                        className={`mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition ${
                          card.featured
                            ? 'bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-dark)]'
                            : 'border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text)] hover:-translate-y-0.5'
                        }`}
                      >
                        Explore Plan
                        <ArrowRight size={16} />
                      </Link>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="download" className="section">
          <div className="container">
            <Reveal>
              <div className="rounded-[2.7rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-[var(--shadow-lg)] lg:p-10">
                <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
                  <div>
                    <span className="inline-flex rounded-full bg-[var(--color-accent)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">
                      Download CTA
                    </span>
                    <h2 className="mt-6 max-w-3xl text-3xl font-semibold sm:text-5xl">
                      Put the full MedRex experience in your pocket.
                    </h2>
                    <p className="mt-5 max-w-2xl text-base leading-8">
                      App badges and QR code below are placeholder visuals you can replace with your live store links, analytics QR, and launch screenshots.
                    </p>
                    <div className="mt-8 grid gap-3 sm:flex sm:flex-wrap">
                      <AppBadge label="App Store" caption="Available on" />
                      <AppBadge label="Google Play" caption="Get it on" />
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-[1fr_auto] sm:items-center">
                    <div className="rounded-[1.8rem] border border-[var(--color-border)] bg-[var(--color-surface-muted)] p-5">
                      <p className="text-sm font-semibold">Scan to preview MedRex</p>
                      <p className="mt-2 text-sm">
                        Replace this placeholder QR with your production download target or smart campaign URL.
                      </p>
                    </div>
                    <div className="justify-self-start sm:justify-self-auto">
                      <QRPlaceholder />
                    </div>
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
