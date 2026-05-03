import React from 'react'
import '../Header.css'
import { Link, Links } from 'react-router-dom'

function Routing() {
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
    <li className="list login">Login</li>
    <li className="list signup">Sign Up</li>
  </ul>
</div>


<div className="navbar">
    <Link to="/">
    <h2 className='logo'>NEXTPLANNER <br /><hr /> <span className='extra'>INSTITUTE OF TECHNOLOGY</span></h2>
    </Link>
    <ul className='nav'>
      <li className='head'><Link to="/about">Product</Link></li>
      <li className='head'><Link to="/contact">Contact</Link></li>
      <li className='head'><Link to="/admission">Academics</Link></li>
      <li className='head'><Link to="/admission">Resources</Link></li>
      <li className='head'><Link to="/admission">Life At NPIT</Link></li>
      <li className='head'><Link to="/admission">Apply Now</Link></li>
    </ul>
</div>


    {/* <div className="container"></div> */}



    </div>
  )
}

export default Routing