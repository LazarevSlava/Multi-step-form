import style from './PlanOption.module.scss';

const PriceContainer = ({ children }: { children: React.ReactNode }) => {
  return <div className={style.name_price}>{children}</div>;
};

export default PriceContainer;
