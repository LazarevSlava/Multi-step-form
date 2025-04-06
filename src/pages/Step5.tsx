import ThankYouIcon from '../assets/images/icon-thank-you.svg?react';
import StepContainer from './StepContainer';
const Step5 = () => {
  return (
    <StepContainer
      icon={<ThankYouIcon />}
      centerContent
      title="Finishing up"
      description="Double-check everything looks OK before confirming."
    />
  );
};

export default Step5;
