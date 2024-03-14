import React, {useEffect,useState} from 'react'
import {useParams, Link} from 'react-router-dom'
import axios from 'axios'

const Read = () => {
  const {id} = useParams();
  const [field, setField] = useState({
    title:'',
    description:''
})
  useEffect(() => {
    axios.get('http://localhost:8080/read/'+id)
    .then(res => {
        if(typeof res.data.id != undefined)
            setField(res.data)})
    .catch(err => console.log(err))
  }, [])
  return (
    <div className='d-flex vh-100 bg-info justify-content-center align-items-center'>
        <div className='w-50 bg-white rounded p-3'>
            <h3>Title: </h3><p>{field.title}</p>
            <h3>Description: </h3><p>{field.description}</p>
            <Link to='/' className='btn btn-primary'>Back</Link>
        </div>
    </div>
  )
}

export default Read