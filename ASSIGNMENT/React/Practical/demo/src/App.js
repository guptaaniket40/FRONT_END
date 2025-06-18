 import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import Table from './Task6/Table';
import Que2 from './Task7/Que2';
import Task8que1 from './Task8/Task8 que1';
import Task8que2 from './Task8/Task8 que2';
import Task9que1 from './Task9/Task9que1';
import Task9que2 from './Task9/Task9que2';

//import Task from './Task1/Task';
//import Welcome from './Task2/Welcome';
//import Funcomponent from './Task3/Funcomponent';
//import Maincomponent from './Task3/Maincomponent';
//import WelcomeMessage from './Task3/Welcome message';
//import Classprops from './Task4/Classprops';
//import Counter from './Task4/Counter';
//import Mainprops from './Task4/Mainprops';
// import Table from './Task6/Table';
//import Que1 from './Task7/Que1';
// import Home from './Task5/Pages/Home';
// import About from './Task5/Pages/About';
// import Contact from './Task5/Pages/Contact';
// import Help from './Task5/Pages/Help';
 

function App() {
  return (
    
    <BrowserRouter>
     <div className="App">
{/* 
      { <Task/>}
       { <Welcome/>}
        { <Funcomponent/>}
         { <Maincomponent/>}
          { <WelcomeMessage/>}
           { <Classprops/>}
            { <Counter/>}
             { <Mainprops/>}
               { <Que1/>} */}
              {/* { <Table/>} */}
              {/* {<Que2/>} */}
              {<Task8que1/>}
              {<Task8que2/>}
               {<Task9que1/>}
               {<Task9que2/>}
               


               {/* <Routes>
                <Route path='/'element={<Home/>}/>
                 <Route path='/About' element={<About/>}/>
                 <Route path='/Contact' element={<Contact/>}/>
                 <Route path='/Help' element={<Help/>}/>
                   
               </Routes> */}


     </div>





    </BrowserRouter>
  
     
    
  );
}

export default App;
