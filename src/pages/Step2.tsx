import { useState } from 'react';
import PlanOption from '../components/buttons/PlanOption';
import { useFormContext } from '../components/hooks/useFormContext';
import style from './Step2.module.scss';

const Step2 = () => {
  const { formData, toggleBilling } = useFormContext();
  const { billingPeriod } = formData;
  const [selectedPlan, setSelectedPlan] = useState('arcade');

  return (
    <div className={style.container}>
      <h2 className={style.select}>Select your plan</h2>
      <p className={style.explanation}>
        You have the option of monthly or yearly billing
      </p>
      <div className={style.plans}>
        <PlanOption
          name="Arcade"
          value="arcade"
          price={billingPeriod === 'yearly' ? '$90/yr' : '$9/mo'}
          icon="arcade"
          selected={selectedPlan === 'arcade'}
          isYearly={billingPeriod === 'yearly'}
          onChange={setSelectedPlan}
        />
        <PlanOption
          name="Advanced"
          value="advanced"
          price={billingPeriod === 'yearly' ? '$120/yr' : '$12/mo'}
          icon="advanced"
          selected={selectedPlan === 'advanced'}
          isYearly={billingPeriod === 'yearly'}
          onChange={setSelectedPlan}
        />
        <PlanOption
          name="Pro"
          value="pro"
          price={billingPeriod === 'yearly' ? '$150/yr' : '$15/mo'}
          icon="pro"
          selected={selectedPlan === 'pro'}
          isYearly={billingPeriod === 'yearly'}
          onChange={setSelectedPlan}
        />
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
          <span className={style.slider}></span>
        </label>
        <span className={billingPeriod === 'yearly' ? style.active : ''}>
          Yearly
        </span>
      </div>
    </div>
  );
};

export default Step2;
