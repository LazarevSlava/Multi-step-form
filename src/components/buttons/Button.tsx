import style from './Button.module.scss';
import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  customClass?: string;
}

function Button({ children, customClass = '', ...props }: ButtonProps) {
  return (
    <button className={`${style.button} ${style[customClass]}`} {...props}>
      {children}
    </button>
  );
}

export default Button;
