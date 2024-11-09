"use client"

import Image from 'next/image'
import React from 'react'
import p1 from '../public/pg-1.jpg'
import p2 from '../public/pg-2.jpg'
import p3 from '../public/pg-3.jpg'

const Third = () => {


  return (
    <div>
        <div className="flex items-center justify-start">
            <h1 className='text-4xl bg-[#e8ee40] px-3 text-black font-bold italic text-balance'>What{"'"}s so spacial about our poll ?</h1>
        </div>
        {/* image 3 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mt-20 mb-10 items-center justify-center mx-10 gap-y-10 gap-x-10">

            <div className="flex flex-col ">
                <Image 
                src={p1} 
                alt='person'
                width={300} 
                height={300} 
                className="scale-up  rounded-full"/>

                <div className='h-1 w-10 bg-slate-200 rounded-xl'/>
                <h2 className='text-xl font-medium mt-5 text-[#e8ee40] uppercase italic'>Locator feature</h2>
                <p className='mt-3 text-sm text-gray-400'>A feature that allows users to track phone calls on the web. For example, the user may only see the first few digits of a phone number until they click a link to view the full number</p>
            </div>
            <div className="flex flex-col ">
                <Image 
                src={p2}
                alt='person'
                width={300} 
                height={300} 
                className='scale-up rounded-full'/>

                <div className='h-1 w-10 bg-slate-200 rounded-xl'/>
                <h2 className='text-xl font-medium mt-5 text-[#e8ee40] uppercase italic'>Locator feature</h2>
                <p className='mt-3 text-sm text-gray-400'>A feature that allows users to track phone calls on the web. For example, the user may only see the first few digits of a phone number until they click a link to view the full number</p>
            </div>
            <div className="flex flex-col ">
                <Image 
                src={p3} 
                alt='person'
                width={300} 
                height={300} 
                className='scale-up rounded-full'/>

                <div className='h-1 w-10 bg-slate-200 rounded-xl'/>
                <h2 className='text-xl font-medium mt-5 text-[#e8ee40] uppercase italic'>Locator feature</h2>
                <p className='mt-3 text-sm text-gray-400'>A feature that allows users to track phone calls on the web. For example, the user may only see the first few digits of a phone number until they click a link to view the full number</p>
            </div>

        </div>
    </div>
    )
};

export default Third;