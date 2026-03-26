'use client';

import HeroButtons from './HeroButtons';
import HeroDashboard from './HeroDashboard';
import HeroDescription from './HeroDescription';
import HeroHeadline from './HeroHeadline';

export default function Hero() {
  return (
    <section className="section pt-4 sm:pt-6">
      <div className="container">
        <div className="hero-shell hero-field grid-dots overflow-hidden px-1 py-6 sm:px-2 sm:py-8 lg:px-4 lg:py-10">
          <div className="relative z-10 mx-auto max-w-4xl text-center">
            <HeroHeadline />
            <HeroDescription />
            <HeroButtons />
          </div>

          <HeroDashboard />
        </div>
      </div>
    </section>
  );
}
