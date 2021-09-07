import React from 'react';
import {Link} from "react-router-dom";
import logo from '../../assets/logo3.png'
import placeholder from '../../assets/placeholder.png'
import './header.css'


const Header = () => {
  return (
    <header className='header'>
      <Link className="header-logo" to="/">
        <img className='logo' alt='' src={logo}></img>
      </Link>
      <div className='nav'>
        <img   
          className="photo-header"
          alt="user"
          src={ placeholder }
        />
        <h3 className='name-header'> Dr. Pablo Kehyaian  </h3>
       
      </div>
      <div className='nav mobile'>
        <Link className='button' to="/te-queremos">¿Eres comercial?</Link>
      </div>
    </header>
  )
}

export default Header;