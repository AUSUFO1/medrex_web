import type { Metadata } from 'next';
import { Inter, Manrope } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'MedRex | Your Complete Health Companion',
  description:
    'MedRex brings consultations, records, AI support, reminders, mood tracking, and secure payments into one trusted health platform.',
  keywords: ['MedRex', 'telemedicine', 'medical records', 'AI health assistant', 'health app'],
  openGraph: {
    title: 'MedRex | Your Complete Health Companion',
    description: 'Care, records, and AI guidance in one calm, modern health experience.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MedRex | Your Complete Health Companion',
    description: 'Care, records, and AI guidance in one calm, modern health experience.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`} suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
