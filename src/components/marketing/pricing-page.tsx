'use client';

import Link from 'next/link';
import { ArrowRightIcon, CheckCircleIcon, CreditCardIcon, ShieldCheckIcon, UsersThreeIcon } from '@phosphor-icons/react/dist/ssr';
import { motion } from 'framer-motion';
import Footer from '@/components/layout/footer';
import Navbar from '@/components/layout/navbar';
import { pricingFAQs } from '@/components/marketing/content-data';
import { FAQSection } from '@/components/marketing/sections/FAQSection';

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

const supportCards = [
  {
    title: 'Payment-ready',
    copy: 'The experience is ready to connect to your preferred subscription or payment workflow when launch details are finalized.',
    icon: CreditCardIcon,
  },
  {
    title: 'For care teams',
    copy: 'MedRex can scale beyond individuals into coordinated care programs and multi-user health operations.',
    icon: UsersThreeIcon,
  },
  {
    title: 'Clear upgrade path',
    copy: 'Each tier is designed to feel understandable to users while still supporting future health-tech expansion.',
    icon: ShieldCheckIcon,
  },
];

export default function PricingPage() {
  return (
    <div className="shell">
      <Navbar />
      <main className="page-main">
        <section className="section pt-6 sm:pt-8">
          <div className="container">
            <div className="surface-dark grid-dots rounded-[2rem] p-6 sm:p-8 lg:p-10">
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="relative z-10 max-w-4xl"
              >
                <div className="section-eyebrow border-white/10 bg-white/6 text-white/70">Pricing</div>
                <h1 className="mt-6 text-[clamp(2.8rem,8vw,6.3rem)] leading-[0.9] tracking-[-0.1em] text-white">
                  Flexible plans for patients, clinics, and modern care teams.
                </h1>
                <p className="mt-5 max-w-2xl text-base leading-8 text-white/72 sm:text-lg">
                  Keep the interface premium and the pricing clear. MedRex is ready for consumer launch paths and future health-tech partnerships.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="section pt-0">
          <div className="container">
            <div className="grid gap-4 lg:grid-cols-3">
              {plans.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: index * 0.05, ease: 'easeOut' }}
                  className={`rounded-[1.8rem] border p-6 shadow-[var(--shadow-sm)] sm:p-7 ${
                    plan.featured
                      ? 'border-[var(--brand)] bg-[var(--brand-soft)]'
                      : 'border-[var(--line)] bg-[var(--surface-strong)]'
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm uppercase tracking-[0.22em] text-[var(--muted)]">{plan.name}</p>
                      <p className="mt-4 text-[3.2rem] font-semibold leading-none tracking-[-0.08em]">{plan.price}</p>
                    </div>
                    {plan.featured ? (
                      <span className="rounded-full bg-[var(--brand)] px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white">
                        Best fit
                      </span>
                    ) : null}
                  </div>

                  <p className="mt-5 text-sm leading-7 text-[var(--muted)]">{plan.description}</p>

                  <div className="mt-8 space-y-3">
                    {plan.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3 rounded-[1.15rem] border border-[var(--line)] bg-[var(--surface)] px-4 py-3 text-sm">
                        <CheckCircleIcon size={18} weight="fill" className="text-[var(--brand)]" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href="/#download"
                    className={`mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold ${
                      plan.featured ? 'bg-[var(--brand)] text-white' : 'border border-[var(--line-strong)]'
                    }`}
                  >
                    Get started
                    <span className={`button-arrow ${plan.featured ? '' : 'bg-[var(--brand-soft)]'}`}>
                      <ArrowRightIcon size={14} weight="bold" />
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="mt-4 grid gap-4 lg:grid-cols-3">
              {supportCards.map((card, index) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.42, delay: 0.14 + index * 0.05, ease: 'easeOut' }}
                  className="surface-card p-6 sm:p-7"
                >
                  <card.icon size={22} weight="fill" className="text-[var(--brand)]" />
                  <h2 className="mt-6 text-[1.8rem] leading-[0.95] tracking-[-0.06em]">{card.title}</h2>
                  <p className="mt-4 text-sm leading-7 text-[var(--muted)] sm:text-base sm:leading-8">
                    {card.copy}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <FAQSection id="faq" title="Pricing questions" faqs={pricingFAQs} />
      </main>
      <Footer />
    </div>
  );
}
