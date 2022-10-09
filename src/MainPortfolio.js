function MainPortfolio() {
    return (
      <div id="portfolio" className="section portfolio">
      
        <div className="container">
          <h5 className="section_title">MY PORTFOLIO</h5>
          <h2>Check Out Some of My Works.</h2>
          <p>If you want to have a website, I will gladly bring to life any of your ideas.</p>

          <div className="portfolio_box">

            <div className="portfolio_item">
              <img className="portfolio_image" src={require('./images/Portfolio-01.png')} alt="portfolio"/>
              <h4 className="portfolio_category">Wordpress</h4>
              <h2 className="portfolio_title">SYNERGY GLOBAL FORUM</h2>
            </div>

            <div className="portfolio_item">
              <img className="portfolio_image" src={require('./images/Portfolio-02.png')} alt="portfolio"/>
              <h4 className="portfolio_category">Wordpress</h4>
              <h2 className="portfolio_title">ADLOWCOST</h2>
            </div>

            <div className="portfolio_item">
              <img className="portfolio_image" src={require('./images/Portfolio-03.png')} alt="portfolio"/>
              <h4 className="portfolio_category">Wordpress</h4>
              <h2 className="portfolio_title">SYNERGY CRM</h2>
            </div>

            <div className="portfolio_item">
              <img className="portfolio_image" src={require('./images/Portfolio-04.png')} alt="portfolio"/>
              <h4 className="portfolio_category">Wordpress</h4>
              <h2 className="portfolio_title">OZER TEXTIL</h2>
            </div>

          </div>



        </div>

      </div>
              
    );
  }
  
  export default MainPortfolio;