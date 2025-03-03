import style from './Footer.module.scss';
import Button from '../components/buttons/Button';

export function Footer() {
  return (
    <footer>
      <div className={style.footerBlock}>
        <Button>{'Next Step'}</Button>
      </div>
    </footer>
  );
}
