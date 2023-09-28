import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Freelancer() {

    // manage state data.
    const [freelancer, setFreelancer] = useState([]);

    // fetch data from backend - @GET.
    useEffect(() => {
        axios.get('http://localhost:8081/')
            .then(response => {
                console.log(response);
                setFreelancer(response.data);
            })
            .catch(error => console.log(error));
    }, []);

    // make scrollable table.
    const styleOverflow = {
        overflowY: 'scroll',
        height:'350px'
    };

    return (
        <div className='d-flex vh-100 text-bg-info justify-content-center align-items-center'>
            <div className='container w-60 bg-white rounded p-2'>
                <Link to='/register' className='btn btn-success p-2'>REGISTER USER (+)</Link>
                <div className='pt-2 pb-2'></div>
                <div className='table-responsive pt-2 pb-2' style={styleOverflow}>
                    <table className='table table-hover'>
                        <thead className='table-dark'>
                            <tr className='justify-content-center align-middle text-center'>
                                <th>Username</th>
                                <th>Email</th>
                                <th>Phone Number</th>
                                <th>Skillsets</th>
                                <th>Hobby</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody className='table-group-divider'>
                            {
                                freelancer.map((res_data, index) => (
                                    <tr key={index} className='justify-content-center align-middle text-center'>
                                        <td>{res_data.username}</td>
                                        <td>{res_data.email}</td>
                                        <td>{res_data.phonenumber}</td>
                                        <td>{res_data.skillsets}</td>
                                        <td>{res_data.hobby}</td>
                                        <td>
                                            {/* <button className='btn btn-primary btn-sm m-2'>UPDATE</button>
                                            <button className='btn btn-danger btn-sm m-2'>DELETE</button> */}
                                            {/* pass res_data as props via Link */}
                                            <Link to={`update/${res_data.id}`} state={res_data} className='btn btn-primary btn-sm mb-2 rounded-pill form-control'>UPDATE</Link>
                                            <Link className='btn btn-danger btn-sm rounded-pill form-control'>DELETE</Link>
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