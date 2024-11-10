import Image from 'next/image';
import React from 'react'

const Pic = (
    { 
        image,
        name,
        text
    }:{
        image:string,
        name:string,
        text:string
    }
) => {
  return (
    <div className="max-w-sm p-6 rounded-lg bg-yellow-300 relative shadow-lg text-black">
      <p className="text-lg font-semibold mb-10">
        {text}
      </p>
      <div className="flex items-center space-x-4">
        <div className="absolute bottom-0 left-0 transform translate-y-32 lg:translate-y-1/2 translate-x-1/4 rounded-full ">
          <Image
            src={image} // replace with your image path
            alt="Profile picture of Aaliyah Igwe"
            width={150}
            height={150}
            className="rounded-full"
          />
        </div>
      </div>
      <p className='text-right font-bold text-xl'> <q> {name} </q> </p>

    </div>
  )
}

export default Pic