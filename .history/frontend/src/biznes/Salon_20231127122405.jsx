import { CarouselDefault } from '../components/CarouselDefault'
import { useEffect, useState } from 'react';
import Hairdresser from '../components/Hairdresser';
import OneService from '../components/OneService';
import MainButton from '../shared_np_buttony_inputy_kalendarze_itp/MainButton';
import { getToken } from '../home/Auth';
import { useNavigate } from 'react-router-dom';


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Salon() {
  const navigate = useNavigate();
  const [salons, setSalons] = useState({address: {
    city: ""
  },
  photos: [],
  workers: []});

  useEffect(() => {
    try
    {
      if(getToken() == "Not authorized")
      {
        navigate("/pracownicy")
      }

      fetch('https://localhost:7230/Salons/GetSalonById/1', {
        headers: {'Authorization': `Bearer ${getToken()}` }})
        .then((res) => res.json())
        .then((result) => {
          setSalons(result);
          console.log(result);
        });
    }
    catch(error)
    {
      console.error(error)
    }



  }, [])


  return (
    <div className="bg-white">
      <div className="pt-6">
        <nav aria-label="Breadcrumb">
          <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <li className="text-sm">
              <a aria-current="page" className=" pl-10 font-medium text-gray-500 hover:text-gray-600">
                Salon / {salons.name}
              </a>
            </li>
          </ol>
        </nav>

        {/* Image gallery */}
        <div className="mx-auto mt-6 max-w-2xl sm:px-6  lg:max-w-7xl  lg:px-8 rounded-xl h-96 overflow-x-hidden">
              <CarouselDefault photos={salons.photos}/>
        </div>

        {/* Product info */}
        <div className="mx-auto px-10 pb-16 pt-10 sm:px-10 max-w-6xl ">
          <div className="lg:col-span-2 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{salons.name}</h1>
            <h3 className="text-xl font-semibold tracking-tight text-gray-600">{salons.address.city.cityName}, ul. {salons.address.street}, {salons.address.zipCode}</h3>
          </div>

          {/* Options */}
{/*} lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16 max-w-2xl 
          <div className="mt-4 lg:row-span-3 lg:mt-0">{*/}
            {/* Reviews */}{/*}
            <div className="mt-6">
              <h3 className="sr-only">Reviews</h3>
              <div className="flex items-center">
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      className={classNames(
                        reviews.average > rating ? 'text-gray-900' : 'text-gray-200',
                        'h-5 w-5 flex-shrink-0'
                      )}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="sr-only">{reviews.average} out of 5 stars</p>
                <a href={reviews.href} className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                  {reviews.totalCount} reviews
                </a>
              </div>
            </div>

            <form className="mt-10">
              <button
                type="submit"
                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Dodaj ocene
              </button>
            </form>
            
          </div>
        {*/}  
          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:pb-16 lg:pr-8 lg:pt-6">
            {/* Description and details */}

              <div className="space-y-6">
                <p className="text-base text-gray-900">{salons.description}</p>
              </div>

          </div>
        </div>

        <div className='w-4/5 m-auto max-w-5xl'>
          {salons.workers.map((person) => (
                <>
                <li key={person.id} className="flex justify-between gap-x-6 py-5 bg-slate-100 rounded-lg p-3">
                  <Hairdresser person={person}/>
                </li>
                {person.service.map((oneService) => (
                  <>
                    <div className='flex w-4/5 m-auto'>
                      <OneService service={oneService}/>
                      <MainButton text={"Umów"}/>
                    </div>
                  </>
                ))}
                
                </>
              ))}
        </div>

      </div>
    </div>
  )
}
