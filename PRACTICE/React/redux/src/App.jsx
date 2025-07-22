import React from 'react'
import Count from './Features/Counter/Count'
import Count2 from './Features/Counter/Count2'
import Addtodo from './Features/Todo/Addtodo'
import Todolist from './Features/Todo/Todolist'
 

function App() {
  

  return (
    <>
      <div className='App'>
        <h1>Hello this is h1 tag </h1>
        {/* <Count/>
        <Count2/> */}
        <Addtodo/>
        <Todolist/>
         
      </div>
    </>
  )
}

export default App
