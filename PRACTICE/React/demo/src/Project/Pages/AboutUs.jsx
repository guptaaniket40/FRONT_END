import React from 'react'
import Navbar from '../Common/Navbar'
import Footer from '../Common/Footer'

function AboutUs() {
  return (
    <div>
        <Navbar />
      



       {/* SECTIONS 1 STARTS */}
      <div className="mt-2 pt-4">
        <div className='container me-5'>
          <div className="row">
            <div className="col-md-6 d-flex align-items-center">
              <div className="p-4">
                {/* Small subtitle */}
                <p className="text-muted mb-3" style={{ fontSize: '14px', fontWeight: '500' }}>
                  About Us
                </p>

                {/* Main heading */}
                <h1 className="display-7 fw-bold mb-4" style={{ color: '#2c3e50', lineHeight: '1.2' }}>
                  We’ve skilled in wide range of web and other digital market tools & designs. <br />

                </h1>

                {/* Description paragraph */}
                <p className="text-muted mb-4" style={{ fontSize: '16px', lineHeight: '1.6', maxWidth: '400px' }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident,
                  excepturi. Distinctio accusantium fugit odit fugit ipsum.
                </p>

                {/* Buttons */}
                <div className="d-flex gap-3 flex-wrap">
                  <button className="btn btn-primary btn-lg px-4 py-2" style={{ backgroundColor: '#3b82f6', borderColor: '#3b82f6' }}>
                    Read More
                  </button>
                  <button className="btn btn-outline-dark btn-lg px-4 py-2">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-6 mt-3 ">
              <div  >
                <img style={{ height: "420px", width: "380px", }} src="https://p.w3layouts.com/demos_new/template_demo/09-02-2022/digitmarketing-liberty-demo_Free/150772938/web/assets/images/ab1.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SECTIONS 1 ENDS */}


      {/* BLOG STARTS */}
      <section className="blog-section" style={{ backgroundColor: "#F4F6F9" }} >
        <div className="container ">
          {/* Section Title */}
          <div className="section-title">
            <p className="section-subtitle">Our Team</p>
            <h2 className="section-main-title">Creative Team</h2>
          </div>
          {/* Blog Cards Row */}
          <div className="row">
            {/* Blog Card 1 */}
            <div className="col-lg-3 col-md-6">
              <div className="card blog-card">
                <img src="https://p.w3layouts.com/demos_new/template_demo/09-02-2022/digitmarketing-liberty-demo_Free/150772938/web/assets/images/team1.jpg" alt="Sales Marketing" className="blog-card-img" />
                <div className="card-body blog-card-body" style={{textAlign:"center"}}>

                  <h5 className="" style={{textAlign:"center"}}> 
                    <a href="#" className="text-decoration-none" style={{color:"black"}}>
                      Glendell Paul
                    </a>
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="card blog-card">
                <img src="https://p.w3layouts.com/demos_new/template_demo/09-02-2022/digitmarketing-liberty-demo_Free/150772938/web/assets/images/team2.jpg" alt="Sales Marketing" className="blog-card-img" />
                <div className="card-body blog-card-body">

                  <h5 className=" " style={{textAlign:"center"}}>
                    <a href="#" className="text-decoration-none" style={{color:"black"}}>
                     Dania Ruther
                    </a>
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="card blog-card">
                <img src="https://p.w3layouts.com/demos_new/template_demo/09-02-2022/digitmarketing-liberty-demo_Free/150772938/web/assets/images/team3.jpg" alt="Sales Marketing" className="blog-card-img" />
                <div className="card-body blog-card-body">

                  <h5 className="dark " style={{textAlign:"center"}}>
                    <a href="#" className="text-decoration-none" style={{color:"black"}}>
                     Gambria Rich
                    </a>
                  </h5>
                </div>
              </div>
            </div>

            <div className="col-lg-3   col-md-6">
              <div className="card blog-card">
                <img src="https://p.w3layouts.com/demos_new/template_demo/09-02-2022/digitmarketing-liberty-demo_Free/150772938/web/assets/images/team4.jpg" className="blog-card-img" />
                <div className="card-body blog-card-body">

                  <h5 className="dark" style={{textAlign:"center"}}>
                    <a href="#" className="text-decoration-none " style={{color:"black"}}  >
                      Laura Carl
                    </a>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLOG ENDS */}
      <Footer />
    </div>
  )
}

export default AboutUs
