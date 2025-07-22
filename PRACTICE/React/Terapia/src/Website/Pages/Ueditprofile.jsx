import React, { useState, useEffect } from 'react'
import { toast } from 'react-toastify';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Ueditprofile() {
    const redirect = useNavigate()

    const [form, setform] = useState({
        id: "",
        name: "",
        email: "",
        password: "",
        status: ""
    })

    const getdata = async () => {
        try {
            const res = await axios.get(`http://localhost:3000/user/${localStorage.getItem("Uid")}`)
            setform(res.data)
        } catch (error) {
            console.error("Error fetching user data:", error)
            toast.error("Failed to load user data")
        }
    }

    useEffect(() => {
        getdata()
    }, [])

    const getchange = (e) => {
        setform({
            ...form,
            [e.target.name]: e.target.value
        })
        console.log(form)
    }

    const getsubmit = async (e) => {
        e.preventDefault();

        if (!form.email.trim() || !form.password.trim() || !form.name.trim()) {
            console.log("Please fill all required fields...!")
            toast.error("Please fill all required fields")
            return false
        }

        try {
            const res = await axios.put(`http://localhost:3000/user/${localStorage.getItem("Uid")}`, form)
            console.log(res.data)
            localStorage.setItem("Uname", res.data.name)
            redirect("/")
            toast.success("Profile updated successfully!")
        } catch (error) {
            console.error("Error updating profile:", error)
            toast.error("Failed to update profile. Please try again.")
        }
    }

    return (
        <div>
            <form onSubmit={getsubmit}>
                <section className="vh-100" style={{ backgroundColor: '#508bfc' }}>
                    <div className="container py-5 h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                                <div className="card shadow-2-strong" style={{ borderRadius: '1rem' }}>
                                    <div className="card-body p-5 text-center">
                                        <h3 className="mb-5">Update Profile</h3>

                                        <div data-mdb-input-init className="form-outline mb-4">
                                            <input value={form.name} onChange={getchange} name='name' type="text" id="typeNameX-2" className="form-control form-control-lg" />
                                            <label className="form-label" htmlFor="typeNameX-2">Name</label>
                                        </div>
                                        <div data-mdb-input-init className="form-outline mb-4">
                                            <input value={form.email} onChange={getchange} name='email' type="email" id="typeEmailX-2" className="form-control form-control-lg" />
                                            <label className="form-label" htmlFor="typeEmailX-2">Email</label>
                                        </div>
                                        <div data-mdb-input-init className="form-outline mb-4">
                                            <input value={form.password} onChange={getchange} name='password' type="password" id="typePasswordX-2" className="form-control form-control-lg" />
                                            <label className="form-label" htmlFor="typePasswordX-2">Password</label>
                                        </div>
                                        {/* Checkbox */}
                                        <div className="form-check d-flex justify-content-start mb-4">
                                            <input className="form-check-input" type="checkbox" defaultValue id="form1Example3" />
                                            <label className="form-check-label" htmlFor="form1Example3"> Remember password </label>
                                        </div>
                                        <button data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-lg btn-block" type="submit">Update</button>
                                        <hr className="my-4" />

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </form>
        </div>
    )
}

export default Ueditprofile