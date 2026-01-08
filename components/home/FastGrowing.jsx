import React from "react";
import Image from "next/image";

export default function FastGrowing() {
  const companies = [
    "cadillacSedan.avif",
    "escaldeCadillac.avif",
    "teslamodelY.webp",
    "Suburban.webp",
    "Suburban.webp",
    "Suburban.webp",
    "Suburban.webp",
  ];

  // Config for the 4 carousels: starting index for each. 
  // We use modulo logic to ensure we never access undefined indices regardless of fleet size.
  const carouselStarts = [0, 4, 8, 0];

  return (
    <div
      className="relative bg-white"
      style={{
        boxShadow:
          "0 -1px 11px -2px rgb(0 0 0 / 0.05), 0 1px 4px rgb(0 0 0 / 0.2)",
      }}
    >
      <div className="border-b border-gray-950/5">
        <div className="sm:flex mx-auto w-full px-6 md:px-8 xl:max-w-[1620px]">
          <div className="w-full md:max-w-[250px] max-w-full md:py-0 py-5 flex items-center md:justify-start justify-center">
            <p className="text-[16px] leading-[30px] font-bold md:text-left text-center text-[#4F4F4F]">
              Our Fleet
            </p>
          </div>
          {/* 4 Vertical Carousels */}
          <div className="grid grid-cols-2 lg:grid-cols-4 items-center xl:py-10 md:py-5 py-2.5 gap-0 w-full border border-solid border-[#D9D9D9]">
            {carouselStarts.map((startIdx, i) => {
              // Safety: Ensure we always have 4 items to show, wrapping if needed
              const items = Array.from({ length: 4 }).map(
                (_, offset) => companies[(startIdx + offset) % companies.length]
              );

              return (
                <div key={i} className="carousel-container">
                  <div className={`carousel-track carousel-${i + 1}`}>
                    {items.map((company, index) => (
                      <div key={index} className="carousel-item">
                        <Image
                          src={`/${company}`}
                          alt={company}
                          width={350}
                          height={80}
                          className="w-[350px] h-[80px] object-contain"
                          quality={100}
                        />
                      </div>
                    ))}
                    {/* Duplicate first item for seamless loop */}
                    <div className="carousel-item">
                      <Image
                        src={`/${items[0]}`}
                        alt={items[0]}
                        width={350}
                        height={80}
                        className="w-[350px] h-[80px] object-contain"
                        quality={100}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
