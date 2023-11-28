import Calendar from "../components/Calendar"
import Tabs from "../components/Tabs"
import NavbarBiznes from "../core/NavbarBiznes"

export default function CalendarOfWork() {
  return (
    <>
        <NavbarBiznes/>
        <div className="flex justify-center">
          <Tabs></Tabs>
          <Calendar/>
        </div>
    </>
  )
}
