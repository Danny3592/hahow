import Banner from './pages/Home/Banner';
import MainNav from './layout/MainNav';
import Learning from './pages/Home/Learning';
import NewClass from './pages/Home/NewClass';
import WantLearn from './pages/Home/WantLearn';
import Explore from './pages/Home/Explore';
import PickClass from './pages/Home/PickClass';
import LiveActivity from './pages/Home/LiveActivity';
import Popular from './pages/Home/Popular';
import Article from './pages/Home/Article';
import Creators from './pages/Home/Creators';
import Cooperators from './pages/Home/Cooperators';
import Cta from './pages/Home/Cta';
import Footer from './pages/Home/Footer';
import HeaderListPop from './components/Header/HeaderListPop';

const App = () => {
  return (
    <>
      <MainNav />
      <Banner />
      <Learning />
      <NewClass />
      <WantLearn />
      <Explore />
      <PickClass />
      <LiveActivity />
      <Popular />
      <Article />
      <Creators />
      <Cooperators />
      <Cta />
      <Footer />
      
    </>
  );
};

export default App;
