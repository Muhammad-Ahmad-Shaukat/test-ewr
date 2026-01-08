"use client"
import React from "react";
import { DotLottiePlayer } from '@dotlottie/react-player';

export default function Collaboration() {
  return (
    <div className="team w-full max-w-[400px] rounded-2xl shadow-lg px-[29px] pt-[29px] pb-0">
      <h2 className="text-[22px] leading-[114%] text-[#131316] mb-[13px] font-medium">
        Real time Flight Tracking
      </h2>
      <p className="text-[16px] leading-[145%] text-[#131316] mb-0 font-normal">
        Stay on schedule with our real-time flight tracking for Newark Liberty Airport (EWR). Our EWR limo service monitors your flight’s arrival and departure times, so your chauffeur is always on time, ensuring a smooth, stress-free ride to or from the airport.
      </p>
      <div className="w-full max-w-full flex justify-center mobile-animi">
        <div
          style={{
            width: "338px",
            height: "400px",
            overflow: "hidden",
            borderRadius: "20px",
            backgroundColor: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <DotLottiePlayer
            src="/gilroy/BoardingPass.lottie"
            autoplay
            loop
            style={{ width: "80%", height: "80%" }}
          />
        </div>
      </div>
    </div>
  );
}
