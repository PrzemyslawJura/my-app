import { useState } from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";

export default function SalonOffer({person}) {
    const [Steps, setIsSteps] = useState(0);
return (
    <>
        <div className="flex min-w-0 gap-x-4">
        <img className="h-20 w-20 flex-none rounded-full bg-gray-50" src={person.imageUrl} alt="" />
        <div className="min-w-0">
        <p className="text-sm font-semibold leading-6 text-gray-900">{person.name}</p>
        <p className="mt-1 truncate text-xs leading-5 text-gray-500">Adres: {person.email}</p>
        <p className="mt-1 truncate text-xs leading-5 text-gray-500">Email: {person.star}</p>
        <p className="mt-1 truncate text-xs leading-5 text-gray-500">Numer telefonu: {person.star}</p>
        </div>
        </div>
        <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
        {person.role.map((man)=> (
            <p className="text-sm leading-6 text-gray-900 mb-4">
                {man[1]}
                <span className="ml-2 mt-1 leading-5 text-gray-500">
                    {man[2]}
                </span>
                <button
                onClick={()=> setIsSteps(1)}
                    type="submit"
                    className="mx-2 w-14 flex-none rounded-md bg-green-600 px-1 py-1 text-sm font-semibold text-white shadow-sm hover:bg-green-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                    Umów
                </button>
            </p>
        ))}
        </div>
        {Steps == 1 && <StepOne setIsSteps={setIsSteps} />}
        {Steps == 2 && <StepTwo setIsSteps={setIsSteps} />}
        {Steps == 3 && <StepOne setIsSteps={setIsSteps} />}
    </>
)}