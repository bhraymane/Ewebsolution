"use client"
import React from 'react'
import { clientList } from '@/constants/data'
import { FaStar } from "react-icons/fa";
import { FaStarHalfStroke } from "react-icons/fa6";
import Image from 'next/image'
import Slide from '@/components/slide'
import {motion} from "framer-motion"

function avisclient() {


  return (
    <motion.div 
    initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{
            duration:1,
            delay:0.6,
            type:'keyframes'
        }}
        viewport={{
            once:true,
        }}
    
    className='h-full flex flex-col justify-center px-6 py-10  bg-mainColor/5 '>
        <div className='flex flex-col items-center'>
            <div>
                <span className='bg-mainColor px-3 py-1 text-sm rounded-md font-medium text-white'>Avis des Clients</span>
            </div>
            <h2 className='text-4xl font-semibold mt-6  max-sm:text-xl'>Nos clients sont heureux</h2>
            <p className='text-gray-700 max-sm:mt-1 text-center max-sm:text-sm '>On s'engagent à la hauteur de la confiance accordée. </p>

        </div>

        <Slide />
            {/* <div className='grid grid-cols-4 max-xl:grid-cols-2 max-md:grid-cols-1 gap-6 mt-10 '>         
                {clientList.map((client,index)=>(
                    <div key={index} className='bg-white p-6 rounded-xl shadow-xl hover:shadow-2xl hover:bg-mainColor hover:text-white hover:scale-105 transition-all space-y-4' >
                        <div className='flex items-center  gap-2'>
                            <Image src={client.image} alt="client" width={50} height={50} className='rounded-full' />
                            <div>
                                <h3 className='text-xl font-semibold'>{client.name} </h3>
                                <p className=' text-sm '>{client.job}</p>
                            </div>
                        </div>
                        <p className='text-justify text-sm '>{client.review}</p>
                        <div className='flex space-x-1 text-yellow-400'>
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </div>
                    </div>
                ))}
            </div> */}
            
        </motion.div>
  )
}

export default avisclient