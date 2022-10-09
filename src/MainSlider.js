import ScrollToButton from "./components/ScrollToButton";

function MainSlider() {
    return (
      <div className="section MainSlider">
        
          <div className="bg_0"></div>
          <div className="bg_1"></div>
          <div className="bg_2"></div>
          <div className="bg_3"></div>
          <div className="bg_4"></div>
          <div className="bg_clouds"></div>

        <div className="container">
          <h5>WELCOME TO MY SITE</h5>
          <h1>Hi, I’m mk3mk</h1>
          <h3>a Full-Stack Web Developer</h3>
          <ScrollToButton toId="about">More About Me ↓</ScrollToButton>
        </div>

      </div>
        
    );
  }
  
  export default MainSlider;