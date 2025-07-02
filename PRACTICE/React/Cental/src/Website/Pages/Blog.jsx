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
        const response = await axios.get('http://localhost:3000/blog')
        console.log(response.data)
        setBlog(response.data)
    }
    return (
        <div>
            <Header />
            <Navb title="Our Blog" name="Blog" />
            {/* Blog Start */}
            <div className="container-fluid blog py-5">
                <div className="container py-5">
                    <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: 800 }}>
                        <h1 className="display-5 text-capitalize mb-3">Cental<span className="text-primary"> Blog &amp; News</span></h1>
                        <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut amet nemo expedita asperiores commodi accusantium at cum harum, excepturi, quia tempora cupiditate! Adipisci facilis modi quisquam quia distinctio,
                        </p>
                    </div>
                    <div className="row g-4">
                        {
                            Blog && Blog.map((data) => {
                                return (
                                    <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.1s">
                                        <div className="blog-item">
                                            <div className="blog-img">
                                                <img src={data.image} className="img-fluid rounded-top w-100" alt="Image" />
                                            </div>
                                            <div className="blog-content rounded-bottom p-4">
                                                <div className="blog-date">{data.date}</div>
                                                <div className="blog-comment my-3">
                                                    <div className="small"><span className="fa fa-user text-primary" /><span className="ms-2">{data.name}</span></div>
                                                    <div className="small"><span className="fa fa-comment-alt text-primary" /><span className="ms-2">{data.comment}</span></div>
                                                </div>
                                                <a href="#" className="h4 d-block mb-3">{data.title}</a>
                                                <p className="mb-3">{data.desc}</p>
                                                <a href="#" className>Read More  <i className="fa fa-arrow-right" /></a>
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
