export default function Hairdresser({person}) {
    return (
      <>
          <div className="flex min-w-0 gap-x-4">
            <img className="h-16 w-16 flex-none rounded-full bg-gray-50 overflow-auto" src={process.env.PUBLIC_URL + "/Photos/" + person.salonId + "/" + "photo" + person.id + ".jpg"} alt="" />
            <div className="min-w-0 flex-auto">
              <p className="text-sm font-semibold leading-6 text-gray-900">{person.firstName} {person.secondName}</p>
              <p className="mt-1 truncate text-xs leading-5 text-gray-500">Mail: {person.email}</p>
              <p className="truncate text-xs leading-3 text-gray-500">Numer: {person.phoneNumber}</p>
            </div>
          </div>
    </>
  )}