type PlanIcon = 'arcade' | 'advanced' | 'pro' | 'none';

export type Plan = {
  name: string;
  value: string;
  icon: PlanIcon;
  monthly: string;
  yearly: string;
};

export const plans: Plan[] = [
  {
    name: 'Arcade',
    value: 'arcade',
    icon: 'arcade',
    monthly: '$9/mo',
    yearly: '$90/yr',
  },
  {
    name: 'Advanced',
    value: 'advanced',
    icon: 'advanced',
    monthly: '$12/mo',
    yearly: '$120/yr',
  },
  {
    name: 'Pro',
    value: 'pro',
    icon: 'pro',
    monthly: '$15/mo',
    yearly: '$150/yr',
  },
];
