import React from "react";
import Image from "next/image";
import { empowerAi } from "@/constants/data";

const EmpowerWithAI = () => {
  return (
    <section className="relative flex justify-center  md:w-[90%] w-[90%] mx-auto md:mb-20 mb-10 items-center flex-col gap-y-2 lg:pt-20 md:pt-12 pt-8">
      <h1 className="lg:max-w-xl mx-auto lg:text-[32px] md:text-[24px] text-[28px] font-semibold leading-[110%] text-center mb-10 md:px-0 px-[15px] z-20 text-black">
        Industries We Empower with Al
      </h1>
      <div className="grid lg:grid-cols-2 xl:grid-cols-3 grid-cols-1 w-[80%] mx-auto xl:gap-0 lg:gap-20 gap-20">
        {empowerAi?.map((item, index) => (
          <div className="">
            <div className="pl-5">
              <div className={`w-[55px] h-[55px] mb-2 `}>
                <Image
                  src={item.icon}
                  width={55}
                  height={55}
                  alt={`${item}-icon`}
                  className="w-full h-full bg-contain"
                />
              </div>
              <div className="lg:text-lg text-sm font-bold text-[#141518]">
                {item.label}
              </div>
            </div>
            <div className="my-2 opacity-10 border-[0.3px] border-[#9E9E9E]"></div>
            <div className="pl-5 lg:text-base text-xs text-[#141518] max-w-[280px]">
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EmpowerWithAI;
