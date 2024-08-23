import About from '@/components/About'
import Cards from '@/components/Cards'
import EyeAnimation from '@/components/EyeAnimation'
import Featured from '@/components/Featured'
import LandingPage from '@/components/LandingPage'
import Marquee from '@/components/Marquee'
import Navbar from '@/components/Navbar'
import React from 'react'

const page = () => {
  return (
    <div className="w-full min-h-screen text-white bg-zinc-900">
      <Navbar />
      <LandingPage />
      <Marquee />
      <About />
      <EyeAnimation />
      <Featured />
      <Cards/>
    </div>
  )
}

export default page