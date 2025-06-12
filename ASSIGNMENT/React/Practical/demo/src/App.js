import React from "react";
import Home from "./Task5/Pages/Home";
import { BrowserRouter, Routes, Route } from "react-browser-router";
import Table from "./Task6/Table";
// import Task from "./Task1/Task";
// import Welcome from "./Task2/Welcome";
// import Funcomponent from "./Task3/Funcomponent";
// import Maincomponent from "./Task3/Maincomponent";
// import WelcomeMessage from "./Task3/Welcome message";
// import Classprops from "./Task4/Classprops";
// import Counter from "./Task4/Counter";
// import Mainprops from "./Task4/Mainprops";
 
 

function App() {
    return (
          <BrowserRouter>
          <div>
            {/* <Task/>
            <Welcome/>
            {/* <Funcomponent/> */}
             {/* { <Maincomponent /> }
              { <WelcomeMessage /> }
               {/* { <Classprops /> } */}
                {/* { <Counter /> } */}
                   {/* { <Mainprops /> } */} 
                     { <Table />  } 
                   
                
                 
            <Routes>
                <Route  path="/" element={<Home />}/> 
                 <Route  path="/About" element={<About/>}/> 
                  <Route  path="/Contactus" element={<Contact/>}/> 
                   
                 
            </Routes>




    


          



         </div>
          </BrowserRouter>
    )
}

export default App;