import React from 'react';
import { NavLink} from 'react-router-dom';

const Header = () => {
    return (
        <>

     <nav className=" header-section navbar navbar-expand-md navbar-light bg-light">
  <div className="container">
    <NavLink className="navbar-brand" to="/">Ankit Panchal</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    
    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink exact className="nav-link" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/service">Services</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/expertises">Experties</NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link" to="/blog">Blog</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/contact">Contact</NavLink>
        </li>
      </ul>
    </div>
   
  </div>
</nav>
        

           
        </>
    )
}

export default Header;