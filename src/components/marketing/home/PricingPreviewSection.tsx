'use client';

import Link from 'next/link';
import { ArrowRightIcon, CheckCircleIcon } from '@phosphor-icons/react/dist/ssr';
import { planCards } from './data';

export default function PricingPreviewSection() {
  return (
    <section id="pricing" className="section">
      <div className="container">
        <div className="max-w-2xl">
          <div className="eyebrow">Pricing</div>
          <h2 className="section-title mt-6">Three clean plans for patients, providers, and partners.</h2>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {planCards.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-[1.8rem] border p-6 shadow-[var(--shadow-sm)] ${
                plan.featured ? 'border-[var(--brand)] bg-[var(--brand-soft)]' : 'border-[var(--line)] bg-[var(--panel-strong)]'
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.22em] text-[var(--muted)]">{plan.name}</p>
                  <p className="mt-4 text-5xl font-medium tracking-[-0.05em]">{plan.price}</p>
                </div>
                {plan.featured && (
                  <span className="rounded-full bg-[var(--brand)] px-3 py-2 text-xs font-medium uppercase tracking-[0.16em] text-white">
                    Recommended
                  </span>
                )}
              </div>
              <p className="mt-5 text-sm leading-7 text-[var(--muted)]">{plan.description}</p>
              <div className="mt-8 space-y-3">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3 rounded-[1.1rem] border border-[var(--line)] bg-[var(--panel)] px-4 py-3 text-sm">
                    <CheckCircleIcon size={18} weight="fill" className="text-[var(--foreground)] dark:text-[var(--brand)]" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              <Link href="/pricing" className={`mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium ${plan.featured ? 'bg-[var(--brand)] text-white' : 'border border-[var(--line-strong)] bg-transparent'}`}>
                View details
                <ArrowRightIcon size={16} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
