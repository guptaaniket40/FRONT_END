 import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import AddProduct from './pages/Addproduct/Addproduct'
import UpdateProduct from './pages/Updateproduct/Updateproduct'
import MyState from './context/Mystate'

function App() {
  return (
    <MyState>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/addproduct' element={<AddProduct />} />
          <Route path='/updateproduct' element={<UpdateProduct />} />
        </Routes>
      </BrowserRouter>
    </MyState>
  )
}

export default App