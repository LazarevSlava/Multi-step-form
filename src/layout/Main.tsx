import Step1 from '../pages/Step1';
import style from './Main.module.scss';

const Main = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={style.mainBlock}>
      <Step1 />
    </div>
  );
};

export default Main;
