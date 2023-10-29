import stepone from '../assets/stepone.jpg'
import steptwo from '../assets/steptwo.jpg'
import stepthree from '../assets/stepthree.jpg'

const features = [


  {
    name: 'Rejestracja',
    description:
      'Rejestracja będzie zajmowała chwilę i robisz to tylko raz',
    icon: stepone,
  },
  {
    name: 'Rezerwacja',
    description:
      'Wybierasz salon, datę i godzinę',
    icon: steptwo,
  },
  {
    name: 'Wizyta',
    description:
      'Przychodzisz na podaną godzinę',
    icon: stepthree,
  },
]

export default function Feature() {
  return (
    <div className="py-8 lg:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-green-600">Szybciej, łatwiej i bliżej</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Sprawdź sam, jakie to proste
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-2xl lg:max-w-4xl">
          <dl className="grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center  ">
                      <img className='rounded-lg h-10 w-10' src={feature.icon}></img>
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}