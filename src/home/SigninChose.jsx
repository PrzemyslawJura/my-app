import { XMarkIcon } from '@heroicons/react/20/solid'

const SigninChose = ({ setIsShown }) => {
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
              Rejestracja
            </h2>
          </div>
  
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <div>
                <button
                onClick={()=>setIsShown(4)}
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                >
                  Osoba prywatna
                </button>

                <button
                onClick={()=>setIsShown(5)}
                  type="submit"
                  className="mt-10 flex w-full justify-center rounded-md bg-gray-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
                >
                  Biznes
                </button>
              </div>
  
          </div>
        </div>
        </div>
      </>
    )
  }

  export default SigninChose