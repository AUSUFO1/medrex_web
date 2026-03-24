import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MedRex — Your Complete Health Companion",
  description: "MedRex is a comprehensive health platform offering telemedicine, medical records management, AI assistance, mood tracking, reminders, and secure payments.",
  keywords: ["health", "telemedicine", "medical records", "AI health assistant", "MedRex"],
  authors: [{ name: "MedRex" }],
  openGraph: {
    title: "MedRex — Your Complete Health Companion",
    description: "Connect with doctors, manage records, and track your health all in one place.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "MedRex — Your Complete Health Companion",
    description: "Connect with doctors, manage records, and track your health all in one place.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">
        {children}
      </body>
    </html>
  );
}