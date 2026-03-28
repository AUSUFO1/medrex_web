import type { Metadata, Viewport } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#07080d',
};

export const metadata: Metadata = {
  title: 'MedRex | Health, Designed For Clarity',
  description:
    'MedRex brings telemedicine, records, AI support, reminders, mood tracking, and payments into one premium care experience.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${playfair.variable} scroll-smooth`}
    >
      <body className="site-body antialiased">{children}</body>
    </html>
  );
}
