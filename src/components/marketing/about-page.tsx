'use client';

import Link from 'next/link';
import { ArrowRightIcon, BuildingsIcon, GlobeHemisphereWestIcon, ShieldCheckIcon, SparkleIcon, UsersThreeIcon } from '@phosphor-icons/react/dist/ssr';
import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';
import { FAQSection } from '@/components/marketing/sections/FAQSection';
import { aboutFAQs } from '@/components/marketing/content-data';

const points = [
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
        <section className="section">
          <div className="container">
            <div className="grid-dots overflow-hidden rounded-[2rem] border border-[var(--line)] bg-[#050506] p-6 text-white shadow-[var(--shadow-md)] sm:p-10">
              <div className="relative z-10 mx-auto max-w-4xl">
                <div className="eyebrow border-white/10 bg-white/5 text-white/70">About MedRex</div>
                <h1 className="mt-7 text-[clamp(2.35rem,8.2vw,6rem)] font-medium leading-[0.95] tracking-[-0.07em] sm:mt-8">
                  A health-tech brand built for the speed of modern care.
                </h1>
                <p className="mt-5 max-w-2xl text-sm leading-7 text-white/72 sm:mt-6 sm:text-lg sm:leading-8">
                  MedRex is designed to feel futuristic without becoming cold, premium without becoming confusing, and mobile-first without sacrificing trust.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row">
                  <Link href="/#download" className="brand-button brand-button-dark w-full sm:w-auto">
                    Try MedRex
                    <ArrowRightIcon size={16} />
                  </Link>
                  <Link href="/pricing" className="ghost-button w-full border-white/15 bg-white/5 text-white sm:w-auto">
                    View plans
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
              {points.map((point) => (
                <div key={point.title} className="surface rounded-[1.7rem] p-6 sm:p-7">
                  <point.icon size={22} weight="fill" className="text-[var(--brand)]" />
                  <h2 className="mt-5 text-xl font-medium tracking-[-0.04em] sm:mt-6 sm:text-2xl">{point.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{point.copy}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8">
              <div className="surface rounded-[1.8rem] p-6 sm:p-7">
                <GlobeHemisphereWestIcon size={24} weight="fill" className="text-[var(--brand)]" />
                <h2 className="mt-5 text-2xl font-medium tracking-[-0.05em] sm:mt-6 sm:text-3xl">Global-ready by design</h2>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)] sm:mt-4 sm:text-base sm:leading-8">
                  MedRex is shaped for distributed patients, modern operators, and care teams that need one fast, elegant surface across devices.
                </p>
              </div>
              <div className="surface rounded-[1.8rem] p-6 sm:p-7">
                <ShieldCheckIcon size={24} weight="fill" className="text-[var(--brand)]" />
                <h2 className="mt-5 text-2xl font-medium tracking-[-0.05em] sm:mt-6 sm:text-3xl">Trust is not an afterthought</h2>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)] sm:mt-4 sm:text-base sm:leading-8">
                  The product direction keeps privacy, record control, and clinical confidence visible in the interface rather than hidden in abstract marketing claims.
                </p>
              </div>
            </div>
          </div>
        </section>

        <FAQSection title="About MedRex" faqs={aboutFAQs} />
      </main>
      <Footer />
    </div>
  );
}
