import style from './Button.module.scss';
import { ButtonHTMLAttributes } from 'react';
import { clsx } from 'clsx';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  customClass?: string;
}

function Button({ children, customClass = '', ...props }: ButtonProps) {
  return (
    <button
      className={clsx(style.button, customClass && style[customClass])}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
