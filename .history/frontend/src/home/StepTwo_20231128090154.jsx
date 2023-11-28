import { XMarkIcon, CalendarDaysIcon, UserIcon, ClockIcon } from '@heroicons/react/20/solid'

const StepTwo = ({ serviceId, isShown, Time, Date, person }) => {
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
                          onClick={()=> isShown(0)}
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
            <img className="h-28 w-28 flex-none rounded-full bg-gray-50" src={process.env.PUBLIC_URL + "/Photos/" + person.id + "/" + "photo0.jpg"} alt="" />                <div className='text-gray-800 '>
                <span className="flex ">
                    {person.name}
                  </span>
                  <span className="flex">
                  {person.address.city.cityName}, ul.{person.address.street} {person.address.localNumber}, {person.address.zipCode}
                  </span>
                  <span className="flex">
                    {serviceId.name} {serviceId.price} zł
                  </span>
                </div>
              </div>


            <div className="flex items-center gap-x-4">
                <div className='text-gray-800 '>
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
                <button
                onClick={()=> isShown(0)}
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                >
                  Rezerwój
                </button>
              </div>
            </form>
  
            <p className="mt-5 text-center text-sm text-gray-500">
              Nie jesteś pewny co do tej usługi. Zobacz {' '}
              <a onClick={()=> isShown(0)} className="cursor-pointer font-semibold leading-6 text-green-600 hover:text-green-500">
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