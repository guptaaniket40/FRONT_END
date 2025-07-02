import React from 'react';
import Home from './Website/Pages/Home';
import About from './Website/Pages/About';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Service from './Website/Pages/Service';
import Features from './Website/Pages/Features';
import Notfound from "./Website/Pages/Notfound";
import Team from "./Website/Pages/Team";
import Testimonial from "./Website/Pages/Testimonial";
import Blog from "./Website/Pages/Blog";
import Contact from './Website/Pages/Contact';
import Car from './Website/Pages/Car';
import Dashboard from './Admin/Apages/Dashboard';
import Blogmanage from './Admin/Apages/Blogmanage';
import Blogadd from './Admin/Apages/Blogadd';
import Aloginpage from './Admin/Apages/Aloginpage';
import { ToastContainer, toast } from 'react-toastify';
import Login from './Website/Pages/login';
import Register from './Website/Pages/Register';

function App() {

   return (
      <>
  
      <BrowserRouter>
      <ToastContainer />
         <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/Service' element={<Service />} />
            <Route path='/Blog' element={<Blog />} />
            <Route path='/Contact' element={<Contact />} />
            <Route path='/Features' element={<Features />} />
            <Route path='/Car' element={<Car />} />
            <Route path='/Team' element={<Team />} />
            <Route path='/Testimonial' element={<Testimonial />} />
            <Route path='/Login'element={<Login/>}/>
            <Route path='/Register'element={<Register/>}/>            


            <Route path='*' element={<Notfound />} />



            {/* admin */}

            <Route path='/Dashboard'element={<Dashboard/>}/>
            <Route path='/Blogmanage'element={<Blogmanage/>}/>
            <Route path='/Blogadd'element={<Blogadd/>}/>
            <Route path='/Aloginpage'element={<Aloginpage/>}/>
            
         </Routes>
      </BrowserRouter>
          </>

   )
}

export default App
