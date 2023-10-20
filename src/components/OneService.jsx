import {
    ClockIcon,
    CurrencyDollarIcon,
    UserCircleIcon,
  } from '@heroicons/react/20/solid'

export default function OneService({service}) {
    return (
        <div className="min-w-0 flex-1">
          <h2 className="text-sm font-semibold leading-7 text-gray-900 sm:truncate sm:tracking-tight">
            {service.name}
          </h2>
          <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
            <div className="mt-2 flex items-center text-sm text-gray-500">
              <ClockIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
              {service.time} min
            </div>
            <div className="mt-2 flex items-center text-sm text-gray-500">
              <CurrencyDollarIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
              {service.price}zł
            </div>
            <div className="mt-2 flex items-center text-sm text-gray-500">
              <UserCircleIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
              {service.hairdresser}
            </div>
          </div>
        </div>
    )}