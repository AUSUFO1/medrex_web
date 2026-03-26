'use client';

import Link from 'next/link';
import { ArrowRightIcon, CheckCircleIcon, CreditCardIcon, ShieldCheckIcon, UsersThreeIcon } from '@phosphor-icons/react/dist/ssr';
import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';
import { TestimonialsSection } from '@/components/marketing/sections/TestimonialsSection';
import { FAQSection } from '@/components/marketing/sections/FAQSection';
import {
  pricingUserTestimonials,
  pricingProfessionalTestimonials,
  pricingFAQs,
} from '@/components/marketing/content-data';

const plans = [
  {
    name: 'Starter',
    price: 'Free',
    description: 'For individual patients beginning their digital care journey.',
    features: ['Profile and records timeline', 'Basic reminders', 'Mobile-first dashboard'],
  },
  {
    name: 'Pro',
    price: '$12',
    description: 'For active patients and families using MedRex daily.',
    features: ['AI assistant', 'Unlimited records', 'Priority support', 'Advanced care flows'],
    featured: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For clinics, partner programs, insurers, and modern care teams.',
    features: ['Team access', 'Rollout support', 'Billing and payments', 'Custom onboarding'],
  },
];

export default function PricingPage() {
  return (
    <div className="shell">
      <Navbar />
      <main className="page-main">
        <section className="section">
          <div className="container">
            <div className="grid-dots overflow-hidden rounded-[2rem] border border-[var(--line)] bg-[#050506] p-6 text-white shadow-[var(--shadow-md)] sm:p-10">
              <div className="relative z-10 max-w-4xl">
                <div className="eyebrow border-white/10 bg-white/5 text-white/70">Pricing</div>
                <h1 className="mt-8 text-[clamp(3rem,10vw,6rem)] font-medium leading-[0.94] tracking-[-0.07em]">
                  Flexible plans for individual care and enterprise scale.
                </h1>
                <p className="mt-6 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
                  Keep the interface premium and the pricing clear. MedRex is ready for consumer launch paths and future health-tech partnerships.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className={`rounded-[1.8rem] border p-6 shadow-[var(--shadow-sm)] sm:p-7 ${plan.featured ? 'border-[var(--brand)] bg-[var(--brand-soft)]' : 'border-[var(--line)] bg-[var(--panel-strong)]'}`}
                >
                  <p className="text-sm uppercase tracking-[0.22em] text-[var(--muted)]">{plan.name}</p>
                  <p className="mt-4 text-5xl font-medium tracking-[-0.05em]">{plan.price}</p>
                  <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{plan.description}</p>
                  <div className="mt-8 space-y-3">
                    {plan.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3 rounded-[1.15rem] border border-[var(--line)] bg-[var(--panel)] px-4 py-3 text-sm">
                        <CheckCircleIcon size={18} weight="fill" className="text-[var(--brand)]" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link href="/#download" className={`mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium ${plan.featured ? 'bg-[var(--brand)] text-white' : 'border border-[var(--line-strong)]'}`}>
                    Get started
                    <ArrowRightIcon size={16} />
                  </Link>
                </div>
              ))}
            </div>
            <div className="mt-10 grid gap-6 lg:grid-cols-3 lg:gap-8 xl:mt-16">
              <div className="surface rounded-[1.7rem] p-6 sm:p-7">
                <CreditCardIcon size={22} weight="fill" className="text-[var(--brand)]" />
                <h2 className="mt-6 text-2xl font-medium tracking-[-0.04em]">Payment-ready</h2>
                <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                  The experience is ready to connect to your preferred subscription or payment workflow when launch details are finalized.
                </p>
              </div>
              <div className="surface rounded-[1.7rem] p-6 sm:p-7">
                <UsersThreeIcon size={22} weight="fill" className="text-[var(--brand)]" />
                <h2 className="mt-6 text-2xl font-medium tracking-[-0.04em]">For care teams</h2>
                <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                  MedRex can scale beyond individuals into coordinated care programs and multi-user health operations.
                </p>
              </div>
              <div className="surface rounded-[1.7rem] p-6 sm:p-7">
                <ShieldCheckIcon size={22} weight="fill" className="text-[var(--brand)]" />
                <h2 className="mt-6 text-2xl font-medium tracking-[-0.04em]">Clear upgrade path</h2>
                <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                  Each tier is designed to feel understandable to users while still supporting future health-tech expansion.
                </p>
              </div>
            </div>
          </div>
        </section>

        <TestimonialsSection title="Why Users Choose MedRex" testimonials={pricingUserTestimonials} />
        <TestimonialsSection title="Healthcare Teams Trust MedRex" testimonials={pricingProfessionalTestimonials} />
        <FAQSection title="Pricing Questions" faqs={pricingFAQs} />
      </main>
      <Footer />
    </div>
  );
}
