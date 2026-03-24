'use client';

import { motion } from 'framer-motion';

// ── App Store & Play Store SVG badges ──
const AppStoreBadge = () => (
  <motion.a
    href="#download"
    whileHover={{ opacity: 0.75 }}
    whileTap={{ scale: 0.97 }}
    transition={{ duration: 0.15 }}
    className="flex items-center gap-2.5 border border-black/[0.12] dark:border-white/[0.12] rounded-[10px] px-4 py-2.5 hover:border-black/25 dark:hover:border-white/25 transition-colors duration-200"
    aria-label="Download on the App Store"
  >
    <svg width="18" height="22" viewBox="0 0 18 22" fill="currentColor" className="text-gray-900 dark:text-white shrink-0">
      <path d="M14.95 11.6c-.02-2.4 1.96-3.56 2.05-3.62-1.12-1.63-2.86-1.85-3.48-1.88-1.48-.15-2.9.88-3.65.88-.76 0-1.93-.86-3.17-.84-1.63.02-3.13.95-3.97 2.4-1.7 2.95-.44 7.3 1.22 9.69.82 1.17 1.79 2.48 3.06 2.43 1.23-.05 1.7-.79 3.19-.79 1.49 0 1.92.79 3.22.76 1.32-.02 2.16-1.19 2.96-2.37.94-1.36 1.33-2.68 1.35-2.75-.03-.01-2.59-1-2.78-3.91ZM12.5 4.28c.68-.83 1.14-1.97 1.01-3.12-.98.04-2.17.66-2.87 1.47-.63.73-1.18 1.91-1.03 3.03 1.09.08 2.21-.56 2.89-1.38Z"/>
    </svg>
    <div className="flex flex-col leading-none gap-[2px]">
      <span className="text-[10px] text-gray-600 dark:text-[#a1a1a6] tracking-[-0.05px]">Download on the</span>
      <span className="text-[13px] font-semibold text-gray-900 dark:text-white tracking-[-0.3px]">App Store</span>
    </div>
  </motion.a>
);

const PlayStoreBadge = () => (
  <motion.a
    href="#download"
    whileHover={{ opacity: 0.75 }}
    whileTap={{ scale: 0.97 }}
    transition={{ duration: 0.15 }}
    className="flex items-center gap-2.5 border border-black/[0.12] dark:border-white/[0.12] rounded-[10px] px-4 py-2.5 hover:border-black/25 dark:hover:border-white/25 transition-colors duration-200"
    aria-label="Get it on Google Play"
  >
    <svg width="18" height="20" viewBox="0 0 18 20" fill="none" className="shrink-0">
      <path d="M.5 1.1 10.3 10 .5 18.9A1 1 0 0 1 0 18V2A1 1 0 0 1 .5 1.1Z" fill="#32BBFF"/>
      <path d="M13.8 6.8 10.3 10 .5 1.1a1 1 0 0 1 1.1-.1l12.2 5.8Z" fill="#32BBFF"/>
      <path d="M13.8 13.2.5 18.9a1 1 0 0 0 1.1.1l12.2-5.8Z" fill="#29CC5E"/>
      <path d="M18 10a1 1 0 0 1-.6.9l-3.6 1.7-3.5-2.6 3.5-2.6 3.6 1.7A1 1 0 0 1 18 10Z" fill="#FFD500"/>
      <path d="M.5 1.1 10.3 10l3.5-3.2L1.6 1C1.2.8.8.9.5 1.1Z" fill="#29CC5E"/>
    </svg>
    <div className="flex flex-col leading-none gap-[2px]">
      <span className="text-[10px] text-gray-600 dark:text-[#a1a1a6] tracking-[-0.05px]">Get it on</span>
      <span className="text-[13px] font-semibold text-gray-900 dark:text-white tracking-[-0.3px]">Google Play</span>
    </div>
  </motion.a>
);

export default function FooterTop() {
  return (
    <div className="max-w-[980px] mx-auto px-5 pt-14 pb-10 border-b border-black/[0.06] dark:border-white/[0.06]">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-[22px] font-semibold text-gray-900 dark:text-white tracking-[-0.5px] leading-snug"
          >
            Healthcare, in your pocket.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.06 }}
            className="text-[14px] text-gray-500 dark:text-[#6e6e73] mt-1 tracking-[-0.1px]"
          >
            Free to download. Start your health journey today.
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col sm:flex-row gap-3"
        >
          <AppStoreBadge />
          <PlayStoreBadge />
        </motion.div>
      </div>
    </div>
  );
}