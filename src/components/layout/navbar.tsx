'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRightIcon, ListIcon, XIcon } from '@phosphor-icons/react/dist/ssr';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Pricing', href: '/pricing' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50" aria-label="Main navigation">
        <nav className="nav-shell" data-scrolled={scrolled}>
          <div className="container">
            <div className="flex h-20 items-center gap-4">
              <Link href="/" className="flex min-w-0 items-center gap-3" aria-label="MedRex home">
                <span className="relative h-11 w-11 shrink-0 sm:h-12 sm:w-12">
                  <Image
                    src="/images/medrex-logo.png"
                    alt="MedRex logo"
                    fill
                    priority
                    sizes="48px"
                    className="object-contain"
                  />
                </span>
                <span className="truncate font-[var(--font-display)] text-[1.45rem] font-semibold tracking-[-0.08em] sm:text-[1.7rem]">
                  MedRex
                </span>
              </Link>

              <div className="ml-auto hidden items-center gap-1 md:flex">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="nav-link"
                    data-active={pathname === item.href}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              <div className="ml-auto flex items-center gap-2 md:ml-4">
                <Link href="/#download" className="button-primary hidden sm:inline-flex">
                  Try now
                  <span className="button-arrow">
                    <ArrowUpRightIcon size={14} weight="bold" />
                  </span>
                </Link>

                <button
                  type="button"
                  onClick={() => setMenuOpen((current) => !current)}
                  className="button-secondary min-h-[3rem] min-w-[3rem] px-0 md:hidden"
                  aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                  aria-expanded={menuOpen}
                >
                  {menuOpen ? <XIcon size={18} weight="bold" /> : <ListIcon size={18} weight="bold" />}
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="fixed inset-0 z-40 bg-black/30 md:hidden"
            onClick={() => setMenuOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: -18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
              className="mobile-menu"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex flex-col gap-2 p-3">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="nav-link justify-start px-4 py-3"
                    data-active={pathname === item.href}
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}

                <Link href="/#download" className="button-primary mt-2 w-full" onClick={() => setMenuOpen(false)}>
                  Try now
                  <span className="button-arrow">
                    <ArrowUpRightIcon size={14} weight="bold" />
                  </span>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
