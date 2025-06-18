
import React, { Component } from 'react'

export class Classprops extends Component {

    constructor(props) {
        super(props);
        this.data = props;
    }


    render() {
        return (
            <div>
                <div className="card" style={{ width: '18rem' }}>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Name:{this.data.name}</li>
                        <li className="list-group-item">Age:{this.data.age}</li>
                        <li className="list-group-item">Location:{this.data.location}</li>
                    </ul>
                </div>
            </div>

        )
    }
}

export default Classprops
