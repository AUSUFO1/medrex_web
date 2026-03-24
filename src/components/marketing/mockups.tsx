'use client';

import { motion } from 'framer-motion';
import { Activity, BellRing, BrainCircuit, CalendarClock, CreditCard, FileText, HeartPulse, ShieldCheck, Stethoscope } from 'lucide-react';

export function AppBadge({ label, caption }: { label: string; caption: string }) {
  return (
    <div className="flex w-full min-w-0 items-center gap-3 rounded-2xl border border-white/10 bg-slate-950/78 px-4 py-3 text-white shadow-[var(--shadow-sm)] sm:w-auto sm:min-w-[180px]">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/10">
        <Activity size={18} />
      </div>
      <div className="min-w-0">
        <p className="truncate text-[11px] uppercase tracking-[0.16em] text-white/55">{caption}</p>
        <p className="mt-1 truncate text-sm font-semibold">{label}</p>
      </div>
    </div>
  );
}

export function PhoneMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[360px] sm:max-w-[420px]">
      <div className="absolute -left-2 top-10 h-24 w-24 rounded-full bg-[var(--color-primary)]/20 blur-3xl sm:-left-8 sm:h-36 sm:w-36" />
      <div className="absolute -right-2 bottom-12 h-28 w-28 rounded-full bg-[var(--color-secondary)]/20 blur-3xl sm:-right-8 sm:h-44 sm:w-44" />

      <motion.div
        initial={{ y: 10 }}
        animate={{ y: [-6, 8, -6] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="relative mx-auto w-[252px] rounded-[2.3rem] border border-white/40 bg-slate-950 p-2.5 shadow-[0_32px_90px_rgba(12,167,161,0.24)] sm:w-[280px] sm:rounded-[2.8rem] sm:p-3 sm:shadow-[0_40px_120px_rgba(12,167,161,0.24)]"
      >
        <div className="rounded-[2rem] bg-[linear-gradient(180deg,#0f172a_0%,#08111d_100%)] p-4 text-white sm:rounded-[2.2rem] sm:p-5">
          <div className="flex items-center justify-between text-xs text-white/55">
            <span>9:41</span>
            <span>Secure session</span>
          </div>
          <div className="mt-5 rounded-[1.6rem] bg-white/6 p-3.5 sm:mt-6 sm:rounded-[1.8rem] sm:p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-white/50">Today</p>
                <p className="mt-2 text-xl font-semibold sm:text-2xl">Care Hub</p>
              </div>
              <div className="rounded-2xl bg-white/8 px-2.5 py-2 text-right sm:px-3">
                <p className="text-[11px] uppercase tracking-[0.2em] text-white/45">Mood</p>
                <p className="mt-1 text-sm font-semibold">Balanced</p>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3">
              {[
                { label: 'Doctor', value: 'Live consult', icon: Stethoscope },
                { label: 'Records', value: '3 updated', icon: FileText },
                { label: 'Reminders', value: '2 today', icon: BellRing },
                { label: 'Payments', value: 'Secure', icon: CreditCard },
              ].map((item) => (
                <div key={item.label} className="rounded-2xl border border-white/8 bg-white/6 p-3">
                  <item.icon size={16} className="text-[var(--color-primary)]" />
                  <p className="mt-3 text-[11px] text-white/55 sm:mt-4 sm:text-xs">{item.label}</p>
                  <p className="mt-1 text-[13px] font-semibold sm:text-sm">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-5 rounded-[1.6rem] bg-white/6 p-3.5 sm:rounded-[1.8rem] sm:p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold">AI Care Summary</p>
                <p className="mt-1 text-xs text-white/55">Your latest consultation, simplified.</p>
              </div>
              <BrainCircuit size={18} className="text-[var(--color-secondary)]" />
            </div>
            <div className="mt-4 space-y-3 text-sm text-white/70">
              <p className="rounded-2xl bg-white/6 px-3 py-2">Hydration improving this week</p>
              <p className="rounded-2xl bg-white/6 px-3 py-2">Next medication reminder at 6:00 PM</p>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="absolute -left-10 top-8 hidden rounded-[1.75rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-4 shadow-[var(--shadow-md)] lg:block">
        <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-text-soft)]">Vitals synced</p>
        <p className="mt-2 text-xl font-semibold">98% adherence</p>
        <p className="mt-1 text-sm">Reminders and mood insights are in sync.</p>
      </div>

      <div className="absolute -right-14 bottom-8 hidden rounded-[1.75rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-4 shadow-[var(--shadow-md)] lg:block">
        <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-text-soft)]">Live care</p>
        <p className="mt-2 text-xl font-semibold">Doctor available</p>
        <p className="mt-1 text-sm">Average wait under 5 minutes.</p>
      </div>
    </div>
  );
}

export function DashboardMockup({ title, caption, reverse = false }: { title: string; caption: string; reverse?: boolean }) {
  const gradient = reverse
    ? 'from-[rgba(111,94,249,0.22)] via-transparent to-[rgba(12,167,161,0.16)]'
    : 'from-[rgba(12,167,161,0.22)] via-transparent to-[rgba(111,94,249,0.16)]';

  return (
    <div className={`relative overflow-hidden rounded-[1.75rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-4 shadow-[var(--shadow-md)] sm:rounded-[2rem] sm:p-5`}>
      <div className={`absolute inset-x-0 top-0 h-28 bg-gradient-to-br ${gradient}`} />
      <div className="relative">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <p className="text-sm font-semibold text-[var(--color-text)]">{title}</p>
            <p className="mt-1 text-sm">{caption}</p>
          </div>
          <div className="shrink-0 rounded-2xl bg-[var(--color-background)] px-3 py-2 text-xs font-semibold text-[var(--color-primary)] sm:px-4 sm:text-sm">
            Live
          </div>
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <div className="rounded-[1.5rem] bg-[var(--color-background)] p-4">
            <div className="flex items-center gap-2 text-sm font-semibold text-[var(--color-text)]">
              <ShieldCheck size={16} className="text-[var(--color-primary)]" />
              Secure access
            </div>
            <div className="mt-4 space-y-3">
              <div className="h-2 rounded-full bg-[var(--color-accent)]" />
              <div className="h-2 w-4/5 rounded-full bg-[var(--color-accent-strong)]" />
              <div className="h-2 w-3/5 rounded-full bg-[var(--color-accent)]" />
            </div>
          </div>
          <div className="rounded-[1.5rem] bg-slate-950 p-4 text-white">
            <p className="text-sm font-semibold">Weekly pulse</p>
            <div className="mt-5 flex items-end gap-2">
              {[32, 54, 46, 68, 74, 62, 86].map((height, index) => (
                <div
                  key={index}
                  className="w-full rounded-full bg-white/10"
                  style={{ height }}
                >
                  <div className="w-full rounded-full bg-[linear-gradient(180deg,#0ca7a1,#6f5ef9)]" style={{ height }} />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          {[
            { icon: FileText, title: 'Records', value: 'Unified' },
            { icon: CalendarClock, title: 'Visits', value: 'Scheduled' },
            { icon: HeartPulse, title: 'Mood', value: 'Tracked' },
          ].map((item) => (
            <div key={item.title} className="rounded-[1.35rem] border border-[var(--color-border)] bg-[var(--color-background)] p-4">
              <item.icon size={16} className="text-[var(--color-secondary)]" />
              <p className="mt-3 text-xs uppercase tracking-[0.18em] text-[var(--color-text-soft)]">{item.title}</p>
              <p className="mt-1 text-sm font-semibold text-[var(--color-text)]">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function QRPlaceholder() {
  const cells = [
    '111110011001111',
    '100010100101001',
    '101110111101011',
    '101110010011011',
    '101110110111011',
    '100010011000001',
    '111110101010111',
    '000000001010000',
    '110111111001101',
    '010001001011001',
    '111011101110111',
    '100000101001001',
    '101111111101101',
    '100100001000001',
    '111111101111111',
  ];

  return (
    <div className="w-full max-w-[220px] rounded-[1.5rem] border border-[var(--color-border)] bg-white p-4 shadow-[var(--shadow-sm)]">
      <div className="grid gap-1" style={{ gridTemplateColumns: 'repeat(15, minmax(0, 1fr))' }}>
        {cells.join('').split('').map((cell, index) => (
          <div
            key={index}
            className={`aspect-square rounded-[2px] ${cell === '1' ? 'bg-slate-950' : 'bg-white'}`}
          />
        ))}
      </div>
      <p className="mt-4 text-center text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Placeholder QR</p>
    </div>
  );
}

export function ChatMockup() {
  return (
    <div className="relative overflow-hidden rounded-[1.75rem] border border-[var(--color-border)] bg-[linear-gradient(180deg,#07111a_0%,#0e1b2a_100%)] p-4 text-white shadow-[var(--shadow-lg)] sm:rounded-[2rem] sm:p-6">
      <div className="absolute inset-x-0 top-0 h-32 bg-[radial-gradient(circle_at_top,rgba(12,167,161,0.24),transparent_65%)]" />
      <div className="relative flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="text-xs uppercase tracking-[0.22em] text-white/55">MedRex AI</p>
          <h3 className="mt-2 text-xl font-semibold sm:text-2xl">Natural, clinical, reassuring.</h3>
        </div>
        <div className="shrink-0 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/60">Demo</div>
      </div>

      <div className="mt-8 space-y-4">
        <motion.div
          initial={{ opacity: 0, x: -18 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="max-w-[92%] rounded-[1.5rem] rounded-tl-md bg-white/8 p-4 text-sm text-white/78 sm:max-w-md"
        >
          I missed my afternoon medication. What should I do now?
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 18 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.08 }}
          className="ml-auto max-w-[96%] rounded-[1.5rem] rounded-tr-md bg-[linear-gradient(135deg,rgba(12,167,161,0.3),rgba(111,94,249,0.28))] p-4 text-sm text-white sm:max-w-xl"
        >
          If the label says it is safe, take it as soon as you remember. If your next dose is close, skip the missed one and continue normally. I can also pull up your doctor&apos;s instructions from your care plan.
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.14 }}
          className="grid gap-3 md:grid-cols-3"
        >
          <div className="rounded-[1.4rem] border border-white/10 bg-white/5 p-4">
            <p className="text-xs uppercase tracking-[0.18em] text-white/45">Source</p>
            <p className="mt-3 text-sm">Linked to medication instructions and last consultation note.</p>
          </div>
          <div className="rounded-[1.4rem] border border-white/10 bg-white/5 p-4">
            <p className="text-xs uppercase tracking-[0.18em] text-white/45">Tone</p>
            <p className="mt-3 text-sm">Plain language for patients with professional context for clinicians.</p>
          </div>
          <div className="rounded-[1.4rem] border border-white/10 bg-white/5 p-4">
            <p className="text-xs uppercase tracking-[0.18em] text-white/45">Action</p>
            <p className="mt-3 text-sm">Escalates to a doctor when symptoms or medication conflicts look risky.</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
