import style from './Footer.module.scss';
import Button from '../components/buttons/Button';
import { useState } from 'react';

const Footer = () => {
  const [isCompleted] = useState(true);
  const [isCanGoBack] = useState(true);
  const [isLastPage] = useState(true);

  return (
    <footer>
      {isLastPage ? (
        <div className={style.footerBlock}>
          {isCanGoBack ? <Button customClass="goBack">Go Back</Button> : null}
          <Button customClass={isCompleted ? 'confirm' : ''}>
            {isCompleted ? 'Confirm' : 'Next Step'}
          </Button>
        </div>
      ) : null}
    </footer>
  );
};
export default Footer;
