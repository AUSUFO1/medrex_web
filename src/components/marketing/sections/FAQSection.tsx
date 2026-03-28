'use client';

import { FAQAccordion } from '@/components/ui/faq-accordion';
import type { FAQItem } from '@/types';

export function FAQSection({
  title,
  faqs,
  id = 'faq',
}: {
  title: string;
  faqs: FAQItem[];
  id?: string;
}) {
  return (
    <section id={id} className="section pt-0">
      <div className="container">
        <div className="mx-auto mb-8 max-w-3xl text-center sm:mb-10">
          <div className="section-eyebrow">FAQs</div>
          <h2 className="mt-6 text-[clamp(2.2rem,6vw,4.4rem)] leading-[0.93] tracking-[-0.08em]">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[var(--muted)] sm:text-base sm:leading-8">
            Clear answers for patients, providers, and health partners exploring MedRex.
          </p>
        </div>

        <div className="mx-auto max-w-3xl">
          <FAQAccordion items={faqs} />
        </div>
      </div>
    </section>
  );
}
