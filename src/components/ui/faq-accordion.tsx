'use client';

import { CaretDownIcon } from '@phosphor-icons/react/dist/ssr';

type FAQItem = {
  question: string;
  answer: string;
};

export function FAQAccordion({ items }: { items: FAQItem[] }) {
  return (
    <div className="space-y-3">
      {items.map((item, index) => (
        <details
          key={item.question}
          className="surface-card-soft group overflow-hidden"
          open={index === 0}
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-4 py-4 text-left sm:px-5 sm:py-5 [&::-webkit-details-marker]:hidden">
            <span className="text-base font-semibold tracking-[-0.03em] sm:text-lg">{item.question}</span>
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--brand-soft)] text-[var(--brand)]">
              <CaretDownIcon
                size={18}
                weight="bold"
                className="transition-transform duration-300 group-open:rotate-180"
              />
            </span>
          </summary>

          <div className="border-t border-[var(--line)] px-4 pb-5 pt-4 text-sm leading-7 text-[var(--muted)] sm:px-5 sm:text-base sm:leading-8">
            {item.answer}
          </div>
        </details>
      ))}
    </div>
  );
}
