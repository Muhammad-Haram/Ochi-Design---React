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
    </div>
  )
}

export default page