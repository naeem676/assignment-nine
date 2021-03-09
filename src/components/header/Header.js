import React from 'react';
import './Header.css';
import logo from "../../Logo.png";


const Header = () => {
   
    return (
        <div>

        <nav>
        <img className='logo' src={logo} alt="" srcset=""/>
          <input className='search' type="text" placeholder="Search" />
          <p>News</p>
          <p>Destination</p>
          <p>Blog</p>
          <p>Contact</p>
          <button className='login'>Login</button>
        </nav>
        
      </div>
    );
  }

export default Header;