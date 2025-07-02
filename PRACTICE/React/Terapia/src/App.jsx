import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Website/Pages/Home'
import About from './Website/Pages/About'
import Service from './Website/Pages/Services'
import Appointment from './Website/Pages/Appointment'
import Features from './Website/Pages/Features'
import Blog from './Website/Pages/Blog'
import Team from './Website/Pages/Team'
import Testimonial from './Website/Pages/Testimonial'
import Notfound from './Website/Pages/Notfound'
import Contact from './Website/Pages/Contact'
import Dashboard from './Admin/Apages/Dashboard'
import Servicemanage from './Admin/Apages/Servicemanage'
import Serviceadd from './Admin/Apages/Serviceadd'
function App() {
  return (
    <BrowserRouter>

    <div>
      <Routes>
        <Route path='/'element={<Home/>}/>
        <Route path='/About'element={<About/>}/>
        <Route path='/Service'element={<Service/>}/> 
        <Route path='/Appointment'element={<Appointment/>}/>
        <Route path='/Features'element={<Features/>}/>
        <Route path='/Blog'element={<Blog/>}/>
        <Route path='/Team'element={<Team/>}/>
        <Route path='/Testimonial'element={<Testimonial/>}/>
        <Route path='/Contact'element={<Contact/>}/>

         <Route path='*'element={<Notfound/>}/>
         {/* admin */}
         <Route path='Dashboard'element={<Dashboard/>}/>
         <Route path='Servicemanage' element={<Servicemanage/>}/>
         <Route path='Serviceadd'element={<Serviceadd/>}/>
      </Routes>

      
       
      
      
    </div>
     </BrowserRouter>
  )
}

export default App
 