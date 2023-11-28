const stats = [


    { id: 1, name: 'Liczba salonów w Polsce', value: 'około 20' },
    { id: 2, name: 'Liczba umówionych wizyt', value: 'już ponad 100' },
    { id: 3, name: 'Nowych użytkowników', value: '46,000' },
  ]
  
  export default function Stats() {
    return (
      <div className="bg-white py-20">

        <div className="mx-auto max-w-2xl pb-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Możemy pochwalić się takimi statystykami
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-700">
              Sam zobacz jakie to proste. Przedstawimy Ci najlepsze salony fryzjerskie z twojego miasta.
              Ty wybierz tylko godzinę i fryzjera, a resztą zajmniemy się my.
            </p>
            </div>
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    )
  }