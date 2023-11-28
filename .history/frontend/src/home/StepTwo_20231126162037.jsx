import { XMarkIcon, CalendarDaysIcon, UserIcon, ClockIcon } from '@heroicons/react/20/solid'
import Listboxx from './Listbox'


const person =
    {
      name: 'Leslie Alexander',
      role: 'Co-Founder / CEO',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    }

const StepTwo = ({ id, setIsSteps, Time, Date, person }) => {
    return (
      <>
      <div className="w-full h-full fixed top-0 left-0 bg-gray-800 bg-opacity-60">
        <div className=" top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%] h-auto bg-white w-[26rem] rounded-lg fixed flex flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="mx-auto h-10 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=green&shade=600"
              alt="Your Company"
            />
                          <XMarkIcon
                          onClick={()=> setIsSteps(0)}
                className="cursor-pointer h-8 w-8 text-gray-600 absolute top-2 right-2"
                aria-hidden="true"
              />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Podsumowanie
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6">


            <div className="flex items-center gap-x-4">
                <img className="h-16 w-16 rounded-full" src='https://images.unsplash.com/photo-1532710093739-9470acff878f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80' alt="" />
                <div className='text-gray-800 '>
                <span className="flex ">
                    {person.name}
                  </span>
                  <span className="flex">
                  {person.address.city.cityName}, ul.{person.address.street} {person.address.localNumber}, {person.address.zipCode}
                  </span>
                  <span className="flex">
                    {id}
                  </span>
                </div>
              </div>


            <div className="flex items-center gap-x-4">
                <img className="h-16 w-16 rounded-full" src={person.imageUrl} alt="" />
                <div className='text-gray-800 '>
                <span className="flex ">
                    <UserIcon
                        className="h-6 w-6 mr-2"
                        aria-hidden="true"
                    />
                    Krystyna Ryszak
                  </span>
                  <span className="flex">
                    <CalendarDaysIcon
                        className="h-6 w-6 mr-2"
                        aria-hidden="true"
                    />
                    {Date}
                  </span>
                  <span className="flex">
                    <ClockIcon
                        className="h-6 w-6 mr-2"
                        aria-hidden="true"
                    />
                    {Time}
                  </span>
                </div>
              </div>
              {console.log(Date)}

              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Adres e-mail
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <button
                onClick={()=>setIsSteps(2)}
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                >
                  Rezerwój
                </button>
              </div>
            </form>
  
            <p className="mt-5 text-center text-sm text-gray-500">
              Nie jesteś pewny co do tej usługi. Zobacz {' '}
              <a onClick={()=> setIsSteps(3)} className="cursor-pointer font-semibold leading-6 text-green-600 hover:text-green-500">
                pełną ofertę salonu
              </a>
            </p>
          </div>
        </div>
        </div>
      </>
    )
  }

  export default StepTwo