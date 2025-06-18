import React from 'react';
import { NavLink } from 'react-router-dom';
// import logo from './logo.png'; // Add your logo in the src folder

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
      <div className="container-fluid">
        <a className="navbar-brand d-flex align-items-center" href="#">
          {/* <img src={logo} alt="Business Logo" width="30" height="30" className="d-inline-block align-text-top me-2" /> */}
          MyBusiness
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent"
          aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link " to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/About">About</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/Contact">Contact</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Help">Help</NavLink>
            </li>
          </ul>
          <form className="d-flex me-3">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-light" type="submit">Search</button>
          </form>
          <button className="btn btn-primary">Get a Quote</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
