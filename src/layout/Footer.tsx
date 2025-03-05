import style from './Footer.module.scss';
import Button from '../components/buttons/Button';
import { useFormContext } from '../components/hooks/useFormContext';
import { useStepNavigation } from '../components/hooks/useStepNavigation';
import { isStep1Complete } from '../utils/validation';

const Footer = () => {
  const { formData } = useFormContext();
  const { currentPage, isCanGoBack, isLastPage, handleNextStep, handleGoBack } =
    useStepNavigation();

  const isFormValid = isStep1Complete(formData);

  return (
    <footer>
      {!isLastPage ? (
        <div className={style.footerBlock}>
          {isCanGoBack && (
            <Button onClick={handleGoBack} customClass="goBack">
              Go Back
            </Button>
          )}
          <Button
            onClick={handleNextStep}
            disabled={currentPage === 1 && !isFormValid}
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
