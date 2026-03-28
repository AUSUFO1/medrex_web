'use client';

import { motion } from 'framer-motion';
import { StarIcon } from '@phosphor-icons/react/dist/ssr';
import type { Testimonial } from '@/types';

export function TestimonialsSection({ title, testimonials }: { title: string; testimonials: Testimonial[] }) {
  const duplicated = [...testimonials, ...testimonials];

  return (
    <section className="section pt-0">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="mb-8 max-w-3xl"
        >
          <div className="section-eyebrow">Proof</div>
          <h2 className="section-title mt-6 text-[clamp(2.2rem,6vw,4.5rem)]">{title}</h2>
        </motion.div>

        <div className="quote-marquee">
          <div className="quote-track">
            {duplicated.map((testimonial, index) => (
              <div
                key={`${testimonial.id}-${index}`}
                className="surface-card w-[18.75rem] shrink-0 p-5 sm:w-[21rem] sm:p-6"
              >
                <div className="mb-4 flex gap-1 text-[#f4c96c]">
                  {Array.from({ length: testimonial.rating }).map((_, starIndex) => (
                    <StarIcon key={starIndex} size={16} weight="fill" />
                  ))}
                </div>

                <p className="text-sm leading-7 text-[var(--foreground)] sm:text-base sm:leading-8">
                  &ldquo;{testimonial.content}&rdquo;
                </p>

                <div className="mt-6 border-t border-[var(--line)] pt-4">
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="mt-1 text-sm text-[var(--muted)]">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
