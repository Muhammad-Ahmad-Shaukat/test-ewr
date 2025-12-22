import React from "react";
import Image from "next/image";

const GetInTouch = () => {
  return (
    <section className="relative flex justify-center bg-[#131316] md:w-[90%] w-[90%] mx-auto md:mb-20 mb-10 items-center flex-col gap-y-2 lg:py-20 md:py-12 py-8 rounded-b-3xl">
      <div className="flex justify-center items-center flex-col gap-y-5 z-20">
        <h1 className="lg:max-w-lg md:max-w-[400px] max-w-[300px] mx-auto lg:text-[32px] md:text-[24px] text-lg text-white font-semibold leading-[110%] text-center mb-5 md:px-0 px-[15px] z-20">
          From Idea to Implementation Bringing Artificial Intelligence into your
          workflow
        </h1>
        <p className="text-center lg:text-lg md:text-sm text-xs lg:max-w-[650px] md:max-w-[500px] max-w-[300px]">
          We turn concepts into real world solutions by combining data science,
          engineering and highly scalable deployment. With end-to-end Al
          development, we ensure your business gains quite actionable insights
          and measurable results.
        </p>
        <button className="bg-white md:text-base text-xs text-[#148AFF] font-bold md:w-[134px] w-[120px] md:h-11 h-8  rounded-[10px]">
          Get in Touch
        </button>
      </div>
      <div className="absolute block 2xl:hidden top-24 w-full z-10">
        <Image
          src="/about/idea-bg.svg"
          alt="Background Image"
          width={1920}
          height={1080}
          className="w-full h-auto object-contain"
        />
      </div>
    </section>
  );
};

export default GetInTouch;
