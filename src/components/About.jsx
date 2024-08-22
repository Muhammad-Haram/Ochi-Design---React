import React from 'react'
import Image from 'next/image';

function About() {
    return (
        <div className='w-full py-20 px-16 bg-[#cdea68] rounded-t-3xl'>
            <h1 className='text-black font-montreal text-[60px] leading-[4vw] w-[1400px] tracking-tight'>Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell products, explain complex ideas, and hire great people.</h1>

            <div className='w-full flex border-t-[1px] mt-20 border-[#99ad53]'>
                <div className='w-1/2 mt-7'>
                    <h1 className='font-montreal text-zinc-900 text-[60px]'>Our approach:</h1>
                    <button className='flex items-center justify-between gap-10 bg-zinc-900 font-montreal text-[16px] mt-5 rounded-full px-8 py-4 uppercase'>Read More
                        <div className='bg-zinc-100 w-3 h-3 rounded-full'></div>
                    </button>
                </div>
                <div className='w-1/2 mt-7 h-[55vh] rounded-2xl overflow-hidden'>
                    <Image
                        src="/img/bg3.jpg"
                        className='w-full h-full'
                        width={750}
                        height={500}
                        quality={100}
                        alt="Picture"
                    />
                </div>
            </div>

        </div>
    )
}

export default About