import OneService from './OneService'
import React, { useState } from 'react'
import { useEffect } from 'react';
import {
  Bars3Icon
} from '@heroicons/react/20/solid'




export default function Service({workerId}) {
  const [services, setService] = useState([]);

  useEffect(() => {
    fetch('https://localhost:7230/Salons/ServicesWithWorkerId/'+workerId)
      .then((res) => res.json())
      .then((result) => {
        setService(result);
        console.log(result)
      });
  }, [])

  return (
    <div className=''>
   
    </div>
  )
}
