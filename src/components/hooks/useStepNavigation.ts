import { useLocation, useNavigate } from 'react-router-dom';

export const useStepNavigation = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const currentPage = Number(location.pathname.split('/step')[1]) || 1;
  const isCanGoBack = currentPage > 1 && currentPage < 5;
  const isLastPage = currentPage >= 5;

  const handleNextStep = () => {
    if (currentPage < 5) {
      navigate(`/step${currentPage + 1}`);
    }
  };

  const handleGoBack = () => {
    if (isCanGoBack) {
      navigate(`/step${currentPage - 1}`);
    }
  };

  return {
    currentPage,
    isCanGoBack,
    isLastPage,
    handleNextStep,
    handleGoBack,
  };
};
