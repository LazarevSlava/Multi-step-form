export interface FormData {
  name: string;
  email: string;
  phone: string;
  plan: string;
  addons: string[];
}

export const defaultFormData: FormData = {
  name: '',
  email: '',
  phone: '',
  plan: '',
  addons: [],
};
