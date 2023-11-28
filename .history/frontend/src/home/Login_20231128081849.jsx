import { XMarkIcon } from '@heroicons/react/20/solid'
import { useState } from 'react'
import { setToken } from './Auth';
import { useNavigate } from "react-router-dom";

const loginUser = async (email, password) => {
  try
  {
    return await fetch('https://localhost:7230/account/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({email, password}),
    }).then((data)=>data.json());
  }
  catch(error)
  {
    console.error("Login error", error);
  }
}

const Login = ({ setIsShown }) => {
  const navigate = useNavigate();
  const [ email, setEmail ] = useState("")
  const [ password, setPassword ] = useState("")
  const [ salonId, setSalonId ] = useState("")
  const [ userId, setUserId ] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    let token = await loginUser(email, password)
    setToken(token)
    setIsShown(0)
    console.log(token)

    var result = await fetch('https://localhost:7230/api/Identity/GetByEmailId?email='+ email)
    .then((res) => res.json())

    console.log(result)
    if(result.salonId != null && result.userId == null)
    {
      navigate("/stronasalonu");
    }
    else if(result.salonId == null && result.userId != null)
    {
      navigate("/pracownicy");
    }
  }

    return (
      <>
      <div className="w-full h-full fixed top-0 left-0 bg-gray-800 bg-opacity-60">
        <div className="top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%] h-auto bg-white w-96 rounded-lg fixed flex flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="mx-auto h-10 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=green&shade=600"
              alt="Your Company"
            />
                          <XMarkIcon
                          onClick={()=> setIsShown(0)}
                className="cursor-pointer h-8 w-8 text-gray-600 absolute top-2 right-2"
                aria-hidden="true"
              />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Logowanie
            </h2>
          </div>
  
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Adres e-mail
                </label>
                <div className="mt-2">
                  <input
                    onChange={(e) => setEmail(e.target.value)}
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
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Hasło
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
    
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                >
                  Zaloguj się
                </button>
              </div>
            </form>
  
            <p className="mt-10 text-center text-sm text-gray-500">
              Nie masz konta? To nie problem {' '}
              <a onClick={()=> setIsShown(3)} className="cursor-pointer font-semibold leading-6 text-green-600 hover:text-green-500">
                zarejestruj się
              </a>
            </p>
          </div>
        </div>
        </div>
      </>
    )
  }

  export default Login