'use client';

import { featuresIntro, pillars } from './data';

export default function FeaturesSection() {
  return (
    <section id="features" className="section">
      <div className="container">
        <div className="max-w-2xl">
          <div className="eyebrow">Core platform</div>
          <h2 className="section-title mt-6">A sleek health-tech surface for the entire care loop.</h2>
          <p className="mt-5 max-w-xl text-base leading-8 text-[var(--muted)]">{featuresIntro}</p>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {pillars.map((item) => (
            <div key={item.title} className="surface grid-dots rounded-[1.7rem] p-5 sm:p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--brand-soft)] text-[var(--foreground)] dark:text-[var(--brand)]">
                <item.icon size={22} weight="fill" />
              </div>
              <h3 className="mt-6 text-xl font-medium tracking-[-0.04em]">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{item.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
