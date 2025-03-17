import React from 'react'
import { FaChalkboardTeacher } from "react-icons/fa";
import {serviceList} from '@/constants/data'
import Link from 'next/link'


function services() {
  return (
    <div className='h-full flex flex-col justify-center px-6 py-10 items-center bg-mainColor/5 '>
        <div>
            <span className='bg-mainColor px-3 py-1 text-sm rounded-md font-medium text-white'>Nos Services</span>
        </div>
        <h2 className='text-4xl font-semibold mt-6  max-sm:text-xl'>découvrez nos services</h2>
        <p className='text-gray-700 max-sm:mt-1 text-justify max-sm:text-sm '>Votre site Web est le meilleur investissement pour avoir de nouveaux clients </p>
        <div className='grid grid-cols-4 max-xl:grid-cols-2 max-md:grid-cols-1 gap-6 mt-10 '>
            {serviceList.map((service,index)=>(
                <Link key={index} href={service.url}  className='bg-white p-6 rounded-xl shadow-xl hover:shadow-2xl hover:bg-mainColor hover:text-white hover:scale-105 transition-all' >
                    <div className='text-4xl max-sm:text-xl bg-mainColor text-white p-2 rounded-lg relative max-[321px]:left-[50%] max-[321px]:translate-x-[-50%] inline-block '>
                        {service.icon}
                    </div>
                    
                    <h3 className='text-xl max-sm:text-lg font-semibold mt-4'>{service.title} </h3>
                    <p className=' text-sm max-sm:text-xs text-justify mt-2'>{service.description}</p>                
                </Link>
            ))}
            
            
        </div>

    </div>
  )
}

export default services