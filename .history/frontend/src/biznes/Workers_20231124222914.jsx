import React, { useState } from 'react'
import AddWorker from "./AddWorker"
import AddService from './AddService'
import MainButton from "../shared_np_buttony_inputy_kalendarze_itp/MainButton"
import Dropdown from "../shared_np_buttony_inputy_kalendarze_itp/Dropdown"
import Hairdresser from "../components/Hairdresser"
import { useEffect } from 'react';
import Service from '../components/Service'

const sortOptions = [
  { name: 'Zmień dane', href: '#', current: true },
  { name: 'Usuń pracownika', href: '#', current: true },
  { name: 'Dodaj nieobecność', href: '#', current: true }
]



export default function Workers() {
  const [isShown, setIsShown] = useState(0);
  const [workers, setWorkers] = useState([]);

  useEffect(() => {
    fetch('https://localhost:7230/Salons/WorkersWithSalonId/1')
      .then((res) => res.json())
      .then((result) => {
        setWorkers(result);
        console.log(result)
      });
  }, [])

  return (
    <>
        <div className="w-3/5 m-auto my-1 ">
            <ul role="list" className="divide-y divide-gray-100">
              {workers.map((person) => (
                <>
                <li key={person.id} className="flex justify-between gap-x-6 py-5 bg-slate-100">
                  <Hairdresser person={person}/>
                  <Dropdown title="Edytuj" options={sortOptions}/>
                </li>
                <Service workerId={person.id}/>
                </>
              ))}
            </ul>
            <div className="flex justify-between gap-x-6 py-5">
              <span onClick={() => setIsShown(1)}>
                <MainButton text="Dodaj pracownika"/>
              </span>
              
              <span onClick={() => setIsShown(2)}>
                <MainButton text="Dodaj usługę"/>
              </span>
            </div>

            {isShown == 1 && <AddWorker setIsShown={setIsShown} />}
            {isShown == 2 && <AddService setIsShown={setIsShown} workers={workers}/>}
        </div>
    </>
  )
}
