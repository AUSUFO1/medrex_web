'use client';

import Link from 'next/link';
import { ArrowRightIcon, CheckCircleIcon } from '@phosphor-icons/react/dist/ssr';
import { motion } from 'framer-motion';
import { planCards } from './data';

export default function PricingPreviewSection() {
  return (
    <section id="pricing" className="section pt-0">
      <div className="container">
        <div className="section-intro">
          <div className="section-eyebrow">Pricing</div>
          <h2 className="section-title mt-6 text-[clamp(2.25rem,6vw,4.7rem)]">
            Clear plans for patients, providers, and care partners.
          </h2>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {planCards.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.05, ease: 'easeOut' }}
              className={`rounded-[1.8rem] border p-6 shadow-[var(--shadow-sm)] sm:p-7 ${
                plan.featured
                  ? 'border-[var(--brand)] bg-[var(--brand-soft)]'
                  : 'bg-[var(--surface-strong)] border-[var(--line)]'
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.22em] text-[var(--muted)]">{plan.name}</p>
                  <p className="mt-4 text-[3rem] font-semibold leading-none tracking-[-0.08em]">{plan.price}</p>
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
                href="/pricing"
                className={`mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold ${
                  plan.featured ? 'bg-[var(--brand)] text-white' : 'border border-[var(--line-strong)]'
                }`}
              >
                View details
                <span className={`button-arrow ${plan.featured ? '' : 'bg-[var(--brand-soft)]'}`}>
                  <ArrowRightIcon size={14} weight="bold" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
