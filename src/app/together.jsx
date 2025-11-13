import React from 'react'
import Team from '../app/components/team'
import CultureDexterity from '../app/components/cultureDexterity'
import Knowledge from '../app/components/knowledge'
import Collaboration from '../app/components/collaboration'
export default function Together() {
  return (
<section className='pt-[70px]'>
        <h2 className='lg:text-[42px] md:text-[38px] text-[32px] font-semibold leading-[114%] text-[#131316] lg:mt-[17px] text-center mb-[20px] md:px-[0px] px-[15px]'>Faster, Better, Together</h2>
      <p className='md:text-[18px] text-[16px]  font-normal leading-normal w-[100%] max-w-[716px] mx-auto text-[#131316] lg:mb-[40px] md:mb-[32px] mb-[28px] text-center md:px-[0px] px-[15px]'>Our diverse team works in your time zone and brings proven expertise across industries
          making collaboration seamless, decisions faster, and software stronger</p>
     <div className='w-[100%] max-w-[1223px] lg:pt-[70px] md:pt-[50px] pt-[40px] pb-[80px] md:px-[0px] px-[20px] mx-auto flex xl:flex-row flex-wrap justify-center items-center xl:gap-[11px] gap-[30px]'>
       <div className='team'>
          <Team />
        </div>
       <div className='middle flex flex-col gap-[8px]'>
       <CultureDexterity />
       <Knowledge />
       </div>
       <div className='collaboration'><Collaboration /></div>
    </div>
</section>
  )
}
