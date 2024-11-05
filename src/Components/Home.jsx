import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Home = () => {
    const [data,setData] = useState([])
    const [records,setRecords] = useState([])
useEffect(()=>{
axios.get("https://jsonplaceholder.typicode.com/users")
.then(res=> {
    setData(res.data)
    setRecords(res.data)
})
.then(err=> console.log(err));
}, [ ]) 

const Filter = (event) =>{
setRecords(data.filter(f => f.name.toLowerCase().includes(event.target.value)))
}

    return (
    <div className='p-5 my-5 bg-light'>
<div className='bg-white shadow border'>
    <input type="text" className='form-control' onChange={Filter}  placeholder="Search"/>

<table className='table'>
    <thead>
        <tr>
            <td className='fw-bold'>ID</td>
            <td  className='fw-bold'>Name</td>
            <td  className='fw-bold'>Email</td>
            <td  className='fw-bold'>Phone</td>
        </tr>
    </thead>
    <tbody>
        {records.map((d,i) => (

            <tr key={i}> 
<td>{d.id}</td>
<td>{d.name}</td>
<td>{d.email}</td>
<td>{d.phone}</td>
            </tr>
        ) )}
    </tbody>
</table>

</div>

    </div>
  )
}

export default Home