 import React, { useState, useEffect } from 'react'
import Aheader from '../Acomman/Aheader'
import Anav from '../Acomman/Anav'
import axios from 'axios'

function Teammanage() {
    const [Team, setTeam] = useState([])

    useEffect(() => {
        Fetchdata()
    }, [])

    const Fetchdata = async () => {
        const res = await axios.get("http://localhost:3000/Team")
        console.log(res.data)
        setTeam(res.data)
    }

    const [Teamdata, setTeamdata] = useState({
        id: "",
        Name: "",
        desc: "",
        image: "",
    })

    const getdata = async (id) => {
        const res = await axios.get(`http://localhost:3000/Team/${id}`)
        console.log(res.data)
        setTeamdata(res.data)
    }
    const delproduct = async (id) => {
        const res = await axios.delete(`http://localhost:3000/Team/${id}`)
        console.log(res.data)
        Fetchdata()
    }
    //update data
    const [Teamupdate, setTeamupdate] = useState(null)
    const [updateTeam, setupdateTeam] = useState({

        id: "",
        Name: "",
        desc: "",
        image: "",

    })
    const openmodel = (data) => {
        setTeamupdate(data.id)
        setupdateTeam(data)
    }

    const datachange = (e) => {
        setupdateTeam({
            ...updateTeam,
            [e.target.name]: e.target.value
        })
        console.log(updateTeam)
    }

    const updatedata = async (e) => {
        e.preventDefault()
        const res = await axios.put(`http://localhost:3000/Team/${updateTeam.id}`, updateTeam)
        console.log(res.data)
        Fetchdata()
        setupdateTeam({
            id: "",
            Name: "",
            desc: "",
            image: "",


        })
        setTeamupdate(null)
    }

    return (
        <div>
            <Aheader />
            <Anav title="Team manage" name="Team" />
            <div className="container">
                <h1 className='text-center'> This is a team manage page...!</h1>
                <table className="table table-dark table-hover container">
                    <thead>
                        <tr className='text-center'>
                            <th scope="col">#Id</th>
                            <th scope="col">Name</th>
                            <th scope="col">desc</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Team && Team.map((data, index) => {
                                console.log(data)
                                return (
                                    <tr className='text-center' key={data.id || index}>
                                        <th>{data.id}</th>
                                        <td>{data.Name}</td>
                                        <td>{data.desc}</td>
                                   
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
                                <h5 className="modal-title" id="exampleModalLabel">Team Details</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div className="col-lg-12 wow fadeInUp" data-wow-delay="0.1s">
                                    <div className="service-item">
                                        <div className="service-img">
                                            <img src={Teamdata.image} style={{height:"300px"}} className="img-fluid rounded-top w-100" alt="Service Image" />
                                        </div>
                                        <div className="service-content rounded-bottom p-4">
                                            <a href="#" className="h4 d-block mb-3">{Teamdata.Name}</a>
                                            <p className="mb-3">{Teamdata.desc}</p>
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
                Teamupdate && (
                    <div className="bg-secondary p-5 rounded">
                        <h4 className="text-primary mb-4">Team update data</h4>
                        <form>
                            <div className="row g-4">
                                <div className="col-lg-12 col-xl-6">
                                    <div className="form-floating">
                                        <input type="text" value={updateTeam && updateTeam.image} name='image' onChange={datachange} className="form-control" id="phone" placeholder="Image" />
                                        <label htmlFor="phone">Your Image</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-floating">
                                        <input type="text" value={updateTeam && updateTeam.Name} name='Name' onChange={datachange} className="form-control" id="subject" placeholder="Name" />
                                        <label htmlFor="subject">Name</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-floating">
                                        <textarea className="form-control" value={updateTeam && updateTeam.desc} name='desc' onChange={datachange} placeholder="Enter desc" id="message" style={{ height: 160 }} defaultValue={""} />
                                        <label htmlFor="message">desc</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className='row'>
                                        <div className='col-md-6'>
                                            <button className="btn btn-light w-100 py-3" onClick={updatedata}>update Team</button>
                                        </div>
                                        <div className='col-md-6'>
                                            <button className="btn btn-light w-100 py-3" onClick={() => setTeamupdate(null)}>Cancel Team</button>
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

export default Teammanage