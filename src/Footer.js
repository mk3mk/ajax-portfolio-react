import ScrollToButton from "./components/ScrollToButton";

function Footer() {
    return (
      <div className="section Footer">

            <div className="container">
                <p>© Copyright 2022 Created by me</p>
            </div>

            <div id="go_top">
            <ScrollToButton toId="home">↑</ScrollToButton>
            </div>

      </div>
    );
  }
  
  export default Footer;