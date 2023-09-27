import axios from 'axios';
import React, { useState } from 'react';
import { Link, redirect } from 'react-router-dom';

function RegisterFreelancer() {

    // initialize state variables.
    const [_username, setUsername] = useState('');
    const [_email, setEmail] = useState('');
    const [_phonenumber, setPhonenumber] = useState('');
    const [_skillsets, setSkillsets] = useState('');
    const [_hobby, setHobby] = useState('');

    // event handler to submit data to the backend - @POST.
    // redirect to root.
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8081/', {_username, _email, _phonenumber, _skillsets, _hobby})
        .then(response => {
            console.log(response);
            redirect('/');
        }).catch(error => {
            console.log(error);
        })
    }
     
    return (
        <div className='d-flex vh-100 text-bg-info justify-content-center align-items-center'>
            <div className='container w-60 bg-white rounded p-3'>
                <form onSubmit={handleSubmit}>
                    <h2>Register New User</h2>
                    <div className="mb-2">
                        <label htmlFor='inputUsername' className='form-label'>Username:</label>
                        <input id='inputUsername' type='text' placeholder='insert username...' className='form-control'
                            onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor='inputEmail1' className='form-label'>Email:</label>
                        <input id='inputEmail1' type='email' placeholder='insert email...' className='form-control'
                            onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor='inputPhonenumber' className='form-label'>Phone Number:</label>
                        <input id='inputPhonenumber' type='number' pattern='[0-9]*' placeholder='insert phone number...' className='form-control'
                            onChange={(e) => setPhonenumber(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor='inputTextarea1' className='form-label'>Skillsets:</label>
                        <textarea id='inputTextarea1' className='form-control' rows='2' onChange={(e) => setSkillsets(e.target.value)}></textarea>
                    </div>
                    <div className="mb-2">
                        <label htmlFor='inputHobby' className='form-label'>Hobby:</label>
                        <input id='inputHobby' type='text' placeholder='insert hobby...' className='form-control'
                            onChange={(e) => setHobby(e.target.value)} />
                    </div>
                    <div className='row'>
                        <div className='col-6'>
                            <button type='button' className='btn btn-success form-control'>REGISTER</button>
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

export default RegisterFreelancer;