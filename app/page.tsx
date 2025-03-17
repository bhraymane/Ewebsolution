import React from 'react'
import Hero from '@/components/hero'
import About from '@/components/about'
import Services from '@/components/services'
import WhyUs from '@/components/whyus'
import Avisclient from '@/components/avisclient'
import Slide from '@/components/slide'
 

function page() {
  return (
    <div className='max-w-screen-xl mx-auto '>
      <Hero />
      <About />
      <Services />
      <WhyUs />
      <Avisclient />

    </div>
  )
}

export default page