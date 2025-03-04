import Footer from './layout/Footer';
import Main from './layout/Main';
import Header from './layout/Header';
import style from './App.module.scss';

const App = () => {
  return (
    <div className={style.appContainer}>
      <Header />
      <div className={style.mainFooterWrapper}>
        <Main />
        <Footer />
      </div>
    </div>
  );
};

export default App;
