import React from "react";
import Home from "./Task5/Pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Table from "./Task6/Table";
import About from "./Task5/Pages/About";
import Contact from "./Task5/Pages/Contact";
import Help from "./Task5/Pages/Help";
import Que1 from "./Task7/Que1";
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
                     {/* { <Table />  }  */}
                     {<Que1/>}
                   
                
                 
            <Routes>
                <Route  path="/" element={<Home />}/> 
                <Route  path="/About" element={<About/>}/>
                <Route  path="/Contact" element={<Contact/>}/> 
                <Route  path="/Help" element={<Help/>}/> 


                                   
            </Routes>




    


          



         </div>
          </BrowserRouter>
    )
}

export default App;