'use client';

import { FAQAccordion } from '@/components/ui/faq-accordion';
import type { FAQItem } from '@/types';

export function FAQSection({ title, faqs }: { title: string; faqs: FAQItem[] }) {
  return (
    <section className="section">
      <div className="container">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <h2 className="text-[clamp(1.9rem,6vw,4rem)] font-medium leading-[0.96] tracking-[-0.06em] text-[var(--foreground)]">
            {title}
          </h2>
        </div>

        <div className="mx-auto max-w-3xl">
          <FAQAccordion items={faqs} />
        </div>
      </div>
    </section>
  );
}
