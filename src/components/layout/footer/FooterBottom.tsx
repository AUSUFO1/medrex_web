'use client';

import { motion } from 'framer-motion';

// ── Apple-style minimal social icons (SVG only, no lucide) ──
const SocialIcons = {
  Twitter: () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
      <path d="M12.6 1h2.4L9.8 7.2 15.7 15H11L7.1 9.8 2.6 15H.2l5.6-6.7L0 1h4.8l3.5 4.7L12.6 1Zm-.8 12.6h1.3L4.3 2.4H2.9l8.9 11.2Z"/>
    </svg>
  ),
  Instagram: () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
      <path d="M8 1.44c2.14 0 2.39.01 3.23.05 2.2.1 3.23 1.14 3.33 3.33.04.84.05 1.09.05 3.23s-.01 2.39-.05 3.23c-.1 2.19-1.13 3.23-3.33 3.33-.84.04-1.09.05-3.23.05s-2.39-.01-3.23-.05c-2.2-.1-3.23-1.14-3.33-3.33C1.4 10.39 1.4 10.14 1.4 8s.01-2.39.05-3.23C1.55 2.58 2.58 1.54 4.77 1.44 5.61 1.4 5.86 1.44 8 1.44ZM8 0C5.83 0 5.56.01 4.7.05 1.7.18.18 1.7.05 4.7.01 5.56 0 5.83 0 8c0 2.17.01 2.44.05 3.3.13 3 1.65 4.52 4.65 4.65C5.56 15.99 5.83 16 8 16s2.44-.01 3.3-.05c3-.13 4.52-1.65 4.65-4.65.04-.86.05-1.13.05-3.3 0-2.17-.01-2.44-.05-3.3C15.82 1.7 14.3.18 11.3.05 10.44.01 10.17 0 8 0Zm0 3.89a4.11 4.11 0 1 0 0 8.22 4.11 4.11 0 0 0 0-8.22Zm0 6.78a2.67 2.67 0 1 1 0-5.34 2.67 2.67 0 0 1 0 5.34ZM12.27 2.77a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92Z"/>
    </svg>
  ),
  YouTube: () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
      <path d="M15.67 4.5s-.16-1.1-.64-1.59c-.62-.64-1.3-.65-1.62-.69C11.24 2.09 8 2.09 8 2.09s-3.24 0-5.41.13c-.32.04-1 .05-1.62.69C.49 3.4.33 4.5.33 4.5S.17 5.78.17 7.06v1.2c0 1.28.16 2.56.16 2.56s.16 1.1.64 1.58c.62.64 1.43.62 1.79.69C3.97 13.22 8 13.22 8 13.22s3.24 0 5.41-.14c.32-.04 1-.05 1.62-.69.48-.48.64-1.58.64-1.58s.16-1.28.16-2.56v-1.2C15.83 5.78 15.67 4.5 15.67 4.5ZM6.48 10.11V5.68l4.37 2.22-4.37 2.21Z"/>
    </svg>
  ),
  LinkedIn: () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
      <path d="M0 1.15C0 .51.53 0 1.18 0h13.64C15.47 0 16 .51 16 1.15v13.7c0 .63-.53 1.15-1.18 1.15H1.18C.53 16 0 15.49 0 14.85V1.15ZM4.94 13.4V6.17H2.54v7.23h2.4ZM3.74 5.17c.84 0 1.36-.56 1.36-1.25-.02-.71-.52-1.25-1.34-1.25C2.93 2.67 2.4 3.21 2.4 3.92c0 .69.52 1.25 1.32 1.25h.02ZM8.68 13.4V9.36c0-.22.02-.43.08-.58.17-.43.57-.87 1.23-.87.87 0 1.22.66 1.22 1.63v3.86h2.4V9.27c0-2.22-1.18-3.25-2.76-3.25-1.29 0-1.86.72-2.17 1.21v.03h-.01l.01-.03V6.17H6.28c.03.67 0 7.23 0 7.23h2.4Z"/>
    </svg>
  ),
};

export default function FooterBottom() {
  const socialLinks = [
    { name: 'Twitter', Icon: SocialIcons.Twitter },
    { name: 'Instagram', Icon: SocialIcons.Instagram },
    { name: 'YouTube', Icon: SocialIcons.YouTube },
    { name: 'LinkedIn', Icon: SocialIcons.LinkedIn },
  ];

  return (
    <>
      {/* ── Social Links ── */}
      <div className="max-w-[980px] mx-auto px-5 pb-8 border-t border-black/[0.06] dark:border-white/[0.06]">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center gap-6 pt-8"
        >
          {socialLinks.map((social) => (
            <motion.a
              key={social.name}
              href="#"
              whileHover={{ scale: 1.1, y: -1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.15 }}
              className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
              aria-label={social.name}
            >
              <social.Icon />
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* ── Copyright ── */}
      <div className="max-w-[980px] mx-auto px-5 pb-14">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-[12px] text-gray-500 dark:text-[#6e6e73] tracking-[-0.1px]"
        >
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <span>© 2024 MedRex. All rights reserved.</span>
            <span>Made with ❤️ for better healthcare</span>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors duration-200">
              Terms of Service
            </a>
          </div>
        </motion.div>
      </div>
    </>
  );
}