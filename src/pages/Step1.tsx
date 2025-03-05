import { useFormContext } from '../contextData/FormContext';
import { useNavigate } from 'react-router-dom';
import style from './Step1.module.scss';

const Step1 = () => {
  const { formData, setFormData } = useFormContext();
  const navigate = useNavigate();

  return (
    <div className={style.stepContainer}>
      <h2 className={style.title}>Personal info</h2>
      <p className={style.description}>
        Please provide your name, email address, and phone number.
      </p>

      <form className={style.form}>
        <div className={style.inputGroup}>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ name: e.target.value })}
            placeholder="e.g. Stephen King"
            required
          />
        </div>

        <div className={style.inputGroup}>
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ email: e.target.value })}
            placeholder="e.g. stephenking@lorem.com"
            required
          />
        </div>

        <div className={style.inputGroup}>
          <label htmlFor="phone">Phone Number</label>
          <input
            id="phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ phone: e.target.value })}
            placeholder="e.g. +1 234 567 890"
            required
          />
        </div>
      </form>
    </div>
  );
};

export default Step1;
