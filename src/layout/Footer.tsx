import style from './Footer.module.scss';
import Button from '../components/buttons/Button';
import { useState } from 'react';

export function Footer() {
  const [isCompleted, setIsCompleted] = useState(true);
  const [isCanGoBack, setIsCanGoBack] = useState(true);
  const [isLastPage, setIsLastPage] = useState(true);

  return (
    <footer>
      {isLastPage ? (
        <div className={style.footerBlock}>
          {isCanGoBack ? (
            <button className={style.goBack}>Go Back</button>
          ) : null}
          <Button customClass={isCompleted ? 'confirm' : ''}>
            {isCompleted ? 'Confirm' : 'Next Step'}
          </Button>
        </div>
      ) : null}
    </footer>
  );
}
