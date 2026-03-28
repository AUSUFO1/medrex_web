'use client';

import { AppStoreLogoIcon, ArrowRightIcon, GooglePlayLogoIcon, ShieldCheckIcon } from '@phosphor-icons/react/dist/ssr';
import { motion } from 'framer-motion';
import StoreBadge from './StoreBadge';

export default function DownloadSection() {
  return (
    <section id="download" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="surface-dark grid-dots rounded-[2rem] p-6 sm:p-8 lg:p-10"
        >
          <div className="relative z-10 grid gap-8 lg:grid-cols-[1fr_0.72fr] lg:items-center">
            <div className="max-w-2xl">
              <div className="section-eyebrow border-white/10 bg-white/6 text-white/70">
                <ShieldCheckIcon size={14} weight="fill" />
                Download MedRex
              </div>
              <h2 className="mt-6 text-[clamp(2.3rem,6vw,4.9rem)] leading-[0.92] tracking-[-0.08em] text-white">
                A premium health experience built to stay calm under complexity.
              </h2>
              <p className="mt-5 text-base leading-8 text-white/68 sm:text-lg">
                Launch MedRex with production store links, real QR assets, and your final care workflows when you are ready to ship.
              </p>

              <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/6 px-4 py-3 text-sm text-white/72">
                Secure onboarding
                <span className="button-arrow bg-white/12">
                  <ArrowRightIcon size={14} weight="bold" />
                </span>
              </div>
            </div>

            <div className="grid gap-3">
              <StoreBadge icon={AppStoreLogoIcon} label="App Store" caption="Available on" inverse />
              <StoreBadge icon={GooglePlayLogoIcon} label="Google Play" caption="Get it on" inverse />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
