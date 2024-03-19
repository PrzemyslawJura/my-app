import Tabs from "../components/Tabs"
import NavbarBiznes from "../core/NavbarBiznes"
import { useState, useEffect } from 'react'
import { getId } from '../home/Auth';

export default function CalendarOfWork() {
  const [visits, setVisits] = useState([]);

  useEffect(() => {
    fetch('https://localhost:7230/Salons/GetAllSalonVisits/'+getId())
      .then((res) => res.json())
      .then((result) => {
        setVisits(result);
        console.log(result)
      });
  }, [])
  return (
    <>
        <NavbarBiznes/>
        {/*<div className="flex justify-center">*/}
        {visits.map((visit) => (
          <Tabs visit = {visit}></Tabs>
        ))}
    </>
  )
}
