import Menu from './Menu';
import Logo from './Logo';



function Header() {
    return (
      <div id="home" className="section Header header_down">
          <div className="container header_container">
            <Logo />
            <Menu />
          </div>
      </div>
    );
  }
  
  export default Header;