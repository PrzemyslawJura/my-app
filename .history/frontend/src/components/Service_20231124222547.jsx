import OneService from './OneService'
import React, { useState } from 'react'
import { useEffect } from 'react';
import {
  CheckIcon,
  PencilIcon,
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
    {services.map((service) => (
    <div className="lg:flex lg:items-center lg:justify-between px-10 mx-auto p-3 border-slate-200 border-b">
      <OneService service={service}/>
      <div className="mt-1 flex lg:ml-4 lg:mt-0">
        <span className="hidden sm:block">
          <button
            type="button"
            className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          >
            <PencilIcon className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
            Edytuj
          </button>
        </span>
      </div>
    </div>
    ))}
    </div>
  )
}
