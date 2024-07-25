import React from 'react'
import '../navbar/navbar.css'
import logo from '../../image/logo.webp'
const Navbar = () => {
  return (
    <>
    <div className="navbar">
        <img src={logo} alt="" />
        <ul className="navlist">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Project</a></li>
            <li><a href="#">Offer</a></li>
            <li><a href="#">News</a></li>
            <li><a href="#">Services</a></li>
        </ul>
    </div>
    </>
  )
}

export default Navbar