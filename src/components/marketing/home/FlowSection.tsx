'use client';

import { motion } from 'framer-motion';
import { CheckCircleIcon } from '@phosphor-icons/react/dist/ssr';
import { flows } from './data';

export default function FlowSection() {
  return (
    <section className="section pt-0">
      <div className="container">
        <div className="grid gap-4 lg:grid-cols-[0.88fr_1.12fr]">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="surface-card p-5 sm:p-6 lg:p-8"
          >
            <div className="section-eyebrow">Built for flow</div>
            <h2 className="mt-6 text-[clamp(2rem,5vw,4rem)] leading-[0.94] tracking-[-0.07em]">
              Designed for mobile-first health actions.
            </h2>
            <p className="mt-4 text-sm leading-8 text-[var(--muted)] sm:text-base">
              Every important action is optimized for one-handed usage, quick reading, and clear decisions on any screen.
            </p>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2">
            {flows.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.42, delay: index * 0.05, ease: 'easeOut' }}
                className="surface-card-soft p-5"
              >
                <CheckCircleIcon size={20} weight="fill" className="text-[var(--brand)]" />
                <p className="mt-4 text-lg font-semibold tracking-[-0.04em]">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
