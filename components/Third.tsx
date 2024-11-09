"use client"

import Image from 'next/image'
import React from 'react'
import p1 from '../public/pg-1.jpg'
import p2 from '../public/pg-2.jpg'
import p3 from '../public/pg-3.jpg'


const Third = () => {


  return (
    <div>
        <div className="flex ">
            <p className='text-4xl uppercase py-2 text-black bg-[#e8ee40] px-5 font-bold italic'>What{"'"}s so  spachall </p>
        </div>
        <div className="flex ">
            <p className='text-4xl uppercase text-black bg-[#e8ee40] px-4 font-bold italic'>in our poole ?</p>
        </div>
        {/* image 3 */}
        <div className="flex-col flex lg:flex-row  items-center justify-center mt-10 lg:mt-20 gap-20 mb-10">
            
            <div className="flex flex-col">
                <div className="h-56 w-56 rounded-full relative overflow-hidden ml-5">
                <Image 
                    src={p1} 
                    alt='person'
                    width={300} 
                    height={300} 
                    className="scale-animation rounded-full"/>
                </div>
                <div className='h-1 w-10 bg-slate-200 rounded-xl mt-5'/>
                <h2 className='text-xl font-medium mt-5 text-[#e8ee40] uppercase italic'>Locator feature</h2>
                <p className='mt-3 text-sm text-gray-400 text-balance'>A feature that allows users to track phone calls on the web. For example, the user may only see the first few digits of a phone number until they click a link to view the full number</p>
            </div>

            <div className="flex flex-col">
                <div className="h-56 w-56 rounded-full relative overflow-hidden ml-5">
                <Image 
                    src={p2} 
                    alt='person'
                    width={300} 
                    height={300} 
                    className="scale-animation rounded-full"/>
                </div>
                <div className='h-1 w-10 bg-slate-200 rounded-xl mt-5'/>
                <h2 className='text-xl font-medium mt-5 text-[#e8ee40] uppercase italic'>anonymous setting</h2>
                <p className='mt-3 text-sm text-gray-400 text-balance'>When you choose private mode this gives you the option to browse LinkedIn Profiles anonymously. When activated, the LinkedIn profiles you view can not see that its you viewing</p>
            </div>

            <div className="flex flex-col">
                <div className="h-56 w-56 rounded-full relative overflow-hidden ml-5">
                <Image 
                    src={p3} 
                    alt='person'
                    width={300} 
                    height={300} 
                    className="scale-animation rounded-full"/>
                </div>
                <div className='h-1 w-10 bg-slate-200 rounded-xl mt-5'/>
                <h2 className='text-xl font-medium mt-5 text-[#e8ee40] uppercase italic'>freemium benifites</h2>
                <p className='mt-3 text-sm text-gray-400 text-balance'>our teem that allows users to track phone calls on the web. For example, the user may only see the first few digits of a phone number until they click a link to view the full number</p>
            </div>

        </div>
        {/* the ups and down component */}
        <div className="flex items-center justify-end mt-20 mr-10 ">
            <h1 className='text-4xl py-1 italic uppercase px-4 font-bold bg-[#6cec94] text-black'>why choose us ?</h1>
        </div>
        <div className="flex-col flex lg:flex-row  items-center justify-center gap-20 ">
            {/* 1st  */}
            <div className="flex flex-col items-center justify-end w-72 ">
                <p className='text-right mr-16 text-2xl  mt-5 text-[#6cec94] font-bold uppercase italic '>coustomized  feature</p>
                <p className=' flex text-right'>This is a best option <br /> to make your own </p>
            <div className="flex ml-16 mt-10">
                <div className="h-4 w-7 rounded-tl-md rounded-br-md bg-gradient-to-tr from-blue-400 to-white -rotate-45"/>
                <div className="h-4 w-7 rounded-tl-md rounded-br-md  bg-gradient-to-tr from-blue-400 to-pink-300 -rotate-45"/>
                <div className="h-4 w-7 rounded-tl-md rounded-br-md  bg-gradient-to-tr from-pink-300 to-pink-800 -rotate-45"/>
            </div>
            </div>
            {/* 2nd */}
            <div className="flex flex-col items-center justify-end w-72 mt-40">
                <p className='text-right text-2xl  mt-5 text-[#6cec94] font-bold uppercase italic '>ease of use</p>
                <p className='text-right mr-6'>Unlike your best option to <br /> make your own </p>
            <div className="flex ml-16 mt-10">
                <div className="h-4 w-7 rounded-tl-md rounded-br-md bg-gradient-to-tr from-blue-400 to-white -rotate-45"/>
                <div className="h-4 w-7 rounded-tl-md rounded-br-md  bg-gradient-to-tr from-blue-400 to-pink-300 -rotate-45"/>
                <div className="h-4 w-7 rounded-tl-md rounded-br-md  bg-gradient-to-tr from-pink-300 to-pink-800 -rotate-45"/>
            </div>
            </div>
            {/* 3rd */}
            <div className="flex flex-col items-center justify-end w-72 mt-80">
                <p className='text-right text-2xl  mt-5 text-[#6cec94] font-bold uppercase italic '>24/7 support</p>
                <p className='text-right mr-6'>You can take our support <br />  for sny time </p>
            <div className="flex ml-16 mt-10">
                <div className="h-4 w-7 rounded-tl-md rounded-br-md bg-gradient-to-tr from-blue-400 to-white -rotate-45"/>
                <div className="h-4 w-7 rounded-tl-md rounded-br-md  bg-gradient-to-tr from-blue-400 to-pink-300 -rotate-45"/>
                <div className="h-4 w-7 rounded-tl-md rounded-br-md  bg-gradient-to-tr from-pink-300 to-pink-800 -rotate-45"/>
            </div>
            </div>

        </div>

        {/* clien agree part */}
        <div className=""></div>
    </div>
    )
};

export default Third;