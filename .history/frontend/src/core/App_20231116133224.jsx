import BrowserRoutes from "./BrowserRoutes"
import FooterWithLogo from "./Footer"
import NavbarBiznes from "./NavbarBiznes";
import QueryClientProvider from 'react-query'

export default function App() {
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
