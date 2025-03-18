"use client"
import Link from 'next/link'
import { IoMail } from "react-icons/io5";
import { FaClipboardList } from "react-icons/fa";
import { TbDeviceDesktopCode } from "react-icons/tb";
import { FaGraduationCap } from "react-icons/fa";
import { MdDesignServices } from "react-icons/md";
import { TbSeo } from "react-icons/tb";
import Image from 'next/image'

function Hero() {
  return (
    <div className='h-screen max-sm:h-full max-sm:px-0 lg:py-6 max-lg:py-0 px-6 flex max-lg:flex-col max-lg:justify-normal  justify-between  '> 
        <div 
        
        className='relative max-w-[650px] flex flex-col max-sm:px-2  max-lg:items-center max-lg:max-w-full max-lg:text-center max-lg:mt-0 mt-10 max-lg:space-y-10 max-sm:space-y-3 space-y-4 '>
            <div className='hidden  h-[65%]  w-full max-lg:block bg-mainColor absolute max-sm:rounded-b-none  rounded-4xl max-lg:w-full   max-lg:rounded-t-none max-lg:-z-20 object-cover  '  ></div>
            <Image src="/homepic.jpeg" alt="hero" width={200} height={200}  className='hidden  max-lg:block absolute max-sm:rounded-b-none max-lg:brightness-30  rounded-4xl max-lg:w-full  max-lg:rounded-t-none max-lg:-z-10 object-cover  ' />

            <div className='max-lg:mt-8'>
                <span className='bg-mainColor px-3 py-1 text-sm rounded-md font-medium text-white'>Web Solutions</span>
            </div>
            <h1 className='text-4xl max-lg:text-white max-lg:text-3xl max-lg:max-w-xl max-lg:leading-16 max-sm:leading-10 max-sm:text-[20px] max-sm:max-w-md font-bold  text-gray-800 leading-12'>Agence Web à <span className='text-mainColor'> <div className='bg-white inline-block px-1 -rotate-3 ' > Marrakech</div></span> Création de Sites, Référencement & Solutions Digitales</h1>
            <p className='text-md max-sm:text-xs text-gray-500  max-lg:text-white  '>Boostez votre présence en ligne avec notre expertise digitale.</p>
            <div className='flex space-x-4 max-lg:text-sm max-sm:text-xs max-[320px]:flex-col max-[320px]:justify-center max-[320px]:space-x-0 max-[320px]:space-y-2'>
                <Link href="/contact" className='bg-mainColor inline-block text-white px-3 py-2 rounded-md hover:bg-mainColor/70 transition-all '>
                    <div className='flex items-center space-x-3'>
                        <IoMail />
                        <p>Contact Nous</p>
                    </div>  
                </Link>

                <Link href="nos-services" className='bg-pink-700 inline-block text-white px-3 py-2 rounded-md hover:bg-pink-700/70 transition-all '>
                    <div className='flex items-center space-x-3'>
                        <FaClipboardList />
                        <p>Nos Services</p>
                    </div>  
                </Link>

                

            </div>

            <div className='flex justify-center gap-6 '>
                    <div className='flex-1 shadow-lg p-4 rounded-lg  hover:bg-mainColor bg-white hover:text-white hover:scale-105 hover:shadow-xl transition-all'>
                        <span className='text-xl max-sm:text-sm font-semibold '>+8</span>
                        <p className='max-sm:text-[8px] text-sm'>Années d'expérience</p>                    
                    </div>

                    <div className='flex-1 shadow-lg p-4 rounded-lg hover:bg-mainColor bg-white hover:text-white hover:scale-105 hover:shadow-xl transition-all' >
                        <span className='text-xl font-semibold max-sm:text-sm'>+418</span>
                        <p className='max-sm:text-[8px] text-sm'>Projets Réalisés</p>                    
                    </div>

                    <div className='flex-1 shadow-lg p-4 rounded-lg hover:bg-mainColor bg-white hover:text-white hover:scale-105 hover:shadow-xl transition-all ' >
                        <span className='text-xl font-semibold max-sm:text-sm'>+800</span>
                        <p className='max-sm:text-[8px] text-sm'>Clients Satisfaits </p>                    
                    </div>
            </div>

            <div className=' '>
                {/* <div className='bg-white p-4 rounded-lg shadow-lg inline-block'>
                    <p className='text-sm max-sm:text-xs font-semibold text-gray-700'>Customer review</p>
                    <div className='flex items-center space-x-2 text-xl mt-2 max-sm:text-sm'>
                        <p className='text-gray-800 font-bold '>4,8/5</p>
                        <div className='flex space-x-1 text-yellow-400'>
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStarHalfStroke />
                        </div>
                    </div>
                </div> */}

                
                
                 
            </div>
            
        </div>

        <div 
        
        className='relative max-lg:hidden '>
            <div  className='w-[350px] h-[400px] bg-mainColor   absolute -z-20 -left-9 rounded-4xl shadow-2xl'></div>
            <Image src="/homepic.jpeg" alt="hero" width={400} height={400} className='mt-10 max-sm:rounded-b-none max-lg:brightness-30 max-sm:brightness-25 rounded-4xl max-lg:w-full max-lg:mt-0 max-lg:rounded-t-none max-lg:absolute max-lg:-z-40 max-lg:h-70 object-cover   ' />
            <div className='bg-white/90 flex gap-1 justify-center items-center backdrop-filter backdrop-blur-xl absolute text-xs px-3 py-2 font-semibold text-mainColor  shadow-xl -right-2 top-1 rounded-md'>
            <TbDeviceDesktopCode />
            Creation des sites internet  
            </div>
            <div className='bg-white/90  flex gap-1 justify-center items-center backdrop-filter backdrop-blur-xl absolute text-xs px-3 py-2 font-semibold text-mainColor  shadow-xl -left-20 top-8 rounded-md'>
            <TbSeo />
            Referencement SEO 
            </div>
            <div className='bg-white/90  flex gap-1 justify-center items-center backdrop-filter backdrop-blur-xl absolute text-xs px-3 py-2 font-semibold text-mainColor  shadow-xl -left-28 top-46 rounded-md'>
            <MdDesignServices />
            Creation Graphic 
            </div>
            <div className='bg-white/90  flex gap-1 justify-center items-center backdrop-filter backdrop-blur-xl absolute text-xs px-3 py-2 font-semibold text-mainColor  shadow-xl -left-22 top-80 rounded-md'>
            <FaGraduationCap />
            Formation 
            </div>
            
        </div>
        
       
        <div>

        </div>
    </div>
  )
}

export default Hero