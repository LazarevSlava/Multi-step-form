import { usePlanOption } from './PlanOptionContext';

const Checkbox = () => {
  const { value, selected, onChange } = usePlanOption();

  return (
    <input
      type="checkbox"
      checked={selected}
      onChange={() => onChange(value)}
    />
  );
};

export default Checkbox;
