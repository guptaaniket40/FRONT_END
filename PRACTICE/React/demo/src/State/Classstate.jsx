import React, { Component } from 'react'
import Image from './Image';

export class Classstate extends Component {
    constructor() {
        super();
        this.state = {
            name: 'aniket',
            count: 0,
            isimage: true,
        }
    }

    render() {
        console.log(this.state.name)
        return (

            <div>
                <h1>name:-{this.state.name}</h1>
                <h2>count:-{this.state.count}</h2>
                <button onClick={() => this.setState({ name: "Nikhil" })}> change name1 </button>
                <button onClick={() => this.setState({ name: "Ansh" })}>Change name2</button>
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>change no </button>
                <button onClick={() => this.setState({isimage:false})}>Hide</button>
                <button className='btn btn-info' onClick={() => this.setState({ isimage: true })}>Show</button>
                <button className='btn btn-primary' onClick={() => this.setState({ isimage: !this.state.isimage })}>Toggle</button>
                {
                    (this.state.isimage) ? <Image /> : false
                }

            </div>
        )
    }
}

export default Classstate
