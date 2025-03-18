"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { IoIosBusiness } from "react-icons/io";
import {motion} from "framer-motion"

function about() {
  return (
    <div className='h-full flex justify-center px-6 max-sm:px-1 py-10 max-sm:py-4 items-center bg-gray-50'>
        <motion.div
        initial={{x:-20, opacity:0}}
        whileInView={{x:0 ,opacity:1}}
        transition={{
            duration:1,
            delay:0.8,
            type:'spring'
        }}
        viewport={{
            once:true,
        }}

        className='relative flex-1  max-lg:hidden   '>
            <div  className='w-[400px] h-[400px] rotate-4 bg-mainColor max-lg:hidden  absolute z-0 -top-4 left-9 rounded-4xl shadow-2xl'></div> 
            <div className='flex justify-center '>
                <Image src="/aboutpic.jpeg" alt="about" width={400} height={400} className='rounded-2xl z-1' />
            </div>
        </motion.div>
        
        <motion.div
        initial={{x:20, opacity:0}}
        whileInView={{x:0 ,opacity:1}}
        transition={{
            duration:1,
            delay:0.8,
            type:'spring'
        }}
        viewport={{
            once:true,
        }}
        className='p-10 max-sm:p-6 flex-1 space-y-4 max-sm:flex max-sm:flex-col max-sm:justify-center max-sm:items-center '>
            <div>
                <span className='bg-mainColor px-3 py-1 text-sm rounded-md font-medium text-white'>A propos de nous</span>
            </div>
            <h2 className='text-4xl font-semibold max-sm:text-xl'>Qui sommes-nous</h2>
            <p className='text-gray-700 mt-8 max-sm:mt-1 text-justify max-sm:text-sm '>Située à Marrakech, eWeb Solutions Kech est une société de développement spécialisée dans la création de sites internet dynamique sur-mesure et le développement d&apos;application Web et Mobile sur-mesure. Notre équipe est constituée de graphistes et développeurs web rompus à la création de sites internet et d&apos;applications Web et Mobile. </p>
            <Link href="/notre-societe" className='bg-mainColor inline-block text-white max-sm:text-xs px-3 py-2 rounded-md hover:bg-mainColor/70 transition-all '>
                <div className='flex items-center space-x-3'>
                    <IoIosBusiness />
                    <p>En savoir plus</p>
                </div>  
            </Link>
        </motion.div>

    </div>
  )
}

export default about