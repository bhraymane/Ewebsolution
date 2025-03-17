"use client"
import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { clientList } from '@/constants/data';
import Image from 'next/image';
import { FaStar } from "react-icons/fa";

function slide() {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 1
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 
        }
      };
  return (
        <div>
            <Carousel  className='space-x-5'
            swipeable={true}
            draggable={false}
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={5000}
            keyBoardControl={true}
            removeArrowOnDeviceType={["tablet", "mobile"]}
            >
                        
            {clientList.map((client,index)=>(
                <div className='mx-4 mt-10 mb-10'>
                <div key={index} className='bg-white space-y-4 p-6 rounded-xl shadow-xl hover:shadow-2xl hover:bg-mainColor hover:text-white hover:scale-105 transition-all' >
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
                                    </div>
                ))}
                
            </Carousel>
        </div>   
  )
}

export default slide