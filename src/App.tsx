import Footer from './layout/Footer';
import Main from './layout/Main';
import Header from './layout/Header';
import style from './App.module.scss';
import { FormProvider } from './contextData/FormProvider';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Step1 from './pages/Step1';
import Step2 from './pages/Step2';
import Step3 from './pages/Step3';
import Step4 from './pages/Step4';

const App = () => {
  return (
    <FormProvider>
      <Router>
        <div className={style.appContainer}>
          <Header />

          <div className={style.mainFooterWrapper}>
            <Main>
              <Routes>
                <Route path="/" element={<Navigate to="/step1" />} />
                <Route path="/step1" element={<Step1 />} />
                <Route path="/step2" element={<Step2 />} />
                <Route path="/step3" element={<Step3 />} />
                <Route path="/step4" element={<Step4 />} />
              </Routes>
            </Main>
            <Footer />
          </div>
        </div>
      </Router>
    </FormProvider>
  );
};

export default App;
