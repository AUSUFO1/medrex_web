'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { useState } from 'react';

type Testimonial = {
  name: string;
  role: string;
  quote: string;
  metric: string;
};

export function TestimonialsCarousel({ items }: { items: Testimonial[] }) {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((current) => (current + 1) % items.length);
  const prev = () => setIndex((current) => (current - 1 + items.length) % items.length);

  return (
    <div className="surface-panel rounded-[1.75rem] p-4 sm:rounded-[2rem] sm:p-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--color-primary)]">
            Voices From Care
          </p>
          <h3 className="mt-3 text-2xl font-semibold">What patients and providers say after switching.</h3>
        </div>
        <div className="hidden sm:flex items-center gap-3">
          <button
            type="button"
            onClick={prev}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text)] transition hover:border-[var(--color-border-strong)] hover:-translate-y-0.5"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            type="button"
            onClick={next}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text)] transition hover:border-[var(--color-border-strong)] hover:-translate-y-0.5"
            aria-label="Next testimonial"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      <div className="mt-8 min-h-[220px] overflow-hidden sm:min-h-[260px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={items[index].name}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.32, ease: 'easeOut' }}
            className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]"
          >
            <div className="rounded-[1.5rem] bg-[var(--color-background)] p-5 sm:rounded-[1.75rem] sm:p-8">
              <div className="flex gap-1 text-amber-400">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <Star key={starIndex} size={18} fill="currentColor" />
                ))}
              </div>
              <p className="mt-6 text-lg leading-8 text-[var(--color-text)] sm:text-2xl">
                &ldquo;{items[index].quote}&rdquo;
              </p>
              <div className="mt-8">
                <p className="text-lg font-semibold text-[var(--color-text)]">{items[index].name}</p>
                <p className="mt-1 text-sm">{items[index].role}</p>
              </div>
            </div>

            <div className="teal-purple rounded-[1.5rem] p-[1px] sm:rounded-[1.75rem]">
              <div className="flex h-full flex-col justify-between rounded-[1.45rem] bg-slate-950/92 p-5 text-white sm:rounded-[1.7rem] sm:p-6">
                <p className="text-sm uppercase tracking-[0.24em] text-white/55">Impact Snapshot</p>
                <div>
                  <p className="text-3xl font-semibold sm:text-5xl">{items[index].metric}</p>
                  <p className="mt-3 max-w-xs text-sm leading-7 text-white/70">
                    Teams report faster patient follow-up, stronger trust, and fewer missed care moments.
                  </p>
                </div>
                <div className="grid grid-cols-3 gap-2 text-center text-[11px] text-white/70 sm:gap-3 sm:text-xs">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-3">Safe</div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-3">Clear</div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-3">Fast</div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-6 flex items-center justify-between gap-3 sm:hidden">
        <button
          type="button"
          onClick={prev}
          className="flex-1 rounded-full border border-[var(--color-border)] px-4 py-3 text-sm font-medium"
        >
          Previous
        </button>
        <button
          type="button"
          onClick={next}
          className="flex-1 rounded-full border border-[var(--color-border)] px-4 py-3 text-sm font-medium"
        >
          Next
        </button>
      </div>
    </div>
  );
}
