import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import PaginationTile from '../shared_np_buttony_inputy_kalendarze_itp/PaginationTile'
import { useState } from 'react'

export default function Pagination({result, setPage, page}) {
  const [ count, setCount ] =useState([])
  function paginationCount(result)
  {
    result=(result+5)/5
    for (let x = 1; x <= result; x++)
    {
      count.push(x)
      console.log(x)
    }
  }

  function paginationCountRemover(result)
  {
    result=(result+5)/5
    for (let x = 1; x <= result; x++)
    {
      count.pop(x)
    }
  }

  return (
    <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 pt-3 pb-10 sm:px-6">
      {paginationCount(result)}
      <div className="flex flex-1 justify-between sm:hidden">
        <PaginationTile title="Poprzednie" rounded="rounded-md"/>
        <PaginationTile title="Następny" rounded="rounded-md"/>
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Widoczne od <span className="font-medium">1</span> do <span className="font-medium">5</span> z{' '}
            <span className="font-medium">{result}</span> wyników
          </p>
        </div>
        <nav className=" inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
            <a
              onClick={page > 1 ? () => setPage((prev)=>prev-1) : () => setPage(2)}
              className="inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">Poprzedni</span>
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </a>
            {count.map((item) =>(
              <PaginationTile title={item} rounded=""/>
            ))}

            <a
              onClick={() => setPage((prev)=>prev+1)}
              className="inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">Następna</span>
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </a>
          </nav>
      </div>
      {paginationCountRemover(result)}
    </div>
  )
}