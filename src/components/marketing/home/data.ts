import {
  BellIcon,
  CalendarDotsIcon,
  ChatsCircleIcon,
  CreditCardIcon,
  DeviceMobileCameraIcon,
  FileTextIcon,
  HeartbeatIcon,
  LightningIcon,
  PulseIcon,
  RobotIcon,
  ShieldCheckIcon,
  StethoscopeIcon,
  UsersThreeIcon,
} from '@phosphor-icons/react/dist/ssr';
import type { ElementType } from 'react';

export type IconCard = {
  title: string;
  copy: string;
  icon: ElementType;
};

export type PlanCard = {
  name: string;
  price: string;
  description: string;
  features: string[];
  featured?: boolean;
};

export const heroMetrics = [
  { label: 'Consultations', value: '6 upcoming', icon: StethoscopeIcon },
  { label: 'Records', value: 'Always synced', icon: FileTextIcon },
  { label: 'AI summaries', value: 'Ready now', icon: RobotIcon },
  { label: 'Care plans', value: '2 active', icon: CalendarDotsIcon },
];

export const heroSignals = [
  { label: 'Patients', value: '24K', icon: UsersThreeIcon },
  { label: 'Trust', value: 'High', icon: ShieldCheckIcon },
  { label: 'Messages', value: 'Instant', icon: ChatsCircleIcon },
];

export const pillars: IconCard[] = [
  {
    title: 'Telemedicine',
    copy: 'See patients fast, keep context between sessions, and reduce the drop-off after consultations.',
    icon: StethoscopeIcon,
  },
  {
    title: 'Medical records',
    copy: 'One health timeline for reports, notes, prescriptions, and specialist follow-up.',
    icon: FileTextIcon,
  },
  {
    title: 'AI assistant',
    copy: 'Translate medical complexity into calm explanations, summaries, and next steps.',
    icon: RobotIcon,
  },
  {
    title: 'Reminders',
    copy: 'Appointments, medications, and care plans stay visible across the patient journey.',
    icon: BellIcon,
  },
  {
    title: 'Mood tracking',
    copy: 'Track patterns between visits and surface context clinicians can act on.',
    icon: HeartbeatIcon,
  },
  {
    title: 'Payments',
    copy: 'Handle premium plans and visit payments in one secure interface.',
    icon: CreditCardIcon,
  },
];

export const platformCards: IconCard[] = [
  {
    title: 'Own your health stack',
    copy: 'From AI summaries to prescriptions and follow-up prompts, every touchpoint stays inside one sleek patient operating system.',
    icon: DeviceMobileCameraIcon,
  },
  {
    title: 'Clinical clarity',
    copy: 'Records, consultations, and reminders feed a single source of truth instead of fragmented care threads.',
    icon: PulseIcon,
  },
  {
    title: 'Built to move quickly',
    copy: 'MedRex is designed for health teams that need a modern interface without losing trust or rigor.',
    icon: LightningIcon,
  },
];

export const flows = [
  'Patient onboarding and profile creation',
  'Consultation booking and follow-up',
  'Secure records and lab history',
  'AI support and reminder orchestration',
];

export const planCards: PlanCard[] = [
  {
    name: 'Starter',
    price: 'Free',
    description: 'For individuals building their first digital care hub.',
    features: ['Personal records timeline', 'Appointment reminders', 'Basic health profile'],
  },
  {
    name: 'MedRex Pro',
    price: '$12',
    description: 'For active patients and families who need AI summaries and advanced support.',
    features: ['AI assistant access', 'Unlimited records', 'Priority care tools'],
    featured: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For clinics, hospitals, digital health teams, and partner programs.',
    features: ['Team dashboards', 'Custom rollout', 'Payment and billing workflows'],
  },
];

export const aiPrompt = 'What changed after my last consultation?';

export const aiResponse =
  'Your blood pressure trend improved, two reminders were completed, and the AI flagged a refill due in three days.';

export const featuresIntro =
  'MedRex keeps the visual confidence of a futuristic product while staying grounded in healthcare trust and usability.';
