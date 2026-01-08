"use client";
import React from "react";
import { DotLottiePlayer } from '@dotlottie/react-player';

export default function Team() {
  return (
    <div className="team w-full max-w-[400px] rounded-2xl shadow-lg lg:px-[29px] px-[15px] md:pt-[29px] pt-[25px] lg:pb-10 pb-[25px]">
      <h2 className="text-[22px] leading-[114%] text-[#131316] mb-[13px] font-medium">
        Luxury Airport Transportation Services
      </h2>
      <p className="text-[16px] leading-[145%] text-[#131316] md:mb-[51px] mb-[10px] font-normal">
        Experience luxury airport transportation services with our EWR limo service. We provide reliable, comfortable, and on-time rides to and from Newark Liberty Airport, NYC, and surrounding New Jersey areas, ensuring a seamless travel experience with professional chauffeurs and high-end vehicles.
      </p>

      <div className="w-full max-w-full flex justify-center items-center">
        <div style={{ width: "100%", height: "300px", display: "flex", justifyContent: "center", alignItems: "center" }}>
          <DotLottiePlayer
            src="/CustomerFeedback.lottie"
            autoplay
            loop
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </div>
    </div>
  );
}
