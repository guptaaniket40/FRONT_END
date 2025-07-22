import React, { useContext, useEffect } from 'react';

import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody, MDBContainer, MDBCard, MDBCardBody, MDBInputGroup, MDBIcon, MDBTooltip } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import MyContext from '../Context/MyContext';

function UserTable() {
    const { allUsers, deleteUser, editUserHandler, setuser } = useContext(MyContext)

    //using this to reset the global state variable 
    //whenever the page redirects to current(UserTable) page happens, this will be called
    useEffect(() => {
        setuser({
            department: "",
            email: "",
            image: "",
            jobTitle: "",
            name: "",
            position: "",
            status: ""
        })
    }, []);

    return (
        <div >
            <MDBCard>
                <MDBCardBody className='bg-dark d-flex align-items-center px-5 py-4 rounded-0 justify-content-center'>
                    {/* Logo and Heading */}
                    <div className='d-flex align-items-center gap-5 '>
                        <div>
                            <img src='https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-1024.png' alt='logo' style={{ width: '70px' }} />
                            <img src='https://cdn4.iconfinder.com/data/icons/google-i-o-2016/512/google_firebase-2-1024.png' alt='logo' style={{ width: '80px' }} />
                        </div>

                        <h2 className='text-white mb-0' style={{ width: "60%" }}>CRUD Operations using Firestore Database and Context API</h2>
                    </div>

                    {/* Add User Button */}
                    <div className='d-flex justify-self-start align-items-center'>
                        <Link to="/adduser" style={{
                            display: 'inline-block',
                            padding: '8px 28px',
                            fontSize: '26px',
                            fontWeight: 'bold',
                            color: '#ffffff',
                            backgroundColor: 'transparent',
                            borderRadius: '8px',
                            textDecoration: 'none',
                            boxShadow: '0 0 20px rgba(255, 255, 255, 0.47)',
                        }}>
                            Add New User
                        </Link>
                    </div>
                </MDBCardBody>
            </MDBCard>
            <MDBContainer >

                <MDBTable align='middle' hover >
                    <MDBTableHead>
                        <tr className='fs-5'>
                            <th scope='col'>Sr. no</th>
                            <th scope='col'>Name</th>
                            <th scope='col'>Title</th>
                            <th scope='col'>Status</th>
                            <th scope='col'>Position</th>
                            <th scope='col'>Actions</th>
                        </tr>
                    </MDBTableHead>
                    <MDBTableBody>

                        {allUsers.length > 0 ?
                            allUsers.map((value, index) => {
                                // console.log(value);
                                return (
                                    <tr key={index}>
                                        <td>
                                            <p className='fw-bold mb-1'>{index + 1}</p>
                                        </td>
                                        <td>
                                            <div className='d-flex align-items-center'>
                                                <img src={value.image} alt='' style={{ width: '45px', height: '45px' }} className='rounded-circle' />
                                                <div className='ms-3'>
                                                    <p className='fw-bold mb-1'>{value.name}</p>
                                                    <p className='text-muted mb-0'>{value.email}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <p className='fw-normal mb-1'> {value.jobTitle} </p>
                                            <p className='text-muted mb-0'>{value.department}</p>
                                        </td>
                                        <td>
                                            <MDBBadge color={
                                                value.status === 'Awaiting' ? 'warning' :
                                                    value.status === 'Onboarding' ? 'primary' :
                                                        value.status === 'Active' ? 'success' : 'secondary'
                                            } pill> {value.status}</MDBBadge>
                                        </td>
                                        <td>{value.position}</td>
                                        <td>
                                            <div className="d-flex align-items-center gap-3">
                                                {/* Edit Button */}
                                                <MDBTooltip tag="span" title="Edit this user">
                                                    <button onClick={() => editUserHandler(value)} className='btn btn-success'>Edit</button>
                                                </MDBTooltip>

                                                {/* Separator */}
                                                <div style={{ height: '30px', width: '1px', backgroundColor: '#ccc' }}></div>

                                                {/* Delete Button */}
                                                <MDBTooltip tag="span" title="Delete this user">
                                                    <button onClick={() => deleteUser(value)} className='btn btn-danger'>Delete</button>
                                                </MDBTooltip>
                                            </div>
                                        </td>
                                    </tr>)
                            }) : (
                                <tr>
                                    <td>
                                        <h1 className=' font-bold text-black relative left-[260%]'>No users found. Check the database</h1>
                                    </td>
                                </tr>
                            )}

                    </MDBTableBody>
                </MDBTable>
            </MDBContainer>
        </div>
    );
}

export default UserTable;