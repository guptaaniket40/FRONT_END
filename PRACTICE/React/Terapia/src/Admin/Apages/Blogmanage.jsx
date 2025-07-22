import React, { useState, useEffect } from 'react'
import Aheader from '../Acomman/Aheader'
import Anav from '../Acomman/Anav'
import axios from 'axios'

function Blogmanage() {
    const [Blog, setBlog] = useState([])

    useEffect(() => {
        Fetchdata()
    }, [])

    const Fetchdata = async () => {
        const res = await axios.get("http://localhost:3000/Blog")
        console.log(res.data)
        setBlog(res.data)
    }

    const [Blogdata, setBlogdata] = useState({
        id: "",
        title: "",
        desc: "",
        image: "",
    })

    const getdata = async (id) => {
        const res = await axios.get(`http://localhost:3000/Blog/${id}`)
        console.log(res.data)
        setBlogdata(res.data)
    }
    const delproduct = async (id) => {
        const res = await axios.delete(`http://localhost:3000/Blog/${id}`)
        console.log(res.data)
        Fetchdata()
    }
    //update data
    const [Blogupdate, setBlogupdate] = useState(null)
    const [updateBlog, setupdateBlog] = useState({

        id: "",
        title: "",
        desc: "",
        date: "",
        comment: "",
        image: "",

    })
    const openmodel = (data) => {
        setBlogupdate(data.id)
        setupdateBlog(data)
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
        const res = await axios.put(`http://localhost:3000/Blog/${updateBlog.id}`, updateBlog)
        console.log(res.data)
        Fetchdata()
        setupdateBlog({
            id: "",
            title: "",
            desc: "",
            date: "",
            comment: "",
            image: "",


        })
        setBlogupdate(null)
    }

    return (
        <div>
            <Aheader />
            <Anav title="Blog manage" name="Blog" />
            <div className="container">
                <h1 className='text-center'> This is a blog manage page...!</h1>
                <table className="table table-dark table-hover container">
                    <thead>
                        <tr className='text-center'>
                            <th scope="col">#Id</th>
                            <th scope="col">title</th>
                            <th scope="col">desc</th>
                            <th scope="col">date</th>
                            <th scope="col">comment</th>
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
                                        <td>{data.title}</td>
                                        <td style={{ width: "450px" }}>{data.desc}</td>
                                        <td>{data.date}</td>
                                        <td>{data.comment}</td>
                                        <td>
                                            <button className='btn btn-success' onClick={() => getdata(data.id)} data-bs-toggle="modal" data-bs-target="#exampleModal">view</button>
                                            <button className='btn btn-info mx-3' onClick={() => openmodel(data)}>Update</button>
                                            <button className='btn btn-danger' onClick={() => delproduct(data.id)}>Delete</button>
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
                                    <div className="service-item">
                                        <div className="service-img">
                                            <img src={Blogdata.image} className="img-fluid rounded-top w-100" alt="Service Image" />
                                        </div>
                                        <div className="service-content rounded-bottom p-4">
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
            </div>
            {
                Blogupdate && (
                    <div className="bg-secondary p-5 rounded">
                        <h4 className="text-primary mb-4">Blog update data</h4>
                        <form>
                            <div className="row g-4">
                                <div className="col-lg-12 col-xl-6">
                                    <div className="form-floating">
                                        <input type="text" value={updateBlog && updateBlog.image} name='image' onChange={datachange} className="form-control" id="phone" placeholder="Image" />
                                        <label htmlFor="phone">Your Image</label>
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