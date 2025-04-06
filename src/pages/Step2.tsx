import {
  PlanOption,
  PlanOptionRadio,
  PlanOptionIcon,
  PlanOptionTitle,
  PlanOptionPrice,
  PlanOptionDiscount,
  PlanOptionPriceContainer,
} from '../components/PlanOption';
import { useFormContext } from '../components/hooks/useFormContext';
import StepContainer from './StepContainer';
import style from './Step2.module.scss';
import { plans } from '../data/plans';

const Step2 = () => {
  const { formData, toggleBilling, setFormData } = useFormContext();
  const { billingPeriod, plan: selectedPlan } = formData;

  const handlePlanChange = (value: string) => {
    setFormData({ plan: value });
  };

  return (
    <StepContainer
      title="Select your plan"
      description="You have the option of monthly or yearly billing"
    >
      <div className={style.plans}>
        {plans.map((plan) => (
          <PlanOption
            key={plan.value}
            value={plan.value}
            selected={selectedPlan === plan.value}
            onChange={handlePlanChange}
          >
            <PlanOptionRadio />
            <PlanOptionIcon
              name={plan.value as 'arcade' | 'advanced' | 'pro'}
            />
            <PlanOptionPriceContainer>
              <PlanOptionTitle>{plan.name}</PlanOptionTitle>
              <PlanOptionPrice>
                {billingPeriod === 'yearly' ? plan.yearly : plan.monthly}
              </PlanOptionPrice>
              {billingPeriod === 'yearly' && (
                <PlanOptionDiscount>2 months free</PlanOptionDiscount>
              )}
            </PlanOptionPriceContainer>
          </PlanOption>
        ))}
      </div>

      <div className={style.billingToggle}>
        <span className={billingPeriod === 'monthly' ? style.active : ''}>
          Monthly
        </span>
        <label className={style.switch}>
          <input
            type="checkbox"
            checked={billingPeriod === 'yearly'}
            onChange={toggleBilling}
          />
          <span className={style.slider} />
        </label>
        <span className={billingPeriod === 'yearly' ? style.active : ''}>
          Yearly
        </span>
      </div>
    </StepContainer>
  );
};

export default Step2;
