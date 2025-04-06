import style from './PlanOption.module.scss';

const Description = ({ children }: { children: React.ReactNode }) => {
  return <span className={style.textSecondary}>{children}</span>;
};

export default Description;
