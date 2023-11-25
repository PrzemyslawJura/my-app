import OneService from './OneService'
import {
  CheckIcon,
  PencilIcon,
} from '@heroicons/react/20/solid'

const services = [
  {
    name: 'Strzyżenie zwykłe',
    time: '45',
    price: '40',
    hairdresser: 'Ania Kowalska',
    active: true,
  },
  {
    name: 'Farbowanie włosów',
    time: '120',
    price: '40',
    hairdresser: 'Ania Kowalska',
    active: true,
  }
]

export default function Service() {
  return (
    <div className=''>
    {services.map((service) => (
    <div className="lg:flex lg:items-center lg:justify-between my-5 px-10 mx-auto p-3 border-slate-200 border-b">
      <OneService service={service}/>
      <div className="mt-5 flex lg:ml-4 lg:mt-0">
        <span className="hidden sm:block">
          <button
            type="button"
            className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          >
            <PencilIcon className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
            Edytuj
          </button>
        </span>

        <span className="sm:ml-3">
          <button
            type="button"
            className="inline-flex items-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
          >
            <CheckIcon className="-ml-0.5 mr-1.5 h-5 w-5" aria-hidden="true" />
            Aktualne
          </button>
        </span>
      </div>
    </div>
    ))}
    </div>
  )
}
