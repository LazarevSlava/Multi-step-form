export type BillingPeriod = 'monthly' | 'yearly';

export interface FormData {
  name: string;
  email: string;
  phone: string;
  plan: string;
  addons: string[];
  billingPeriod: BillingPeriod;
}

export const defaultFormData: FormData = {
  name: '',
  email: '',
  phone: '',
  plan: 'arcade',
  addons: [],
  billingPeriod: 'monthly',
};
