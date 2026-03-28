'use client';

import type { ElementType } from 'react';

type StoreBadgeProps = {
  icon: ElementType;
  label: string;
  caption: string;
  inverse?: boolean;
};

export default function StoreBadge({ icon: Icon, label, caption, inverse = false }: StoreBadgeProps) {
  return (
    <div
      className={`store-pill ${inverse ? 'border-white/10 bg-white/6 text-white shadow-none' : ''}`}
    >
      <div className={`store-pill-icon ${inverse ? 'bg-white/10 text-white' : ''}`}>
        <Icon size={18} weight="fill" />
      </div>
      <div className="min-w-0">
        <p className={`text-[11px] uppercase tracking-[0.18em] ${inverse ? 'text-white/48' : 'text-[var(--muted)]'}`}>
          {caption}
        </p>
        <p className="mt-1 truncate text-sm font-semibold leading-none">{label}</p>
      </div>
    </div>
  );
}
