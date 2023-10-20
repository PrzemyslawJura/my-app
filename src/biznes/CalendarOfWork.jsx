import Calendar from "../components/Calendar"
import Tabs from "../components/Tabs"

export default function CalendarOfWork() {
  return (
    <>
        <div className="flex justify-center">
          <Tabs></Tabs>
          <Calendar/>
        </div>
    </>
  )
}
