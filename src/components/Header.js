import Navbar from './Navbar';
import { useState } from 'react';

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