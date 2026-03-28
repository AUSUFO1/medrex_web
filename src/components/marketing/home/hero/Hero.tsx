'use client';

import { motion } from 'framer-motion';
import HeroButtons from './HeroButtons';
import HeroDashboard from './HeroDashboard';
import HeroDescription from './HeroDescription';
import HeroHeadline from './HeroHeadline';

export default function Hero() {
  return (
    <section className="section pt-6 sm:pt-8">
      <div className="container">
        <div className="surface-dark hero-grid rounded-[2rem] px-5 py-6 sm:px-8 sm:py-8 lg:px-10 lg:py-10">
          <div className="relative z-10 grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-end lg:gap-10">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: 'easeOut' }}
              className="max-w-2xl"
            >
              <HeroHeadline />
              <HeroDescription />
              <HeroButtons />
            </motion.div>

            <HeroDashboard />
          </div>
        </div>
      </div>
    </section>
  );
}
