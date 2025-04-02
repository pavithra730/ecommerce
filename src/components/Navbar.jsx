import React, { useState } from 'react'
import '../styles/navbar.css'
import { Link } from 'react-router-dom'
import logo from '../assets/images/logo.png'
export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="glam">
        <img src={logo} alt="glammart"/>
      </div> 
         <div className="menu-icon" onClick={() => 
          setMenuOpen(!menuOpen)
          }>
           ☰
         </div>
        
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li onClick={() => setMenuOpen(!menuOpen)}><Link to="/">Home</Link></li>
          <li onClick={() => setMenuOpen(!menuOpen)}><Link to="/productlist">Products</Link></li>
          <li onClick={() => setMenuOpen(!menuOpen)}><Link to="/cartpage">CartPage</Link></li>
          <li onClick={() => setMenuOpen(!menuOpen)}><Link to="/checkoutpage">Checkoutpage</Link></li>
        </ul>
    </nav>
  )
}
