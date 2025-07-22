import React, { useState } from 'react'
import { useEffect } from 'react';
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBIcon,
    MDBCheckbox
}
    from 'mdb-react-ui-kit';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function UserLoginPage() {
    const redirect = useNavigate()

    useEffect(() => {
        if (localStorage.getItem("Uid")) {
            redirect("/")
        }
    }, [])

    const [form, setform] = useState({
        email: "",
        password: "",
    })

    const getchange = (e) => {
        setform({
            ...form,
            [e.target.name]: e.target.value
        })
        console.log(form)
    }

    const getsubmit = async (e) => {
        e.preventDefault()

        try {
            const { email, password } = form

            if (!email.trim() || !password.trim()) {
                console.log("Please fill all required fields...!")
                toast.error("Please fill all required fields...!")
                return false
            }

            // Check if user exists
            const res = await axios.get(`http://localhost:3000/user?email=${email}`)
            console.log(res.data)

            if (res.data.length === 0) {
                console.log("Email not found")
                toast.error("Email not found")
                return false
            }

            let user = res.data[0]

            // Check password
            if (user.password !== password) {
                console.log("Incorrect password...!")
                toast.error("Incorrect password...!")
                return false
            }

            // Store user data
            localStorage.setItem("Uid", user.id)
            localStorage.setItem("Uname", user.name)
            redirect("/")

            console.log("Login successful...!")
            toast.success("Login successful...!")

        } catch (error) {
            console.log("API error...", error)
            toast.error("Login failed. Please try again later.")
        }
    }

    return (
        <div>
            <MDBContainer fluid>
                <MDBRow className='d-flex justify-content-center align-items-center h-100'>
                    <MDBCol col='12'>
                        <form action='' onSubmit={getsubmit}>
                            <MDBCard className='bg-white my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '500px' }}>
                                <MDBCardBody className='p-5 w-100 d-flex flex-column'>
                                    <h2 className="fw-bold mb-2 text-center">User Login</h2>
                                    <p className="text-white-50 mb-3">Please enter your email and password!</p>

                                    <MDBInput
                                        value={form.email}
                                        name='email'
                                        onChange={getchange}
                                        wrapperClass='mb-4 w-100'
                                        label='Email address'
                                        id='formControlLg'
                                        type='email'
                                        size="lg"
                                    />
                                    <MDBInput
                                        value={form.password}
                                        name='password'
                                        onChange={getchange}
                                        wrapperClass='mb-4 w-100'
                                        label='Password'
                                        id='formControlLg'
                                        type='password'
                                        size="lg"
                                    />

                                    <MDBCheckbox name='flexCheck' id='flexCheckDefault' className='mb-4' label='Remember password' />

                                    <MDBBtn size='lg' type='submit'>
                                        Login
                                    </MDBBtn>

                                    <p className="text-center mt-3">
                                        Don't have an account? <a href="/Register">Register here</a>
                                    </p>
                                </MDBCardBody>
                            </MDBCard>
                        </form>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </div>
    )
}

export default UserLoginPage