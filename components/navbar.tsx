"use client";
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import logo from '../public/logo1.png'

import { navLinks } from '@/constants/data';
import { IoMenu } from "react-icons/io5"
import { LuSquareChevronLeft } from "react-icons/lu";
import Link from 'next/link';

function Navbar() {
  const [navBg,setNavbg]=useState(false);
  const [menu,setMenu]=useState(false);

  useEffect(()=>{
    const handlder=()=>{
      if(window.scrollY>90){
        setNavbg(true)
      }else{
        setNavbg(false)
      }
    }
    window.addEventListener('scroll',handlder)
    return ()=>window.removeEventListener('scroll',handlder)
  },[])

  return (
    <div className={`max-w-screen-xl mx-auto sticky top-0 z-50 bg-white/70 backdrop-filter backdrop-blur-lg ${navBg ? "shadow-md transition-shadow ":""}  ` }>
      <nav className="flex items-center justify-between flex-wrap max-sm:py-2  px-6 py-4">
        <Link href={"/"} className="flex items-center flex-shrink-0 text-black mr-6 space-x-2"> 
            <Image src={logo} alt='logo' width={25}  />            
          <span className="font-semibold text-md lg:text-xl sm:text-lg ">
          <span className="text-[#0C7EF9] font-bold ">E</span>
            -Web
          <span className="text-[#0C7EF9] ">Solutions</span>
          </span>
        </Link>
        
        <div className={`w-full lg:flex  lg:items-center lg:w-auto hidden `}>
          <div className="text-sm font-medium flex space-x-4 ">
            {navLinks.map((link,index)=>(
              <Link href={link.url} key={index} className={`lg:flex items-center gap-1.5  text-gray-700 hover:text-[#0C7EF9] ${link.title=="Contact" ? "text-white hover:text-[#0C7EF9] hover:bg-transparent rounded-lg transition-all border-1 border-[#0C7EF9] bg-[#0C7EF9] p-2 shadow-xl hover:shadow-none" :"" } `}>
              {link.icon}
              {link.title}
            </Link>
            ))}           
          </div>       
        </div>

        <div className="block lg:hidden">
          <button onClick={()=>setMenu(!menu)} id="nav" className="flex items-center px-3 py-2 border rounded text-[#0C7EF9] border-[#0C7EF9] hover:text-gray-700 hover:border-gray-700">
            <IoMenu />
          </button>

            <div className={`bg-black w-screen h-screen absolute z-[100] opacity-70  top-0 left-0 transition-all duration-500  ${menu ? " " : "-translate-x-[2500px] top-0 "}  `}></div>
            <div className={`bg-[#0C7EF9] w-[80%] h-screen absolute  z-[1000] left-0 top-0 sm:w-[60%] transition-all duration-800 delay-300  ${menu ? " " : " -translate-x-[2500px] top-0 "} `}>
              <button onClick={()=>setMenu(!menu)} className='flex w-full  justify-end p-4 text-white opacity-80'>
                <LuSquareChevronLeft size={25} />
              </button>
              <div className='flex flex-col justify-center space-y-4 p-4  '> 
              {navLinks.map((link,index)=>(
                <Link href="/agence" key={index} className={`flex items-center gap-1.5 w-full mx-0 text-white bg-white/15 backdrop-filter backdrop-blur-xl h-full py-2 px-4 rounded-lg `}>
                {link.icon}
                {link.title}
              </Link>
              ))} 
              </div>
            </div>
          
        </div>
      </nav>
    </div>
  )
}

export default Navbar