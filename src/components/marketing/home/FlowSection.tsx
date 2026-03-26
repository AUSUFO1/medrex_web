'use client';

import { CheckCircleIcon } from '@phosphor-icons/react/dist/ssr';
import { flows } from './data';

export default function FlowSection() {
  return (
    <section className="section">
      <div className="container">
        <div className="grid gap-4 lg:grid-cols-[0.84fr_1.16fr]">
          <div className="surface rounded-[1.8rem] p-5 sm:p-6">
            <div className="eyebrow">Built for flow</div>
            <h2 className="mt-5 text-3xl font-medium tracking-[-0.05em] sm:text-4xl">Designed for mobile-first health actions.</h2>
            <p className="mt-3 text-base leading-7 text-[var(--muted)]">
              Every important action is optimized for one-handed usage, quick reading, and clear decisions on any screen.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {flows.map((item) => (
              <div key={item} className="surface rounded-[1.6rem] p-5">
                <CheckCircleIcon size={20} weight="fill" className="text-[var(--foreground)] dark:text-[var(--brand)]" />
                <p className="mt-4 text-lg font-medium tracking-[-0.03em]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
