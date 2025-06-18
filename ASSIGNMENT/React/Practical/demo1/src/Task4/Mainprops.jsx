 
import React from 'react'
import Classprops from './Classprops'
import Counter from './Counter'

function Mainprops() {
  return (
    <div>
        <div className='container'>
            <div className='row'>
                <Classprops name="Aniket" age="19" location="Ahmedabad " />
                 
            </div>

        </div>

        <Counter />


      
    </div>
  )
}

export default Mainprops
