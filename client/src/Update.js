import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const Update = () => {
    const {id} = useParams();
    const [fields, setFields] = useState({
        title:'',
        description:''
    })

    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8080/read/'+id)
        .then(res => {
            setFields(res.data)
        })
        .catch(err => console.log(err))
      }, [])
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if(fields.title != '')
            axios.put('http://localhost:8080/update/'+id,fields)
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
            <h2>Update Issue</h2>
            <div className='mb-2'>
                <label htmlFor=''>Title</label>
                <input type='text' placeholder='Enter Title' className='form-control' value={fields.title}
                onChange={e => setFields({...fields, title:e.target.value})}/>
            </div>
            <div className='mb-2'>
                <label htmlFor=''>Description</label>
                <textarea placeholder='Enter Description' className='form-control' value={fields.description}
                onChange={e => setFields({...fields, description:e.target.value})}>{fields.description}</textarea>
            </div>
            <button className='btn btn-success'>Submit</button>
            </form> 
        </div>
    </div>
  )
}

export default Update