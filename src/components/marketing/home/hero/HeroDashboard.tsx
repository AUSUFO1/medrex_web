'use client';

import { aiPrompt, aiResponse, heroMetrics, heroSignals } from '../data';

export default function HeroDashboard() {
  return (
    <div className="relative z-10 mx-auto mt-8 w-full max-w-5xl">
      <div className="grid gap-3 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="hero-panel grid-dots p-4 sm:p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-[var(--hero-muted)]">MedRex OS</p>
              <p className="mt-3 text-2xl font-medium">Your unified care view</p>
            </div>
            <div className="rounded-full border border-[var(--hero-line)] bg-[var(--hero-panel)] px-3 py-2 text-xs text-[var(--hero-muted)]">
              Live system
            </div>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {heroMetrics.map((item) => (
              <div key={item.label} className="rounded-[1rem] bg-[var(--hero-panel)] p-4">
                <item.icon size={18} className="text-[var(--hero-foreground)]" />
                <p className="mt-4 text-xs uppercase tracking-[0.16em] text-[var(--hero-muted)]">{item.label}</p>
                <p className="mt-1 text-sm font-medium">{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-panel grid-dots p-4 sm:p-6">
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--hero-muted)]">AI Companion</p>
          <div className="mt-5 space-y-3">
            <div className="rounded-[1rem] bg-[var(--hero-panel)] p-4 text-sm text-[var(--hero-muted)]">
              {aiPrompt}
            </div>
            <div className="hero-response p-4 text-sm">
              {aiResponse}
            </div>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {heroSignals.map((item) => (
              <div key={item.label} className="rounded-[1rem] bg-[var(--hero-panel)] p-4">
                <item.icon size={18} className="text-[var(--hero-foreground)]" />
                <p className="mt-3 text-xs uppercase tracking-[0.18em] text-[var(--hero-muted)]">{item.label}</p>
                <p className="mt-1 text-sm font-medium">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
