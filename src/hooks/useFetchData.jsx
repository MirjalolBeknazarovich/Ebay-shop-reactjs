import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import instance from '../api/instance';

const useFetchData = (ENDPOINT) => {
    const [isLoading, setIsLoading] = useState(false);
    const [ data, setData ] = useState([]);
    useEffect( () =>{
      setIsLoading(true)
        instance.get(ENDPOINT)
        .then(response => 
          setData(response.data),
          setIsLoading(false))
        .catch(error => console.log(error),
        setIsLoading(false)
        )
    },[useParams().id])

  return [ data, isLoading]
}

export default useFetchData