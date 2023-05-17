import { NavLink } from "react-router-dom"
import icon from "../images/2311531.png"
import React from "react";

let sidebar = React.createRef()
let menuicon = React.createRef()
let close = React.createRef()
let isOpen = false;

const menubar = () => {
  if (isOpen) {
    sidebar.current.style.display = "none";
    menuicon.current.style.display = "block"
    close.current.style.display = "none"
    isOpen = false;
  }
  else {
    sidebar.current.style.display = "block";
    menuicon.current.style.display = "none";
    close.current.style.display = "block"
    isOpen = true;
  }
}

function Header() {
  return (
    <header className='header'>
      <div className="menu">
        <div className="menuBtn" onClick={menubar}>
          <img ref={menuicon} src={icon} alt="" />
          <span ref={close} className="closeBtn">
          &#10006;
          </span>
        </div>
      </div>
      <div className='Navigation'>
        <ul className='nav-ul'>
          <li><NavLink to="/">HOME</NavLink></li>
          <li><NavLink to="/about">ABOUT US</NavLink></li>
          <li><NavLink to="/company">PRODUCT</NavLink></li>
          <li><NavLink to="/contact">CONTACT</NavLink></li>
        </ul>
      </div>
      <div className="media-nav" ref={sidebar}>
        <ul className='nav-ul'>
          <li><NavLink to="/">HOME</NavLink></li>
          <li><NavLink to="/about">ABOUT US</NavLink></li>
          <li><NavLink to="/company">PRODUCT</NavLink></li>
          <li><NavLink to="/contact">CONTACT</NavLink></li>
        </ul>
      </div>
    </header>
  )
}
export default Header