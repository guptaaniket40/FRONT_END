import React, { useEffect, useState } from 'react'
import AHeader from '../Acomman/AHeader'
import Navdata from '../Acomman/Navdata'
import axios from 'axios'

function Blogmanage() {
    const [Blog, setBlog] = useState([])

    useEffect(() => {
        Fetchdata()
    }, [])

    const Fetchdata = async () => {
        const res = await axios.get("http://localhost:3000/blog")
        console.log(res.data)
        setBlog(res.data)
    }

    const [Blogdata, setBlogdata] = useState({
        id: "",
        title: "",
        desc: "",
        comment: "",
        name: "",
        date: "",
        image: "",
    })

    const getdata = async (id) => {
        const res = await axios.get(`http://localhost:3000/blog/${id}`)
        console.log(res.data)
        setBlogdata(res.data)
    }

    const delproduct = async (id) => {
        const res = await axios.delete(`http://localhost:3000/blog/${id}`)
        console.log(res.data)
        Fetchdata()
    }

    //update data
    const [Blogupdate, setBlogupdate] = useState(null)
    const [updateBlog, setupdateBlog] = useState({

        id: "",
        title: "",
        desc: "",
        comment: "",
        name: "",
        date: "",
        image: "",

    })
    const openmodel = (id) => {
        setBlogupdate(id)
        setupdateBlog(id)
    }

    const datachange = (e) => {
        setupdateBlog({
            ...updateBlog,
            [e.target.name]: e.target.value
        })
        console.log(updateBlog)
    }

    const updatedata = async (e) => {
        e.preventDefault()
        const res = await axios.put(`http://localhost:3000/blog/${updateBlog.id}`, updateBlog)
        console.log(res.data)
        Fetchdata()
        setupdateBlog({
            id: "",
            title: "",
            desc: "",
            comment: "",
            name: "",
            date: "",
            image: "",


        })
        setBlogupdate(null)
    }
    return (
        <div>
            <AHeader />
            <Navdata title="Blogmanage" name="Blog" />
            <h1 className='text-center'> Hello this is blog manage</h1>
            <table className="table table-dark table-hover container">
                <thead>
                    <tr className='text-center'>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Comment</th>
                        <th scope="col">Date</th>
                        <th scope="col">Desc</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Blog && Blog.map((data, index) => {
                            console.log(data)
                            return (
                                <tr className='text-center' key={data.id || index}>
                                    <th>{data.id}</th>
                                    <td>{data.name}</td>
                                    <td>{data.comment}</td>
                                    <td>{data.date}</td>
                                    <td>{data.desc}</td>
                                    <td>
                                        <button
                                            className='btn btn-info'
                                            data-bs-toggle="modal"
                                            data-bs-target="#exampleModal"
                                            onClick={() => getdata(data.id)}
                                        >
                                            View
                                        </button>
                                        <button className='btn btn-success mx-3' onClick={() => openmodel(data)}>Edit</button>
                                        <button
                                            className='btn btn-danger'
                                            onClick={() => delproduct(data.id)}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            )   
                        })
                    }
                </tbody>
            </table>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Blog Details</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="col-lg-12 wow fadeInUp" data-wow-delay="0.1s">
                                <div className="blog-item">
                                    <div className="blog-img">
                                        <img src={Blogdata.image} className="img-fluid rounded-top w-100" alt="Blog Image" />
                                    </div>
                                    <div className="blog-content rounded-bottom p-4">
                                        <div className="blog-date">{Blogdata.date}</div>
                                        <div className="blog-comment my-3">
                                            <div className="small">
                                                <span className="fa fa-user text-primary" />
                                                <span className="ms-2">{Blogdata.name}</span>
                                            </div>
                                            <div className="small">
                                                <span className="fa fa-comment-alt text-primary" />
                                                <span className="ms-2">{Blogdata.comment}</span>
                                            </div>
                                        </div>
                                        <a href="#" className="h4 d-block mb-3">{Blogdata.title}</a>
                                        <p className="mb-3">{Blogdata.desc}</p>
                                        <a href="#" className="">Read More <i className="fa fa-arrow-right" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
            {
                Blogupdate && (
                    <div className="bg-secondary p-5 rounded">
                        <h4 className="text-primary mb-4">Blog update data</h4>
                        <form>
                            <div className="row g-4">
                                <div className="col-lg-12 col-xl-6">
                                    <div className="form-floating">
                                        <input type="text" value={updateBlog && updateBlog.name} name='name' onChange={datachange} className="form-control" id="name" placeholder="Your Name" />
                                        <label htmlFor="name">Your Name</label>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-xl-6">
                                    <div className="form-floating">
                                        <input type="date" value={updateBlog && updateBlog.date} name='date' onChange={datachange} className="form-control" id="email" placeholder="Your Email" />
                                        <label htmlFor="email">Date</label>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-xl-6">
                                    <div className="form-floating">
                                        <input type="text" value={updateBlog && updateBlog.image} name='image' onChange={datachange} className="form-control" id="phone" placeholder="Image" />
                                        <label htmlFor="phone">Your Image</label>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-xl-6">
                                    <div className="form-floating">
                                        <input type="text" value={updateBlog && updateBlog.comment} name='comment' onChange={datachange} className="form-control" id="project" placeholder="Comment" />
                                        <label htmlFor="project">Your Comment</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-floating">
                                        <input type="text" value={updateBlog && updateBlog.title} name='title' onChange={datachange} className="form-control" id="subject" placeholder="Title" />
                                        <label htmlFor="subject">Title</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-floating">
                                        <textarea className="form-control" value={updateBlog && updateBlog.desc} name='desc' onChange={datachange} placeholder="Enter Desc" id="message" style={{ height: 160 }} defaultValue={""} />
                                        <label htmlFor="message">desc</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className='row'>
                                        <div className='col-md-6'>
                                            <button className="btn btn-light w-100 py-3" onClick={updatedata}>update Blog</button>
                                        </div>
                                        <div className='col-md-6'>
                                            <button className="btn btn-light w-100 py-3" onClick={() => setBlogupdate(null)}>Cancel Blog</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                )
            }
        </div>
    )
}

export default Blogmanage