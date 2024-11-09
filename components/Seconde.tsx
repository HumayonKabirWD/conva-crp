import Image from 'next/image'
import React from 'react'
import tir from '../public/tirrr.png'

const Seconde = () => {
  return (
    <div className='mb-20'>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* first grid  */}
          <div className="flex flex-col mb-10">
            <h1 className='mx-10 font-bold text-5xl lg:text-6xl uppercase italic text-[#5AB2FF] mb-10'>We started small.</h1>
            {/* colore dot digine */}
            <div className="flex items-center ml-10">
              <div className="h-4 w-7 rounded-tl-md rounded-br-md bg-gradient-to-tr from-blue-400 to-white -rotate-45"/>
              <div className="h-4 w-7 rounded-tl-md rounded-br-md  bg-gradient-to-tr from-blue-400 to-pink-300 -rotate-45"/>
              <div className="h-4 w-7 rounded-tl-md rounded-br-md  bg-gradient-to-tr from-pink-300 to-pink-800 -rotate-45"/>
            </div>

            <p className='mx-10 mt-10 text-balance text-gray-400'>This is the best mordan and secure production company that are you looking for. Theare you go its no chance to skip the most value for mony we can make for you. We start our bussiness rally small then we can start a mega compani for your mony making proses</p>
          </div>
          {/* second grid */}
          <div className="flex items-center justify-center -mt-10">
            <Image src={tir} alt='tir image'/>
          </div>
        </div>
    </div>
  )
}

export default Seconde