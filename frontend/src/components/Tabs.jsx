export default function Tabs(visit) {

  return (
    <div className="w-full max-w-md px-2 py-2 sm:px-0">
                      <div className='hover:bg-green-200 p-5 rounded-lg cursor-pointer'>
      <h3 className="text-sm font-medium leading-5">
                      Wizyta Fryzjerska
                    </h3>
                    <ul className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500">
                      <li>{visit.visit.date}</li>
                      <li>&middot;</li>
                      <li> Osoba {visit.visit.userId}</li>
                      <li>&middot;</li>
                      <li> Usługa {visit.visit.serviceId}</li>
                    </ul>
                    </div>
    </div>
  )
}
