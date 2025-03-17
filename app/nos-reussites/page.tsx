import React from 'react'
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Nos Réussites"
};

function page() {
  return (
    <div className='bg-mainColor text-white h-screen max-w-screen-xl mx-auto flex justify-center items-center'>
      <h1 className='text-5xl max-md:text-lg'>Nos Réussites Page</h1>
    </div>
  )
}

export default page