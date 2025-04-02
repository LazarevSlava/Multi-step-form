import style from './PlanOption.module.scss';
import ArcadeIcon from '../../assets/images/icon-arcade.svg?react';
import AdvancedIcon from '../../assets/images/icon-advanced.svg?react';
import ProIcon from '../../assets/images/icon-pro.svg?react';

type PlanOptionProps = {
  name: string;
  value: string;
  price: string;
  icon: 'arcade' | 'advanced' | 'pro' | 'none';
  selected: boolean;
  isYearly: boolean;
  onChange: (value: string) => void;
  description?: string;
  variant?: 'step2' | 'step3' | 'step4';
};

const iconMap = {
  arcade: <ArcadeIcon />,
  advanced: <AdvancedIcon />,
  pro: <ProIcon />,
};

const PlanOption: React.FC<PlanOptionProps> = ({
  name,
  value,
  price,
  icon,
  selected,
  description,
  isYearly,
  onChange,
  variant = 'step2',
}) => {
  return (
    <label
      className={`${style.plan} ${selected ? style.selected : ''} ${
        variant === 'step3'
          ? style.step3
          : variant === 'step4'
            ? style.step4
            : ''
      }`}
    >
      {variant === 'step3' ? (
        <input
          type="checkbox"
          checked={selected}
          onChange={() => onChange(value)}
        />
      ) : (
        <input
          type="radio"
          name="plan"
          value={value}
          checked={selected}
          onChange={() => onChange(value)}
        />
      )}
      {icon !== 'none' && <span className={style.icon}>{iconMap[icon]}</span>}
      <div
        className={`${style.name_price} ${
          variant === 'step3'
            ? style.step3Div
            : variant === 'step4'
              ? style.step4Div
              : ''
        }`}
      >
        <div className={style.titleBlock}>
          <span className={style.title}>{name}</span>
          {variant === 'step3' && description && (
            <span className={style.textSecondary}>{description}</span>
          )}
        </div>
        <span className={style.textSecondary}>{price}</span>
        {variant === 'step2' && isYearly && (
          <span className={style.discount}>2 months free</span>
        )}
      </div>
    </label>
  );
};

export default PlanOption;
