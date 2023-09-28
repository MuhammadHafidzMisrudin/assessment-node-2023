import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';

function RegisterFreelancer() {
    // initialize state variables.
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phonenumber, setPhonenumber] = useState('');
    const [skillsets, setSkillsets] = useState('');
    const [hobby, setHobby] = useState('');

    const navigate = useNavigate();

    // event handler to submit data to the backend - @POST.
    // redirect to root.
    function handleSubmit(event) {
        event.preventDefault();
        axios.post('http://localhost:8081/register', { username, email, phonenumber, skillsets, hobby })
            .then(response => {
                console.log(response);
                navigate('/');
            }).catch(error => console.log(error));
    }

    return (
        <div className='d-flex vh-100 text-bg-info justify-content-center align-items-center'>
            <div className='container w-60 bg-white rounded p-3'>
                <form onSubmit={handleSubmit}>
                    <h2>Register New User</h2>
                    <div className="mb-2">
                        <label htmlFor='inputUsername' className='form-label'>Username:</label>
                        <input id='inputUsername' type='text' placeholder='insert username...' className='form-control'
                            onChange={e => setUsername(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor='inputEmail1' className='form-label'>Email:</label>
                        <input id='inputEmail1' type='email' placeholder='insert email...' className='form-control'
                            onChange={e => setEmail(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor='inputPhonenumber' className='form-label'>Phone Number:</label>
                        <input id='inputPhonenumber' type='number' pattern='[0-9]*' placeholder='insert phone number...' className='form-control'
                            onChange={e => setPhonenumber(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor='inputTextarea1' className='form-label'>Skillsets:</label>
                        <textarea id='inputTextarea1' className='form-control' rows='2' onChange={e => setSkillsets(e.target.value)}></textarea>
                    </div>
                    <div className="mb-2">
                        <label htmlFor='inputHobby' className='form-label'>Hobby:</label>
                        <input id='inputHobby' type='text' placeholder='insert hobby...' className='form-control'
                            onChange={e => setHobby(e.target.value)} />
                    </div>
                    <div className='row'>
                        <div className='col-6'>
                            <button type='submit' className='btn btn-success form-control'>REGISTER</button>
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