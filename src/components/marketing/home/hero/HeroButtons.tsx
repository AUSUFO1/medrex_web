'use client';

import { AppStoreLogoIcon, GooglePlayLogoIcon } from '@phosphor-icons/react/dist/ssr';
import StoreBadge from '../StoreBadge';

export default function HeroButtons() {
  return (
    <div className="mt-6 grid grid-cols-2 gap-2 sm:flex sm:flex-row sm:justify-center sm:gap-3">
      <StoreBadge icon={AppStoreLogoIcon} label="App Store" caption="Available on" />
      <StoreBadge icon={GooglePlayLogoIcon} label="Google Play" caption="Get it on" />
    </div>
  );
}
