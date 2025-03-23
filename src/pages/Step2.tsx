import PlanOption from '../components/buttons/PlanOption';
import { useFormContext } from '../components/hooks/useFormContext';
import style from './Step2.module.scss';
import { plans } from '../data/plans';

const Step2 = () => {
  const { formData, toggleBilling, setFormData } = useFormContext();
  const { billingPeriod, plan: selectedPlan } = formData;

  const handlePlanChange = (value: string) => {
    setFormData({ plan: value });
  };

  return (
    <div className={style.container}>
      <h2 className={style.select}>Select your plan</h2>
      <p className={style.explanation}>
        You have the option of monthly or yearly billing
      </p>

      <div className={style.plans}>
        {plans.map((plan) => (
          <PlanOption
            key={plan.value}
            name={plan.name}
            value={plan.value}
            price={billingPeriod === 'yearly' ? plan.yearly : plan.monthly}
            icon={plan.icon}
            selected={selectedPlan === plan.value}
            isYearly={billingPeriod === 'yearly'}
            onChange={handlePlanChange}
          />
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
    </div>
  );
};

export default Step2;
