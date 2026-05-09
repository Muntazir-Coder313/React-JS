import React, { useState } from 'react'
import '../Header.css'

import { Heart,ShoppingCart } from "lucide-react";
import { Link } from 'react-router-dom'




function Routing() {


  const [darkMode, setDarkMode] = useState(false);

const toggleTheme = () => {
  setDarkMode(!darkMode);

  if (!darkMode) {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }
};  


  return (
    <div>
              <div className="header">
  
  {/* Search */}
  <div className="searchBox">
    <input type="text" placeholder="Search..." />
    <span className="icon">🔍</span>
  </div>

  {/* Auth buttons */}
  <ul className="tag">
    <li className="list signup">
    <Heart size={20} color="red" />
    </li>
    <li className="list login">Login</li>
    <li className="list login" onClick={toggleTheme}>
    {darkMode ? "🌞 Light" : "🌙 Dark"}
  </li>
  </ul>
</div>


<div className="navbar">
    <Link to="/">
    <h2 className='logo'>NEXTPLANNER <br /><hr /> <span className='extra'>INSTITUTE OF TECHNOLOGY</span></h2>
    </Link>
    <ul className='nav'>
      <li className='head'><Link to="/about">Expensive</Link></li>
      <li className='head'><Link to="/product">Product</Link></li>
      <li className='head'><Link to="/contact">Contact</Link></li>
      <li className='head'><Link to="/#">Academics</Link></li>
      <li className='head'><Link to="/#">Life At NPIT</Link></li>
      <li className='head'><Link to="/#"><ShoppingCart color="black" /></Link></li>
    </ul>
</div>


    {/* <div className="container"></div> */}



    </div>
  )
}

export default Routing