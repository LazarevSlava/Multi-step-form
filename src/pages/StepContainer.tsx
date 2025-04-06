import { ReactNode } from 'react';
import style from './StepContainer.module.scss';

interface StepContainerProps {
  title: string;
  description: string;
  children?: ReactNode;
  icon?: ReactNode;
  centerContent?: boolean;
}

const StepContainer = ({
  title,
  description,
  children,
  icon,
  centerContent = false,
}: StepContainerProps) => {
  return (
    <div
      className={`${style.container} ${centerContent ? style.centered : ''}`}
    >
      {icon && <div className={style.icon}>{icon}</div>}
      <h2 className={style.title}>{title}</h2>
      <p className={style.description}>{description}</p>
      {children}
    </div>
  );
};

export default StepContainer;
