import style from './PlanOption.module.scss';

const Price = ({ children }: { children: React.ReactNode }) => {
  return <span className={style.textSecondary}>{children}</span>;
};

export default Price;
