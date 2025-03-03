import style from './Footer.module.scss';
import Button from '../components/buttons/Button';
import { useState } from 'react';

export function Footer() {
  const [isCompleted, setIsCompleted] = useState(true);

  return (
    <footer>
      <div className={style.footerBlock}>
        <span className={style.goBack}>Go Back</span>
        <Button customClass={isCompleted ? 'confirm' : ''}>
          {isCompleted ? 'Confirm' : 'Next Step'}
        </Button>
      </div>
    </footer>
  );
}
