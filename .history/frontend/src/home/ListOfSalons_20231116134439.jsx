import Pagination from './Pagination';
import SalonOffer from './SalonOffer';
import { useEffect, useState } from 'react';

const people = [
    {
      name: 'Salon "Trzech muszkieterów"',
      email: 'Opole',
      star: 4.5,
      countOfReviews: 1023,
      distance: 1.4,
      role: [[1,'Strzyżenie barberskie','50zł'], [2,'Strzyżenie zwykłe','30zł'], [3,'Strzyżenie zwykłe + broda','90zł']],
      imageUrl:
        'https://images.unsplash.com/photo-1546665291-dbef6ab58991?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    },
    {
      name: 'Salon "U Ani"',
      email: 'Opole ul. Szybka 14',
      star: 4.5,
      countOfReviews: 1023,
      distance: 1.4,
      role: [[1,'Strzyżenie barberskie','50zł'], [2,'Strzyżenie zwykłe','30zł'], [3,'Strzyżenie zwykłe + broda','90zł']],
      imageUrl:
        'https://images.unsplash.com/photo-1536520002442-39764a41e987?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
    },
    {
      name: 'Barber "Szybkie cięcie"',
      email: 'Opole ul. Marii Konoskiej 21',
      star: 4.5,
      countOfReviews: 1023,
      distance: 1.4,
      role: [[1,'Strzyżenie barberskie','50zł'], [2,'Strzyżenie zwykłe','30zł'], [3,'Strzyżenie zwykłe + broda','90zł']],
      imageUrl:
        'https://images.unsplash.com/photo-1512690459411-b9245aed614b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    },
    {
      name: 'Salon "Szybcy i obcięci"',
      email: 'Opole ul. Salonowa 242',
      star: 4.5,
      countOfReviews: 1023,
      distance: 1.4,
      role: [[1,'Strzyżenie barberskie','50zł'], [2,'Strzyżenie zwykłe','30zł'], [3,'Strzyżenie zwykłe + broda','90zł']],
      imageUrl:
        'https://images.unsplash.com/photo-1532710093739-9470acff878f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    },
    {
      name: 'Salon "Barbara Kryszak"',
      email: 'Kraków ul. Wolności 12',
      star: 4.5,
      countOfReviews: 1023,
      distance: 1.4,
      role: [[1,'Strzyżenie barberskie','50zł'], [2,'Strzyżenie zwykłe','30zł'], [3,'Strzyżenie zwykłe + broda','90zł']],
      imageUrl:
        'https://images.unsplash.com/photo-1522123436910-416191f97bfe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
    },
    {
      name: 'Salon "Billy Kid"',
      email: 'Łódź ul. 1 Maja 16',
      star: 4.5,
      countOfReviews: 1023,
      distance: 1.4,
      role: [[1,'Strzyżenie barberskie','50zł'], [2,'Strzyżenie zwykłe','30zł'], [3,'Strzyżenie zwykłe + broda','90zł']],
      imageUrl:
        'https://images.unsplash.com/photo-1525708117204-bbe93e711abb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
    },
  ]

const sortOptions = [
    { name: 'Najbardziej popularne', href: '#', current: true },
    { name: 'Najlepiej oceniane', href: '#', current: false },
    { name: 'Najowsze', href: '#', current: false },
    { name: 'Cena: rosnąco', href: '#', current: false },
    { name: 'Cena: malejąco', href: '#', current: false },
  ]


  export default function ListOfSalons({search}) {
    const [result, setResolut] = useState(()=> {return 0});

    useEffect(() => {
      setResolut(people.filter(item=>item.email.includes(search)).length)
      console.log(result)
    })
    const searchCity = ()=>
    {
      return people.filter(item=>item.email.includes(search.cityName ? search.cityName : ""))
    }


    return (
      <>
        <div className="flex items-baseline justify-between border-b border-gray-200 pb-6">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 mt-2">Lista salonów:</h1>
            <div className="flex items-center">
             {/* <Dropdown title="Sortuj" options={sortOptions}/>*/} 
            </div>
        </div>
        <ul role="list" className="divide-y divide-gray-100">
          {searchCity(people).map((person) => (
            <li key={person.email} className="flex justify-between gap-x-6 py-5">
              <SalonOffer person={person} />
            </li>
          ))}
        </ul>
        <Pagination result={result}></Pagination>
      </>
    )
  }