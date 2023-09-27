import React from 'react';

function RegisterFreelancer() {
    return (
        <div className='d-flex vh-100 text-bg-info justify-content-center align-items-center'>
            <div className='container w-60 bg-white rounded p-3'>
                <form>
                    <h2>Register New User</h2>
                    <div className="mb-2">
                        <label htmlFor='inputUsername' className='form-label'>Username:</label>
                        <input id='inputUsername' type='text' placeholder='insert username...' className='form-control' />
                    </div>
                    <div className="mb-2">
                        <label htmlFor='inputEmail1' className='form-label'>Email:</label>
                        <input id='inputEmail1' type='email' placeholder='insert email...' className='form-control' />
                    </div>
                    <div className="mb-2">
                        <label htmlFor='inputPhonenumber' className='form-label'>Phone Number:</label>
                        <input id='inputPhonenumber' type='number' pattern='[0-9]*' placeholder='insert phone number...' className='form-control' />
                    </div>
                    <div className="mb-2">
                        <label htmlFor='inputTextarea1' className='form-label'>Skillsets:</label>
                        <textarea id='inputTextarea1' className='form-control' rows='2'></textarea>
                    </div>
                    <div className="mb-2">
                        <label htmlFor='inputHobby' className='form-label'>Hobby:</label>
                        <input id='inputHobby' type='text' placeholder='insert hobby...' className='form-control' />
                    </div>
                    <div className='row'>
                        <div className='col-sm'></div>
                        <div className='col-sm'>
                            <button type='button' className='btn btn-success form-control'>Submit</button>
                        </div>
                        <div className='col-sm'></div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default RegisterFreelancer