import type { Testimonial, FAQItem } from '@/types';

// HOME PAGE - Testimonials (Users + Professionals)
export const homeUserTestimonials: Testimonial[] = [
  {
    id: 'home-user-1',
    name: 'Sarah Chen',
    role: 'Patient, Managing Type 2 Diabetes',
    content:
      'MedRex made managing my appointments and medications so simple. I can see all my lab results in one place and the AI actually explains what they mean.',
    rating: 5,
    avatar: 'SC',
  },
  {
    id: 'home-user-2',
    name: 'James Rodriguez',
    role: 'Parent of Asthmatic Child',
    content:
      'The reminders kept my son on track with his inhalers, and the mood tracking helped us spot patterns we told his doctor about at the next visit.',
    rating: 5,
    avatar: 'JR',
  },
  {
    id: 'home-user-3',
    name: 'Priya Patel',
    role: 'Post-Surgery Recovery Patient',
    content:
      'I felt so much more confident during my recovery. The app made it easy to track my progress and ask my doctor questions between visits.',
    rating: 5,
    avatar: 'PP',
  },
];

export const homeProfessionalTestimonials: Testimonial[] = [
  {
    id: 'home-prof-1',
    name: 'Dr. Michael Thompson',
    role: 'Family Medicine Physician',
    content:
      'My patients come to appointments better prepared, and I spend less time hunting for records. MedRex cuts our friction in half.',
    rating: 5,
    avatar: 'MT',
  },
  {
    id: 'home-prof-2',
    name: 'Dr. Sophia Nakamura',
    role: 'Cardiologist',
    content:
      'The AI summaries for complex cases save me 10-15 minutes per patient. That efficiency matters when you\'re managing 50+ cases a week.',
    rating: 5,
    avatar: 'SN',
  },
  {
    id: 'home-prof-3',
    name: 'Lisa Wong',
    role: 'Clinic Operations Manager',
    content:
      'Adoption was smooth, support was proactive, and patient satisfaction scores went up immediately. This is a product built for real workflows.',
    rating: 5,
    avatar: 'LW',
  },
];

// HOME PAGE - FAQs
export const homeFAQs: FAQItem[] = [
  {
    question: 'How does MedRex keep my health data secure?',
    answer:
      'MedRex uses military-grade encryption, HIPAA compliance, and zero-knowledge architecture to ensure your data never leaves your control. We don\'t sell or share your information, and you own your data.',
  },
  {
    question: 'Can I access MedRex on multiple devices?',
    answer:
      'Yes. MedRex is fully responsive and works seamlessly across mobile, tablet, and desktop. Your data syncs in real-time so you\'re always up to date, wherever you are.',
  },
  {
    question: 'How do I share my records with my doctor?',
    answer:
      'You can grant your healthcare providers secure access with one tap. They see only the records you choose to share, and you can revoke access anytime. It\'s that simple.',
  },
  {
    question: 'What happens if I forget my password?',
    answer:
      'We offer passwordless login with biometric support and email recovery. Recovery takes under 60 seconds and never gives you access headaches.',
  },
  {
    question: 'Is there a free version?',
    answer:
      'Yes. The Starter plan is free forever and includes records timeline, appointment reminders, and a basic health profile. Upgrade to Pro for AI features and unlimited storage.',
  },
];

// PRICING PAGE - FAQs
export const pricingFAQs: FAQItem[] = [
  {
    question: 'Can I switch plans anytime?',
    answer:
      'Absolutely. Upgrade or downgrade anytime with no penalties. Changes take effect on your next billing cycle so you\'re never locked in.',
  },
  {
    question: 'Do you offer monthly or annual billing?',
    answer:
      'Both. Monthly billing renews every 30 days. Annual billing saves you two months, and early-bird discounts are available for committed users.',
  },
  {
    question: 'What if I want to cancel?',
    answer:
      'Cancel anytime by toggling one switch. We don\'t ask questions, require calls, or lock you in. Your data exports automatically so nothing is lost.',
  },
  {
    question: 'Do teams or clinics get discounts?',
    answer:
      'Yes. Enterprise plans include team access, bulk discounts, dedicated support, and custom onboarding. Contact sales to discuss your specific needs.',
  },
  {
    question: 'Is there a trial period?',
    answer:
      'Start with the free Starter plan and upgrade whenever you\'re ready. Most users try Pro features free for 14 days before committing.',
  },
];

// PRICING PAGE - Testimonials (Mix of users & professionals)
export const pricingUserTestimonials: Testimonial[] = [
  {
    id: 'pricing-user-1',
    name: 'David Kim',
    role: 'Frequent Telemedicine User',
    content:
      'The Pro plan is worth every penny. AI summaries alone save me hours every month, and customer support is genuinely helpful.',
    rating: 5,
    avatar: 'DK',
  },
  {
    id: 'pricing-user-2',
    name: 'Emma Wilson',
    role: 'Chronic Condition Manager',
    content:
      'I tried free first, loved it, upgraded to Pro. No regrets. The features are exactly what I needed without the bloat.',
    rating: 5,
    avatar: 'EW',
  },
];

export const pricingProfessionalTestimonials: Testimonial[] = [
  {
    id: 'pricing-prof-1',
    name: 'Dr. Jason Park',
    role: 'Telehealth Clinic Director',
    content:
      'Enterprise pricing was fair and transparent. Our clinic of 20 providers saw better patient outcomes and reduced admin work month one.',
    rating: 5,
    avatar: 'JP',
  },
  {
    id: 'pricing-prof-2',
    name: 'Dr. Rebecca Foster',
    role: 'Health System IT Director',
    content:
      'Better than competitors at half the cost. Implementation was smooth, team adoption was fast, ROI was immediate.',
    rating: 5,
    avatar: 'RF',
  },
];

// ABOUT PAGE - FAQs
export const aboutFAQs: FAQItem[] = [
  {
    question: 'What makes MedRex different from other health apps?',
    answer:
      'MedRex combines patient-first design with provider-grade trust. We\'re built by healthcare veterans and product designers who understand that health isn\'t simple. We don\'t cut corners on security, clarity, or speed.',
  },
  {
    question: 'Who built MedRex?',
    answer:
      'MedRex is built by a team of doctors, designers, engineers, and healthcare operators. Every feature is shaped by real conversations with patients, providers, and health systems.',
  },
  {
    question: 'Is MedRex regulated?',
    answer:
      'Yes. MedRex follows HIPAA compliance, FDA guidance on digital health products, and SOC 2 Type II standards. We\'re serious about trust in healthcare.',
  },
  {
    question: 'Can clinics integrate MedRex with their existing systems?',
    answer:
      'Yes. We offer HL7 and FHIR integrations with most major EHR systems. Our API is documented, certified, and supported by our integration team.',
  },
  {
    question: 'What\'s your vision for MedRex in 5 years?',
    answer:
      'We want to be the health operating system that patients and providers both choose first. A platform where care feels fast, clear, and human. A place where trust and technology aren\'t contradictions.',
  },
];

// ABOUT PAGE - Testimonials (Thought leaders + early backers)
export const aboutUserTestimonials: Testimonial[] = [
  {
    id: 'about-user-1',
    name: 'Margaret Zhang',
    role: 'Patient Advocate & Health Writer',
    content:
      'MedRex redefines what a health app should be. It treats patients like intelligent people managing complex lives, not problems to solve.',
    rating: 5,
    avatar: 'MZ',
  },
  {
    id: 'about-user-2',
    name: 'Robert O\'Connor',
    role: 'Early Adopter & Community Leader',
    content:
      'I\'ve tried dozens of health apps. This one actually listens to user feedback and ships features that matter. That\'s rare.',
    rating: 5,
    avatar: 'RO',
  },
];

export const aboutProfessionalTestimonials: Testimonial[] = [
  {
    id: 'about-prof-1',
    name: 'Dr. Anil Gupta',
    role: 'Healthcare Innovation Lead',
    content:
      'MedRex represents what good health-tech looks like: mobile-first, patient-centered, provider-respectful, and technically sound.',
    rating: 5,
    avatar: 'AG',
  },
  {
    id: 'about-prof-2',
    name: 'Dr. Catherine Mueller',
    role: 'Chief Medical Officer, Regional Health System',
    content:
      'We backed MedRex because we saw a team that genuinely understands clinical workflows and refuses to compromise on security or usability.',
    rating: 5,
    avatar: 'CM',
  },
];
