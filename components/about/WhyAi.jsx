import React from "react";
import Image from "next/image";
import { whyAiDev } from "@/constants/data";

const WhyCard = ({ content }) => (
  <div className="flex flex-col lg:gap-y-10 md:gap-y-7 gap-y-0">
    <label className="text-black lg:h-[90px] lg:max-w-full max-w-48 md:mb-0 mb-4 font-semibold text-center lg:text-[32px] md:text-xl text-lg">
      {content.label}
    </label>
    <div className="lg:w-[105px] w-20 lg:h-[105px] h-20 mx-auto">
      <Image
        src={content.icon}
        alt={content.label}
        width={105}
        height={105}
        className="w-full h-full bg-contain"
      />
    </div>
  </div>
);

const WhyAi = () => {
  return (
    <section className="flex justify-center items-center flex-col gap-y-2 lg:py-20 md:py-12 py-8">
      <h1 className="lg:max-w-xl mx-auto lg:text-[32px] md:text-[24px] text-[28px] font-semibold leading-[110%] text-center mb-5 md:px-0 px-[15px] z-20 text-black">
        Why AI Development?
      </h1>
      <div className="md:flex justify-center border border-gray-200 items-start lg:gap-20 md:gap-12 gap-8 md:mt-10 mt-5">
        {/* <div className="w-px bg-gray-300" /> */}
        <div className="flex flex-col lg:gap-y-20 md:gap-y-12 gap-y-8 max-w-[470px] md:p-10 p-5">
          {whyAiDev?.slice(0, 2)?.map((content, index) => (
            <WhyCard key={index} content={content} />
          ))}
        </div>
        <div className="w-px bg-gray-200 self-stretch"></div>

        <div className="flex flex-col gap-y-20 max-w-[470px] md:p-10 p-5">
          {whyAiDev?.slice(2, 4)?.map((content, index) => (
            <WhyCard key={index} content={content} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyAi;
