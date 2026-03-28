'use client';

import { motion } from 'framer-motion';
import { platformCards } from './data';

export default function PlatformSection() {
  return (
    <section id="platform" className="section pt-0">
      <div className="container">
        <div className="surface-card overflow-hidden p-5 sm:p-8 lg:p-10">
          <div className="section-intro">
            <div className="section-eyebrow">Operating layer</div>
            <h2 className="section-title mt-6 text-[clamp(2.2rem,6vw,4.7rem)]">
              Every touchpoint stays inside one calm, modern care system.
            </h2>
            <p className="section-copy mt-5">
              From AI summaries to follow-up prompts, MedRex is built to keep the interface premium while the healthcare logic stays trustworthy.
            </p>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {platformCards.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.42, delay: 0.1 + index * 0.05, ease: 'easeOut' }}
                className="surface-card-soft grid-dots p-5 sm:p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--brand-soft)] text-[var(--brand)]">
                  <item.icon size={22} weight="fill" />
                </div>
                <h3 className="mt-6 text-[1.8rem] leading-[0.95] tracking-[-0.06em]">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[var(--muted)] sm:text-base sm:leading-8">
                  {item.copy}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
