import style from './PlanOption.module.scss';

const Discount = ({ children }: { children: React.ReactNode }) => {
  return <span className={style.discount}>{children}</span>;
};

export default Discount;
