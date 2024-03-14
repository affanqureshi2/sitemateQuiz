import React from 'react';
import {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Create = () => {
    const [fields, setFields] = useState({
        title:'',
        description:''
    })

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if(fields.title != '')
            axios.post('http://localhost:8080/create',fields)
            .then(res => {
                console.log(res);
                navigate('/');
            })
            .catch(err => console.log(err))
    }
  return (
    <div className='d-flex vh-100 bg-info justify-content-center align-items-center'>
        <div className='w-50 bg-white rounded p-3'>
           <form onSubmit={handleSubmit}>
            <h2>Add Issue</h2>
            <div className='mb-2'>
                <label htmlFor=''>Title</label>
                <input type='text' placeholder='Enter Title' className='form-control'
                onChange={e => setFields({...fields, title:e.target.value})}/>
            </div>
            <div className='mb-2'>
                <label htmlFor=''>Description</label>
                <textarea placeholder='Enter Description' className='form-control'
                onChange={e => setFields({...fields, description:e.target.value})}></textarea>
            </div>
            <button className='btn btn-success'>Submit</button>
            </form> 
        </div>
    </div>
  )
}

export default Create