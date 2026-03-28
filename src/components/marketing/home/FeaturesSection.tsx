'use client';

import { motion } from 'framer-motion';
import { featuresIntro, pillars } from './data';

export default function FeaturesSection() {
  return (
    <section id="features" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="section-intro"
        >
          <div className="section-eyebrow">Core platform</div>
          <h2 className="section-title mt-6">A sleek health-tech surface for the entire care loop.</h2>
          <p className="section-copy mt-5">{featuresIntro}</p>
        </motion.div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {pillars.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.42, delay: index * 0.06, ease: 'easeOut' }}
              className="surface-card grid-dots p-5 sm:p-6"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--brand-soft)] text-[var(--brand)]">
                <item.icon size={22} weight="fill" />
              </div>
              <h3 className="mt-6 text-[1.55rem] leading-[0.96] tracking-[-0.05em]">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{item.copy}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
