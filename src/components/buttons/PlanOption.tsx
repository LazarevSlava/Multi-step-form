import style from './PlanOption.module.scss';
import ArcadeIcon from '../../assets/images/icon-arcade.svg?react';
import AdvancedIcon from '../../assets/images/icon-advanced.svg?react';
import ProIcon from '../../assets/images/icon-pro.svg?react';

type PlanOptionProps = {
  name: string;
  value: string;
  price: string;
  icon: 'arcade' | 'advanced' | 'pro';
  selected: boolean;
  isYearly: boolean;
  onChange: (value: string) => void;
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
  isYearly,
  onChange,
}) => {
  return (
    <label className={`${style.plan} ${selected ? style.selected : ''}`}>
      <input
        type="radio"
        name="plan"
        value={value}
        checked={selected}
        onChange={() => onChange(value)}
      />
      <span className={style.icon}>{iconMap[icon]}</span>
      <div className={style.name_price}>
        <span className={style.title}>{name}</span>
        <span className={style.price}>{price}</span>
        {isYearly && <span className={style.discount}>2 months free</span>}
      </div>
    </label>
  );
};

export default PlanOption;
