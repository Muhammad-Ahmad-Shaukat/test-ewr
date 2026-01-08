import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Trusted() {
  return (
    <section className="lg:pt-[177px] md:pt-[165px] pt-[35px] lg:pb-24 md:pb-[70px] pb-[50px] xl:px-0 px-[30px]">
      <div className="w-full max-w-[1216px] mx-auto">
        <div className="flex lg:flex-row flex-col-reverse lg:px-[50px] md:px-[30px] px-5 justify-between lg:gap-5 gap-0 shadow-[0_0_15px_rgba(0,0,0,0.1)] rounded-2xl">
          <div className="flex flex-col w-full lg:max-w-[600px] w-full lg:pt-[50px] pt-0 lg:pb-[100px] pb-5  items-start">
            <h2 className="font-semibold lg:text-[36px] text-[28px] leading-normal text-[#000000] lg:mb-[26px] mb-5 pr-[15px]">
              Your <span className="text-[#148AFF]">Trusted</span> <br></br> Transportation Partner
            </h2>
            <p className="font-normal lg:text-[18px] text-[16px] leading-normal text-[#131316] mb-[17px]">
              Your Trusted Transportation Partner — We provide reliable, professional, and punctual transportation services you can count on. With experienced chauffeurs, luxury vehicles, and 24/7 availability, we are committed to delivering safe, comfortable, and stress-free travel for every ride.
            </p>
            <Link
              href="#"
              className="rounded-[10px] inline bg-[linear-gradient(90deg,#147FEA_0%,#389CFF_100%)] text-[16px] text-white py-[13px] px-[18px]"
            >
              Call Us Now
            </Link>
          </div>
          <div className="w-full max-w-[552px] relative lg:h-[350px] md:h-[130px] h-[70px] lg:mx-0 mx-auto z-10">
            <Image
              src="/escaldeCadillac.avif"
              alt="trusted"
              width={500}
              height={500}
              className="w-full object-contain absolute lg:top-[-100px] top-[-50px] lg:max-w-full md:max-w-[450px] sm:max-w-[300px] max-w-[300px] lg:right-0 lg:translate-x-0 right-1/2 translate-x-1/2"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
