"use client"
import React from 'react'
import Link from 'next/link'
import { TbCertificate } from "react-icons/tb";
import { LuMessagesSquare } from "react-icons/lu";
import { TbReportMoney } from "react-icons/tb";
import {motion} from "framer-motion"

function whyus() {
  return (
    <div className='h-full flex max-lg:flex-col justify-center px-6 py-10 items-center space-x-4 '>
        <motion.div 
        initial={{x:-20, opacity:0}}
        whileInView={{x:0 ,opacity:1}}
        transition={{
            duration:1,
            delay:0.5,
            type:'spring'
        }}
        viewport={{
            once:true,
        }}
        
        className='flex-1'>
            <span className='bg-mainColor px-3 py-1 text-sm rounded-md font-medium text-white'>Pourquoi nous</span>
            <h2 className='text-4xl font-semibold mt-6  max-sm:text-xl'>Pourquoi vous allez choisir de collaborer avec nous</h2>
            <p className='text-gray-700 mt-8 max-sm:mt-1 text-justify max-sm:text-sm '>Nos développeurs, nos infographistes, et nos webmasters sont formés aux dernières technologies du développement sur-mesure, ce qui permet l’optimisation informatique de vos flux de données et d'un goût de charte graphique. Nous pouvons réaliser une passerelle informatique, un formulaire de saisie, un tableau de bord informatique ou toute autre application métier ou application sur-mesure. </p>
            <Link href="/nos-service" className='bg-mainColor mt-6 inline-block text-white max-sm:text-xs px-3 py-2 rounded-md hover:bg-mainColor/70 transition-all '>               
                    <p>En savoir plus</p>
                 
            </Link>
        
        </motion.div>

        <motion.div
        initial={{x:20, opacity:0}}
        whileInView={{x:0 ,opacity:1}}
        transition={{
            duration:1,
            delay:0.5,
            type:'spring'
        }}
        viewport={{
            once:true,
        }}

        className='flex-1 p-10 max-lg:p-0 max-lg:mt-4 space-y-6'>
            <div className='flex items-center gap-4  p-6 rounded-lg shadow-lg max-[400px]:border-mainColor max-[400px]:border-2 '>
                <div className='text-4xl  bg-mainColor text-white p-3 rounded-lg max-[400px]:hidden  '>
                    <TbCertificate />
                </div>
                
                <div>
                    <h3 className='font-semibold max-sm:text-sm '>Professionnel certifié et expert </h3>
                    <p className='text-sm max-sm:text-xs text-gray-600'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. </p>
                </div>

            </div>

            <div className='flex items-center gap-4  p-6 rounded-lg shadow-lg max-[400px]:border-mainColor max-[400px]:border-2'>
                <div className='text-4xl bg-mainColor text-white p-3 rounded-lg max-[400px]:hidden '>
                    <TbReportMoney />
                </div>
                
                <div>
                    <h3 className='font-semibold max-sm:text-sm'>Solutions pour tous les budgets </h3>
                    <p className='text-sm max-sm:text-xs text-gray-600'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. </p>
                </div>

            </div>

            <div className='flex items-center gap-4  p-6 rounded-lg shadow-lg max-[400px]:border-mainColor max-[400px]:border-2'>
                <div className='text-4xl  bg-mainColor text-white p-3 rounded-lg max-[400px]:hidden '>
                    <LuMessagesSquare />
                </div>
                
                <div>
                    <h3 className='font-semibold max-sm:text-sm'>Un accompagnement de A à Z </h3>
                    <p className='text-sm max-sm:text-xs text-gray-600'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. </p>
                </div>

            </div>
            
        </motion.div>
    </div>
  )
}

export default whyus