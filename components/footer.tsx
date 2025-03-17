import React from 'react'
import Image from 'next/image'
import { footerServicesList, socialLinks } from '@/constants/data'
import Link from 'next/link'
import { IoChevronForward } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { IoMail,IoLocation  } from "react-icons/io5";

function footer() {
  return (
    <div className='max-w-screen-xl mx-auto bg-mainColor/10 p-10 space-y-4'>
        <div className='flex gap-16 max-md:flex-col'>
          <div className='flex-1 space-y-8'>
            <div className='flex gap-2'>
              <Image src="/logo1.png" alt='logo' width={25} height={25} />
              <span className="font-semibold text-xl ">
              <span className="text-mainColor font-bold ">E</span>
                -Web
              </span>
            </div>

            <p className='text-justify text-sm leading-8 text-gray-700'>Ewebsolutions kech propose une gamme complète de services et de prestations, pour que les petites structures arrivent à communiquer plus efficacement. Notre societé a été créée  géneralement pour répondre a vos besoins et pour optimiser votre stratégie Internet. De la création de votre site  internet jusqu'à son référencement, nous  vous assurons une présence sur le web à des prix particulièrement attractifs. N'hesiter pas à nous contactez par email ou par télephone.</p>

            <div className='flex gap-3 text-3xl text-gray-700  '>
              {socialLinks.map((link,index)=>(
                <Link href={link.url} key={index} className='hover:text-mainColor'  >{link.icon}</Link>
              ))}
            </div>
            <div>
              <p className='text-xl text-mainColor font-bold' >Contactez Nous</p>
              <div className='flex gap-3 flex-wrap mt-3'>

                <div className='flex gap-3 items-center bg-white/50 rounded-lg p-2 shadow'>
                  <div className='bg-mainColor text-white p-2 rounded-lg'>
                    <FaPhone />
                  </div>               
                  <div>
                    <p className='text-xs font-bold text-mainColor'>+212 652642028</p>
                    <p className='text-xs text-gray-600'>Téléphone</p>
                  </div>
                  
                </div>

                <div className='flex gap-3 items-center bg-white/50  rounded-lg p-2 shadow'>
                  <div className='bg-mainColor text-white p-2 rounded-lg'>
                    <IoMail />
                  </div>               
                  <div>
                    <p className='text-xs font-bold text-mainColor'>webSolotion@gmail.com</p>
                    <p className='text-xs text-gray-600'>Mail</p>
                  </div>
                  
                </div>

                <div className='flex gap-3 items-center bg-white/50 rounded-lg p-2 shadow'>
                  <div className='bg-mainColor text-white p-2 rounded-lg'>
                    <IoLocation />
                  </div>               
                  <div>
                    <p className='text-xs font-bold text-mainColor'>Marrakech</p>
                    <p className='text-xs text-gray-600'>Localisation</p>
                  </div>
                  
                </div>

              </div>

              

            </div>
            

          </div>

          <div className='flex-1 space-y-8'>
            <p className='text-xl text-mainColor font-bold' >Nos Services</p>

            <div>
              <ul className='grid grid-cols-2 max-sm:grid-cols-1 gap-5'>
              {footerServicesList.map((service,index)=>(
                
                  <li className='text-sm hover:text-mainColor flex items-baseline gap-2 hover:translate-x-2 transition-all ' key={index}  >
                    <IoChevronForward size={10} />
                    <Link href={service?.url}  >  {service.title} </Link>
                  </li>
                
                
              ))}
              </ul>
            </div>

          </div>

        </div>

        <hr className='text-gray-300' />

        <div className='flex justify-center text-sm text-gray-600'>
            <p className='text-center'>Copyright © 2025 Aymane Bachar. All rights reserved</p>
        </div>
    </div>
  )
}

export default footer