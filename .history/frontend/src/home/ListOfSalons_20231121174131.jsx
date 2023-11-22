import Pagination from './Pagination';
import SalonOffer from './SalonOffer';
import { useEffect, useState } from 'react';

 

  export default function ListOfSalons({search}) {
    const [result, setResolut] = useState(()=> {return 0});
    const [salons, setSalons] = useState([]);
    const [page, setPage] = useState(1);
    useEffect(() => {
      if (search == "")
      {
        setResolut(salons.length)
      }
      else
      {
        console.log(search)
        setResolut((salons.filter(item=>item.address.city.cityName.includes(search.cityName)).length))
      }

      console.log(result)
    })
    const searchCity = ()=>
    {
        if (search == "")
        {
          console.log(salons.filter(item=>item.address.city.cityName.includes("")));
          return salons.filter(item=>item.address.city.cityName.includes(""))
        }
        console.log("page"+page);
        return salons.filter(item=>item.address.city.cityName.includes(search.cityName));
    }

    useEffect(() => {
      fetch('https://localhost:7230/Salons')
        .then((res) => res.json())
        .then((result) => {
          setSalons(result);
          console.log(result)
        });
    }, [])

    return (
      <>
        <div className="flex items-baseline justify-between border-b border-gray-200 pb-6">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 mt-2">Lista salonów:</h1>
            <div className="flex items-center">
             {/* <Dropdown title="Sortuj" options={sortOptions}/>*/} 
            </div>
        </div>
        <ul role="list" className="divide-y divide-gray-100">
          {searchCity(salons).slice(1*page,5*page).map((person) => (
            <li key={person.id} className="flex justify-between gap-x-6 py-5">
              <SalonOffer person={person} />
            </li>
          ))}
        </ul>
        <Pagination result={result} setPage={setPage} page={page}></Pagination>
        {console.log("page"+page)};
      </>
    )
  }