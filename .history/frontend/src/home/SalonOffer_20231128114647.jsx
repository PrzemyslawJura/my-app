import { useState } from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import { useEffect } from "react";
import Login from '../home/Login'
import ForgetPass from '../home/ForgetPass'
import SigninChose from '../home/SigninChose'
import SigninPerson from '../home/SigninPerson'
import SigninBiznes from '../home/Signinbiznes'
import { getId } from "./Auth";

export default function SalonOffer({person}) {
    const [Steps, setIsSteps] = useState(0);
    const [id, setId] = useState("");
    const [services, setServices] = useState([]);
    const [date, setDate] = useState("Wybierz datę")
    const [time, setTime] = useState("Wybierz czas")
    const [isShown, setIsShown] = useState(0);

    useEffect(() => {
        setId(getId())
        fetch('https://localhost:7230/Salons/ServicesWithSalonId/1?salonId='+person.id)
          .then((res) => res.json())
          .then((result) => {
            setServices(result);
            console.log(result);
          });
      }, [])

      const changeId = (e) =>
      {
        if(id != null && id != "")
        {
            setIsShown(6)
            setId(e)
        }
        else{
            setIsShown(1)
        }
      }
   

return (
    <>
        <div className="flex min-w-0 gap-x-4">
        <img className="h-28 w-28 flex-none rounded-full bg-gray-50" src={process.env.PUBLIC_URL + "/Photos/" + person.id + "/" + "photo0.jpg"} alt="" />
        <div className="min-w-0 pl-5">
        <p className="text-sm font-semibold leading-6 text-gray-900">{person.name}</p>
        <p className="mt-1 truncate text-xs leading-5 text-gray-500">Adres: {person.address.city.cityName}, ul.{person.address.street} {person.address.localNumber}, {person.address.zipCode}</p>
        <p className="mt-1 truncate text-xs leading-5 text-gray-500">Email: {person.email}</p>
        <p className="mt-1 truncate text-xs leading-5 text-gray-500">Numer telefonu: {person.phoneNumber}</p>
        <a href=''>
            <p className="mt-1 truncate text-sm font-semibold leading-5 text-green-600">Zobacz pełną ofertę salonu</p>
        </a>
        </div>
        </div>
        <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
            
            {services.map((service) => (
                <p className="text-sm leading-6 text-gray-900 mb-4">
                    {service.name}
                    <span className="ml-2 mt-1 leading-5 text-gray-500">
                        {service.price} zł
                    </span>
                    <button
                    onClick={() => changeId(service)}
                        type="submit"
                        className="mx-2 w-14 flex-none rounded-md bg-green-600 px-1 py-1 text-sm font-semibold text-white shadow-sm hover:bg-green-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                    >
                        Umów
                    </button>
                </p>
            ))}

        </div>
 

        {isShown == 1 && <Login setIsShown={setIsShown} />}
        {isShown == 2 && <ForgetPass setIsShown={setIsShown} />}
        {isShown == 3 && <SigninChose setIsShown={setIsShown} />}
        {isShown == 4 && <SigninPerson setIsShown={setIsShown} />}
        {isShown == 5 && <SigninBiznes setIsShown={setIsShown} />}

        {isShown == 6 && <StepOne setDate={setDate} setTime={setTime} isShown={setIsShown} />}
        {isShown == 7 && <StepTwo serviceId={id} Date={date} Time={time} person={person} isShown={setIsShown}/>}
        {isShown == 8 && <StepOne isShown={setIsShown} />}
    </>
)}