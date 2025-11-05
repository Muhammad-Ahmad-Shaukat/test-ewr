import React from 'react'

export default function Collaboration() {
  return (
  <div className='team w-[100%] max-w-[400px] rounded-[16px] shadow-lg px-[29px] pt-[29px] pb-[0px]'>
  <h2 className='text-[22px] leading-[114%] text-[#131316] mb-[13px] font-medium'>Real time Collaboration</h2>
  <p className='text-[16px] leading-[145%] text-[#131316] mb-[0px] font-normal'>We align with your time zone to keep feedback fast and delivery on track.</p>
  <div className="w-[100%] max-w-[100%] flex justify-center mobile-animi">
<div
  style={{
    width: '338px',
    height: '450px',
    overflow: 'hidden',
    borderRadius: '20px',
    backgroundColor: '#fff',
  }}
>
  <video
    src="/phone.mp4"
    autoPlay
    loop
    muted
    playsInline
    style={{
      display: 'block',
      width: '100%',
      height: '100%',
      objectFit: 'contain',
      backgroundColor: '#fff',
      transform: 'translateZ(0)', // optional: smooths flicker on Chrome/Safari
    }}
  />
</div>

</div>
 </div>
  )
}
