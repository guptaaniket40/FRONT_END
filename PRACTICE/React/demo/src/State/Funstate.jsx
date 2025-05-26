// function state :- hooks
// hooks :- hooks:- it's reuse ,define 
// hooks :- code reduce ;- hooks never use for class.
// Function hooks use
// let [define,setdefine] = useState()
// 1) useState() ;'- state 

import React, { useState } from 'react'
import Image from './Image';


function Funstate() {

    const [name, setname] = useState("Aniket")
    const [age, setage] = useState(20)
    const [isimage, setisimage] = useState(true)



    return (

        <div>
            <h1> hello this is a function state</h1>
            <h1>Name:{name}</h1>
            <button onClick={() => setname("Nikhil")}>change name</button>
            <h1>Age:{age}</h1>
            <button className='btn btn-success' onClick={() => setage(21)}>age</button>

            <button className='btn btn-info' style={{ margin: "5px" }} onClick={() => setisimage(false)}>Hide</button>
            <button className='btn btn-secondary' style={{ margin: "5px" }} onClick={() => setisimage(true)}>show</button>
            <button className='btn btn-primary' onClick={() => setisimage(!isimage)}>Toggle</button>
            <br /> <br />

            {
                (isimage) ? <Image /> : false
            }

        </div>
    )
}

export default Funstate
