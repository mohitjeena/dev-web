import React from 'react'
import "./Navbar.css"
import {Link} from "react-router-dom"
const Navbar = () => {
  return (
    <div className='nav-container'>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container ">
    <a className="navbar-brand" href="#" style={{fontWeight:"600",fontSize:"24px"}}>Mohit Technical</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
   
        <Link to="/" style={{textDecoration:"none"}}>
          <a className="nav-link active me-2" aria-current="page" href="#">Home</a>
          </Link>
        </li>
        <li className="nav-item">
        <Link to="/service" style={{textDecoration:"none"}}>
          <a className="nav-link active me-2" aria-current="page" href="#">Service</a></Link>
        </li>
        <li className="nav-item">
        <Link to="/about" style={{textDecoration:"none"}}>
          <a className="nav-link active me-2" aria-current="page" href="#">About</a></Link>
        </li>
        <li className="nav-item">
        <Link to="/contact" style={{textDecoration:"none"}}>
          <a className="nav-link active me-2" aria-current="page" href="#">Contact</a></Link>
        </li>
    
    
       
      </ul>
      
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
