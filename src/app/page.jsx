"use client"
import { useEffect } from "react";
import About from '@/components/About'
import Cards from '@/components/Cards'
import EyeAnimation from '@/components/EyeAnimation'
import Featured from '@/components/Featured'
import Footer from '@/components/Footer'
import LandingPage from '@/components/LandingPage'
import Marquee from '@/components/Marquee'
import Navbar from '@/components/Navbar'
import LocomotiveScroll from 'locomotive-scroll';

const Page = () => {

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const locomotiveScroll = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true,
      });

      return () => {
        if (locomotiveScroll) locomotiveScroll.destroy();
      };
    }
  }, []);

  return (
    <div data-scroll-container className="w-full min-h-screen text-white bg-zinc-900">
      <Navbar />
      <LandingPage />
      <Marquee />
      <About />
      <EyeAnimation />
      <Featured />
      <Cards />
      <Footer />
    </div>
  )
}

export default Page