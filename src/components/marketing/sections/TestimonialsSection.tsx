'use client';

import { StarIcon } from '@phosphor-icons/react/dist/ssr';
import type { Testimonial } from '@/types';

export function TestimonialsSection({ title, testimonials }: { title: string; testimonials: Testimonial[] }) {
  return (
    <section className="section">
      <div className="container">
        <div className="mx-auto mb-10 max-w-3xl text-center md:mb-16">
          <h2 className="text-[clamp(1.9rem,6vw,4rem)] font-medium leading-[0.96] tracking-[-0.06em] text-[var(--foreground)]">
            {title}
          </h2>
        </div>

        <div className="grid justify-items-center gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="surface flex w-full max-w-[22rem] flex-col rounded-[1.6rem] p-6 sm:p-7"
            >
              <div className="mb-4 flex gap-1 text-amber-400">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <StarIcon key={i} size={16} weight="fill" />
                ))}
              </div>

              <p className="mb-6 flex-1 text-base leading-7 text-[var(--foreground)]">&ldquo;{testimonial.content}&rdquo;</p>

              <div>
                <p className="font-semibold text-[var(--foreground)]">{testimonial.name}</p>
                <p className="mt-1 text-sm text-[var(--muted)]">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
