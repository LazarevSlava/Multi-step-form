import {
  PlanOption,
  PlanOptionCheckbox,
  PlanOptionTitle,
  PlanOptionDescription,
  PlanOptionPrice,
  PlanOptionPriceContainer,
} from '../components/PlanOption';
import { useFormContext } from '../components/hooks/useFormContext';
import StepContainer from './StepContainer';
import style from './Step3.module.scss';
import { addons } from '../data/addons';

const Step3 = () => {
  const { formData, setFormData } = useFormContext();
  const { billingPeriod, addons: selectedAddons } = formData;

  const handleToggle = (value: string) => {
    const updated = selectedAddons.includes(value)
      ? selectedAddons.filter((v) => v !== value)
      : [...selectedAddons, value];

    setFormData({ addons: updated });
  };

  return (
    <StepContainer
      title="Pick add-ons"
      description="Add-ons help enhance your gaming experience."
    >
      <div className={style.plans}>
        {addons.map((addon) => (
          <PlanOption
            key={addon.value}
            value={addon.value}
            selected={selectedAddons.includes(addon.value)}
            onChange={handleToggle}
          >
            <PlanOptionCheckbox />
            <PlanOptionPriceContainer>
              <PlanOptionTitle>{addon.name}</PlanOptionTitle>
              <PlanOptionDescription>{addon.description}</PlanOptionDescription>
              <PlanOptionPrice>
                {billingPeriod === 'yearly' ? addon.yearly : addon.monthly}
              </PlanOptionPrice>
            </PlanOptionPriceContainer>
          </PlanOption>
        ))}
      </div>
    </StepContainer>
  );
};

export default Step3;
