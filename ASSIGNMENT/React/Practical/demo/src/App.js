import React from "react";
import Task from "./Task1/Task";
import Welcome from "./Task2/Welcome";
import Funcomponent from "./Task3/Funcomponent";
import Maincomponent from "./Task3/Maincomponent";
import WelcomeMessage from "./Task3/Welcome message";
import Classprops from "./Task4/Classprops";
import Counter from "./Task4/Counter";
import Mainprops from "./Task4/Mainprops";
 
 

function App() {
    return (
         <div>
            <Task/>
            <Welcome/>
            {/* <Funcomponent/> */}
             { <Maincomponent /> }
              { <WelcomeMessage /> }
               {/* { <Classprops /> } */}
                {/* { <Counter /> } */}
                   { <Mainprops /> }



    


          



         </div>
    )
}

export default App;