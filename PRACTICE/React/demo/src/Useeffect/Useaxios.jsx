
import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Useaxios() {

    const [user,setuser] = useState([])

    useEffect(()=>{
        fetchdata()
    },[])

    const fetchdata=async()=>{
        const res = await axios.get("https://jsonplaceholder.typicode.com/users")
        // console.log(res.data)
        setuser(res.data)
    }


  return (
    <div className='container'>
    <h1>user table axios data</h1>
    <table className="table">
        <thead>
            <tr>
                <th scope="col">#id</th>
                <th scope="col">name</th>
                <th scope="col">email</th>
                <th scope="col">address</th>
                <th scope="col">company</th>
            </tr>
        </thead>
        <tbody>
           {
                user && user.map((data)=>{
                    console.log(data)
                    const {id,name,email,address,company} = data
                    return(
                        <tr key={id}>
                            <th scope="row">{id}</th>
                            <td>{name}</td>
                            <td>{email}</td>
                            <td>{address.city}</td>
                            <td>{company.name}</td>
                        </tr> 
                    )
                })
           }
        </tbody>
    </table>

</div>
  )
}

export default Useaxios
