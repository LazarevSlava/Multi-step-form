import style from './Step5.module.scss';
import ThankYouIcon from '../assets/images/icon-thank-you.svg?react';

const Step5 = () => {
  return (
    <div className={style.container}>
      <ThankYouIcon className={style.icon} />
      <h2 className={style.title}>Thank you!</h2>
      <p className={style.description}>
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  );
};

export default Step5;
