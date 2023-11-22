export default function MainButton({text}) {
    return (
        <button
        type="submit"
        className="w-20 sm:w-32 flex-none rounded-md bg-green-600 px-3.5 py-2.5 text-sm font-semibold max-h-10 my-auto
                   text-white shadow-sm hover:bg-green-400 focus-visible:outline focus-visible:outline-2
                   focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
        href="#"
        >
        {text}
        </button>
    )}