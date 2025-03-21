import { useState } from 'react';
import PlanOption from '../components/buttons/PlanOption';
import { useFormContext } from '../components/hooks/useFormContext';
import style from './Step2.module.scss';

const Step2 = () => {
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
          price="$9/mo"
          icon="arcade"
          selected={selectedPlan === 'arcade'}
          onChange={setSelectedPlan}
        />
        <PlanOption
          name="Advanced"
          value="advanced"
          price="$12/mo"
          icon="advanced"
          selected={selectedPlan === 'advanced'}
          onChange={setSelectedPlan}
        />
        <PlanOption
          name="Pro"
          value="pro"
          price="$15/mo"
          icon="pro"
          selected={selectedPlan === 'pro'}
          onChange={setSelectedPlan}
        />
      </div>
    </div>
  );
};

export default Step2;
