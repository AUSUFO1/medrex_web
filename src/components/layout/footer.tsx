import Link from 'next/link';
import { Instagram, Linkedin, Mail, MapPin, Phone, ShieldCheck, Twitter } from 'lucide-react';

const productLinks = [
  { label: 'Telemedicine', href: '/#features' },
  { label: 'AI Assistant', href: '/#ai-assistant' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Download', href: '/#download' },
];

const companyLinks = [
  { label: 'About MedRex', href: '/about' },
  { label: 'Trust & Privacy', href: '/about#trust' },
  { label: 'Why MedRex', href: '/about#why-medrex' },
  { label: 'Enterprise', href: '/pricing#enterprise' },
];

const legalLinks = [
  { label: 'Terms', href: '#' },
  { label: 'Privacy', href: '#' },
  { label: 'Cookie Notice', href: '#' },
  { label: 'Security', href: '#' },
];

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[color:color-mix(in_srgb,var(--color-surface)_92%,transparent)]">
      <div className="container py-12 sm:py-16">
        <div className="grid gap-8 rounded-[1.75rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-4 shadow-[var(--shadow-md)] sm:rounded-[2rem] sm:p-6 lg:grid-cols-[1.15fr_0.85fr] lg:p-10">
          <div>
            <span className="eyebrow">Built for modern care journeys</span>
            <h2 className="mt-6 max-w-xl text-2xl font-semibold sm:text-4xl">
              Bring records, visits, reminders, and payments into one calm patient experience.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8">
              MedRex helps providers feel organized and helps patients feel supported between appointments.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.5rem] bg-[var(--color-background)] p-5">
                <div className="flex items-center gap-3 text-[var(--color-text)]">
                  <ShieldCheck size={18} className="text-[var(--color-primary)]" />
                  <span className="font-semibold">Health-grade trust</span>
                </div>
                <p className="mt-3 text-sm leading-7">
                  Secure records, controlled permissions, audit-ready workflows, and privacy-first product thinking.
                </p>
              </div>
              <div className="rounded-[1.5rem] bg-[var(--color-background)] p-5">
                <div className="flex items-center gap-3 text-[var(--color-text)]">
                  <MapPin size={18} className="text-[var(--color-secondary)]" />
                  <span className="font-semibold">Designed for global teams</span>
                </div>
                <p className="mt-3 text-sm leading-7">
                  Ready for care organizations serving distributed patients, mobile-first communities, and remote staff.
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--color-text)]">Product</p>
              <div className="mt-5 flex flex-col gap-3 text-sm">
                {productLinks.map((link) => (
                  <Link key={link.label} href={link.href} className="text-[var(--color-text-soft)] transition hover:text-[var(--color-text)]">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--color-text)]">Company</p>
              <div className="mt-5 flex flex-col gap-3 text-sm">
                {companyLinks.map((link) => (
                  <Link key={link.label} href={link.href} className="text-[var(--color-text-soft)] transition hover:text-[var(--color-text)]">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--color-text)]">Legal</p>
              <div className="mt-5 flex flex-col gap-3 text-sm">
                {legalLinks.map((link) => (
                  <Link key={link.label} href={link.href} className="text-[var(--color-text-soft)] transition hover:text-[var(--color-text)]">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="rounded-[1.5rem] bg-[var(--color-background)] p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--color-text)]">Contact</p>
              <div className="mt-5 space-y-3 text-sm text-[var(--color-text-soft)]">
                <p className="flex items-start gap-2"><Mail size={16} className="mt-0.5 shrink-0" /> care@medrex.app</p>
                <p className="flex items-start gap-2"><Phone size={16} className="mt-0.5 shrink-0" /> +234 800 MED REX</p>
                <p className="flex items-start gap-2"><MapPin size={16} className="mt-0.5 shrink-0" /> Lagos, London, Toronto</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-4 border-t border-[var(--color-border)] pt-6 md:flex-row md:items-center md:justify-between">
          <p className="max-w-2xl text-sm text-[var(--color-text-soft)]">© 2026 MedRex. Placeholder legal links and newsletter flow can be swapped with your real policies and backend.</p>
          <div className="flex items-center gap-3">
            <Link href="#" className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-text-soft)] transition hover:text-[var(--color-text)]">
              <Twitter size={16} />
            </Link>
            <Link href="#" className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-text-soft)] transition hover:text-[var(--color-text)]">
              <Instagram size={16} />
            </Link>
            <Link href="#" className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-text-soft)] transition hover:text-[var(--color-text)]">
              <Linkedin size={16} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
