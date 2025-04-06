import { ReactNode } from 'react';
import { PlanOptionContext } from './PlanOptionContext';
import style from './PlanOption.module.scss';

type PlanOptionProps = {
  children: ReactNode;
  value: string;
  selected: boolean;
  onChange: (value: string) => void;
};

const PlanOption = ({
  children,
  value,
  selected,
  onChange,
}: PlanOptionProps) => {
  return (
    <PlanOptionContext.Provider value={{ value, selected, onChange }}>
      <label className={`${style.plan} ${selected ? style.selected : ''}`}>
        {children}
      </label>
    </PlanOptionContext.Provider>
  );
};

export default PlanOption;
