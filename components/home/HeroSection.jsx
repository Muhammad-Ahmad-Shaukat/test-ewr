import HomePageQuickForm from "../forms/homePageQuickForm";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="relative flex flex-col items-center justify-center lg:pt-[247px] md:pt-[100px] lg:pt-20 md:pt-[50px] pt-10 lg:-mt-20 mt-0 pb-20 md:pb-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/EWRLimoService.avif"
          alt="EWR Limo Service Fleet"
          fill
          className="object-cover"
          priority
        />
        {/* Dark Overlay for text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      {/* Background decorative elements removed as requested */}

      {/* Main content */}
      <div className="relative z-10 w-full max-w-full mx-auto text-center">
        {/* Main heading */}
        <h1 className="w-full max-w-[900px] mx-auto font-semibold lg:text-[52px] md:text-[45px] text-[32px] lg:leading-[60px] md:leading-[55px] md:px-0 px-[15px] leading-[45px] text-white mb-[20px]">
          Premier EWR Limo Service
        </h1>

        {/* Sub-heading */}
        <p className="w-full max-w-[521px] mx-auto font-normal text-[18px] leading-[30px] text-gray-200 md:px-0 px-[15px] mb-[33px]">
          Experience top-tier chauffeur services for airport transfers and corporate travel.
          Book your luxury ride today.
        </p>

        {/* Quick Contact Form */}
        <HomePageQuickForm />

      </div>
    </div>

  );
}
