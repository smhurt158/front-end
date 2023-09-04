import Navbar from './Navbar';

const Header = () => {
    
  return (
    <header>
      <div className="nav-area">
        <a href="/" className="logo">
          Logo
        </a>
        <Navbar></Navbar>
      </div>
    </header>
  );
};

export default Header;