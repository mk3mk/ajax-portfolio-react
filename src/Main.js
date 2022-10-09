import MainSlider from './MainSlider';
import MainAbout from './MainAbout';
import MainSkills from './MainSkills';
import MainPortfolio from './MainPortfolio';
import MainServices from './MainServices';
import MainCoordinates from './MainCoordinates';
import MainContactForm from './MainContactForm';

function Main() {
    return (
      <div className="Main">
              <MainSlider />
              <MainAbout />
              <MainSkills />
              <MainPortfolio />
              <MainServices />
              <MainCoordinates />
              <MainContactForm />
      </div>
    );
  }
  
  export default Main;