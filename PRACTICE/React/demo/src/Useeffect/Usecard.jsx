import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Usecard() {

    const [data, setdata] = useState({})

    useEffect(() => {
        fetchdata()

    }, [])


    const fetchdata = async () => {
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
        setdata(res.data)
        console.log(res.data)
    }

    return (
        <div className='container'>
            <div className="row">
                {
                    data && data.map((posts,index) => {
                        return (
                            <div>
                                <div className="card" style={{ width: '18rem' }}>
                                    
                                    <div className="card-body">
                                        <h5 className="card-title">{posts.title}</h5>
                                        <h5 className="card-title">Card id</h5>

                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Usecard
