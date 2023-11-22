import BrowserRoutes from "./BrowserRoutes"
import FooterWithLogo from "./Footer"
import NavbarBiznes from "./NavbarBiznes";

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
