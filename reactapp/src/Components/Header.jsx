import React from 'react'
// import { Link, Links } from 'react-router-dom'

function Header() {
  return (
    
    <div className=''>
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
    <h2 className='logo'>NEXTPLANNER <br /><hr /> <span className='extra'>INSTITUTE OF TECHNOLOGY</span></h2>
    <ul className='nav'>
      <li className='head'>About us</li>
      <li className='head'>Admission</li>
      <li className='head'>Academics</li>
      <li className='head'>Resources</li>
      <li className='head'>Life At NPIT</li>
      <li className='head'>Contact us</li>
      <li className='head'>Apply Now</li>
    </ul>
</div>


      
      
  </div>
      
      
      
      
    
    )
}

export default Header