import React from 'react'
import Aheader from '../Acomman/Aheader'
import Anav from '../Acomman/Anav'

function Dashboard() {
    return (
        <div>
            <Aheader />
            <Anav title="Dashboard" name="Dashboard" />
            <div className="container">
                <h1 className='text-center'> This is a dashboard page..!</h1>
            </div>
            </div>
    )
}

export default Dashboard
