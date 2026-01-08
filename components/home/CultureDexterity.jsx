"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function CultureDexterity() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="culture_dexterity w-full max-w-[400px] md:pt-[29px] pt-[25px] md:pb-10 pb-[25px] md:px-[29px] px-5 shadow-lg rounded-2xl bg-white"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className="text-[22px] leading-[114%] text-[#131316] mb-[13px] font-medium">
        Competitive Pricing with Premium Limo Service
      </h2>
      <p className="text-[16px] leading-[145%] text-[#131316]  font-normal">
        Enjoy premium limo service at competitive prices with our EWR airport car service. We offer luxury sedans and SUVs, professional chauffeurs, and reliable airport transportation without breaking the budget. Experience affordable, high-quality Newark airport transfers that combine comfort, safety, and punctuality for every ride.
      </p>
    </div>
  );
}
