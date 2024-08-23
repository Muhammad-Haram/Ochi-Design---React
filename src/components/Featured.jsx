import React from 'react'
import Image from 'next/image';

const Featured = () => {
    return (
        <div className='w-full py-10'>

            <div className='w-full px-16 border-b-[1px] border-zinc-700 pb-10'>
                <h1 className='font-montreal text-[60px]'>Featured projects</h1>
            </div>

            <div className='px-16'>

                <div className='cards w-full flex items-center gap-5 mt-10'>

                    <div className="card-container relative w-1/2 h-[80vh]">

                        <h1 className='absolute text-center left-full top-1/2 -translate-x-1/2 -translate-y-1/2 z-[9] uppercase font-founder text-[104px] text-[#cdea68] w-full'>
                            {"Cardboard Spaceship".split('').map((item, index) => (
                                <span key={index}>{item}</span>
                            ))}
                        </h1>

                        <div className='card w-full h-full rounded-xl bg-green-600 overflow-hidden'>
                            <Image
                                src="/img/fp-1.png"
                                className='w-full h-full'
                                width={750}
                                height={500}
                                quality={100}
                                alt="Picture"
                            />
                        </div>
                    </div>

                    <div className="card-container relative w-1/2 h-[80vh]">
                        <div className='card w-full h-full rounded-xl bg-green-600 overflow-hidden'>
                            <h1 className='absolute text-center right-full top-1/2 translate-x-1/2 -translate-y-1/2 z-[9] uppercase font-founder text-[104px] text-[#cdea68] w-full'>
                                {"Ah2 & Matt Horn".split('').map((item, index) => (
                                    <span key={index}>{item}</span>
                                ))}
                            </h1>
                            <Image
                                src="/img/fp-2.png"
                                className='w-full h-full'
                                width={750}
                                height={500}
                                quality={100}
                                alt="Picture"
                            />
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Featured;