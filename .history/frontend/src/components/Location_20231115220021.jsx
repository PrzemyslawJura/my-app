import { Fragment, useEffect, useState } from 'react'
import { Combobox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon, GlobeEuropeAfricaIcon } from '@heroicons/react/20/solid'
import { getValue } from '@testing-library/user-event/dist/utils'

const people = [
  { id: 1, name: 'Opole' },
  { id: 2, name: 'Łódź' },
  { id: 3, name: 'Warszawa' },
  { id: 4, name: 'Kraków' },
  { id: 5, name: 'Poznań' },
  { id: 6, name: 'Rzeszów' },
]

export default function Location({setSearch}) {
  const [selected, setSelected] = useState("")
  const [query, setQuery] = useState('')

  const [locationData, setLocationData] = useState([]);
//  useEffect( ()=>{
//    const getLocationData= async()=>{
//      const reqData = await fetch("https://localhost:7230/api/City/GetAllCityNames");
//      const resData = await reqData.json();
//      console.log(resData);
//      setLocationData(resData);
//    }
//    getLocationData();
//  })
 

  
  useEffect(() => {
    fetch('https://localhost:7230/api/City/GetAllCityNames')
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setLocationData(result);
      });
  }, [])







  
const searchLocation = (value) =>
{
  if (value) return setSearch(value)
}

  const filteredPeople =
    query === ''
      ? locationData
      : people.filter((person) =>
          person
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(query.toLowerCase().replace(/\s+/g, ''))
        )

  return (
      <Combobox value={selected} onChange={setSelected}>
        {searchLocation(selected.name)}
        {console.log(selected.name)}
        <div className="relative mt-1 w-full  border-gray-600 border rounded-md">
          <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
          <Combobox.Button className="absolute inset-y-0 left-2 flex items-center pr-2">
              <GlobeEuropeAfricaIcon
                className="h-5 w-5 text-gray-600"
                aria-hidden="true"
              />
            </Combobox.Button>
            <Combobox.Input
              className="w-full border-none py-2 pl-10 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
              placeholder="Wybierz miasto"
              displayValue={(person) => person}
              onChange={(event) => setQuery(event.target.value)}
            />
            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon
                className="h-5 w-5 text-gray-600"
                aria-hidden="true"
              />
            </Combobox.Button>
          </div>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery('')}
          >
            <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {filteredPeople.length === 0 && query !== '' ? (
                <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                  Nie znaleziono takiej lokalizacji
                </div>
              ) : (
                filteredPeople.map((person) => (
                  <Combobox.Option
                    key={person.id}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? 'bg-teal-600 text-white' : 'text-gray-900'
                      }`
                    }
                    value={person}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? 'font-medium' : 'font-normal'
                          }`}
                        >
                          {person}
                        </span>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? 'text-white' : 'text-teal-600'
                            }`}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
  )
}
