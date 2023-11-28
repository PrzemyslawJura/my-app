import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import { XMarkIcon } from '@heroicons/react/20/solid'
import React, { useState } from 'react';

const SigninBiznes = ({ setIsShown }) => {
  const [formData, setFormData] = useState(new FormData());
  const [ email, setEmail ] = useState("")
  const [ password, setPassword ] = useState("")
  const [ salonId, setSalonId ] = useState("")
  const [ userName, setUserName ] = useState("")
  const [salons, setSalons] = useState([]);

  const registerBiznes = async ( email, password, userName, salonId ) => {
    try
    {
      return await fetch('https://localhost:7230/api/Identity/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, userName, salonId }),
      }).then((data)=>data.json());
    }
    catch(error)
    {
      console.error("Register error", error);
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://localhost:7230/Salons', {
        method: 'POST',
        body: formData,
      });

      fetch('https://localhost:7230/Salons')
      .then((res) => res.json())
      .then((result) => {
        setSalons(result);
      });

      setSalonId(() => salons.length)
      console.log(salons)
      setUserName(() => email)

      registerBiznes(email, password, userName, salonId)

      const data = await response.json();
      if(response.status != 201)
      {
        document.getElementById(e.target.name + "SuccesfullyValidation").classList.add("hidden")
        document.getElementById(e.target.name + "ErrorValidation").classList.remove("hidden")
      }
      else
      {
        document.getElementById(e.target.name + "ErrorValidation").classList.add("hidden")
        document.getElementById(e.target.name + "SuccesfullyValidation").classList.remove("hidden")
        setTimeout(() => setIsShown(0), 1200);
      }
      console.log(data);
    } catch (error) {
      console.error('Błąd:', error);
    }
    e.preventDefault();
  };

  const handleInputChangeEmail = (e) => {
    setEmail(e.target.value)
    const { name, value } = e.target;

    if(e.target.value.match(e.target.pattern))
    {
      document.getElementById(e.target.name + "Err").classList.add("hidden")
    }
    else
    {
      document.getElementById(e.target.name + "Err").classList.remove("hidden")
    }

    if(formData.has(name))
    {
      formData.delete(name);
    }

    formData.append(name, value);
  };



  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if(e.target.value.match(e.target.pattern))
    {
      document.getElementById(e.target.name + "Err").classList.add("hidden")
    }
    else
    {
      document.getElementById(e.target.name + "Err").classList.remove("hidden")
    }

    if(formData.has(name))
    {
      formData.delete(name);
    }

    formData.append(name, value);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    
    if(formData.has('Photo.Photo'))
    {
      formData.delete('Photo.Photo');
    }

    formData.append('Photo.Photo', file);
  };


  return (

    <div className="w-full h-full fixed top-0 left-0 bg-gray-800 bg-opacity-60">
    <div className="top-2/4 md:left-2/4 md:translate-x-[-50%] translate-y-[-50%] h-auto bg-white rounded-lg fixed flex flex-1 flex-col justify-center px-6 py-12 lg:px-8 sm:w-full md:w-auto">
    <form onSubmit={handleSubmit}>
      <XMarkIcon
                          onClick={()=> setIsShown(0)}
                className="cursor-pointer h-8 w-8 text-gray-600 absolute top-2 right-2"
                aria-hidden="true"
              />
      <div className="space-y-12 overflow-scroll h-96">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Rejestracja</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            Te informacje są potrzebne aby, zarejestrować swój biznes w naszej aplikacj.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Nazwa salonu
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    pattern="[A-Za-z0-9]{3,255}"
                    onChange={handleInputChange}
                    name="Name"
                    type="text"
                    required
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  />
                </div>
                <span id='NameErr' className='text-sm text-red-600 hidden'>Nazwa salonu musi zawierać przynajmniej 2 znaki</span>
              </div>
            </div>

          
            <div className="sm:col-span-4">
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Hasło
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    pattern="^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$ "
                    onChange={(e) => setPassword(e.target.value)}
                    name="Password"
                    type="password"
                    required
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  />
                </div>
                <span id='PasswordErr' className='text-sm text-red-600 hidden'>Hasło musi być trudne</span>
              </div>
            </div>

            <div className="col-span-full">
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Opis
              </label>
              <div className="mt-2">
                <textarea
                  pattern="[A-Za-z]{3}"
                  onChange={handleInputChange}
                  name="Description"
                  rows={3}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={''}
                />
              </div>
              <span id='DescriptionErr' className='text-sm text-red-600 hidden'>Opis salonu nie może być pusty</span>
              <p className="mt-3 text-sm leading-6 text-gray-600">Napisz kilka zdań o salonie i o tobie.</p>
            </div>

            <div className="col-span-full">
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Zdjęcia salonu
              </label>
              <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                <div className="text-center">
                  <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                  <div className="mt-4 flex text-sm leading-6 text-gray-600">
                    <label
                      className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                    >
                      <span>Załaduj pliki</span>
                      <input
                        type="file"
                        onChange={handleFileChange}
                        name="Photo.Photo"
                        required
                        className="sr-only" />
                    </label>
                    <p className="pl-1">albo przeciągnij</p>
                  </div>
                  <p className="text-xs leading-5 text-gray-600">JPG aż do 10MB</p>
                </div>
              </div>
              <span id='DescriptionErr' className='text-sm text-red-600 hidden'>Zdjęcie salonu jest wymagane</span>
            </div>
          </div>
        </div>

        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Informacje osbiste</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">Imformacje potrzebne do komunikacji pomiędzy klientem a, salonem</p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                Numer telefonu
              </label>
              <div className="mt-2">
                <input
                  pattern="[1-9]{9}"
                  onChange={handleInputChange}
                  name="PhoneNumber"
                  type="number"
                  required
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <span id='PhoneNumberErr' className='text-sm text-red-600 hidden'>Numer telefonu musi zawierać 9 cyfr</span>
            </div>

            <div className="sm:col-span-4">
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Adres E-mail
              </label>
              <div className="mt-2">
                <input
                  pattern='^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$'
                  onChange={handleInputChangeEmail}
                  name="Email"
                  type="email"
                  required
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <span id='EmailErr' className='text-sm text-red-600 hidden'>Email nie poprawny</span>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                Miasto
              </label>
              <div className="mt-2">
                <input
                  pattern="[A-Za-z]{2,30}"
                  onChange={handleInputChange}
                  name="Address.CityName"
                  type="text"
                  required
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <span id='Address.CityNameErr' className='text-sm text-red-600 hidden'>Miasto musi mieć przyjamniej 3 litery</span>
            </div>

            <div className="col-span-3">
              <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                Ulica
              </label>
              <div className="mt-2">
                <input
                  pattern="[A-Za-z]{1,30}"
                  onChange={handleInputChange}
                  name="Address.Street"
                  type="text"
                  required
                  autoComplete="street-address"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <span id='Address.StreetErr' className='text-sm text-red-600 hidden'>Ulica nie może być pusta</span>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">
                Numer lokalu
              </label>
              <div className="mt-2">
                <input
                  pattern="[0-9]{1,30}"
                  onChange={handleInputChange}
                  name="Address.LocalNumber"
                  type="text"
                  required
                  autoComplete="address-level1"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <span id='Address.LocalNumberErr' className='text-sm text-red-600 hidden'>Numer lokalu musi zawierać przynajmniej jedną cyfre</span>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">
                Kod pocztowy
              </label>
              <div className="mt-2">
                <input
                  pattern='^[0-9]{2}-[0-9]{3}$'
                  onChange={handleInputChange}
                  name="Address.ZipCode"
                  type="text"
                  required
                  autoComplete="postal-code"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <span id='Address.ZipCodeErr' className='text-sm text-red-600 hidden'>Kod pocztowy nie poprawny</span>
            </div>
          </div>
        </div>
      </div>

      <span id='ErrorValidation' className='text-sm text-red-600 hidden'>Podano nie właściwe dane</span>
      <span id='SuccesfullyValidation' className='text-sm text-green-600 hidden'>Pomyślnie utworzono konto salonu</span>
      
      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
          Zamknij
        </button>
        <button
        type="submit"
            className="rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Zarejestruj
          </button>
      </div>
      </form>
    </div>
    </div>
  )
}

export default SigninBiznes