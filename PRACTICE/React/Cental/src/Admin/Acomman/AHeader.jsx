import React, { useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

function AHeader() {
    const redirect = useNavigate()

    useEffect(() => {
        if (!localStorage.getItem("Aid")) {
            redirect("/Aloginpage")
        }
    }, )

    const logout = () => {
        localStorage.removeItem("Aid")
        localStorage.removeItem("Aname")
        redirect("/Aloginpage")
        toast.success("Admin Logout..!")
    }

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
                        <NavLink to="/Dashboard" className="navbar-brand p-0">
                            <h1 className="display-6 text-primary"><i className="fas fa-car-alt me-3" />Cental</h1>
                            {/* <img src="img/logo.png" alt="Logo"> */}
                        </NavLink>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                            <span className="fa fa-bars" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <div className="navbar-nav mx-auto py-0">
                                <NavLink to="/Dashboard" className="nav-item nav-link active">Dash</NavLink>
                                <NavLink to="/about" className="nav-item nav-link">About</NavLink>
                                <NavLink to="/Service" className="nav-item nav-link">Service</NavLink>
                                <NavLink to="/Blogmanage" className="nav-item nav-link">Blog</NavLink>
                                <div className="nav-item dropdown">
                                    <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                                    <div className="dropdown-menu m-0">
                                        <NavLink to="/Features" className="dropdown-item">Our Feature</NavLink>
                                        <NavLink to="/Car" className="dropdown-item">Our Cars</NavLink>
                                        <NavLink to="/Team" className="dropdown-item">Our Team</NavLink>
                                        <NavLink to="/Testimonial" className="dropdown-item">Testimonial</NavLink>
                                    </div>
                                </div>
                                <NavLink to="/Contact" className="nav-item nav-link">Contact</NavLink>
                                {
                                    (() => {
                                        if (localStorage.getItem('Aid')) {
                                            return (
                                                <>
                                                    <NavLink className="nav-item nav-link">Hello {localStorage.getItem("Aname")}</NavLink>
                                                </>
                                            )
                                        }
                                    })()
                                }

                                {
                                    (() => {
                                        if (localStorage.getItem('Aid')) {
                                            return (
                                                <>
                                                               <NavLink onClick={logout} className="nav-item nav-link">Alogout</NavLink>
                                                    </>
                                                )
                                            }
                                            else{
                                                return(
                                                    <>
                                                        <NavLink to="/Alogin" className="nav-item nav-link">ALogin</NavLink>
                                                    </>
                                                )
                                            }
                                        })()
                                    }
                            </div>

                        </div>
                    </nav>
                </div>
            </div>
            {/* Navbar & Hero End */}
        </div>
    )
}

export default AHeader