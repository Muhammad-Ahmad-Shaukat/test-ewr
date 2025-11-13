import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
export default function fullstackhero() {
  return (
   <section className='bg-[#131316] pb-[50px] w-[100%] max-w-[100%]'>
        <div className='max-w-[1410px] mx-auto flex justify-between items-center'>
                <div className=''>
                    <div className=''>
                        <h2 className='font-semibold text-[32px] leading-normal text-[#fff] mb-[20px]'>Full Stack Development</h2>
                        <p className='font-normal text-[18px] leading-normal text-[#fff] mb-[30px] w-[100%] max-w-[310px]'>Building Seamless Experiences Across Front-End & Back-End</p>
                        <Link href="#" className='text-[14px] font-normal leading-normal text-[#fff] p-[11px] bg-[linear-gradient(to_right,_#125EA9_10%,_#148AFF_100%)] rounded-[9px]'>Schedule a free call</Link>
                    </div>
                    <div className='mb-[35px] mt-[25px]'>
                        <p className='font-normal text-[18px] leading-normal text-[#fff] w-[100%] max-w-[517px]'>
            Your business deserves solutions that don't just look good. Infact, they work effortlessly across every layer. With our Full stack Development expertise, we deliver strong and impactful applications that integrate intuitive user interfaces with robust back-end systems, ensuring high speed, security and scalability</p>
                    </div>
                
            <div className='flex gap-[50px]'>
                <div className='w-[100%] max-w-[378px]'>
                    <div className='flex gap-[10px] items-center'>
                        <Image src="/modeling.png" height={25} width={25}></Image>
                        <h3 className='font-bold text-[18px] leading-normal text-[#fff] mb-[10px] mt-[10px]'>End-to-End Expertise</h3>
                    </div>
                    <p className='text-[#fff] text-[16px] leading-[145%] mt-[20px]'>
            We combine front-end creativity with back-end precision to deliver solutions that meet modern needs. From responsive designs to efficient processing, our developers make your digital presence strong inside and out</p>
                </div>
                <div className='w-[100%] max-w-[378px]'>
                    <div className='flex gap-[10px] items-center'>
                        <Image src="/stack.png" height={25} width={25}></Image>
                        <h3 className='font-bold text-[18px] leading-normal text-[#fff] mb-[10px] mt-[10px]'>Why Full Stack Matters</h3>
                    </div>
                    <p className='text-[#fff] text-[16px] leading-[145%] mt-[20px]'>
            In today's digital landscape, businesses can't rely on siloed development. Full Stack Development unifies front-end, back-end, databases and mobile apps. Creating a cohesive system that reduces complexity and enhances user experiences</p>
                </div>
            </div>

                </div>
                <div className='w-[100%] max-w-[564px]'>
                    <img src="/circut.png" alt="fullstackdev" className='cover'/>
                </div>
        </div>
        
  </section>
  )
}
