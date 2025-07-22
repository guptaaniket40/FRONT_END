 import React from 'react'
import { useState } from 'react'
import Aheader from '../Acomman/Aheader'
import Anav from '../Acomman/Anav'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Teamadd() {
    const redirect = useNavigate()
    const [form, setform] = useState({
        id: "",
        Name: "",
        desc: "",
        image: "",
    })

    // handling form
    const getchange = (e) => {
        setform({
            ...form,
            id: new Date().getTime().toString(),
            [e.target.name]: e.target.value
        })
        console.log(form)
    }

    // submitform
    const submitform = async (e) => {
        e.preventDefault()

        try {
            const res = await axios.post("http://localhost:3000/Team", form)
            console.log(res.data)
            redirect("/Teammanage")

            setform({
                id: "",
                Name: "",
                desc: "",
                image: "",
            })
        } catch (error) {
            console.error("Error submitting form:", error)
        }
    }

    return (
        <div>
            <Aheader />
            <Anav title="Team Add" name="Teamadd" />
            <div className="col-md-12" data-wow-delay="0.1s">
                <div className='pt-5'>
                    <h1 className='mt-3 mb-5 text-center'>Add New Team Member</h1>

                    <form className='container-fluid contact mt-2 mb-4' onSubmit={submitform}>
                        <div className="row g-3">
                            <div className="col-lg-6 col-xl-6">
                                <div className="form-floating">
                                    <input
                                        type="text"
                                        value={form.Name}
                                        name='Name'
                                        onChange={getchange}
                                        className="form-control bg-transparent border border-white"
                                        id="Name"
                                        placeholder="Team Member Name"
                                        required
                                    />
                                    <label className='text-dark' htmlFor="Name">Team Member Name</label>

                                </div>

                            </div>

                            <div className="col-12">
                                <div className="form-floating">
                                    <input
                                        type="url"
                                        value={form.image}
                                        name='image'
                                        onChange={getchange}
                                        className="form-control bg-transparent border border-white"
                                        id="image"
                                        placeholder="Image URL"
                                        required
                                    />
                                    <label className='text-dark' htmlFor="image">Profile Image URL</label>
                                </div>
                            </div>

                            <div className="col-12">
                                <div className="form-floating">
                                    <textarea
                                        className="form-control bg-transparent border border-white"
                                        value={form.desc}
                                        name='desc'
                                        onChange={getchange}
                                        placeholder="Enter team member description..."
                                        id="desc"
                                        style={{ height: 160 }}
                                        required
                                    />
                                    <label className='text-dark' htmlFor="desc">Description</label>
                                </div>
                            </div>

                            <div className="col-12">
                                <button className="btn btn-light text-primary w-100 py-3 fs-4" type="submit">
                                    Add Team Member
                                </button>
                            </div>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default Teamadd