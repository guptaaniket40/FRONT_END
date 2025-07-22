import React, { useContext } from 'react';
import MyContext from '../Context/MyContext';
import { MDBIcon, MDBTooltip } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';


function AddUser() {

  //data store reference
  const context = useContext(MyContext);

  const { user, setuser, addUser } = context;

  const setUser = (e) => {
    setuser({
      ...user, [e.target.name]: e.target.value
    })
  }

  return (
    <div className="container w-75">

      <form>
        <div className="d-flex align-items-center mt-2 mb-3">
          <MDBTooltip tag="span" title="Go back to View page">
            <Link to="/" className="me-4">
              <MDBIcon fas color='body' icon="arrow-left" size="2x" />
            </Link>
          </MDBTooltip>
          <h1 className='m-0' style={{ fontSize: "36px" }}>Add new User</h1>
        </div>
        <div className="mb-3">
          <label htmlFor="name" className="form-label mb-0">Full name</label>
          <input type="text" value={user.name} onChange={setUser} className="form-control form-control-lg " id="name" name='name' />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label mb-0">Email address</label>
          <input type="email" value={user.email} onChange={setUser} className="form-control form-control-lg" id="email" name='email' />
        </div>
        <div className="mb-3">
          <label htmlFor="image" className="form-label mb-0">Image URL</label>
          <div className="d-flex align-items-center gap-5">
            <input type="url" value={user.image} onChange={setUser} className="form-control form-control-lg me-3" id="image" name="image" style={{ width: "85%" }} />
            {user.image && (
              <img src={user.image} alt="preview" style={{ width: 80, height: 80, objectFit: "cover", border: "2px solid #ccc" }} />
            )}
          </div>


        </div>
        <div className="mb-3">
          <label htmlFor="jobTitle" className="form-label mb-0">Job Title</label>
          <input type="text" value={user.jobTitle} onChange={setUser} className="form-control form-control-lg" id="jobTitle" name='jobTitle' />

        </div>
        <div className="mb-3">
          <label htmlFor="department" className="form-label mb-0">Department</label>
          <input type="text" value={user.department} onChange={setUser} className="form-control form-control-lg" id="department" name='department' />
        </div>

        <div className="mb-3">
          <div className="d-flex justify-content-start mb-4" style={{ gap: '10%' }} >
            <div className="d-flex flex-column" style={{ width: '30%' }}>
              <label htmlFor="position" className="form-label mb-0">Select your position</label>
              <select value={user.position} onChange={setUser} name='position' id='position' className="form-select form-select-lg" >
                <option value="" disabled>Select Position</option>
                <option value="Trainee">Trainee</option>
                <option value="Senior">Senior</option>
                <option value="Junior">Junior</option>
              </select>
            </div>

            <div className="d-flex flex-column" style={{ width: '30%' }}>
              <label htmlFor="status" className="form-label mb-0">Select your current status</label>
              <select value={user.status} onChange={setUser} name='status' id='status' className="form-select form-select-lg" >
                <option value="" disabled>Select Status</option>
                <option value="Onboarding">Onboarding</option>
                <option value="Active">Active</option>
                <option value="Awaiting">Awaiting</option>
              </select>
            </div>
          </div>
        </div>

        <button type="submit" onClick={(e) => { e.preventDefault(); addUser(); }} className="btn btn-primary" style={{ fontSize: "20px" }}>Submit</button>
      </form>
    </div>
  );
}

export default AddUser;