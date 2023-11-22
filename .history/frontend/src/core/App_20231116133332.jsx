import BrowserRoutes from "./BrowserRoutes"
import FooterWithLogo from "./Footer"
import NavbarBiznes from "./NavbarBiznes";
import QueryClientProvider from 'react-query'

const queryClient = new QueryClient()

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
