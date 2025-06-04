import React, { Component } from 'react'

export class Welcome extends Component {
  render() {
    const Name="Nikhil"
    return (
 
      <div>
        <h1>Welcome To JSX</h1>
        <p>Hello:{Name}</p>

      </div>
    )
  }
}

export default Welcome