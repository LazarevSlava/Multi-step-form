import style from './Button.module.scss';
import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

function Button({ children }: ButtonProps) {
  return <button className={style.button}>{children}</button>;
}

export default Button;
