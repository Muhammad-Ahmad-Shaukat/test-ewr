"use client";

import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useState, useEffect } from 'react';
// Dynamically import the Lottie Player to avoid SSR issues
const Player = dynamic(
  () => import('@lottiefiles/react-lottie-player').then(mod => mod.Player),
  { ssr: false }
);

export default function Delivery() {
  const [showAlternate, setShowAlternate] = useState(false);

  // Auto-cycle through animation pattern every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setShowAlternate(prev => !prev);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-white py-[80px] lg:py-[120px]">
     <div className='w-[100%] max-w-[1200px] mx-auto '>
      <h2 className='lg:text-[42px] md:text-[38px] text-[32px] font-semibold leading-normal md:px-[0px] px-[20px] text-[#000] w-[100%] max-w-[551px] text-center mx-auto lg:pb-[64px] md:pb-[50px] pb-[32px]'>
        Reliable Delivery with Proven Execution
      </h2>
     <div className='w-[100%] max-w-[1122px] mx-auto flex gap-[50px] justify-center lg:flex-row flex-wrap xl:px-[0px] px-[20px]'>
      <div className='w-[100%] xl:max-w-[531px] lg:max-w-[450px] max-w-[400px] flex flex-col gap-[39px]'>
        <div className='w-[100%] max-w-[100%] bg-[#DFDFDF] rounded-[20px] pt-[60px] pb-[0px] transition-all duration-300 overflow-hidden'>
            <h2 className='lg:text-[32px] text-[28px] font-semibold leading-[45px] text-[#000] text-center relativez z-[2] w-[100%] max-w-[300px] mx-auto mb-[15px]'>QA Testing & Automation</h2>
            <p className='text-[16px] text-[#626262] w-[100%] max-w-[333px] mx-auto text-center relative z-[2] leading-normal '>Ensure flawless performance through rigorous manual and automated testing, ensuring high-quality software releases that are fast and reliable</p>
      <div className="w-[100%] max-w-[100%] flex justify-center lg:pt-[100px] pt-[50px] testing-animi">
<div
  style={{
    width: '400px',
    height: '395px',
    overflow: 'hidden',
    borderRadius: '20px',
    backgroundColor: '#DFDFDF',
  }}
>
  <video
    src="/brand.mp4"
    autoPlay
    loop
    muted
    playsInline
    style={{
      display: 'block',
      width: '100%',
      height: '100%',
      objectFit: 'contain',
      backgroundColor: '#DFDFDF',
      transform: 'translateZ(0)', // optional: smooths flicker on Chrome/Safari
    }}
  />
</div>

</div>
        </div>
         <div className='w-[100%] max-w-[100%] bg-[#DFDFDF] rounded-[20px] pt-[60px] pb-[0px] transition-all duration-300 overflow-hidden'>
            <h2 className='lg:text-[32px] text-[28px] font-semibold leading-[45px]  text-[#000] text-center relativez z-[2] w-[100%] max-w-[300px]  mx-auto mb-[15px]'>SAP Point-to-Point Integration</h2>
            <p className='text-[16px] text-[#626262] w-[100%] max-w-[333px] mx-auto text-center relative z-[2] leading-normal integration-text'>Streamline complex data flows with secure, real- time integrations for SAP systems, enhancing accuracy and operational efficiency</p>
           <div className='graph_animi w-[100%] max-w-[100%] flex justify-center pt-[20px] mt-[-300px]'>
                  <Player
                    autoplay
                    loop
                    src="/graph.json"
                    style={{ height: "700px", width: "628px" }}
                  />
            </div>
        </div>
      </div>


       <div className='w-[100%] xl:max-w-[531px] lg:max-w-[450px] max-w-[400px] flex flex-col gap-[39px]'>
         <div className='w-[100%] max-w-[100%] bg-[#DFDFDF] rounded-[20px] pt-[60px] pb-[0px] transition-all duration-300 overflow-hidden'>
            <h2 className='lg:text-[32px] text-[28px] font-semibold leading-[45px] text-[#000] text-center relativez z-[2] w-[100%] max-w-[300px] mx-auto mb-[15px]'>Al Development</h2>
            <p className='text-[16px] text-[#626262] w-[100%] max-w-[333px] mx-auto text-center relative z-[2] leading-normal'>Apply advanced Al models to automate workflows, improve decision-making, and create new avenues for business growth.</p>
            <div className='w-[100%] max-w-[100%] flex justify-center pt-[100px]'>
             
             {/* Custom Brand Animation */}
             <div className="service-card-anim-block-set w-[100%] max-w-[100%]">
               {/* First Row */}
               <div className="first-line-brand mb-[8px]">
                 {/* First row: 1st item - no animation (single image) */}
                 <div className="brand-item first">
                   <Image 
                     src="/firstgp.png" 
                     width={250} 
                     height={252} 
                     alt="Brand" 
                    className="brand-item-img" 
                    quality={100}
                    unoptimized
                   />
                 </div>
                 {/* First row: 2nd item - animates when showAlternate is true */}
                 <div className="brand-item">
                   <Image 
                     src="/secgrouptwo.png" 
                     width={250} 
                     height={252} 
                     alt="Brand" 
                    className="brand-item-img" 
                    quality={100}
                    unoptimized
                     style={{ 
                       opacity: !showAlternate ? 1 : 0,
                       transition: 'opacity 1s ease-in-out',
                       position: 'absolute',
                       top: '50%',
                       left: '50%',
                       transform: 'translate(-50%, -50%)',
                     }}
                   />
                   <Image 
                     src="/secgrouptwosec.png" 
                     width={250} 
                     height={252} 
                     alt="Brand" 
                    className="brand-item-img" 
                    quality={100}
                    unoptimized
                     style={{ 
                       opacity: showAlternate ? 1 : 0,
                       transition: 'opacity 1s ease-in-out',
                       position: 'absolute',
                       top: '50%',
                       left: '50%',
                       transform: 'translate(-50%, -50%)',
                     }}
                   />
                 </div>
                 {/* First row: 3rd item - animates when showAlternate is false */}
                 <div className="brand-item">
                   <Image 
                     src="/thirdgp.png" 
                     width={250} 
                     height={252} 
                     alt="Brand" 
                    className="brand-item-img" 
                    quality={100}
                    unoptimized
                     style={{ 
                       opacity: !showAlternate ? 1 : 0,
                       transition: 'opacity 1s ease-in-out',
                       position: 'absolute',
                       top: '50%',
                       left: '50%',
                       transform: 'translate(-50%, -50%)',
                     }}
                   />
                   <Image 
                     src="/thirdgptwo.png" 
                     width={250} 
                     height={252} 
                     alt="Brand" 
                    className="brand-item-img" 
                    quality={100}
                    unoptimized
                     style={{ 
                       opacity: showAlternate ? 1 : 0,
                       transition: 'opacity 1s ease-in-out',
                       position: 'absolute',
                       top: '50%',
                       left: '50%',
                       transform: 'translate(-50%, -50%)',
                     }}
                   />
                 </div>
                 {/* First row: 4th item - no animation (single image) */}
                 <div className="brand-item">
                   <Image 
                     src="/deeroff.png" 
                     width={250} 
                     height={252} 
                     alt="Brand" 
                    className="brand-item-img" 
                    quality={100}
                    unoptimized
                   />
                 </div>
               </div>
               
               {/* Second Row */}
               <div className="first-line-brand">
                 {/* Second row: 1st item - animates when showAlternate is false */}
                 <div className="brand-item">
                   <Image 
                     src="/fifthgp.png" 
                     width={250} 
                     height={252} 
                     alt="Brand" 
                    className="brand-item-img" 
                    quality={100}
                    unoptimized
                     style={{ 
                       opacity: !showAlternate ? 1 : 0,
                       transition: 'opacity 1s ease-in-out',
                       position: 'absolute',
                       top: '50%',
                       left: '50%',
                       transform: 'translate(-50%, -50%)',
                     }}
                   />
                   <Image 
                     src="/fifthgps.png" 
                     width={250} 
                     height={252} 
                     alt="Brand" 
                    className="brand-item-img" 
                    quality={100}
                    unoptimized
                     style={{ 
                       opacity: showAlternate ? 1 : 0,
                       transition: 'opacity 1s ease-in-out',
                       position: 'absolute',
                       top: '50%',
                       left: '50%',
                       transform: 'translate(-50%, -50%)',
                     }}
                   />
                 </div>
                 {/* Second row: 2nd item - no animation (single image) */}
                 <div className="brand-item">
                   <Image 
                     src="/sixthgp.png" 
                     width={250} 
                     height={252} 
                     alt="Brand" 
                    className="brand-item-img" 
                    quality={100}
                    unoptimized
                   />
                 </div>
                {/* Second row: 3rd item - default is seventhgpsec, alternate is seventhgp */}
                <div className="brand-item">
                  <Image 
                    src="/seventhgpsec.png" 
                    width={125} 
                    height={126} 
                    alt="Brand" 
                    className="brand-item-img" 
                    quality={100}
                    sizes="125px"
                    style={{ 
                      opacity: !showAlternate ? 1 : 0,
                      transition: 'opacity 1s ease-in-out',
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                    }}
                  />
                  <Image 
                    src="/seventhgp.png" 
                    width={125} 
                    height={126} 
                    alt="Brand" 
                    className="brand-item-img" 
                    quality={100}
                    sizes="125px"
                    style={{ 
                      opacity: showAlternate ? 1 : 0,
                      transition: 'opacity 1s ease-in-out',
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                    }}
                  />
                </div>
                 {/* Second row: 4th item (last) - animates when showAlternate is false */}
                 <div className="brand-item">
                   <Image 
                     src="/eigthgp.png" 
                     width={250} 
                     height={252} 
                     alt="Brand" 
                    className="brand-item-img" 
                    quality={100}
                    unoptimized
                     style={{ 
                       opacity: !showAlternate ? 1 : 0,
                       transition: 'opacity 1s ease-in-out',
                       position: 'absolute',
                       top: '50%',
                       left: '50%',
                       transform: 'translate(-50%, -50%)',
                     }}
                   />
                   <Image 
                     src="/eightgpsec.png" 
                     width={250} 
                     height={252} 
                     alt="Brand" 
                    className="brand-item-img" 
                    quality={100}
                    unoptimized
                     style={{ 
                       opacity: showAlternate ? 1 : 0,
                       transition: 'opacity 1s ease-in-out',
                       position: 'absolute',
                       top: '50%',
                       left: '50%',
                       transform: 'translate(-50%, -50%)',
                     }}
                   />
                 </div>
               </div>
             </div>

             </div>
        </div>

          <div className='w-[100%] max-w-[100%] bg-[#DFDFDF] rounded-[20px] pt-[45px] pb-[15px] transition-all duration-300 overflow-hidden'>
            <h2 className='lg:text-[32px] text-[28px] font-semibold leading-[45px]  text-[#000] text-center relativez z-[2] w-[100%] max-w-[300px]  mx-auto mb-[15px]'>Full-Stack Development</h2>
            <p className='text-[16px] text-[#626262] w-[100%] max-w-[333px] mx-auto text-center md:px-[0px] px-[10px] relative z-[2] leading-normal'>Empower your projects with secure, scalable web and mobile solutions built using end-to-end expertise across front-end, back-end, and database frameworks.</p>
           <div className='w-[100%] max-w-[100%] flex justify-center pt-[20px] lg:mt-[60px] md:mt-[50px] mt-[0px] dev-animi md:pb-[0px] pb-[20px]'>
<div
  style={{
    width: '469px',
    height: '492px',
    overflow: 'hidden',
    borderRadius: '20px',
    backgroundColor: '#DFDFDF',
  }}
>
  <video
    src="/dev.mp4"
    autoPlay
    loop
    muted
    playsInline
    style={{
      display: 'block',
      width: '100%',
      height: '100%',
      objectFit: 'contain',
      backgroundColor: '#DFDFDF',
    }}
  />
</div>

            </div>
        </div>

      </div>



      </div>

      
     </div>
    </section>
  )
}
