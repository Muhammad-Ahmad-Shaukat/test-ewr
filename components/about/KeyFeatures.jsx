import React from "react";
import Image from "next/image";
import { keyFeatures } from "@/constants/data";

const KeyFeatures = () => {
  return (
    <section className="relative flex justify-center  md:w-[90%] w-[90%] mx-auto md:mb-20 mb-10 items-center flex-col gap-y-2 lg:pt-20 md:pt-12 pt-8">
      <h1 className="lg:max-w-md mx-auto lg:text-[32px] md:text-[24px] text-[28px] font-semibold leading-[110%] text-center mb-10 md:px-0 px-[15px] z-20 text-black">
        Key Features of Our Al Solutions
      </h1>
      <div className="grid md:grid-cols-2 lg: lg:grid-cols-2  xl:grid-cols-3 grid-cols-1 xl:gap-0 gap-4 w-full mx-auto ">
        {keyFeatures?.map((item, index) => (
          <div
            className={`py-10 px-10 bg-[#141518]  ${
              index === 1 && "border-x border-white"
            }`}
          >
            <div
              className={`md:w-[246px] md:h-[246px] w-[200px] h-[200px] mb-8 mx-auto`}
            >
              <Image
                src={item.icon}
                width={55}
                height={55}
                alt={`${item}-icon`}
                className="w-full h-full bg-contain"
              />
            </div>
            <div className="lg:text-lg text-sm font-bold text-text-white">
              {item.label}
            </div>
            <div className="lg:text-base mt-3 text-xs text-text-white">
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default KeyFeatures;
