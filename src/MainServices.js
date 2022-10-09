function MainServices() {
    return (
      <div id="services" className="section MainServices">
        <div className="container">
          <h5 className="section_title">MY SERVICES</h5>
          <h2>What Can I Do For You?</h2>
          <div className="services_box">

            <div className="services_item">
                <span class="icon_window"></span>
                <h3>Web Development</h3>
                <p class="desc">
                  Development of an adaptive website that provides the correct display on various devices and daily site maintenance.
                </p>
            </div>

            <div className="services_item">
                <span class="icon_window"></span>
                <h3>WordPress / CMS website</h3>
                <p class="desc">
                  Filling the site with content text, graphic information. Installing and configuring plugins.
                </p>
            </div>

            <div className="services_item">
                <span class="icon_window"></span>
                <h3>Photoshop</h3>
                <p class="desc">
                  Image processing with Photoshop. Аdjusting and retouching images, transforming, using effects.
                </p>
            </div>

          </div>
        </div>
      </div>
              
    );
  }
  
  export default MainServices;