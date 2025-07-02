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
import { Await, data, redirect } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function Aloginpage() {
   const redirect = useNavigate()

    useEffect(()=>{
        if(localStorage.getItem("Aid")){
            redirect("/Dashboard")
        }
    },[])

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

      // if(email==""||password){
      //   console.log("pls field required...!")
      //   return false
      // }

      if (!email.trim() || !password.trim()) {
        console.log("pls field required...!")
        toast .error("pls field required...!")
        return false
      }
      //email id match

      const res = await axios.get(`http://localhost:3000/admin?email=${email}`)
      console.log(res.data)

      if (res.data.length === 0) {
        console.log("email id does not match")
        toast .error("email id does not match")
        return false
      }
      let admin =res.data[0]
      //password
      
      if(admin.password!==password){
        console.log("password does not match...!")
        toast .error("password does not match...!")
        return false
      }
      localStorage.setItem("Aid",admin.id)
      localStorage.setItem("Aname",admin.name)
      redirect("/Dashboard")

      console.log("login succesfully...!")
      toast .success("login succesfully...!")

    } catch (error) {
      console.log("Api data not found...", error)

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

                  <h2 className="fw-bold mb-2 text-center">Login Form</h2>
                  <p className="text-white-50 mb-3">Please enter your login and password!</p>

                  <MDBInput value={form.email} name='email' onChange={getchange} wrapperClass='mb-4 w-100' label='Email address' id='formControlLg' type='email' size="lg" />
                  <MDBInput value={form.password} name='password' onChange={getchange} wrapperClass='mb-4 w-100' label='Password' id='formControlLg' type='password' size="lg" />

                  <MDBCheckbox name='flexCheck' id='flexCheckDefault' className='mb-4' label='Remember password' />

                  <MDBBtn size='lg'>
                    Login
                  </MDBBtn>



                </MDBCardBody>
              </MDBCard>
            </form>
          </MDBCol>
        </MDBRow>

      </MDBContainer>
    </div>
  )
}

export default Aloginpage
