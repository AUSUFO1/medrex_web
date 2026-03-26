import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';

export const metadata: Metadata = {
  title: 'Third Party Notices | MedRex',
  description: 'Third Party Notices for MedRex.',
};

const notices = [
  {
    title: 'Open-source and libraries',
    body:
      'MedRex uses third-party software packages and fonts that are governed by their own licenses and attribution requirements.',
  },
  {
    title: 'External services',
    body:
      'Some parts of the product may rely on external services for analytics, hosting, notifications, or payment processing.',
  },
  {
    title: 'Attribution',
    body:
      'This page should be updated with the final list of libraries, services, and license notices used in production.',
  },
];

export default function NoticesPage() {
  return (
    <div className="shell">
      <Navbar />
      <main className="page-main">
        <section className="section">
          <div className="container">
            <div className="mx-auto max-w-4xl">
              <div className="eyebrow">Third Party Notices</div>
              <h1 className="mt-6 text-[clamp(2.6rem,8vw,5rem)] font-medium leading-[0.95] tracking-[-0.06em]">
                Libraries and services used by MedRex.
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--muted)]">
                Replace this placeholder with your final third-party license list before launch.
              </p>
            </div>

            <div className="mx-auto mt-12 grid max-w-4xl gap-4">
              {notices.map((notice) => (
                <div key={notice.title} className="surface rounded-[1.6rem] p-6">
                  <h2 className="text-xl font-medium tracking-[-0.04em]">{notice.title}</h2>
                  <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{notice.body}</p>
                </div>
              ))}
              <div className="surface rounded-[1.6rem] p-6">
                <Link href="/" className="text-sm font-medium text-[var(--foreground)] underline underline-offset-4">
                  Back to home
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
