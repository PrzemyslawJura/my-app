import BrowserRoutes from "./BrowserRoutes"
import FooterWithLogo from "./Footer"
import NavbarBiznes from "./NavbarBiznes";
import NavbarHome from "./NavbarHome";



export default function App() {
  let navigationBar = <NavbarHome/>
  function userIsLogin(user)
  {
    if (user == true) navigationBar = <NavbarBiznes/>
    else navigationBar = <NavbarHome/>
  }
  return (
    <>
      {userIsLogin(false)}
      {navigationBar}
      <BrowserRoutes/>
      <FooterWithLogo/>
    </>
  )
}
