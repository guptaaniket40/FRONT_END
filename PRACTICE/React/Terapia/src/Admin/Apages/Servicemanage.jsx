import React, { useState, useEffect } from 'react'
import Aheader from '../Acomman/Aheader'
import Anav from '../Acomman/Anav'
import axios from 'axios'

function Servicemanage() {
    const [Service, setService] = useState([])

    useEffect(() => {
        Fetchdata()
    }, [])

    const Fetchdata = async () => {
        const res = await axios.get("http://localhost:3000/service")
        console.log(res.data)
        setService(res.data)
    }

    const [Servicedata, setServicedata] = useState({
        id: "",
        title: "",
        desc: "",
        image: "",
    })
    const getdata = async (id) => {
        const res = await axios.get(`http://localhost:3000/service/${id}`)
        console.log(res.data)
        setServicedata(res.data)
    }

    return (
        <div>
            <Aheader />
            <Anav title="Service manage" name="Service" />
            <div className="container">
                <h1 className='text-center'> This is a service manage page...!</h1>
                <table className="table table-dark table-hover container">
                    <thead>
                        <tr className='text-center'>
                            <th scope="col">#Id</th>
                            <th scope="col">title</th>
                            <th scope="col">desc</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Service && Service.map((data, index) => {
                                console.log(data)
                                return (
                                    <tr className='text-center' key={data.id || index}>
                                        <th>{data.id}</th>
                                        <td>{data.title}</td>
                                        <td style={{ width: "450px" }}>{data.desc}</td>
                                        <td>
                                            <button className='btn btn-success' onClick={() => getdata(data.id)}
                                            >view</button>
                                            <button className='btn btn-info mx-3' >Update</button>
                                            <button className='btn btn-danger'>Delete</button>

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
            </div>
        </div>
    )
}

export default Servicemanage