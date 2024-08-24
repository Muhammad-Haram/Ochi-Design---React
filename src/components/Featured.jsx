import React from 'react'
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';

const Featured = () => {

    const cards = [useAnimation(), useAnimation()]
    const handleHover = (index) => {
        cards[index].start({ y: "0" });
    }

    const handleHoverEnd = (index) => {
        cards[index].start({ y: "100%" });
    }

    return (
        <div className='w-full py-10'>

            <div className='w-full px-16 border-b-[1px] border-zinc-700 pb-10'>
                <h1 className='font-montreal text-[60px]'>Featured projects</h1>
            </div>

            <div className='px-16'>

                <div className='cards w-full flex items-center gap-5 mt-10'>

                    <motion.div onHoverStart={() => handleHover(0)} onHoverEnd={() => handleHoverEnd(0)} className="card-container relative w-[50%] h-[80vh] flex items-center justify-center">

                        <div className='card w-full h-full rounded-xl overflow-hidden hover:w-[95%] duration-500 hover:h-[95%] transition-all'>

                            <h1 className='absolute overflow-hidden text-center left-full top-1/2 -translate-x-1/2 -translate-y-1/2 z-[999] uppercase font-founder text-[104px] text-[#cdea68] w-full'>
                                {"Cardboard Spaceship".split('').map((item, index) => (
                                    <motion.span className='inline-block' initial={{ y: "100%" }} transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.02 }} animate={cards[0]} key={index}>{item}</motion.span>
                                ))}
                            </h1>

                            <Image
                                src="/img/fp-1.png"
                                className='w-full h-full hover:scale-[1.1] transition-all duration-500'
                                width={750}
                                height={500}
                                quality={100}
                                alt="Picture"
                            />
                        </div>

                    </motion.div>

                    <motion.div onHoverStart={() => handleHover(1)} onHoverEnd={() => handleHoverEnd(1)} className="card-container relative w-1/2 h-[80vh] flex items-center justify-center">

                        <div className='card w-full h-full rounded-xl overflow-hidden hover:w-[95%] duration-500 hover:h-[95%] transition-all'>

                            <h1 className='absolute text-center right-full top-1/2 translate-x-1/2 -translate-y-1/2 z-[9] uppercase font-founder text-[104px] text-[#cdea68] w-full overflow-hidden'>
                                {"Ah2-Matt-Horn".split('').map((item, index) => (
                                    <motion.span className='inline-block' key={index} initial={{ y: "100%" }} transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.02 }} animate={cards[1]}>{item}</motion.span>
                                ))}
                            </h1>

                            <Image
                                src="/img/fp-2.png"
                                className='w-full h-full hover:scale-[1.1] transition-all duration-500'
                                width={750}
                                height={500}
                                quality={100}
                                alt="Picture"
                            />
                        </div>
                    </motion.div>

                </div>

            </div>

        </div>
    )
}

export default Featured;