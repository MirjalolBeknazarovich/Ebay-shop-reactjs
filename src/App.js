import './App.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import AllRouter from './Routes/AllRouter/AllRouter';
import Hero from './components/Hero/Hero';
import {useLocation} from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

function App() {
  const location = useLocation()
  return (
    <>  
      {
        location.pathname.includes('/register') ? <></> : <Header />&&
        location.pathname.includes('/signin') ? <></> : <Header />
      }
      { location.pathname === "/" ? <Hero /> : <></>}
      <Main>
        <AllRouter />
      </Main>
      { 
        location.pathname.includes('/register') ? <></> : <Footer />&&
        location.pathname.includes('/signin') ? <></> : <Footer />
      }
    </>
  )
}

export default App;
