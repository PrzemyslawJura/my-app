import Worker from "../components/Workere"
import React, { useState } from 'react'
import AddWorker from "./AddWorker"

export default function Workers() {
  const [isShown, setIsShown] = useState(0);
  return (
    <>
        <div className="w-3/5 m-auto my-5 ">
            <Worker/>
            {isShown == 1 && <AddWorker setIsShown={setIsShown} />}
            {/*}{isShown == 2 && <AddService setIsShown={setIsShown} />}{*/}

        </div>
    </>
  )
}
