
import React from "react";

//import Classcompo from "./Component/Classcompo";
//import Funcompo from "./Component/Funcompo";
//import Aniket from "./Jsx/Aniket";
//import Nikhil from "./Jsx/Nikhil";
//import Css from "./CSS/Css";
//import Mainprops from "./Props/Mainprops";
//import Classstate from "./State/Classstate";
//import Funstate from "./State/Funstate";
//import Funobject from "./State/Funobject";
//import Mainstate from "./State/Mainstate";
//import Form from "./Form/Form";
//import Formobject from "./Form/Formobject";
//import Useaxios from "./Useeffect/Useaxios";
//import Usedata from "./Useeffect/Usedata";
//import Usetable from "./Useeffect/Usetable";
//import Usecard from "./Useeffect/Usecard";
//import Usetable from "./Useeffect/Usetable";
// import Footerdata from "./Bootstrap/Footerdata";
import Home from "./Layout/Pages/Home";
import { BrowserRouter, Routes , Route } from "react-router-dom";
import Help from "./Layout/Pages/Help";
import About from "./Layout/Pages/About";
import Footer from "./Layout/Common/Footer";
import Contact from "./Layout/Pages/Contact";

 


function App() {
    return (
         <BrowserRouter>
         <div>
            
            {/* <h1>hello this h1</h1> */}

            {/* Compoennt */}
            {/*<Classcompo />*/}
            {/*<Funcompo />*/}

            {/* jsx compo */}
            {/*<Aniket />}
            {<Nikhil />}


            {/* CSS Compoennt */}
            {/* <Css />*/}

            {/* props data */}
            {/*<Mainprops />*/}
            {/*<Classstate/>*/}
            {/*<Funstate/>*/}
            {/* <Mainstate/> */}
            {/* {<Form />} */}
            {/* {<Formobject />} */}
             {/* { <Useaxios /> } */}
            
            {/* {<Usedata/>} */}
            {/* {<Usetable/>} */}
               {/* { <Usetable />}  */}
               {/* {<Footerdata/>} */}
               


               

            <Routes>
                <Route  path="/" element={<Home />} />
                <Route  path="/Help" element={<Help />} />
                <Route  path="/About" element={<About />} />
                 <Route  path="/Contact" element={<Contact />} />
            </Routes>

            





        </div>
         </BrowserRouter>
    )
}

export default App;
