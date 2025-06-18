import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
    return (
        <div>
            {/* Topbar Start */}
            <div className="container-fluid topbar bg-secondary d-none d-xl-block w-100">
                <div className="container">
                    <div className="row gx-0 align-items-center" style={{ height: 45 }}>
                        <div className="col-lg-6 text-center text-lg-start mb-lg-0">
                            <div className="d-flex flex-wrap">
                                <a href="#" className="text-muted me-4"><i className="fas fa-map-marker-alt text-primary me-2" />Find A Location</a>
                                <a href="tel:+01234567890" className="text-muted me-4"><i className="fas fa-phone-alt text-primary me-2" />+01234567890</a>
                                <a href="mailto:example@gmail.com" className="text-muted me-0"><i className="fas fa-envelope text-primary me-2" />Example@gmail.com</a>
                            </div>
                        </div>
                        <div className="col-lg-6 text-center text-lg-end">
                            <div className="d-flex align-items-center justify-content-end">
                                <a href="#" className="btn btn-light btn-sm-square rounded-circle me-3"><i className="fab fa-facebook-f" /></a>
                                <a href="#" className="btn btn-light btn-sm-square rounded-circle me-3"><i className="fab fa-twitter" /></a>
                                <a href="#" className="btn btn-light btn-sm-square rounded-circle me-3"><i className="fab fa-instagram" /></a>
                                <a href="#" className="btn btn-light btn-sm-square rounded-circle me-0"><i className="fab fa-linkedin-in" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Topbar End */}
            {/* Navbar & Hero Start */}
            <div className="container-fluid nav-bar sticky-top px-0 px-lg-4 py-2 py-lg-0">
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <a href className="navbar-brand p-0">
                            <h1 className="display-6 text-primary"><i className="fas fa-car-alt me-3" />Cental</h1>
                            {/* <img src="img/logo.png" alt="Logo"> */}
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                            <span className="fa fa-bars" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <div className="navbar-nav mx-auto py-0">
                                <NavLink to="/" className="nav-item nav-link active">Home</NavLink>
                                <NavLink to="/about" className="nav-item nav-link">About</NavLink>
                                <NavLink to="/Service" className="nav-item nav-link">Service</NavLink>
                                <a href="blog.html" className="nav-item nav-link">Blog</a>
                                <div className="nav-item dropdown">
                                    <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                                    <div className="dropdown-menu m-0">
                                        <a href="feature.html" className="dropdown-item">Our Feature</a>
                                        <a href="cars.html" className="dropdown-item">Our Cars</a>
                                        <a href="team.html" className="dropdown-item">Our Team</a>
                                        <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                                        <a href="404.html" className="dropdown-item">404 Page</a>
                                    </div>
                                </div>
                                <a href="contact.html" className="nav-item nav-link">Contact</a>
                            </div>
                            <a href="#" className="btn btn-primary rounded-pill py-2 px-4">Get Started</a>
                        </div>
                    </nav>
                </div>
            </div>
            {/* Navbar & Hero End */}


        </div>
    )
}

export default Header
