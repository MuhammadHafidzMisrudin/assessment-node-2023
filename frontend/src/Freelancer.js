import React, {useEffect} from 'react';
import axios from 'axios';

function Freelancer() {

    // fetch data from backend.
    useEffect(() => {
        axios.get('http://localhost:8081/')
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }, []);
    
    return (
        <div className='d-flex vh-100 text-bg-info justify-content-center align-items-center'>
            <div className='w-60 bg-white rounded p-2'>
                <button className='btn btn-success m-2'>Register User</button>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Phone Number</th>
                            <th>Skillsets</th>
                            <th>Hobby</th>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Freelancer;