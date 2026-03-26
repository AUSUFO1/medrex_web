import Link from 'next/link';
import { AppStoreLogoIcon, ArrowUpRightIcon, GooglePlayLogoIcon, ShieldCheckIcon, SparkleIcon } from '@phosphor-icons/react/dist/ssr';

const footerLinks = [
  { label: 'Privacy Notice', href: '/privacy' },
  { label: 'Terms of Use', href: '/terms' },
  { label: 'Third Party Notices', href: '/notices' },
];

export default function Footer() {
  return (
    <footer className="bg-[var(--background)]">
      <div className="container py-16 md:py-24">
        <div className="grid gap-8 rounded-[2rem] bg-[var(--panel-strong)] p-6 shadow-[var(--shadow-sm)] lg:grid-cols-[1.1fr_0.9fr] lg:p-10">
          <div>
            <div className="eyebrow">
              <SparkleIcon size={14} weight="fill" />
              Future-ready care delivery
            </div>
            <h2 className="mt-6 max-w-2xl text-3xl font-medium tracking-[-0.05em] sm:text-4xl">
              MedRex keeps telemedicine, records, AI support, and payments moving in one clean flow.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-[var(--muted)]">
              Replace the placeholder store links, legal copy, and contact endpoints with your production launch details when you are ready.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/#download" className="ghost-button">
                <AppStoreLogoIcon size={18} />
                App Store
              </Link>
              <Link href="/#download" className="ghost-button">
                <GooglePlayLogoIcon size={18} />
                Google Play
              </Link>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-[1.5rem] bg-[var(--background-subtle)] p-6">
              <div className="flex items-center gap-2 text-sm font-medium">
                <ShieldCheckIcon size={18} className="text-[var(--foreground)] dark:text-[var(--brand)]" />
                Trust layer
              </div>
              <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                MedRex is positioned as a health-tech platform built around secure records, calm UX, and clear patient guidance.
              </p>
            </div>
            <div className="rounded-[1.5rem] bg-[var(--background-subtle)] p-6">
              <p className="text-sm font-medium">Pages</p>
              <div className="mt-4 flex flex-col gap-3 text-sm text-[var(--muted)]">
                <Link href="/" className="inline-flex items-center gap-2 hover:text-[var(--foreground)]">
                  Home <ArrowUpRightIcon size={14} />
                </Link>
                <Link href="/about" className="inline-flex items-center gap-2 hover:text-[var(--foreground)]">
                  About <ArrowUpRightIcon size={14} />
                </Link>
                <Link href="/pricing" className="inline-flex items-center gap-2 hover:text-[var(--foreground)]">
                  Pricing <ArrowUpRightIcon size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-4 text-sm text-[var(--muted)] md:flex-row md:items-center md:justify-between">
          <p>© 2026 MedRex. Designed for a faster, calmer health future.</p>
          <div className="flex flex-wrap gap-4">
            {footerLinks.map((item) => (
              <Link key={item.label} href={item.href} className="hover:text-[var(--foreground)]">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
