import ArcadeIcon from '../../assets/images/icon-arcade.svg?react';
import AdvancedIcon from '../../assets/images/icon-advanced.svg?react';
import ProIcon from '../../assets/images/icon-pro.svg?react';
import style from './PlanOption.module.scss';

const iconMap = {
  arcade: <ArcadeIcon />,
  advanced: <AdvancedIcon />,
  pro: <ProIcon />,
};

type IconProps = {
  name: 'arcade' | 'advanced' | 'pro';
};

const Icon = ({ name }: IconProps) => {
  return <span className={style.icon}>{iconMap[name]}</span>;
};

export default Icon;
