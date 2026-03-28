import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';

export const metadata: Metadata = {
  title: 'Terms of Use | MedRex',
  description: 'Terms of Use for MedRex.',
};

const sections = [
  {
    title: 'Acceptance of terms',
    body:
      'By using MedRex, you agree to these terms and any posted policies. If you do not agree, you should not use the service.',
  },
  {
    title: 'Your responsibilities',
    body:
      'You are responsible for the accuracy of the information you provide, for maintaining account security, and for using the product in lawful ways.',
  },
  {
    title: 'Service availability',
    body:
      'We may update, suspend, or discontinue parts of the service when needed for maintenance, security, product changes, or legal compliance.',
  },
  {
    title: 'Medical disclaimer',
    body:
      'MedRex supports care coordination and information management. It does not replace professional medical advice, diagnosis, or emergency treatment.',
  },
];

export default function TermsPage() {
  return (
    <div className="shell">
      <Navbar />
      <main className="page-main">
        <section className="section pt-6 sm:pt-8">
          <div className="container">
            <div className="mx-auto max-w-4xl">
              <div className="section-eyebrow">Terms of Use</div>
              <h1 className="mt-6 text-[clamp(2.6rem,8vw,5rem)] leading-[0.93] tracking-[-0.08em]">
                The rules for using MedRex responsibly.
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--muted)]">
                This is a standard placeholder terms page for launch. Replace it with legal review before shipping.
              </p>
            </div>

            <div className="mx-auto mt-12 grid max-w-4xl gap-4">
              {sections.map((section) => (
                <div key={section.title} className="surface-card p-6">
                  <h2 className="text-2xl leading-[0.95] tracking-[-0.06em]">{section.title}</h2>
                  <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{section.body}</p>
                </div>
              ))}
              <div className="surface-card p-6">
                <h2 className="text-2xl leading-[0.95] tracking-[-0.06em]">Contact</h2>
                <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                  For legal questions, use your final business contact once the launch configuration is ready.
                </p>
                <div className="mt-6">
                  <Link href="/" className="button-secondary">
                    Back to home
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
