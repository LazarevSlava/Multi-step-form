import { useNavigate } from 'react-router-dom';
import { useFormContext } from '../components/hooks/useFormContext';
import StepContainer from './StepContainer';
import style from './Step4.module.scss';
import { addons } from '../data/addons';
import { plans } from '../data/plans';

const Step4 = () => {
  const navigate = useNavigate();
  const { formData } = useFormContext();
  const {
    billingPeriod,
    plan: selectedPlan,
    addons: selectedAddons,
  } = formData;

  const currentPlan = plans.find((p) => p.value === selectedPlan);
  const planPrice =
    billingPeriod === 'yearly' ? currentPlan?.yearly : currentPlan?.monthly;
  const planLabel = `${currentPlan?.name} (${billingPeriod === 'yearly' ? 'Yearly' : 'Monthly'})`;

  const selectedAddonsData = addons.filter((addon) =>
    selectedAddons.includes(addon.value),
  );
  const addonsTotal = selectedAddonsData.reduce((sum, addon) => {
    const price = billingPeriod === 'yearly' ? addon.yearly : addon.monthly;
    return sum + parseInt(price.replace(/\D/g, ''));
  }, 0);

  const planTotal = parseInt(planPrice?.replace(/\D/g, '') || '0');
  const total = planTotal + addonsTotal;
  const suffix = billingPeriod === 'yearly' ? 'yr' : 'mo';

  return (
    <StepContainer
      title="Finishing up"
      description="Double-check everything looks OK before confirming."
    >
      <div className={style.summaryBox}>
        <div className={style.planRow}>
          <div>
            <strong>{planLabel}</strong>
            <button
              className={style.changeLink}
              type="button"
              onClick={() => navigate('/step2')}
            >
              Change
            </button>
          </div>
          <span className={style.price}>{planPrice}</span>
        </div>

        <div className={style.divider} />

        {selectedAddonsData.map((addon) => {
          const addonPrice =
            billingPeriod === 'yearly' ? addon.yearly : addon.monthly;
          return (
            <div key={addon.value} className={style.addonRow}>
              <span>{addon.name}</span>
              <span className={style.price}>{addonPrice}</span>
            </div>
          );
        })}
      </div>

      <div className={style.total}>
        <span className={style.totalText}>
          Total (per {suffix === 'yr' ? 'year' : 'month'})
        </span>
        <strong className={style.totalSum}>
          +${total}/{suffix}
        </strong>
      </div>
    </StepContainer>
  );
};

export default Step4;
