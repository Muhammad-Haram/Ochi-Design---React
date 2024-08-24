import React from 'react'
import Image from 'next/image';

function Cards() {
    return (
        <div className='flex items-center justify-center gap-5 w-full h-screen bg-zinc-100 px-16 py-24'>

            <div className='card-container w-1/2 h-[60vh] overflow-hidden'>
                <div className='card w-full h-full bg-[#004d43] rounded-2xl'>

                    <div className='card-logo flex items-center justify-center h-[85%]'>
                        <Image src={"/img/card-logo.svg"} width={150} height={100} alt='' />
                    </div>

                    <div className='px-8 h-[15%]'>
                        <button className='py-1 px-4 border-[1px] border-[#cdea68] rounded-full text-[#cdea68] text-md font-montreal'>©2019-2022</button>
                    </div>

                </div>
            </div>

            <div className='card-container w-1/2 h-[60vh] flex gap-5 overflow-hidden'>

                <div className='card w-1/2 h-full bg-[#212121] rounded-2xl'>

                    <div className='card-logo flex items-center justify-center h-[85%]'>
                        <Image src={"/img/card-logo2.svg"} width={150} height={100} alt=''/>
                    </div>

                    <div className='px-8 h-[15%]'>
                        <button className='py-1 px-4 border-[1px] border-zinc-100 rounded-full text-zinc-100 text-md font-montreal uppercase'>Rating 5.0 on Clutch</button>
                    </div>
                </div>

                <div className='card w-1/2 h-full bg-[#212121] rounded-2xl'>

                    <div className='card-logo flex items-center justify-center h-[85%]'>
                        <Image src={"/img/futurAcademy.png"} width={150} height={100} alt='' />
                    </div>

                    <div className='px-8 h-[15%]'>
                        <button className='py-1 px-4 border-[1px] border-zinc-100 rounded-full text-zinc-100 text-md font-montreal uppercase'>Business Bootcamp Alumni</button>
                    </div>
                </div>


            </div>

        </div>
    )
}

export default Cards