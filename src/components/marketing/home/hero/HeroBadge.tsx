'use client';

import { SparkleIcon } from '@phosphor-icons/react/dist/ssr';

export default function HeroBadge() {
  return (
    <div className="eyebrow">
      <SparkleIcon size={14} weight="fill" className="text-[var(--brand-strong)]" />
      Futuristic health operations for patients and providers
    </div>
  );
}
