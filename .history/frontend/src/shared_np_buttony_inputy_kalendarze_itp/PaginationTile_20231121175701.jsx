import { useState } from 'react'

export default function PaginationTile({title, rounded, setPage, page}) {
const [ active, setActve ] =useState("")
const isActive = () =>{
  console.log(title + " a ta " + page)
  if (page)
  {
    setActve("bg-green-400")
  }
}

    return (
      <>
      {isActive}
          <a
            onClick={() => setPage(title)}
            className={"cursor-pointer inline-flex items-center border border-gray-300  px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 "
             + rounded + " " + active}
          >
            {title}
          </a>
      </>
    )}