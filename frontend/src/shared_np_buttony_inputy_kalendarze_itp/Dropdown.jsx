import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Dropdown({title, options}) {
    return (
      <Menu as="div" className="relative ml-3">
      <Menu.Button className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:ring-gray-400">
        {title}
        <ChevronDownIcon className="-mr-1 ml-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
      </Menu.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
          {options.map((option) => (
            <Menu.Item key={option.name}>
            {({ active }) => (
              <a
              href={option.href}
              className={classNames(
              option.current ? 'font-medium text-gray-900' : 'text-gray-500',
              active ? 'bg-gray-100' : '',
              'block px-4 py-2 text-sm'
              )}
              >
                {option.name}
              </a>
            )}
            </Menu.Item>
          ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
    )}