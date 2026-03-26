'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="fixed left-0 right-0 top-0 z-50 bg-[var(--background)]/95 backdrop-blur-xl" aria-label="Main navigation">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center md:h-20">
          <Link href="/" className="flex items-center gap-3 shrink-0" aria-label="MedRex home">
            <span className="relative block h-10 w-10 sm:h-11 sm:w-11 md:h-12 md:w-12">
              <Image
                src="/images/medrex-logo.png"
                alt="MedRex logo"
                fill
                priority
                sizes="(max-width: 768px) 40px, 48px"
                className="object-contain"
              />
            </span>
            <span className="text-[1.45rem] font-medium tracking-[-0.06em] text-[var(--foreground)] sm:text-[1.65rem] md:text-[1.85rem]">
              MedRex
            </span>
          </Link>

          <div className="ml-auto">
            <Link
              href="#download"
              className="inline-flex items-center justify-center rounded-full bg-[var(--foreground)] px-5 py-3 md:px-6 md:py-3 text-sm font-semibold tracking-[-0.01em] text-[var(--background)] transition-transform duration-200 hover:-translate-y-[1px]"
            >
              Try now
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
