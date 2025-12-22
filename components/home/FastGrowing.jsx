import React from "react";

export default function FastGrowing() {
  const companies = [
    "first.svg",
    "second.svg",
    "newthird.svg",
    "newforth.svg",
    "second.svg",
    "newthird.svg",
    "newforth.svg",
    "first.svg",
    "newthird.svg",
    "newforth.svg",
    "first.svg",
    "second.svg",
  ];

  return (
    <div
      className="relative bg-white"
      style={{
        boxShadow:
          "0 -1px 11px -2px rgb(0 0 0 / 0.05), 0 1px 4px rgb(0 0 0 / 0.2)",
      }}
    >
      <div className="border-b border-gray-950/5">
        <div className="sm:flex mx-auto w-full px-6  md:px-8 xl:max-w-[1620px]">
          <div className="w-full md:max-w-[250px] max-w-full md:py-0 py-5 flex items-center md:justify-start justify-center">
            <p className="text-[16px] leading-[30px] font-medium  md:text-left text-center text-[#4F4F4F]">
              Client we have worked with
            </p>
          </div>
          {/* 4 Vertical Carousels */}
          <div className="grid grid-cols-2 lg:grid-cols-4 items-center xl:py-10 md:py-5 py-2.5 gap-0 w-full border border-solid border-[#D9D9D9]">
            {/* Carousel 1 */}
            <div className="carousel-container">
              <div className="carousel-track carousel-1">
                {companies.slice(0, 4).map((company, index) => (
                  <div key={index} className="carousel-item">
                    <img
                      src={`/${company}`}
                      alt={company}
                      className="w-32 h-8"
                    />
                  </div>
                ))}
                {/* Duplicate first item for seamless loop */}
                <div className="carousel-item">
                  <img
                    src={`/${companies[0]}`}
                    alt={companies[0]}
                    className="w-32 h-8"
                  />
                </div>
              </div>
            </div>

            {/* Carousel 2 */}
            <div className="carousel-container">
              <div className="carousel-track carousel-2">
                {companies.slice(4, 8).map((company, index) => (
                  <div key={index} className="carousel-item">
                    <img
                      src={`/${company}`}
                      alt={company}
                      className="w-32 h-8"
                    />
                  </div>
                ))}
                {/* Duplicate first item for seamless loop */}
                <div className="carousel-item">
                  <img
                    src={`/${companies[4]}`}
                    alt={companies[4]}
                    className="w-32 h-8"
                  />
                </div>
              </div>
            </div>

            {/* Carousel 3 */}
            <div className="carousel-container">
              <div className="carousel-track carousel-3">
                {companies.slice(8, 12).map((company, index) => (
                  <div key={index} className="carousel-item">
                    <img
                      src={`/${company}`}
                      alt={company}
                      className="w-32 h-8"
                      quality={100}
                      unoptimized
                    />
                  </div>
                ))}
                {/* Duplicate first item for seamless loop */}
                <div className="carousel-item">
                  <img
                    src={`/${companies[8]}`}
                    alt={companies[8]}
                    className="w-32 h-8"
                    quality={100}
                    unoptimized
                  />
                </div>
              </div>
            </div>

            {/* Carousel 4 */}
            <div className="carousel-container">
              <div className="carousel-track carousel-4">
                {companies.slice(0, 4).map((company, index) => (
                  <div key={index} className="carousel-item">
                    <img
                      src={`/${company}`}
                      alt={company}
                      className="w-32 h-8"
                      quality={100}
                      unoptimized
                    />
                  </div>
                ))}
                {/* Duplicate first item for seamless loop */}
                <div className="carousel-item">
                  <img
                    src={`/${companies[0]}`}
                    alt={companies[0]}
                    className="w-32 h-8"
                    quality={100}
                    unoptimized
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
