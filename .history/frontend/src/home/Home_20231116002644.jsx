import Location from '../components/Location'
import Feature from './Feature'
import ListOfSalons from './ListOfSalons'
import Faq from './Faq'
import Stats from './Stats'
import MainButton from '../shared_np_buttony_inputy_kalendarze_itp/MainButton'
import TitleAndParagraph from '../shared_np_buttony_inputy_kalendarze_itp/TitleAndParagraph'
import { useState } from 'react'

const mainTitle = 'Łączymy salony fryzjerskie z całej polski';
const mainParagraph = 'Sam zobacz jakie to proste. Przedstawimy Ci najlepsze salony fryzjerskie z twojego miasta. Ty wybierz tylko godzinę i fryzjera, a resztą zajmniemy się my.';
const searchTitle = 'Wybierz miasto i znajdź salon dla Ciebie';
const searchParagraph = 'Sam zobacz jakie to proste. Przedstawimy Ci najlepsze salony fryzjerskie z twojego miasta. Ty wybierz tylko godzinę i fryzjera, a resztą zajmniemy się my.';


export default function Home() {
  const [search, setSearch] = useState("");
  return (
    <>
      <div className='min-h-screen bg-bgGray'>
        <div className="relative isolate bg-main-image bg-cover">
          <div className="mx-auto max-w-2xl pt-20 lg:pt-32 pb-12 text-center">
            <TitleAndParagraph title = {mainTitle} paragraph={mainParagraph} h1Color="text-white" pColor="text-slate-50"/>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Location setSearch={setSearch}></Location>
              <div href="#salons">
                <MainButton text="Szukaj" href="#"/>
              </div>
            </div>
          </div>
        </div>
        <Feature></Feature>
      </div>

      <div id="salons" className="mx-auto max-w-2xl pt-10 lg:pt-12 pb-4 text-center">
        <TitleAndParagraph title = {searchTitle} paragraph={searchParagraph} h1Color="text-gray-900" pColor="text-gray-700"/>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Location setSearch={setSearch}></Location>
          <MainButton text="Szukaj"/>
        </div>
      </div>

      <div className='w:4/5 lg:w-3/5 m-auto'>
        <ListOfSalons search={search}/>
      </div>

      <Faq></Faq>
      <Stats></Stats>
    </>
  )
}
