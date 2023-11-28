import Home from "../home/Home"
import CalendarOfWork from "../biznes/CalendarOfWork"
import SalonPage from "../biznes/SalonPage"
import Workers from "../biznes/Workers"
import { Route, Routes } from "react-router-dom"

export default function BrowserRoutes() {
  return (
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/stronasalonu" element={<SalonPage/>}/>
        <Route path="/pracownicy" element={<Workers/>}/>
        <Route path="/kalendarz" element={<CalendarOfWork/>}/>
      </Routes>
  )
}
