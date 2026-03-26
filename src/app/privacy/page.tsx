import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';

export const metadata: Metadata = {
  title: 'Privacy Notice | MedRex',
  description: 'Privacy Notice for MedRex.',
};

const sections = [
  {
    title: 'Information we collect',
    body:
      'MedRex may collect account details, profile information, health preferences, usage analytics, and support communications to operate the service and improve the experience.',
  },
  {
    title: 'How we use information',
    body:
      'We use information to provide the product, maintain security, personalize the experience, send service updates, and support care workflows that the user enables.',
  },
  {
    title: 'Sharing and disclosure',
    body:
      'We do not sell personal health information. We may share data with service providers, healthcare partners, or legal authorities only when required to operate the service or comply with law.',
  },
  {
    title: 'Data security',
    body:
      'We use technical and organizational safeguards designed to protect data in transit and at rest. No system is perfectly secure, but we work to reduce risk and limit exposure.',
  },
];

export default function PrivacyPage() {
  return (
    <div className="shell">
      <Navbar />
      <main className="page-main">
        <section className="section">
          <div className="container">
            <div className="mx-auto max-w-4xl">
              <div className="eyebrow">Privacy Notice</div>
              <h1 className="mt-6 text-[clamp(2.6rem,8vw,5rem)] font-medium leading-[0.95] tracking-[-0.06em]">
                How MedRex handles personal and health information.
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--muted)]">
                This is a standard placeholder privacy notice for launch. Replace the details with your final legal review before production.
              </p>
            </div>

            <div className="mx-auto mt-12 grid max-w-4xl gap-4">
              {sections.map((section) => (
                <div key={section.title} className="surface rounded-[1.6rem] p-6">
                  <h2 className="text-xl font-medium tracking-[-0.04em]">{section.title}</h2>
                  <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{section.body}</p>
                </div>
              ))}
              <div className="surface rounded-[1.6rem] p-6">
                <h2 className="text-xl font-medium tracking-[-0.04em]">Contact</h2>
                <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                  Questions about privacy can be directed to your legal or support contact once it is finalized.
                </p>
                <div className="mt-6">
                  <Link href="/" className="text-sm font-medium text-[var(--foreground)] underline underline-offset-4">
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
