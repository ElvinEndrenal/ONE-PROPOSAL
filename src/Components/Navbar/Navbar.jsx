import React from 'react'
import "./Navbar.css"

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
            <li className="nav-item"><a href="#">Home</a></li>
            <li className="nav-item"><a href="#">About</a></li>
            <li className="nav-item"><a href="#">News</a></li>
            <li className="nav-item"><a href="#">Proposal</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar