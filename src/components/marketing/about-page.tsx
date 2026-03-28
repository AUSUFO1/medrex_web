'use client';

import Link from 'next/link';
import { ArrowRightIcon, BuildingsIcon, GlobeHemisphereWestIcon, ShieldCheckIcon, SparkleIcon, UsersThreeIcon } from '@phosphor-icons/react/dist/ssr';
import { motion } from 'framer-motion';
import Footer from '@/components/layout/footer';
import Navbar from '@/components/layout/navbar';
import { aboutFAQs } from '@/components/marketing/content-data';
import { FAQSection } from '@/components/marketing/sections/FAQSection';

const principles = [
  {
    title: 'Patient calm first',
    copy: 'We build interfaces that reduce stress at moments when users already carry enough complexity.',
    icon: SparkleIcon,
  },
  {
    title: 'Provider context always present',
    copy: 'Records, visits, and summaries stay connected so health teams can move quickly with confidence.',
    icon: UsersThreeIcon,
  },
  {
    title: 'Ready for scale',
    copy: 'MedRex is positioned for clinics, distributed programs, and modern digital care products.',
    icon: BuildingsIcon,
  },
];

export default function AboutPage() {
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
                <div className="section-eyebrow border-white/10 bg-white/6 text-white/70">About MedRex</div>
                <h1 className="mt-6 text-[clamp(2.8rem,8vw,6.3rem)] leading-[0.9] tracking-[-0.1em] text-white">
                  A health-tech brand built for clarity, trust, and scale.
                </h1>
                <p className="mt-5 max-w-2xl text-base leading-8 text-white/72 sm:text-lg">
                  MedRex is designed to feel futuristic without becoming cold, premium without becoming confusing, and mobile-first without sacrificing care confidence.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link href="/#download" className="button-primary w-full sm:w-auto">
                    Try MedRex
                    <span className="button-arrow">
                      <ArrowRightIcon size={14} weight="bold" />
                    </span>
                  </Link>
                  <Link href="/pricing" className="button-secondary w-full sm:w-auto">
                    View pricing
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="section pt-0">
          <div className="container">
            <div className="grid gap-4 lg:grid-cols-3">
              {principles.map((point, index) => (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.42, delay: index * 0.05, ease: 'easeOut' }}
                  className="surface-card p-6 sm:p-7"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--brand-soft)] text-[var(--brand)]">
                    <point.icon size={22} weight="fill" />
                  </div>
                  <h2 className="mt-6 text-[1.8rem] leading-[0.95] tracking-[-0.06em]">{point.title}</h2>
                  <p className="mt-4 text-sm leading-7 text-[var(--muted)] sm:text-base sm:leading-8">{point.copy}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-4 grid gap-4 lg:grid-cols-[0.95fr_1.05fr]">
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.46, delay: 0.08, ease: 'easeOut' }}
                className="surface-card p-6 sm:p-7 lg:p-8"
              >
                <GlobeHemisphereWestIcon size={24} weight="fill" className="text-[var(--brand)]" />
                <h2 className="mt-6 text-[clamp(2rem,4vw,3.2rem)] leading-[0.94] tracking-[-0.08em]">
                  Global-ready by design
                </h2>
                <p className="mt-4 text-sm leading-7 text-[var(--muted)] sm:text-base sm:leading-8">
                  MedRex is shaped for distributed patients, modern operators, and care teams that need one fast, elegant surface across devices.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.46, delay: 0.12, ease: 'easeOut' }}
                className="surface-card p-6 sm:p-7 lg:p-8"
              >
                <ShieldCheckIcon size={24} weight="fill" className="text-[var(--brand)]" />
                <h2 className="mt-6 text-[clamp(2rem,4vw,3.2rem)] leading-[0.94] tracking-[-0.08em]">
                  Trust is not an afterthought
                </h2>
                <p className="mt-4 text-sm leading-7 text-[var(--muted)] sm:text-base sm:leading-8">
                  The product direction keeps privacy, record control, and clinical confidence visible in the interface instead of hidden behind generic marketing language.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        <FAQSection id="faq" title="About MedRex" faqs={aboutFAQs} />
      </main>
      <Footer />
    </div>
  );
}
