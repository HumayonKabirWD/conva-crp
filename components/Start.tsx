import React from 'react'
import Image from "next/image";
import bg from "../public/bg.png";
import logo from "../public/icon.png";
import Link from "next/link";
import Seconde from './Seconde';



const Start = () => {
  return (
    
      <div className="flex">
        <Image src={bg} alt="bg" className="absolute"/>

      <Link href="/" className="absolute mt-20 ml-20">
        <div className=" flex items-center">
          <Image src={logo} height={70} width={70} alt="logo"/>
          <p className="mt-5 text-xl font-semibold text-[#C43B92]">CONVA-CRP</p>   
        </div>
        <p className="tracking-widest font-mono ml-20 text-gray-400">TEC ICN</p>
      </Link>

      <div className="flex absolute right-5 top-5 gap-4">
        <Link className="bg-[#C43B92] py-2 px-4 rounded-full font-bold hover:scale-105" href="/">Home</Link>
        <Link className="bg-[#C43B92] py-2 px-4 rounded-full font-bold hover:scale-105" href="/">Service</Link>
        <Link className="bg-[#C43B92] py-2 px-4 rounded-full font-bold hover:scale-105" href="/">About</Link>
      </div>

      <div className="flex flex-col items-center justify-center absolute mt-72 text-center">
        <h1 className="mx-0 lg:mx-20 text-balance text-6xl md:text-6xl lg:text-8xl uppercase italic font-bold text-[#C43B92] scale-up">describing the future</h1>
        <button className="mt-20 bg-[#C43B92] py-2 px-5 hover:scale-105 rounded-md font-bold ">Learn More</button>
      </div>

    </div>
    
  )
}

export default Start