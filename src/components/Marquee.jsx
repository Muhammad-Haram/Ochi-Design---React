"use client"
import { motion } from "framer-motion";
import React from 'react'

function Marquee() {
    return (
        <div className='bg-[#004D43] w-full py-20 rounded-t-3xl'>
            <div className='text border-t-2 border-b-2 gap-10 border-zinc-900 flex overflow-hidden whitespace-nowrap'>

                <motion.h1 initial={{ x: 0 }} animate={{ x: "-100%" }} transition={{ repeat: Infinity, ease: "linear", duration: 5 }} className='text-[400px] text-zinc-900 leading-none font-founder uppercase -mt-[50px]'>We are ochi .</motion.h1>

                <motion.h1 initial={{ x: 0 }} animate={{ x: "-100%" }} transition={{ repeat: Infinity, ease: "linear", duration: 5 }} className='text-[400px] text-zinc-900 leading-none font-founder uppercase -mt-[50px]'>We are ochi .</motion.h1>

                <motion.h1 initial={{ x: 0 }} animate={{ x: "-100%" }} transition={{ repeat: Infinity, ease: "linear", duration: 5 }} className='text-[400px] text-zinc-900 leading-none font-founder uppercase -mt-[50px]'>We are ochi .</motion.h1>

            </div>
        </div>
    )
}

export default Marquee