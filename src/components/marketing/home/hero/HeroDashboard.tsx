'use client';

import { motion } from 'framer-motion';
import { aiPrompt, aiResponse, heroMetrics, heroSignals } from '../data';

export default function HeroDashboard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.08, ease: 'easeOut' }}
      className="float-gentle relative z-10"
    >
      <div className="grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="grid-dots rounded-[1.7rem] border border-white/10 bg-white/6 p-4 backdrop-blur-xl sm:p-5">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-[11px] uppercase tracking-[0.22em] text-white/44">MedRex OS</p>
              <p className="mt-2 text-xl font-semibold tracking-[-0.05em] text-white sm:text-2xl">
                Your unified care view
              </p>
            </div>
            <div className="rounded-full border border-white/10 bg-white/6 px-3 py-2 text-xs text-white/64">
              Live system
            </div>
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {heroMetrics.map((item) => (
              <div key={item.label} className="rounded-[1.2rem] border border-white/8 bg-black/18 p-4">
                <item.icon size={18} weight="fill" className="text-[var(--brand-strong)]" />
                <p className="mt-4 text-[11px] uppercase tracking-[0.16em] text-white/48">{item.label}</p>
                <p className="mt-1 text-sm font-semibold text-white">{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid-dots rounded-[1.7rem] border border-white/10 bg-white/6 p-4 backdrop-blur-xl sm:p-5">
          <p className="text-[11px] uppercase tracking-[0.22em] text-white/44">AI Companion</p>
          <div className="mt-4 space-y-3">
            <div className="rounded-[1.1rem] border border-white/8 bg-black/18 p-4 text-sm leading-7 text-white/66">
              {aiPrompt}
            </div>
            <div className="rounded-[1.1rem] bg-[linear-gradient(135deg,rgba(115,89,255,0.28),rgba(255,255,255,0.08))] p-4 text-sm leading-7 text-white">
              {aiResponse}
            </div>
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            {heroSignals.map((item) => (
              <div key={item.label} className="rounded-[1.1rem] border border-white/8 bg-black/18 p-4">
                <item.icon size={18} weight="fill" className="text-[var(--brand-strong)]" />
                <p className="mt-3 text-[11px] uppercase tracking-[0.18em] text-white/48">{item.label}</p>
                <p className="mt-1 text-sm font-semibold text-white">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
