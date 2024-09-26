import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (

    <div>
      <div className="navbar">
      <input type="checkbox" id="check"/>
        <label for="check" class="checkbtn">
            <i class="fas fa-bars"></i>
        </label>
        <img className="logo" src="src/assets/logo.png" width={200}/>
        <ul>
        <li><a className='nav-item' href="#home">About</a></li>
        <li><a className='nav-item' href="#about">How</a></li>
        <li className="main"><Link to="/Login">Submit Now</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;