import Link from 'next/link';
import { ArrowUpRightIcon, ShieldCheckIcon } from '@phosphor-icons/react/dist/ssr';

const pageLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Pricing', href: '/pricing' },
];

const legalLinks = [
  { label: 'Privacy Notice', href: '/privacy' },
  { label: 'Terms of Use', href: '/terms' },
  { label: 'Third Party Notices', href: '/notices' },
];

export default function Footer() {
  return (
    <footer className="section-tight">
      <div className="container">
        <div className="surface-card grid gap-8 p-6 sm:p-8 lg:grid-cols-[1.1fr_0.9fr] lg:p-10">
          <div>
            <h2 className="max-w-2xl text-[clamp(2rem,5vw,3.75rem)] leading-[0.96] tracking-[-0.04em]">
              MedRex keeps care, records, and support moving in one calm operating layer.
            </h2>

            <p className="mt-4 max-w-2xl text-base leading-8 text-[var(--muted)]">
              Clean product language, secure health workflows, and a premium interface built for patients and providers who need clarity fast.
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-sm font-medium text-[var(--foreground)]">
              <Link href="/#download" className="inline-flex items-center gap-2 hover:text-[var(--brand)]">
                Download app
                <ArrowUpRightIcon size={14} />
              </Link>
              <Link href="/pricing" className="inline-flex items-center gap-2 hover:text-[var(--brand)]">
                View plans
                <ArrowUpRightIcon size={14} />
              </Link>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="surface-card-soft p-6">
              <div className="flex items-center gap-2 text-sm font-semibold">
                <ShieldCheckIcon size={18} weight="fill" className="text-[var(--brand)]" />
                Trust layer
              </div>
              <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                MedRex is positioned around secure records, calm patient guidance, and a more reliable care experience across screens.
              </p>
            </div>

            <div className="surface-card-soft p-6">
              <p className="text-sm font-semibold">Pages</p>
              <div className="mt-4 flex flex-col gap-3 text-sm text-[var(--muted)]">
                {pageLinks.map((item) => (
                  <Link key={item.href} href={item.href} className="inline-flex items-center gap-2 hover:text-[var(--foreground)]">
                    {item.label}
                    <ArrowUpRightIcon size={14} />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-4 text-sm text-[var(--muted)] md:flex-row md:items-center md:justify-between">
          <p>© 2026 MedRex. Designed for faster, calmer health experiences.</p>
          <div className="flex flex-wrap gap-4">
            {legalLinks.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-[var(--foreground)]">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
