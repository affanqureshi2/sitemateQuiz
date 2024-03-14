import React from 'react'
import {useState,useEffect} from 'react'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
    const [data, setData] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        axios.get('http://localhost:8080/list/')
        .then(res => setData(res.data))
        .catch(err => console.log(err));
    },[])

    const handleDelete = (id) => {
        axios.delete('http://localhost:8080/delete/'+id)
        .then(res => {
            window.location.reload();
        })
        .catch(err => console.log(err))
    }

    return (
    <div className='d-flex vh-100 bg-info justify-content-center align-items-center'>
        <div className='w-50 bg-white rounded p-3'>
            <h2>Issue List</h2>
            <div className='d-flex justify-content-e'>
                <Link to="/create" className='btn btn-primary'>Create</Link>
            </div>
            <table>
                <thead>
                    <tr>
                      <th >ID </th>
                      <th className='px-2'>Title</th>
                      <th>Description</th> 
                      <th>Action</th>  
                    </tr>
                </thead>
                <tbody>
                    {data.map((issue, index) => {
                        return <tr key={index}>
                                <td>{issue.id}</td>
                                <td  className='px-2'>{issue.title}</td>
                                <td>{issue.description}</td>
                                <td>
                                    <Link to={`/read/${issue.id}`} className='btn btn-sm btn-dark'>Read</Link>
                                    <Link to={`/edit/${issue.id}`} className='btn btn-sm btn-warning mx-2'>Edit</Link>
                                    <button onClick={() => {handleDelete(issue.id)}}className='btn btn-sm btn-danger'>Delete</button>
                                </td>
                            </tr>
                    })}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Home