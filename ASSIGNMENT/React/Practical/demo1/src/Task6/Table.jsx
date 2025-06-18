import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Table() {

  const [data, setdata] = useState([])

  useEffect(() => {
    fetchdata()

  }, [])


  const fetchdata = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users")
    // console.log(res.data)
    setdata(res.data)
  }
  console.log(data)

  return (
    <div>

      <table>
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">name</th>
            <th scope="col">Email</th>
             
          </tr>
        </thead>
       <tbody>
          {
            data && data.map((user, index) => {
              console.log(user)
              const {id,name,email} = user
              return (
                <tr key={index}>
                  <th scope="row">{id}</th>
                  <td>{name}</td>
                  <td>{email}</td>
                   
                </tr>
              )
            })
          }
        </tbody>
      </table>

    </div>
  )
}

export default Table