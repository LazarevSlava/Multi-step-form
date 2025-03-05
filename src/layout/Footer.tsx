import style from './Footer.module.scss';
import Button from '../components/buttons/Button';
import { useState } from 'react';
import { useFormContext } from '../contextData/FormContext';
import { useLocation, useNavigate } from 'react-router-dom';

const Footer = () => {
  const { formData } = useFormContext();
  const navigate = useNavigate();
  const location = useLocation();

  const currentPage = Number(location.pathname.split('/step')[1]);
  const isCanGoBack = currentPage > 1;
  const isLastPage = currentPage > 4;

  const isStep1Complete =
    formData.name.trim() && formData.email.trim() && formData.phone.trim();

  const handleNextStep = () => {
    if (currentPage >= 1 && currentPage < 4) {
      navigate(`/step${currentPage + 1}`);
    }
  };

  return (
    <footer>
      {!isLastPage ? (
        <div className={style.footerBlock}>
          {isCanGoBack ? <Button customClass="goBack">Go Back</Button> : null}
          <Button
            onClick={handleNextStep}
            disabled={!isStep1Complete}
            customClass={currentPage === 4 ? 'confirm' : ''}
          >
            {currentPage === 4 ? 'Confirm' : 'Next Step'}
          </Button>
        </div>
      ) : null}
    </footer>
  );
};
export default Footer;
