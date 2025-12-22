import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="bg-[#0A0A0B]  lg:h-screen h-[70vh] relative flex items-center justify-center text-white ">
      <div className="absolute bottom-0 w-full z-10">
        <Image
          src="/about/hero-bg.svg"
          alt="Background Image"
          width={1920}
          height={1080}
          className="w-full h-auto object-cover"
        />
      </div>
      <div className="z-20 flex flex-col gap-y-2">
        <h1 className="lg:max-w-xl mx-auto lg:text-[48px] md:text-[24px] text-[28px] font-bold leading-[110%] text-center mb-5 md:px-0 px-[15px] z-20">
          Transforming Business with Intelligent Solutions
        </h1>
        <p className="md:text-[20px] text-[14px] font-normal leading-normal w-full md:max-w-[755px] lg:max-w-[900px] mx-auto text-center md:px-0 px-5 z-20">
          Deliver ideal digital experiences with our end-to-end QA and
          automation expertise in enterprise solutions, custom software
          development, mobile apps, and web applications. From manual and
          exploratory testing to advanced automation frameworks. We ensure your
          IT services and and ready for real-world use .. readv tor real-
          applications are bua-free, scalable. ons are bua-
        </p>
        <button
          style={{
            background: `linear-gradient(20deg, #125EA9 10%, #148AFF 100%)`,
          }}
          className="bg-[#148AFF] px-4 h-[37px] flex justify-center items-center rounded-lg mt-[30px] mx-auto text-white font-medium text-[14px] leading-normal"
        >
          Build Smarter With AI
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
