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
          key={index}
          className="group overflow-hidden rounded-[1.2rem] border border-[var(--line)] bg-[var(--panel-strong)]"
          open={index === 0}
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-4 text-left transition-colors hover:bg-[var(--background-subtle)] sm:p-5 [&::-webkit-details-marker]:hidden">
            <span className="text-base font-medium text-[var(--foreground)] sm:text-lg">{item.question}</span>
            <CaretDownIcon
              size={18}
              weight="bold"
              className="shrink-0 text-[var(--muted)] transition-transform duration-300 group-open:rotate-180"
            />
          </summary>

          <div className="border-t border-[var(--line)] px-4 pb-4 pt-4 text-sm leading-7 text-[var(--muted)] sm:px-5 sm:pb-5 sm:text-base">
            {item.answer}
          </div>
        </details>
      ))}
    </div>
  );
}
