'use client';

import type { ElementType } from 'react';

type StoreBadgeProps = {
  icon: ElementType;
  label: string;
  caption: string;
};

export default function StoreBadge({ icon: Icon, label, caption }: StoreBadgeProps) {
  return (
    <div className="surface flex w-full items-center gap-3 rounded-[1.2rem] px-3 py-3 sm:w-auto sm:px-4">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--brand-soft)] text-[var(--foreground)] dark:text-[var(--brand)] sm:h-10 sm:w-10">
        <Icon size={18} weight="fill" />
      </div>
      <div className="min-w-0">
        <p className="hidden text-[11px] uppercase tracking-[0.16em] text-[var(--muted)] sm:block">{caption}</p>
        <p className="truncate text-sm font-medium leading-none sm:mt-0.5">{label}</p>
      </div>
    </div>
  );
}
