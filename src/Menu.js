import ScrollToButton from "./components/ScrollToButton";

function Menu() {
    return (
      <div className="section Menu">
          <ul className="scrollto">
              <li>
                  <ScrollToButton toId="home">Home</ScrollToButton>
              </li>
              <li>
                  <ScrollToButton toId="about">About</ScrollToButton>
              </li>
              <li>
                  <ScrollToButton toId="portfolio">Portfolio</ScrollToButton>
              </li>
              <li>
                  <ScrollToButton toId="services">Services</ScrollToButton>
              </li>
              <li>
                  <ScrollToButton toId="contacts">Contacts</ScrollToButton>
              </li>
          </ul>
      </div>
    );
  }
  
  export default Menu;