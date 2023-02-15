import React from 'react'
import './header.css'
import navlogo from "./navLogo.svg"


function Header() {
  return (
    <header className="navWrapper">
      <img className="logo" src={navlogo}/>

      <div className="nav-NavItems_Wrapper">
        <ul className="nav-NavItems_List">
          <li className="navItem">
            <a href="#">Home</a>
          </li>
          <li className="navItem">
            <a href="#">About</a>
            
          </li>
          <li className="navItem">
            <a href="#">Contact</a>

          </li>
        </ul>
      </div>

    </header>
  )
}

export default Header