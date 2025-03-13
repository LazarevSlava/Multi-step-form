import style from './Main.module.scss';

const Main = ({ children }: { children: React.ReactNode }) => {
  return <div className={style.mainBlock}>{children}</div>;
};

export default Main;
