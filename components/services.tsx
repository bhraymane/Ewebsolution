"use client"
import React from 'react'
import { FaChalkboardTeacher } from "react-icons/fa";
import {serviceList} from '@/constants/data'
import Link from 'next/link'
import {motion} from "framer-motion"

function services() {

    const fadeInAnimation={
        initial:{
          opacity:0,
          y:100,
        },
        animate:(index:number)=>({
          opacity:1,
          y:0,
          transition:{
            delay:0.05*index,
          }
        })
      }

  return (
    <div className='h-full flex flex-col justify-center px-6 py-10 items-center bg-mainColor/5 '>
        
        <motion.div
        initial={{y:-50,opacity:0}}
        whileInView={{y:0 ,opacity:1}}
        transition={{
            duration:1,
            delay:0.5,
            type:'spring'
        }}
        viewport={{
            once:true,
        }}
        className='flex flex-col justify-center items-center'>
            <span className='bg-mainColor px-3 py-1 text-sm rounded-md font-medium text-white'>Nos Services</span>
            <h2 className='text-4xl font-semibold mt-6  max-sm:text-xl'>découvrez nos services</h2>
            <p className='text-gray-700 max-sm:mt-1 text-center max-sm:text-sm '>Votre site Web est le meilleur investissement pour avoir de nouveaux clients </p>

        </motion.div>
        <div className='grid grid-cols-4 max-xl:grid-cols-2 max-md:grid-cols-1 gap-6 mt-10 '>
            {serviceList.map((service,index)=>(
                <motion.div 
                variants={fadeInAnimation}
                initial='initial'
                whileInView="animate"
                viewport={{
                  once:true,
              }}
                custom={index}
                
                key={index}   className='bg-white p-6 rounded-xl shadow-xl hover:shadow-2xl hover:bg-mainColor hover:text-white hover:scale-105 transition-all' >
                    <Link href={service.url} >     
                    <div className='text-4xl max-sm:text-xl bg-mainColor text-white p-2 rounded-lg relative max-[321px]:left-[50%] max-[321px]:translate-x-[-50%] inline-block '>
                        {service.icon}
                    </div>
                    
                    <h3 className='text-xl max-sm:text-lg font-semibold mt-4'>{service.title} </h3>
                    <p className=' text-sm max-sm:text-xs text-justify mt-2'>{service.description}</p>
                    </Link>            
                </motion.div>
            ))}
            
            
        </div>

    </div>
  )
}

export default services