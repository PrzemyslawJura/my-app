import { XMarkIcon } from '@heroicons/react/20/solid'
import React, { useEffect, useState } from 'react';
import SelectMenu from '../shared_np_buttony_inputy_kalendarze_itp/SelectMenu';

const AddService = ({ setIsShown }) => {


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {


      const response = await fetch('https://localhost:7230/api/User', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({  "UserName": document.getElementById("Email").value,
                                "Email": document.getElementById("UserName").value,
                                "PhoneNumber": document.getElementById("PhoneNumber").value }),
      });

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
  };

    return (
      <>
      <div className="w-full h-full fixed top-0 left-0 bg-gray-800 bg-opacity-60">
        <div className="top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%] h-auto bg-white w-96 rounded-lg fixed flex flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                          <XMarkIcon
                          onClick={()=> setIsShown(0)}
                className="cursor-pointer h-8 w-8 text-gray-600 absolute top-2 right-2"
                aria-hidden="true"
              />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Dodaj usługę
            </h2>
          </div>
  
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Nazwa usługi
                </label>
                <div className="mt-2">
                  <input
                    pattern='^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$'
                    onChange={handleInputChange}
                    name="Name"
                    type="text"
                    id='Name'
                    autoComplete="email"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                  />
                </div>
                <span id='NameErr' className='text-sm text-red-600 hidden'>Email nie poprawny</span>
              </div>

              <div className="flex items-center justify-between gap-3">
                <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Czas w minutach
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    pattern="[0-9]{3,255}"
                    onChange={handleInputChange}
                    name="UserName"
                    type="text"
                    id='UserName'
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                  />
                </div>
                <span id='UserNameErr' className='text-sm text-red-600 hidden'>Nazwa urzytkownika musi zawierać przynajmniej 3 litery</span>

                </div>
                <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Cena
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    pattern="[1-9]{1-3}"
                    onChange={handleInputChange}
                    name="Price"
                    id='Price'
                    type="text"
                    autoComplete="current-password"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                  />
                </div>
                <span id='PriceErr' className='text-sm text-red-600 hidden'>Numer telefonu musi zawierać 9 cyfr</span>
                </div>
              </div>

              <span id='ErrorValidation' className='text-sm text-red-600 hidden'>Podano nie właściwe dane</span>
              <span id='SuccesfullyValidation' className='text-sm text-green-600 hidden'>Pomyślnie utworzono konto salonu</span>
  
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                >
                  Zarejestruj się
                </button>
              </div>
            </form>
          </div>
        </div>
        </div>
      </>
    )
  }

  export default AddService