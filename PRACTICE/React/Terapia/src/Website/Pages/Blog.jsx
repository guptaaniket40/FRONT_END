import React, { useEffect, useState } from 'react'
import Header from '../Comman/Header'
import Navb from '../Comman/Navb'
import Footer from '../Comman/Footer'
import axios from 'axios'


function Blog() {
  const [Blog, setBlog] = useState([])
  useEffect(() => {
    Fetchdata()

  }, [])
  const Fetchdata = async () => {
    const response = await axios.get('http://localhost:3000/Blog ')
    console.log(response.data)
    setBlog(response.data)
  }
  return (
    <div>
      <Header />
      <Navb title="Our Blog" name="Blogs" />
      {/* Blog Start */}
      <div className="container-fluid blog py-5">
        <div className="container py-5">
          <div className="section-title mb-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="sub-style">
              <h4 className="sub-title px-3 mb-0">Our Blog</h4>
            </div>
            <h1 className="display-3 mb-4">Excellent Facility and High Quality Therapy</h1>
            <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat deleniti amet at atque sequi quibusdam cumque itaque repudiandae temporibus, eius nam mollitia voluptas maxime veniam necessitatibus saepe in ab? Repellat!</p>
          </div>
          <div className="row g-4 justify-content-center">

            {
              Blog && Blog.map((data) => {
                return (
                  <div className="col-md-6 col-lg-6 col-xl-4 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="blog-item rounded">
                      <div className="blog-img">
                        <img src={data.image} style={{height:"300px"}} className="img-fluid w-100" alt="Image" />
                      </div>
                      <div className="blog-centent p-4">
                        <div className="d-flex justify-content-between mb-4">
                          <p className="mb-0 text-muted"><i className="fa fa-calendar-alt text-primary" /> {data.date}</p>
                          <a href="#" className="text-muted"><span className="fa fa-comments text-primary" /> {data.comment}</a>
                        </div>
                        <a href="#" className="h4">{data.title}</a>
                        <p className="my-4">{data.desc}</p>
                        <a href="#" className="btn btn-primary rounded-pill text-white py-2 px-4 mb-1">Read More</a>
                      </div>
                    </div>
                  </div>
                )
              })
            }

          </div>
        </div>
      </div>
      {/* Blog End */}
      <Footer />

    </div>
  )
}

export default Blog
