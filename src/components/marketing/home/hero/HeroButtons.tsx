'use client';

import { AppStoreLogoIcon, GooglePlayLogoIcon } from '@phosphor-icons/react/dist/ssr';
import StoreBadge from '../StoreBadge';

export default function HeroButtons() {
  return (
    <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
      <StoreBadge icon={AppStoreLogoIcon} label="App Store" caption="Available on" inverse />
      <StoreBadge icon={GooglePlayLogoIcon} label="Google Play" caption="Get it on" inverse />
    </div>
  );
}
