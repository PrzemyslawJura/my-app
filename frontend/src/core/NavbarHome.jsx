import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Login from '../home/Login'
import ForgetPass from '../home/ForgetPass'
import SigninChose from '../home/SigninChose'
import SigninPerson from '../home/SigninPerson'
import SigninBiznes from '../home/Signinbiznes'
import logo from '../assets/logo.png'


const navigation = [
    { name: 'Strona główna', href: '#' },
    { name: 'Nasze salony', href: '#salons' },
    { name: 'Kontakt', href: '#footer' }
  ]

export default function NavbarHome() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [isShown, setIsShown] = useState(0);
  
    return (
<header className="absolute inset-x-0 top-0 z-50">
<nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
  <div className="flex lg:flex-1">
    <a href="#" className="-m-1.5 p-1.5">
      <span className="sr-only">Logo</span>
      <img
        className="h-8 w-auto"
        src={logo}
        alt=""
      />
    </a>
  </div>
  <div className="flex lg:hidden">
    <button
      type="button"
      className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
      onClick={() => setMobileMenuOpen(true)}
    >
      <span className="sr-only">Otwórz pasek menu</span>
      <Bars3Icon className="h-6 w-6" aria-hidden="true" />
    </button>
  </div>
  <div className="hidden lg:flex lg:gap-x-12">
    {navigation.map((item) => (
      <a key={item.name} href={item.href} className="text-sm font-bold leading-6 text-white">
        {item.name}
      </a>
    ))}
  </div>
  <div onClick={() => setIsShown(1)} className="hidden lg:flex lg:flex-1 lg:justify-end">
    <a className="cursor-pointer text-sm font-bold leading-6 text-white">
      Logowanie / Rejestracja <span aria-hidden="true">&rarr;</span>
    </a>
  </div>
</nav>
<Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
  <div className="fixed inset-0 z-50" />
  <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
    <div className="flex items-center justify-between">
      <a href="#" className="-m-1.5 p-1.5">
        <span className="sr-only">Logo</span>
        <img
          className="h-8 w-auto"
          src={logo}
          alt=""
        />
      </a>
      <button
        type="button"
        className="-m-2.5 rounded-md p-2.5 text-gray-700"
        onClick={() => setMobileMenuOpen(false)}
      >
        <span className="sr-only">Zamknij menu</span>
        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
      </button>
    </div>
    <div className="mt-6 flow-root">
      <div className="-my-6 divide-y divide-gray-500/10">
        <div className="space-y-2 py-6">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="py-6">
          <a
            className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
          >
            Logowanie / Rejestracja
          </a>
        </div>
      </div>
    </div>
  </Dialog.Panel>
</Dialog>


{isShown == 1 && <Login setIsShown={setIsShown} />}
{isShown == 2 && <ForgetPass setIsShown={setIsShown} />}
{isShown == 3 && <SigninChose setIsShown={setIsShown} />}
{isShown == 4 && <SigninPerson setIsShown={setIsShown} />}
{isShown == 5 && <SigninBiznes setIsShown={setIsShown} />}

</header>
    )}