import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import instance from '../api/instance';

const useFetchData = (ENDPOINT) => {
    const [ data, setData ] = useState([]);
    useEffect( () =>{
        instance.get(ENDPOINT)
        .then(response => setData(response.data))
        .catch(error => console.log(error))
    },[useParams().id])

  return data
}

export default useFetchData