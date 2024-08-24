"use client"
import { useEffect, useState } from "react";


const EyeAnimation = () => {

    const [rotate, setRotate] = useState(0)

    useEffect(() => {
        window.addEventListener("mousemove", (e) => {
            const mouseX = e.clientX;
            const mouseY = e.clientY;


            const deltaX = (mouseX - innerWidth / 2);
            const deltaY = (mouseY - innerHeight / 2);

            const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
            setRotate(angle - 180)
        });
    }, [])

    return (
        <div className='eyesAnim w-full h-screen overflow-hidden'>
            <div data-scroll data-scroll-speed="-.5" className="relative w-full h-full bg-[url('/img/eyeAnimation.jpg')] bg-no-repeat bg-center bg-cover">
                <div className='absolute flex items-center justify-center gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>

                    <div className='flex items-center justify-center bg-zinc-100 w-[16vw] h-[16vw] rounded-[100%]'>
                        <div className='relative bg-[#212121] w-[9vw] h-[9vw] rounded-[100%]'>
                            <div style={{ transform: `translate(-50%,-50%) rotate(${rotate}deg)` }} className={`line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10`}>
                                <div className='bg-zinc-100 w-10 h-10 rounded-full'></div>
                            </div>
                        </div>
                    </div>

                    <div className='flex items-center justify-center bg-zinc-100 w-[16vw] h-[16vw] rounded-[100%]'>
                        <div className='relative bg-[#212121] w-[9vw] h-[9vw] rounded-[100%]'>
                            <div style={{ transform: `translate(-50%,-50%) rotate(${rotate}deg)` }} className={`line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10`}>
                                <div className='bg-zinc-100 w-10 h-10 rounded-full'></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default EyeAnimation