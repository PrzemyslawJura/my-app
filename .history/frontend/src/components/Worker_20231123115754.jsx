import MainButton from "../shared_np_buttony_inputy_kalendarze_itp/MainButton"
import Dropdown from "../shared_np_buttony_inputy_kalendarze_itp/Dropdown"
import Hairdresser from "./Hairdresser"



  export default function Worker() {
    return (
      <>
        <ul role="list" className="divide-y divide-gray-100">
          {people.map((person) => (
            <li key={person.email} className="flex justify-between gap-x-6 py-5">
              <Hairdresser person={person}/>
              <Dropdown title="Edytuj" options={sortOptions}/>
            </li>
          ))}
        </ul>
        <MainButton text="Dodaj"/>
      </>
    )
  }