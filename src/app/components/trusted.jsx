import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
export default function Trusted() {
  return (
   <section className="lg:pt-[177px] md:pt-[165px] pt-[140px] lg:pb-[96px] md:pb-[70px] pb-[50px] xl:px-[0px] px-[30px]">
    <div className='w-[100%] max-w-[1216px] mx-auto'>
        <div className='flex lg:flex-row flex-col-reverse lg:px-[50px] md:px-[30px] px-[20px] justify-between lg:gap-[20px] gap-[0px] shadow-[0_0_15px_rgba(0,0,0,0.1)] rounded-[16px]'>
             <div className='flex flex-col w-[100%] max-w-[416px] lg:pt-[50px] pt-[0px] pb-[20px]  items-start'>
                <h2 className='font-semibold lg:text-[36px] text-[28px] leading-normal text-[#000000] lg:mb-[26px] mb-[20px] pr-[15px]'>Your <span className='text-[#148AFF]'>Trusted</span> Technology Partner</h2>
                <p className='font-normal lg:text-[18px] text-[16px] leading-normal text-[#131316] mb-[17px]'>Empowering your business with secure, scalable user and organization management - free to start, simple to grow</p>
                <Link href="#"  className='rounded-[10px] inline bg-[linear-gradient(90deg,#147FEA_0%,#389CFF_100%)] text-[16px] text-[#fff] py-[13px] px-[18px]'>Get in Touch</Link>
             </div>
                <div className="w-full max-w-[552px] relative lg:h-[300px] md:h-[300px] sm:h-[250px] h-[180px] lg:mx-[0px] mx-auto">
                <Image
                    src="/trusted.png"
                    alt="trusted"
                    width={500}
                    height={400}    
                  className="object-contain absolute top-[-100px] lg:right-0 lg:translate-x-0 right-1/2 translate-x-1/2"
                />
                </div>

        </div>
    </div>
  </section>
  )
}
