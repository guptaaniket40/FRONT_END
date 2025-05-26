 import React,{useState} from 'react'
 import Image from './Image';
 
 
 function Funobject() {
    const[data,setdata]=useState({
        name: "Aniket",
        age: 20,
        count:0,
        image:true
    })
    console.log(data.name)
   return (
     <div>
        <h1>Name:{data.name}</h1>
        <button onClick={()=>setdata({...data,name:"Nikhil"})}> change name</button>
        <h1>age:{data.age}</h1>
         <button onClick={()=>setdata({...data,age:"18"})}> change age</button>
         <h1>count:{data.count}</h1>
        <button onClick={()=>setdata({...data,count:data.count+1})}> increment</button>
        <button onClick={()=>setdata({...data,count:data.count-1})}> decrement</button>
        <button onClick={()=>setdata({...data,image:false})}>hide</button>
        <button onClick={()=>setdata({...data,image:true})}>show</button>
        <button onClick={() => setdata({ ...data,image : !data.image })}>Toggle</button>


        {
            (data.image) ? <Image /> : false
        }
         
       
     </div>
   )
 }
 
 export default Funobject
 