import React from 'react'
import { NavLink } from 'react-router-dom'

function Aheader() {
    return (
        <div>
            <div>

                {/* Topbar Start */}
                <div className="container-fluid bg-dark px-5 d-none d-lg-block">
                    <div className="row gx-0 align-items-center" style={{ height: 45 }}>
                        <div className="col-lg-8 text-center text-lg-start mb-lg-0">
                            <div className="d-flex flex-wrap">
                                <a href="#" className="text-light me-4"><i className="fas fa-map-marker-alt text-primary me-2" />Find A Location</a>
                                <a href="#" className="text-light me-4"><i className="fas fa-phone-alt text-primary me-2" />+01234567890</a>
                                <a href="#" className="text-light me-0"><i className="fas fa-envelope text-primary me-2" />Example@gmail.com</a>
                            </div>
                        </div>
                        <div className="col-lg-4 text-center text-lg-end">
                            <div className="d-flex align-items-center justify-content-end">
                                <a href="#" className="btn btn-light btn-square border rounded-circle nav-fill me-3"><i className="fab fa-facebook-f" /></a>
                                <a href="#" className="btn btn-light btn-square border rounded-circle nav-fill me-3"><i className="fab fa-twitter" /></a>
                                <a href="#" className="btn btn-light btn-square border rounded-circle nav-fill me-3"><i className="fab fa-instagram" /></a>
                                <a href="#" className="btn btn-light btn-square border rounded-circle nav-fill me-0"><i className="fab fa-linkedin-in" /></a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Topbar End */}
                {/* Navbar & Hero Start */}
                <div className="container-fluid position-relative p-0">
                    <nav className="navbar navbar-expand-lg navbar-light bg-white px-4 px-lg-5 py-3 py-lg-0">
                        <NavLink to ="/Dashboard" className="navbar-brand p-0">
                            <h1 className="text-primary m-0"><i className="fas fa-star-of-life me-3" />Terapia</h1>
                            {/* <img src="img/logo.png" alt="Logo"> */}
                        </NavLink>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                            <span className="fa fa-bars" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <div className="navbar-nav ms-auto py-0">
                                <NavLink to="/Dashboard" className="nav-item nav-link active">Dashboard</NavLink>
                                <NavLink to="/About" className="nav-item nav-link">About</NavLink>
                                 
                                <div className="nav-item dropdown">
                                    <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Service</a>
                                    <div className="dropdown-menu m-0">
                                        <NavLink to="/Servicemanage" className="dropdown-item">Service manage</NavLink>
                                        <NavLink to="/Serviceadd" className="dropdown-item">Sevice add</NavLink>
                                         
                                    </div>
                                </div>

                                <div className="nav-item dropdown">
                                    <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                                    <div className="dropdown-menu m-0">
                                        <NavLink to="/Appointment" className="dropdown-item">Appointment</NavLink>
                                        <NavLink to="/Features" className="dropdown-item">Features</NavLink>
                                        <NavLink to="/Blog" className="dropdown-item">Our Blog</NavLink>
                                        <NavLink to="/Team" className="dropdown-item">Our Team</NavLink>
                                        <NavLink to="/Testimonial" className="dropdown-item">Testimonial</NavLink>
                                        <NavLink to="/Notfound" className="dropdown-item">404 Page</NavLink>
                                    </div>
                                </div>
                                <NavLink to="/Contact" className="nav-item nav-link">Contact Us</NavLink>
                            </div>
                            <a href="#" className="btn btn-primary rounded-pill text-white py-2 px-4 flex-wrap flex-sm-shrink-0">Book Appointment</a>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Aheader
