import BrowserRoutes from "./BrowserRoutes"
import FooterWithLogo from "./Footer"
import NavbarBiznes from "./NavbarBiznes";
import NavbarHome from "./NavbarHome";



export default function App() {
  let navigationBar = <NavbarHome/>
  function userIsLogin(user)
  {
    if (user == false) navigationBar = <NavbarBiznes/>
    else navigationBar = <NavbarHome/>
  }
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <NavbarBiznes/>
        <BrowserRoutes/>
        <FooterWithLogo/>
      </QueryClientProvider>
    </>
  )
}
