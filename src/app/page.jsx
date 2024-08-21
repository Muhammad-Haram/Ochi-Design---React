import LandingPage from '@/components/LandingPage'
import Navbar from '@/components/Navbar'
import React from 'react'

const page = () => {
  return (
    <div className="w-full h-screen text-white">
      <Navbar />
      <LandingPage />
    </div>
  )
}

export default page