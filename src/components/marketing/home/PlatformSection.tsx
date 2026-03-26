'use client';

import { platformCards } from './data';

export default function PlatformSection() {
  return (
    <section id="platform" className="section">
      <div className="container">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {platformCards.map((item) => (
            <div
              key={item.title}
              className="grid-dots overflow-hidden rounded-[1.8rem] border border-[var(--line)] bg-[var(--panel-strong)] p-5 shadow-[var(--shadow-sm)] sm:p-7"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--brand-soft)] text-[var(--foreground)] dark:text-[var(--brand)]">
                <item.icon size={22} weight="fill" />
              </div>
              <h3 className="mt-6 text-3xl font-medium tracking-[-0.05em]">{item.title}</h3>
              <p className="mt-3 text-base leading-7 text-[var(--muted)]">{item.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
