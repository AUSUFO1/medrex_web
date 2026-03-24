'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Download, Menu, X, Moon, Sun } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useDarkMode } from '@/hooks/useDarkMode';

const navItems = [
  { name: 'Features',     href: '#features'     },
  { name: 'How It Works', href: '#how-it-works'  },
  { name: 'Pricing',      href: '#pricing'       },
  { name: 'About',        href: '#about'         },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled]         = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isDark, toggle }                  = useDarkMode();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500
          ${isScrolled
            ? 'bg-[var(--color-background)]/90 backdrop-blur-2xl border-b border-[var(--color-border)]'
            : 'bg-[var(--color-background)]/60 backdrop-blur-md border-b border-transparent'
          }`}
      >
        <div className="max-w-[1280px] mx-auto px-6 h-[56px] flex items-center justify-between">

          {/* Logo */}
          <motion.a
            href="/"
            whileHover={{ opacity: 0.85 }}
            transition={{ duration: 0.15 }}
            className="flex items-center select-none"
            aria-label="MedRex home"
          >
            <img
              src="/images/medrex_logo.png"
              alt="MedRex"
              className="w-[38px] h-[38px] object-contain"
            />
          </motion.a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                whileHover={{ backgroundColor: 'var(--color-accent)' }}
                transition={{ duration: 0.15 }}
                className="px-4 py-2 rounded-[var(--radius-md)] text-[13px] font-medium
                  text-[var(--color-text-secondary)] hover:text-[var(--color-primary)]
                  transition-colors duration-200"
              >
                {item.name}
              </motion.a>
            ))}
          </div>

          {/* Desktop Right Actions */}
          <div className="hidden md:flex items-center gap-3">

            {/* Dark Mode Toggle */}
            <motion.button
              onClick={toggle}
              whileHover={{ backgroundColor: 'var(--color-accent)' }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.15 }}
              className="w-9 h-9 flex items-center justify-center rounded-[var(--radius-md)]
                text-[var(--color-text-secondary)] hover:text-[var(--color-primary)]
                transition-colors duration-200"
              aria-label="Toggle dark mode"
            >
              <AnimatePresence mode="wait" initial={false}>
                {isDark ? (
                  <motion.div
                    key="sun"
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Sun size={16} strokeWidth={2} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon"
                    initial={{ opacity: 0, rotate: 90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: -90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Moon size={16} strokeWidth={2} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>

            {/* Download CTA */}
            <motion.a
              href="#download"
              whileHover={{ opacity: 0.9, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.15 }}
              className="flex items-center gap-2 bg-[var(--color-primary)] text-white
                text-[13px] font-medium px-4 py-2 rounded-[var(--radius-full)]
                shadow-[var(--shadow-sm)] transition-all duration-200"
            >
              <Download size={13} strokeWidth={2} />
              <span>Download App</span>
            </motion.a>
          </div>

          {/* Mobile Hamburger */}
          <motion.button
            whileTap={{ scale: 0.92 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden flex items-center justify-center w-9 h-9
              text-[var(--color-text-primary)] rounded-[var(--radius-md)]"
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.15 }}
                >
                  <X size={20} strokeWidth={1.5} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ opacity: 0, rotate: 90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -90 }}
                  transition={{ duration: 0.15 }}
                >
                  <Menu size={20} strokeWidth={1.5} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>

        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
            className="fixed inset-0 top-[56px] z-40 bg-[var(--color-background)]/97
              backdrop-blur-2xl md:hidden"
          >
            <nav className="flex flex-col px-6 pt-6 pb-10 h-full">

              {/* Nav Links */}
              <div className="flex flex-col border-t border-[var(--color-border)]">
                {navItems.map((item, i) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06, duration: 0.2 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center justify-between py-4
                      border-b border-[var(--color-border)]
                      text-[17px] font-normal text-[var(--color-text-primary)]"
                  >
                    <span>{item.name}</span>
                    <svg width="7" height="12" viewBox="0 0 7 12" fill="none">
                      <path
                        d="M1 1l5 5-5 5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        opacity="0.35"
                      />
                    </svg>
                  </motion.a>
                ))}
              </div>

              {/* Mobile Dark Mode Toggle */}
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.2 }}
                onClick={toggle}
                className="mt-6 flex items-center gap-3 px-4 py-3
                  rounded-[var(--radius-md)] border border-[var(--color-border)]
                  text-[15px] font-medium text-[var(--color-text-primary)]"
              >
                {isDark ? <Sun size={18} strokeWidth={2} /> : <Moon size={18} strokeWidth={2} />}
                {isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              </motion.button>

              {/* Mobile Download CTA */}
              <motion.a
                href="#download"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.22 }}
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-4 flex items-center justify-center gap-2 w-full
                  bg-[var(--color-primary)] text-white text-[15px] font-medium
                  py-3.5 rounded-[var(--radius-lg)]"
              >
                <Download size={16} strokeWidth={2} />
                Download App
              </motion.a>

              <p className="mt-auto text-[12px] text-[var(--color-text-muted)] text-center">
                Available on App Store & Google Play
              </p>

            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}