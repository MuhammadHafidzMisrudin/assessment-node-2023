import axios from 'axios';
import React, { useState } from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';

function UpdateUserFreelancer(props) {

    /* 
        initialise location using useLocation router to get the data passed as props 
        from Freelancer component.
    */
    const location = useLocation();
    const state = location.state;
    console.log("state: ", state);

    // initialize state variables and assign them with passed data.
    const [username, setUsername] = useState(state.username);
    const [email, setEmail] = useState(state.email);
    const [phonenumber, setPhonenumber] = useState(state.phonenumber);
    const [skillsets, setSkillsets] = useState(state.skillsets);
    const [hobby, setHobby] = useState(state.hobby);
    const { id } = useParams(); // initialise to get and pass id to the url.

    // initialise navigate object.
    const navigate = useNavigate();

    // event handler to update data to the backend for update - @PUT.
    // redirect to root.
    function handleSubmit(event) {
        event.preventDefault();
        axios.put('http://localhost:8081/update/' + id, { username, email, phonenumber, skillsets, hobby })
            .then(response => {
                console.log(response);
                navigate('/');
            }).catch(error => console.log(error));
    }

    return (
        <div className='container-fluid d-flex vh-100 text-bg-info justify-content-center align-items-center'>
            <div className='container w-60 bg-white rounded p-3'>
                <form onSubmit={handleSubmit} className='needs-validation'>
                    <p className='h2 text-center font-weight-bold'>Update User Details</p>
                    <div className="mb-2">
                        <label htmlFor='inputUsername' className='form-label'>Username:</label>
                        <input id='inputUsername' type='text' placeholder='insert username...' className='form-control' value={username}
                            onChange={e => setUsername(e.target.value)} required />
                    </div>
                    <div className="mb-2">
                        <label htmlFor='inputEmail1' className='form-label'>Email:</label>
                        <input id='inputEmail1' type='email' placeholder='insert email...' className='form-control' value={email}
                            onChange={e => setEmail(e.target.value)} required />
                    </div>
                    <div className="mb-2">
                        <label htmlFor='inputPhonenumber' className='form-label'>Phone Number:</label>
                        <input id='inputPhonenumber' type='number' pattern='[0-9]*' placeholder='insert phone number...' className='form-control' value={phonenumber}
                            onChange={e => setPhonenumber(e.target.value)} required />
                    </div>
                    <div className="mb-2">
                        <label htmlFor='inputTextarea1' className='form-label'>Skillsets:</label>
                        <textarea id='inputTextarea1' className='form-control' rows='2' value={skillsets} required onChange={e => setSkillsets(e.target.value)}></textarea>
                    </div>
                    <div className="mb-2">
                        <label htmlFor='inputHobby' className='form-label'>Hobby:</label>
                        <input id='inputHobby' type='text' placeholder='insert hobby...' className='form-control' value={hobby}
                            onChange={e => setHobby(e.target.value)} required />
                    </div>
                    <div className='row'>
                        <div className='col-6'>
                            <button type='submit' className='btn btn-success form-control'>UPDATE</button>
                        </div>
                        <div className='col-6'>
                            <Link to='/' type='button' className='btn btn-dark form-control'>BACK</Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default UpdateUserFreelancer;