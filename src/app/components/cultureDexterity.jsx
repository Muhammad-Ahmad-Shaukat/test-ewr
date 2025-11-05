"use client"
import React, { useState } from 'react'
import Image from 'next/image'

export default function CultureDexterity() {
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  return (
    <div 
      className='culture_dexterity w-[100%] max-w-[400px] md:pt-[29px] pt-[25px] md:pb-[40px] pb-[25px] md:px-[29px] px-[20px] shadow-lg rounded-[16px] bg-[#fff]'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className='text-[22px] leading-[114%] text-[#131316] mb-[13px] font-medium'>Culture Dexterity</h2>
      <p className='text-[16px] leading-[145%] text-[#131316]  font-normal'>Shared cultures and languages that make collaboration seamless</p>

      <div className={`set_cuture flex rounded-[36px] bg-[#EDEDED] mt-[44px] shadow-lg w-[100%] inline-flex w-[max-content] pt-[4px] px-[4px] overflow-hidden transition-all duration-700 ease-out ${
        isHovered ? 'scale-105 shadow-xl' : 'scale-100 shadow-lg'
      }`}>
        <div 
          className='icon_image transition-transform duration-500 ease-out'
          style={{ transform: isHovered ? 'rotate(0deg)' : 'rotate(45deg)' }}
        >
          <Image src="/cultureicon.png" alt="culture1" width={48} height={48}/>
        </div>
        
        <div className={`culture_people flex items-center transition-all ease-out`}
        style={{
          maxWidth: isHovered ? '240px' : '0px',
          marginLeft: isHovered ? '25px' : '0px',
          overflow: 'hidden',
          transition: 'max-width 600ms ease, margin 600ms ease'
        }}>
          <div 
            className={`flex transition-all duration-500 ease-out ${
              isHovered 
                ? 'translate-x-0 opacity-100' 
                : 'translate-x-[-100px] opacity-0'
            }`}
            style={{
              transitionDelay: isHovered ? '0ms' : '0ms'
            }}
          >
            <Image 
              src="/people1.png" 
              alt="culture2" 
              width={36} 
              height={36}
              className={`transition-all duration-500 ease-out ${
                isHovered ? 'translate-x-0 opacity-100' : 'translate-x-[-30px] opacity-0'
              }`}
              style={{
                transitionDelay: isHovered ? '120ms' : '120ms'
              }}
            />
            <Image 
              className={`transition-all duration-500 ease-out ${
                isHovered ? 'translate-x-[-3px] opacity-100' : 'translate-x-[-30px] opacity-0'
              }`}
              src="/people2.png" 
              alt="culture2" 
              width={36} 
              height={36}
              style={{
                transitionDelay: isHovered ? '220ms' : '100ms'
              }}
            />
            <Image 
              className={`transition-all duration-500 ease-out ${
                isHovered ? 'translate-x-[-12px] opacity-100' : 'translate-x-[-30px] opacity-0'
              }`}
              src="/people3.png" 
              alt="culture2" 
              width={36} 
              height={36}
              style={{
                transitionDelay: isHovered ? '320ms' : '80ms'
              }}
            />
            <Image 
              className={`transition-all duration-500 ease-out ${
                isHovered ? 'translate-x-[-15px] opacity-100' : 'translate-x-[-30px] opacity-0'
              }`}
              src="/people4.png" 
              alt="culture2" 
              width={36} 
              height={36}
              style={{
                transitionDelay: isHovered ? '420ms' : '60ms'
              }}
            />
          </div>
        </div>
      </div>
    </div> 
  )
}