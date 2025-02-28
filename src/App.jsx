import Banner from './pages/Home/Banner';
import MainNav from './layout/MainNav';
import Learning from './pages/Home/Learning';
import NewClass from './pages/Home/NewClass';
import WantLearn from './pages/Home/WantLearn';
import Explore from './pages/Home/Explore';
import PickClass from './pages/Home/PickClass';

const App = () => {
  return (
    <>
      <MainNav />
      <Banner />
      <Learning />
      <NewClass/>
      <WantLearn/>
      <Explore/>
      <PickClass/>
      <div className="live"></div>
      <div className="popular"></div>
      <div className="article"></div>
      <div className="creators"></div>
      <div className="cooperators"></div>
      <div className="cta"></div>
    </>
  );
};

export default App;
