import Navbar from './Navbar';

const Header = () => {
    
  return (
    <header style={{position:"fixed",zIndex:3, width:"100%", backgroundColor:"white", margin:"0px"}}>
      <div className="nav-area" style={{marginLeft:"10px"}}>
        <a href="/" className="logo">
          Logo
        </a>
        <Navbar></Navbar>
      </div>
    </header>
  );
};

export default Header;