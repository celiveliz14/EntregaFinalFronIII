import React from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios";
import { useState } from 'react'
import { useContextGlobal } from '../Components/utils/global.context';


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {

  const {theme} = useContextGlobal()
  const [dentista,setDentista] = useState({})
 
  const {id} = useParams()
  
  useEffect(()=>{
    const options = {method: 'GET', url: `https://jsonplaceholder.typicode.com/users/${id}`};

    axios.request(options)
      .then(response => setDentista(response.data))
      .catch(error => console.error(error));
  },[id])

  return (
    <article className={theme === 'dark' ? 'principal dark':'principal'}>
      <h1>Detail Dentist id </h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>{dentista.name}</th>
            <th>{dentista.email}</th>
            <th>{dentista.phone}</th>
            <th>{dentista.website}</th>
          </tr>
        </tbody>
      </table>
    </article>
  )
}

export default Detail