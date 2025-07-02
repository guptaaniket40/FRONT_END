import React from 'react'
import { useState } from 'react'
import Aheader from '../Acomman/Aheader'
import Anav from '../Acomman/Anav'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Serviceadd() {
    const redirect = useNavigate()
    const [form, setform] = useState({
        id: "",
        title: "",
        desc: "",
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

        const res = await axios.post("http://localhost:3000/service", form)
        console.log(res.data)
        redirect("/Servicemanage")

        setform({
            id: "",
            title: "",
            desc: "",
            image: "",

        })
    }
    return (
        <div>
            <Aheader />
            <Anav title="Serviceadd"name="Serviceadd"/>
            <div className="col-md-12 " data-wow-delay="0.1s">

                <div className='pt-5'>
                    <h1 className='mt-3 mb-5 text-center'>Contact us</h1>

                    <form className='container-fluid contact mt-2 mb-4' onSubmit={submitform}>
                        <div className="row g-3">
                            <div className="col-lg-12">
                                <div className="form-floating">
                                    <input type="text" value={form.title}name='title'onChange={getchange} className="form-control bg-transparent border border-white" id="name" placeholder="Your Name" />
                                    <label className='text-dark' htmlFor="name">Your Title</label>
                                </div>
                            </div>
                             
                             
                             
                            <div className="col-12">
                                <div className="form-floating">
                                    <input type="url" value={form.image}name='image' onChange={getchange} className="form-control bg-transparent border border-white" id="subject" placeholder="Subject" />
                                    <label className='text-dark' htmlFor="image">Your image url</label>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-floating">
                                    <textarea className="form-control bg-transparent border border-white" value={form.desc}name='desc'onChange={getchange} placeholder="Leave a message here" id="message" style={{ height: 160 }} defaultValue={""} />
                                    <label className='text-dark' htmlFor="message">your desc</label>
                                </div>
                            </div>
                            <div className="col-12">
                                <button className="btn btn-light text-primary w-100 py-3 fs-4" >Add service</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Serviceadd
