import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
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
import Aloginpage from './Admin/Apages/Aloginpage'
import Login from './Website/Pages/Login';
import Register from './Website/Pages/Register';
import Aeditprofile from './Admin/Apages/Aeditprofile';
import Blogmanage from './Admin/Apages/Blogmanage';
import Blogadd from './Admin/Apages/Blogadd';
import Teammanage from './Admin/Apages/Teammanage';
 import Teamadd from './Admin/Apages/Teamadd';
import UserLoginPage from './Website/Pages/Userloginpage';
import Ueditprofile from './Website/Pages/Ueditprofile';



function App() {
  return (
    <BrowserRouter>
      <ToastContainer />

      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Service' element={<Service />} />
          <Route path='/Appointment' element={<Appointment />} />
          <Route path='/Features' element={<Features />} />
          <Route path='/Blog' element={<Blog />} />
          <Route path='/Team' element={<Team />} />
          <Route path='/Testimonial' element={<Testimonial />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Userlogin' element={<UserLoginPage />} />
          <Route path='/Uedit' element={<Ueditprofile />} />

          <Route path='*' element={<Notfound />} />
          {/* admin */}
          <Route path='Dashboard' element={<Dashboard />} />
          <Route path='Servicemanage' element={<Servicemanage />} />
          <Route path='Serviceadd' element={<Serviceadd />} />
          <Route path='/Aloginpage' element={<Aloginpage />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Register'element={<Register/>}/>
          <Route path='/Aeditprofile'element={<Aeditprofile/>}/>
          <Route path='/Blogmanage'element={<Blogmanage/>}/>
          <Route path='/Blogadd'element={<Blogadd/>}/>
          <Route path='/Teammanage'element={<Teammanage/>}/>
          <Route path='/Teamadd'element={<Teamadd/>}/>
          
        </Routes>





      </div>
    </BrowserRouter>
  )
}

export default App
