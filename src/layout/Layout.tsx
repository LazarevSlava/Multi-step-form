import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import style from './Layout.module.scss';

const Layout = () => {
  return (
    <div className={style.layoutContainer}>
      <Header />
      <div className={style.mainFooterWrapper}>
        <Main>
          <Outlet />
        </Main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
