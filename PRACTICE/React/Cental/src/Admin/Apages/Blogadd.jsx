import React, { useState } from 'react'
import AHeader from '../Acomman/AHeader'
import Navdata from '../Acomman/Navdata'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Blogadd() {

    const redirect = useNavigate()
    const [form, setform] = useState({
        id: "",
        title: "",
        desc: "",
        comment: "",
        name: "",
        date: "",
        image: "",

    })
    //handling form
    const getchange = (e) => {
        setform({
            ...form,

            id: new Date().getTime().toString(),
            [e.target.name]: e.target.value
        })
        console.log(form)
    }
    //submitform
    const submitform = async (e) => {
        e.preventDefault()

        const res = await axios.post("http://localhost:3000/blog", form)
        console.log(res.data)
        redirect("/Blogmanage")

        setform({
            id: "",
            title: "",
            desc: "",
            comment: "",
            name: "",
            date: "",
            image: "",

        })
    }


    return (
        <>
            <AHeader />
            <Navdata title="Blogadd" name="Blogadd" />
            <div className='container py-5'>
                <div className="bg-secondary p-5 rounded">
                    <h4 className="text-primary mb-4">Send Your Message</h4>
                    <form on onSubmit={submitform}>
                        <div className="row g-4">
                            <div className="col-lg-12 col-xl-6">
                                <div className="form-floating">
                                    <input type="text" value={form.name} name='name' onChange={getchange} className="form-control" id="name" placeholder="Your Name" />
                                    <label htmlFor="name">Your Name</label>
                                </div>
                            </div>
                            <div className="col-lg-12 col-xl-6">
                                <div className="form-floating">
                                    <input type="date" value={form.date} name='date' onChange={getchange} className="form-control" id="email" placeholder="Your Email" />
                                    <label htmlFor="email">Date</label>
                                </div>
                            </div>
                            <div className="col-lg-12 col-xl-6">
                                <div className="form-floating">
                                    <input type="text" value={form.image} name='image' onChange={getchange} className="form-control" id="phone" placeholder="Image" />
                                    <label htmlFor="phone">Your Image</label>
                                </div>
                            </div>
                            <div className="col-lg-12 col-xl-6">
                                <div className="form-floating">
                                    <input type="text" value={form.comment} name='comment' onChange={getchange} className="form-control" id="project" placeholder="Comment" />
                                    <label htmlFor="project">Your Comment</label>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-floating">
                                    <input type="text" value={form.title} name='title' onChange={getchange} className="form-control" id="subject" placeholder="Title" />
                                    <label htmlFor="subject">Title</label>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-floating">
                                    <textarea className="form-control" value={form.desc} name='desc' onChange={getchange} placeholder="Enter Desc" id="message" style={{ height: 160 }} defaultValue={""} />
                                    <label htmlFor="message">desc</label>
                                </div>
                            </div>
                            <div className="col-12">
                                <button className="btn btn-light w-100 py-3">Add Blog</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Blogadd
