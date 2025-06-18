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


function App() {

  return (
    
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about'  element={<About />}/>
       <Route path='/Service'  element={<Service />}/>
        <Route path='/Blog'  element={<Blog />}/>
         <Route path='/Contact'  element={<Contact />}/>
          <Route path='/Features'  element={<Features />}/>
           <Route path='/Car'  element={<Car />}/>
            <Route path='/Team'  element={<Team />}/>
               <Route path='/Testimonial'  element={<Testimonial />}/>


            <Route path='*' element={<Notfound/>}/>
     </Routes>
     </BrowserRouter>
    
  )
}

export default App
