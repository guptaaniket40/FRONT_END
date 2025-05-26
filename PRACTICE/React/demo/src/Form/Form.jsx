import React, { useState } from 'react'

function Form() {
    const [name, setName] =useState('');
    const[email,setemail]=useState("");
    const[phone,setphone]=useState("");
  return (
    <div>
        <div className='container'>
            <form>
                <label>Name</label>
                <input type='text'placeholder='Enter your name'  onChange={(e)=>setName(e.target.value)}  value={name}  required/>  <br/>
                <label>Email</label>
                <input type='email' placeholder='Enter your email'onChange={(e)=>setemail(e.target.value)}value={email}required/><br/>
                <label>phone </label>
                <input type='tel' placeholder='Enter your phone no' onChange={(e)=>setphone (e.target.value)}value={phone }/><br/>
                <button>submit</button>
            </form>

        </div>
      
    </div>
  ) 
}

export default Form
