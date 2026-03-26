'use client';

import { AppStoreLogoIcon, GooglePlayLogoIcon } from '@phosphor-icons/react/dist/ssr';
import StoreBadge from './StoreBadge';


export default function DownloadSection() {
  return (
    <section id="download" className="section">
      <div className="container">
        <div className="spotlight grid-dots overflow-hidden rounded-[2rem] bg-[#050506] p-6 text-white shadow-[var(--shadow-md)] sm:p-10">
          <div className="relative z-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <div className="eyebrow border-white/10 bg-white/5 text-white/70">Download MedRex</div>
              <h2 className="mt-6 font-medium tracking-[-0.05em]" style={{ fontSize: 'clamp(2rem, 7vw, 3.5rem)' }}>
                A futuristic health companion that still feels trustworthy.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-white/70">
                The app badges and QR-style visuals here are placeholders you can replace with production store links and launch assets.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <StoreBadge icon={AppStoreLogoIcon} label="App Store" caption="Available on" />
              <StoreBadge icon={GooglePlayLogoIcon} label="Google Play" caption="Get it on" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
