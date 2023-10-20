import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'

const questions = [
    {
        question: "Jak umówić wizytę?",
        answer: "To takie proste",
    },
    {
        question: "Dlaczego wybranie nas to dobra decyzja?",
        answer: "To takie prost",
    },
    {
        question: "Jak można dodać tutaj swój salon?",
        answer: "To takie prost",
    },
    {
        question: "Czy można odwołać wizytę?",
        answer: "To takie prost",
    },
    {
        question: "Czy trzeba zakładać konto?",
        answer: "To takie prost",
    },
    {
        question: "Czy trzeba coś dodatkowo płacić za korzystanie z aplkacji?",
        answer: "To takie prost",
    },
]

export default function Faq() {
  return (
    <div className="w-full px-4 pt-6 pb-12 bg-bgGray">
      <div className="mx-auto w-3/5 rounded-2xl p-2">

      <div className="mx-auto max-w-2xl pt-10 lg:pt-12 pb-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Najczęściej zadawane nam pytania
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-700">
              Sam zobacz jakie to proste. Przedstawimy Ci najlepsze salony fryzjerskie z twojego miasta.
              Ty wybierz tylko godzinę i fryzjera, a resztą zajmniemy się my.
            </p>
            </div>
        </div>


        {questions.map((q) =>( 
            <Disclosure>
            {({ open }) => (
                <>
                <Disclosure.Button className="my-4 flex w-full justify-between rounded-lg bg-green-300 px-4 py-2 text-left text-sm font-medium text-green-900 hover:bg-green-400 focus:outline-none focus-visible:ring focus-visible:ring-green-500 focus-visible:ring-opacity-75">
                    <span>{q.question}</span>
                    <ChevronUpIcon
                    className={`${
                        open ? 'rotate-180 transform' : ''
                    } h-5 w-5 text-grren-500`}
                    />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-600">
                    {q.answer}
                </Disclosure.Panel>
                </>
            )}
            </Disclosure>
        ))}
      </div>
    </div>
  )
}
