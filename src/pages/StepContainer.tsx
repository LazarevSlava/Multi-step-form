import { ReactNode } from 'react';
import style from './StepContainer.module.scss';

interface StepContainerProps {
  title: string;
  description: string;
  children: ReactNode;
}

const StepContainer = ({
  title,
  description,
  children,
}: StepContainerProps) => {
  return (
    <div className={style.container}>
      <h2 className={style.title}>{title}</h2>
      <p className={style.description}>{description}</p>
      {children}
    </div>
  );
};

export default StepContainer;
