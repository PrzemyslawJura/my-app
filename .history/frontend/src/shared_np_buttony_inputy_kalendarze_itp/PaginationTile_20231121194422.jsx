import { useEffect, useState } from 'react'

export default function PaginationTile({title, rounded, setPage}) {
  const [ active, setActive ] =useState("")
  function isActive()
  {
    setActive(" bg-green-300")
  }

    return (
      <>
        {isActive()}
          <a
            onClick={() => setPage(title)}
            className={"cursor-pointer inline-flex items-center border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 "
             + rounded + active}
          >
            {title}
          </a>
      </>
    )}