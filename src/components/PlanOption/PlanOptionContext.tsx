import { createContext, useContext } from 'react';

type PlanOptionContextType = {
  value: string;
  selected: boolean;
  onChange: (value: string) => void;
};

export const PlanOptionContext = createContext<PlanOptionContextType | null>(
  null,
);

export const usePlanOption = () => {
  const context = useContext(PlanOptionContext);
  if (!context) {
    throw new Error('PlanOption subcomponents must be used within PlanOption');
  }
  return context;
};
