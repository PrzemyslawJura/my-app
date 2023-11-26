import Salon from "./Salon"

export default function SalonPage() {
  return (
    <>
      <Salon/>
      {workers.map((person) => (
                <>
                <li key={person.id} className="flex justify-between gap-x-6 py-5 bg-slate-100 rounded-lg p-3">
                  <Hairdresser person={person}/>
                </li>
                <Service workerId={person.id}/>
                </>
              ))}
    </>
  )
}
