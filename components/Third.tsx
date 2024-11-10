"use client"

import Image from 'next/image'
import React from 'react'
import p1 from '../public/pg-1.jpg'
import p2 from '../public/pg-2.jpg'
import p3 from '../public/pg-3.jpg'
import s1 from '../public/active.png'
import s2 from '../public/mark.png'
import s3 from '../public/userup.png'
import i1 from '../public/facebook.svg'
import i2 from '../public/instagram.svg'
import i3 from '../public/twitter.svg'
import Pic from './Pic'



const Third = () => {
    const year = new Date().getFullYear()

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
            <div className="flex flex-col items-center justify-end w-72 lg:mt-40">
                <p className='text-right text-2xl  mt-5 text-[#6cec94] font-bold uppercase italic '>ease of use</p>
                <p className='text-right mr-6'>Unlike your best option to <br /> make your own </p>
            <div className="flex ml-16 mt-10">
                <div className="h-4 w-7 rounded-tl-md rounded-br-md bg-gradient-to-tr from-blue-400 to-white -rotate-45"/>
                <div className="h-4 w-7 rounded-tl-md rounded-br-md  bg-gradient-to-tr from-blue-400 to-pink-300 -rotate-45"/>
                <div className="h-4 w-7 rounded-tl-md rounded-br-md  bg-gradient-to-tr from-pink-300 to-pink-800 -rotate-45"/>
            </div>
            </div>
            {/* 3rd */}
            <div className="flex flex-col items-center justify-end w-72 lg:mt-80">
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
        <div className="flex items-center justify-center mt-10">
            <h1 className='italic font-bold text-5xl'>OUR CUSTOMERS <br /> ARE AGREE </h1>
        </div>
        {/* 3 section */}
        <div className="flex flex-col lg:flex-row items-center justify-around mt-20 gap-y-20">
            <div className="flex flex-col items-center justify-center">
                <Image src={s2} height={150} width={150} alt='s1'/>
                <p className='py-1 px-3 italic font-bold bg-[#4cf581] text-black mt-5 text-4xl'>95%</p>
                <p className='mt-2 italic text-gray-300'>satisfaction rate</p>
            </div>

            <div className="flex flex-col items-center justify-center">
                <Image src={s3} height={150} width={150} alt='s1'/>
                <p className='py-1 px-3 italic font-bold bg-[#4cf581] text-black mt-5 text-4xl'>50%</p>
                <p className='mt-2 italic text-gray-300'>increase in user</p>
            </div>

            <div className="flex flex-col items-center justify-center">
                <Image src={s1} height={150} width={150} alt='s1'/>
                <p className='py-1 px-3 italic font-bold bg-[#4cf581] text-black mt-5 text-4xl'>147,000</p>
                <p className='mt-2 italic text-gray-300'>daily activity</p>
            </div>
        </div>

        {/* grap section */}
        <div className="flex flex-col mt-10 gap-10">

            <div className="flex lg:ml-10 mt-10 items-center justify-start">
                <div className="h-10 w-16 rounded-tr-3xl rounded-bl-3xl  bg-gradient-to-tr from-blue-400 to-pink-800 -rotate-45 rounded-md"/>
                <div className="h-8 w-14 rounded-tr-3xl rounded-bl-3xl  bg-gradient-to-tr from-blue-400 to-pink-800 -rotate-45 rounded-md"/>
            </div>

            <div className="flex lg:ml-44">
                <p className='text-3xl font-medium text-balance lg:mx-20'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, mollitia similique voluptates enim vero minima quidem voluptate cupiditate aperiam nobis.</p>
            </div>

            <div className="flex  mt-10 items-center justify-end mr-10">
            <div className="h-8 w-14 rounded-tr-3xl rounded-bl-3xl  bg-gradient-to-tr from-blue-400 to-pink-800 -rotate-45 rounded-md"/>
            <div className="h-10 w-16 rounded-tr-3xl rounded-bl-3xl  bg-gradient-to-tr from-blue-400 to-pink-800 -rotate-45 rounded-md"/>
            </div>
        </div>
        {/* testomonials  */}
        <div className="flex items-center justify-start mt-10">
            <h2 className='text-4xl bg-[#2cefec] text-black font-bold italic uppercase px-2'>from our user</h2>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-around mt-20 gap-10 gap-y-32">
            <Pic 
            text='Testimonials are short quotes from people who love your brand.  a great way to convince customers to try your services.'
            image='/p-1.png'
            name='larry william'/>
            <Pic 
            text='Testimonials are short quotes from people who love your brand.  a great way to convince customers to try your services.'
            image='/p-3.png'
            name='jeemy witsone'/>
            <Pic 
            text='Testimonials are short quotes from people who love your brand.  a great way to convince customers to try your services.'
            image='/p-2.png'
            name='harry leranout'/>
        </div>
        {/* fotter */}
        <div className="mt-40 grid grid-cols-1 lg:grid-cols-2  gradient rounded-xl">
            <div className="flex">
                <h2 className='tracking-widest text-4xl  text-black font-bold italic uppercase px-2 mt-10 ml-5'>let{"'"}s chat</h2>
            </div>
            
            <div className="mt-20 mx-10">
                <p className='text-lg text-black font-bold'>phon :</p>
                <p className='text-lg text-black font-medium mt-2'>+0123-2362</p>
                <p className='text-lg text-black font-bold mt-10'>Email :</p>
                <p className='text-lg text-black font-medium mt-2'>kaabir24124@gmail.com</p>
                <p className='text-lg text-black font-bold mt-10'>Social :</p>
                <div className="flex items-center mt-5 gap-5 mb-10">
                    <Image height={30} width={30} src={i1} alt='icon'/>
                    <Image height={30} width={30} src={i2} alt='icon'/>
                    <Image height={30} width={30} src={i3} alt='icon'/>
                </div>
            </div>

            <div className="flex items-center justify-end mb-5 mt-10 mx-10">
                <p className='text-sm text-black'> &copy; CONVA CRP all rights {year} </p>
            </div>

        </div>
    </div>
    )
};

export default Third;