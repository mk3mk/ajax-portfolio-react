function MainContactForm() {
    return (
      <div id="contacts" className="section MainContactForm">
        <h5 className="section_title">MY CONTACT FORM</h5>
        <h2>I'd Love To Hear From You.</h2>
        <div className="container">
          <form className="contactForm">
            <input className="formInput" type="text" placeholder="name" />
            <input className="formInput" type="text" placeholder="email" />
            <textarea className="formInput" type="textarea" placeholder="message" rows="10" wrap="soft"/>
            <input className="formButton" type="submit" value="Submit" />
          </form>
        </div>
      </div>
              
    );
  }
  
  export default MainContactForm;