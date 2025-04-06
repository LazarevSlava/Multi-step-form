import style from './PlanOption.module.scss';

const Title = ({ children }: { children: React.ReactNode }) => {
  return <span className={style.title}>{children}</span>;
};

export default Title;
