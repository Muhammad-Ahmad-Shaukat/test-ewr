import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function HeroSection() {
  return (
    <div className="relative  bg-[#F6F6F6] flex flex-col items-center justify-center lg:pt-[137px] md:pt-[100px] lg:pt-[80px] md:pt-[50px] pt-[40px] lg:mt-[-80px] mt-[0px]">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Left side SVG */}
        <Image 
          src="/leftside.svg" 
          alt="Left decorative elements" 
          width={400} 
          height={600}
          className="absolute top-[300px] 2xl:left-0 xl:-left-[10%] lg:-left-[20%] md:-left-[35%] sm:-left-[70%] -left-[80%]  w-auto h-full object-cover"
        />
        
        {/* Right side SVG */}
        <Image 
          src="/rightside.svg" 
          alt="Right decorative elements" 
          width={400} 
          height={600}
          className="absolute top-[300px] 2xl:right-0 xl:-right-[10%] lg:-right-[20%] md:-right-[35%] sm:-right-[70%] -right-[80%] w-auto h-full object-cover"
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 w-[100%] max-w-[100%] mx-auto text-center">
        {/* Social proof section */}
        <div className="mb-[36px]">
          <div className="flex items-center justify-center  mb-2">
            {/* Person images */}
            <div className="flex -space-x-2">
              <Image 
                src="/person1.png" 
                alt="Person 1" 
                width={35} 
                height={35}
                className="rounded-full border-2 border-white object-cover"
              />
              <Image 
                src="/person2.png" 
                alt="Person 2" 
                width={35} 
                height={35}
                className="rounded-full border-2 border-white object-cover"
              />
              <Image 
                src="/person3.png" 
                alt="Person 3" 
                width={35} 
                height={35}
                className="rounded-full border-2 border-white object-cover"
              />
              <Image 
                src="/person4.png" 
                alt="Person 4" 
                width={35} 
                height={35}
                className="rounded-full border-2 border-white object-cover"
              />
            </div>
            <span className="font-normal text-[#000000] font-[18px] leading-normal ml-[10px]">
              Trusted already by 1.2k+
            </span>
          </div>
        </div>

        {/* Main heading */}
        <h1 className="w-[100%] max-w-[895px] mx-auto font-semibold lg:text-[62px] md:text-[50px] text-[32px] lg:leading-[70px] md:leading-[65px] md:px-[0px] px-[15px] leading-[50px] text-[#000] mb-[38px]">
          Your Software Partner with Unwavering Integrity
        </h1>

        {/* Sub-heading */}
        <p className="w-[100%] max-w-[521px] mx-auto font-normal text-[18px] leading-[30px] text-[#000000] md:px-[0px] px-[15px] mb-[33px]">
          Our experienced software development team offers dedicated support tailored to your needs.
        </p>

        {/* Call-to-action buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-[43px] mb-16">
<Link href="#" className="relative rounded-[10px] bg-gradient-to-r from-[#171717] to-[#777777] px-[0.8px] py-[0.5px]">
  {/* White gap layer */}
  <span className="block w-full h-full rounded-[10px] bg-white py-[3px] px-[4px] mb-[1px]">
    {/* Inner button */}
    <span
      className="block w-full h-full rounded-[10px] bg-gradient-to-b from-[#171717] to-[#777777] 
                 flex items-center justify-center text-white font-medium text-[18px] leading-normal
                 hover:from-[#222222] hover:to-[#444444] transition-all px-[20px] py-[12px]"
    >
      Schedule a free call
    </span>
  </span>
</Link>


          
          <div className="flex items-center gap-[13px] text-black cursor-pointer group">
            <Image 
              src="/learnmoreshapes.png" 
              alt="Learn more shapes" 
              width={24} 
              height={16}
              className="object-contain"
            />
            <span className="font-normal text-[16px] leading-normal text-[#000000]">Learn more</span>
          </div>
        </div>

        {/* Bottom cards section */}
        <div className="bg-white w-[100%] max-w-[1280px] mx-auto rounded-t-[100px] md:pt-[64px] pt-[30px] md:pb-[104px] pb-[50px]">
          <div className="w-[100%] max-w-[996px] lg:px-[0px] md:px-[30px] px-[20px] mx-auto flex md:flex-row flex-col md:justify-between justify-center items-center gap-[15px]">
            <Link href="#" className="bg-white border border-[1px] w-[100%] max-w-[200px] lg:h-[63px] md:h-[55px] h-[50px] rounded-[50px] flex justify-center items-center transition-shadow cursor-pointer">
              <span className="text-gray-700 font-medium">Learn more</span>
            </Link>
            <Link href="#" className="bg-white border border-[1px]  w-[100%] max-w-[200px] lg:h-[63px] md:h-[55px] h-[50px] rounded-[50px] flex justify-center items-center transition-shadow cursor-pointer">
              <span className="text-gray-700 font-medium">Learn more</span>
            </Link>
            <Link href="#" className="bg-white border border-[1px]  w-[100%] max-w-[200px] lg:h-[63px] md:h-[55px] h-[50px] rounded-[50px] flex justify-center items-center transition-shadow cursor-pointer">
              <span className="text-gray-700 font-medium">Learn more</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
