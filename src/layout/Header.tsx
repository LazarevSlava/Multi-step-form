import style from './Header.module.scss';
import { useState } from 'react';

const stepsContent = [
  { number: 1, title: 'YOUR INFO', description: 'STEP 1' },
  { number: 2, title: 'SELECT PLAN', description: 'STEP 2' },
  { number: 3, title: 'ADD-ONS', description: 'STEP 3' },
  { number: 4, title: 'SUMMARY', description: 'STEP 4' },
];

const Header = () => {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <div className={style.headerBlock}>
      {stepsContent.map((step) => (
        <div key={step.number} className={style.stepContainer}>
          <div
            key={step.number}
            className={`${style.step} ${activeStep === step.number ? style.active : ''}`}
            onClick={() => setActiveStep(step.number)}
          >
            {step.number}
          </div>
          <div className={style.contentWrapper}>
            <p>{stepsContent[step.number - 1].description}</p>
            <h2>{stepsContent[step.number - 1].title}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Header;
