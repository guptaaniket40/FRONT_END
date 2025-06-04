import React from 'react'

function Form() {
  return (
    <div>
     

<form style={{width: '26rem',margin:"0 auto",border:"2px solid"}}>
  <div data-mdb-input-init className="form-outline mb-4">
    <input type="text" id="form4Example1" className="form-control" />
    <label className="form-label" htmlFor="form4Example1">Name</label>
  </div>
  <div data-mdb-input-init className="form-outline mb-4">
    <input type="email" id="form4Example2" className="form-control" />
    <label className="form-label" htmlFor="form4Example2">Email address</label>
  </div>
  <div data-mdb-input-init className="form-outline mb-4">
    <textarea className="form-control" id="form4Example3" rows={4} defaultValue={""} />
    <label className="form-label" htmlFor="form4Example3">Message</label>
  </div>
  <div className="form-check d-flex justify-content-center mb-4">
    <input className="form-check-input me-2" type="checkbox" defaultValue id="form4Example4" defaultChecked />
    <label className="form-check-label" htmlFor="form4Example4">
      Send me a copy of this message
    </label>
  </div>
  <button data-mdb-ripple-init type="button" className="btn btn-primary btn-block mb-4">Send</button>
</form>

    </div>
  )
}

export default Form
