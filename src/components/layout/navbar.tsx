'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Download, Menu, Moon, Sparkles, Sun, X } from 'lucide-react';
import { useEffect, useMemo, useState, useSyncExternalStore } from 'react';
import { useDarkMode } from '@/hooks/useDarkMode';

const rootLinks = [
  { label: 'Home', href: '#top' },
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'AI Demo', href: '#ai-assistant' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Download', href: '#download' },
];

const pageLinks = [
  { label: 'Pricing', href: '/pricing' },
  { label: 'About', href: '/about' },
];

export default function Navbar() {
  const pathname = usePathname();
  const { isDark, toggle } = useDarkMode();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 16);

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const links = useMemo(
    () =>
      rootLinks.map((link) => ({
        ...link,
        href: pathname === '/' ? link.href : `/${link.href}`,
      })),
    [pathname]
  );

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-[70] px-2 pt-2.5 sm:px-6 sm:pt-3">
        <div
          className={`container rounded-[1.6rem] border border-[var(--color-border)] bg-[color:color-mix(in_srgb,var(--color-surface)_94%,transparent)] shadow-[var(--shadow-md)] transition-all duration-300 sm:backdrop-blur-[24px] ${
            isScrolled ? 'border-[var(--color-border-strong)] shadow-[var(--shadow-lg)]' : ''
          }`}
        >
          <div className="flex h-[68px] items-center justify-between gap-3 px-3 sm:h-[74px] sm:px-6">
            <Link href="/" className="flex min-w-0 items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[var(--color-surface)] shadow-[var(--shadow-sm)] sm:h-11 sm:w-11">
                <Image
                  src="/images/medrex_logo.png"
                  alt="MedRex"
                  width={32}
                  height={32}
                  priority
                  className="h-7 w-7 object-contain sm:h-8 sm:w-8"
                />
              </div>
              <div className="min-w-0">
                <p className="truncate text-base font-semibold text-[var(--color-text)] sm:text-lg">MedRex</p>
                <p className="truncate text-[10px] uppercase tracking-[0.18em] text-[var(--color-text-soft)] sm:text-xs sm:tracking-[0.22em]">Digital care OS</p>
              </div>
            </Link>

            <nav className="hidden items-center gap-1 lg:flex">
              {links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="rounded-full px-4 py-2 text-sm font-medium text-[var(--color-text-soft)] transition hover:bg-[var(--color-accent)] hover:text-[var(--color-text)]"
                >
                  {link.label}
                </Link>
              ))}
              {pageLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                    pathname === link.href
                      ? 'bg-[var(--color-accent)] text-[var(--color-text)]'
                      : 'text-[var(--color-text-soft)] hover:bg-[var(--color-accent)] hover:text-[var(--color-text)]'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="hidden items-center gap-3 md:flex">
              <button
                type="button"
                onClick={toggle}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text)] transition hover:border-[var(--color-border-strong)] hover:-translate-y-0.5"
                aria-label="Toggle dark mode"
              >
                {isMounted && isDark ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <Link
                href={pathname === '/' ? '#download' : '/#download'}
                className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-white teal-purple shadow-[var(--shadow-sm)] transition hover:bg-[var(--color-primary-dark)]"
              >
                <Download size={16} />
                Download App
              </Link>
            </div>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen((current) => !current)}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text)] md:hidden"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </header>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[90] overflow-y-auto bg-[var(--color-surface)] md:hidden">
          <div className="container flex min-h-screen flex-col py-4">
            <div className="flex items-center justify-between rounded-[1.6rem] border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-4 shadow-[var(--shadow-sm)]">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[var(--color-surface-muted)]">
                  <Image
                    src="/images/medrex_logo.png"
                    alt="MedRex"
                    width={28}
                    height={28}
                    className="h-7 w-7 object-contain"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[var(--color-text)]">MedRex Menu</p>
                  <p className="text-xs uppercase tracking-[0.18em] text-[var(--color-text-soft)]">Navigation</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text)]"
                aria-label="Close mobile menu"
              >
                <X size={18} />
              </button>
            </div>

            <div className="mt-4 flex-1 rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-4 shadow-[var(--shadow-md)]">
              <div className="flex items-start gap-2 rounded-[1.25rem] bg-[var(--color-accent)] px-4 py-3 text-sm font-medium text-[var(--color-text)]">
                <Sparkles size={16} className="mt-0.5 shrink-0 text-[var(--color-primary)]" />
                <span>Navigate MedRex quickly on mobile.</span>
              </div>

              <nav className="mt-5 flex flex-col gap-2">
                {links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex min-h-14 items-center rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-muted)] px-4 py-4 text-base font-medium text-[var(--color-text)] active:bg-[var(--color-accent)]"
                  >
                    {link.label}
                  </Link>
                ))}
                {pageLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex min-h-14 items-center rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-muted)] px-4 py-4 text-base font-medium text-[var(--color-text)] active:bg-[var(--color-accent)]"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              <div className="mt-5 grid gap-3">
                <button
                  type="button"
                  onClick={toggle}
                  className="flex min-h-12 items-center justify-center gap-2 rounded-full border border-[var(--color-border)] px-4 py-3 text-sm font-semibold text-[var(--color-text)]"
                >
                  {isMounted && isDark ? <Sun size={16} /> : <Moon size={16} />}
                  {isMounted && isDark ? 'Light mode' : 'Dark mode'}
                </button>
                <Link
                  href={pathname === '/' ? '#download' : '/#download'}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-4 py-3 text-sm font-semibold text-white teal-purple"
                >
                  <Download size={16} />
                  Download App
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
