import { usePlanOption } from './PlanOptionContext';

const Radio = () => {
  const { value, selected, onChange } = usePlanOption();

  return (
    <input
      type="radio"
      name="plan"
      value={value}
      checked={selected}
      onChange={() => onChange(value)}
    />
  );
};

export default Radio;
