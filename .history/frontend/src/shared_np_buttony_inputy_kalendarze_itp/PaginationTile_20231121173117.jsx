export default function PaginationTile({title, rounded, setPage}) {
    return (
          <a
            onClick={() => setPage(title)}
            className={"pointer inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50" + {rounded}}
          >
            {title}
          </a>
    )}