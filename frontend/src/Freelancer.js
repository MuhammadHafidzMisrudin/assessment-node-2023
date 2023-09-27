import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Freelancer() {

    // manage state data.
    const [freelancer, setFreelancer] = useState([]);

    // fetch data from backend - @GET.
    useEffect(() => {
        axios.get('http://localhost:8081/')
            .then(response => setFreelancer(response.data)) // .then(response => console.log(response))
            .catch(error => console.log(error));
    }, []);

    return (
        <div className='d-flex vh-100 text-bg-info justify-content-center align-items-center'>
            <div className='container w-60 bg-white rounded p-2'>
                <Link to='/register' className='btn btn-success p-2'>REGISTER USER (+)</Link>
                <div className='table-responsive'>
                    <table className='table table-hover'>
                        <thead>
                            <tr>
                                <th>Username</th>
                                <th>Email</th>
                                <th>Phone Number</th>
                                <th>Skillsets</th>
                                <th>Hobby</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                freelancer.map((res_data, index) => (
                                    <tr key={index}>
                                        <td>{res_data.username}</td>
                                        <td>{res_data.email}</td>
                                        <td>{res_data.phonenumber}</td>
                                        <td>{res_data.skillsets}</td>
                                        <td>{res_data.hobby}</td>
                                        <td>
                                            <button className='btn btn-primary btn-sm m-2'>UPDATE</button>
                                            <button className='btn btn-danger btn-sm m-2'>DELETE</button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Freelancer;