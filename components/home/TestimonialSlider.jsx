"use client";

import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/thumbs";
import "swiper/css/free-mode";

const testimonials = [
  {
    name: "Angel Marinov",
    position: "CEO",
    text: "Integriti's team embodies professionalism and agility like no other! Their ability to swiftly address obstacles and tailor solutions to our specific needs has been instrumental in our project's success. Beyond their technical expertise, they consistently demonstrate a genuine commitment to collaboration and understanding our goals. Their proactive approach, clear communication, and innovative problem-solving have given us confidence at every stage. Working with Integriti feels less like working with a vendor and more like having a dedicated partner invested in our long-term success.",
    rating: 5.0,
    image: "/testit.png",
  },
  {
    name: "Sophia Lee",
    position: "Marketing Director",
    text: "Beyond their technical expertise, they consistently demonstrate a genuine commitment to collaboration and understanding our goals. Their proactive approach, clear communication, and innovative problem-solving have given us confidence at every stage.",
    rating: 5.0,
    image: "/testisec.png",
  },
  {
    name: "David Carter",
    position: "Product Manager",
    text: "Their proactive approach, clear communication, and innovative problem-solving have given us confidence at every stage. Working with Integriti feels less like working with a vendor and more like having a dedicated partner invested in our long-term success.",
    rating: 5.0,
    image: "/testif.png",
  },
  {
    name: "David Carter",
    position: "Product Manager",
    text: "Their proactive approach, clear communication, and innovative problem-solving have given us confidence at every stage. Working with Integriti feels less like working with a vendor and more like having a dedicated partner invested in our long-term success.",
    rating: 5.0,
    image: "/testithird.png",
  },
  {
    name: "David Carter",
    position: "Product Manager",
    text: "Their proactive approach, clear communication, and innovative problem-solving have given us confidence at every stage. Working with Integriti feels less like working with a vendor and more like having a dedicated partner invested in our long-term success.",
    rating: 5.0,
    image: "/testififth.png",
  },
  {
    name: "David Carter",
    position: "Product Manager",
    text: "Their proactive approach, clear communication, and innovative problem-solving have given us confidence at every stage. Working with Integriti feels less like working with a vendor and more like having a dedicated partner invested in our long-term success.",
    rating: 5.0,
    image: "/testisix.png",
  },
];

export default function TestimonialSlider() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [mainSwiper, setMainSwiper] = useState(null);

  useEffect(() => {
    console.log("✅ TestimonialSlider mounted");
    return () => {
      // Cleanup to prevent memory leaks
      if (thumbsSwiper && !thumbsSwiper.destroyed) {
        thumbsSwiper.destroy(true, true);
      }
      if (mainSwiper && !mainSwiper.destroyed) {
        mainSwiper.destroy(true, true);
      }
    };
  }, [thumbsSwiper, mainSwiper]);

  return (
    <div className="flex flex-col testimonial-layout gap-[37px] items-start">
      {/* === Thumbnail Slider === */}
      <div className="flex items-center justify-center w-full order-2 mt-4 thumbs-container">
        <style>{`
          .thumbs-swiper .swiper-slide {
            height: 188px;
            transition: height 300ms ease;
            margin-bottom: 32px;
          }
          .thumbs-swiper .swiper-slide-thumb-active {
            height: 260px;
          }
          .thumbs-swiper .swiper-slide > div {
            border-color: transparent;
          }
          .thumbs-swiper .swiper-slide-thumb-active > div {
            border-color: rgb(59, 130, 246);
          }
          .thumbs-swiper .swiper-slide-prev {
            opacity: 0;
          }
          .main-swiper .swiper-slide {
            height: auto;
          }

          /* Up to 1299px: horizontal thumbnails under main slider */
          @media (max-width: 1299px) {
            .thumbs-swiper {
              height: auto !important;
              width: 100%;
            }
            .thumbs-swiper .swiper-slide {
              height: auto;
              margin-bottom: 0; /* no vertical gap in horizontal mode */
            }
            .thumbs-swiper .swiper-slide-thumb-active {
              height: auto; /* disable tall active slide in horizontal mode */
            }
          }

          /* 1300px and up: desktop layout */
          @media (min-width: 1300px) {
            .testimonial-layout { flex-direction: row; }
            .thumbs-container {
              width: 400px;
              order: 1;
              margin-top: 0;
              align-items: center;
              justify-content: flex-start;
              flex-direction: column;
            }
            .main-container { order: 2; }
            .thumbs-swiper { height: 669px !important; }
            .thumb-card { width: 400px; height: 100%; }
          }
        `}</style>

        <Swiper
          onSwiper={(swiper) => {
            setThumbsSwiper(swiper);
            console.log("Thumbs swiper initialized:", swiper);
          }}
          direction="vertical"
          spaceBetween={15}
          slidesPerView="auto"
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Thumbs]}
          className="thumbs-swiper h-auto w-full"
          breakpoints={{
            0: {
              direction: "horizontal",
              spaceBetween: 10,
            },
            1300: {
              direction: "vertical",
              spaceBetween: 15,
            },
          }}
          observer={true}
          observeParents={true}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index} className="w-auto!">
              <div
                className="w-[140px] h-[90px] overflow-hidden rounded-lg border-4 transition-all duration-300 cursor-pointer hover:opacity-80 thumb-card"
                onClick={() => {
                  // Manual sync when clicking thumbnail
                  if (mainSwiper && !mainSwiper.destroyed) {
                    mainSwiper.slideTo(index);
                  }
                }}
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* === Main Testimonial Slider === */}
      <div className="flex-1 w-full order-1 main-container lg:px-0 px-5 ">
        <Swiper
          onSwiper={(swiper) => {
            setMainSwiper(swiper);
            console.log("Main swiper initialized:", swiper);
          }}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          modules={[Thumbs]}
          spaceBetween={32}
          slidesPerView={1}
          autoHeight={true}
          direction="horizontal"
          className="main-swiper w-full max-w-4xl mx-auto"
          observer={true}
          observeParents={true}
          onThumbsReady={() => {
            console.log("Thumbs ready");
          }}
          breakpoints={{
            0: {
              direction: "horizontal",
              spaceBetween: 20,
            },
            1300: {
              direction: "horizontal",
              spaceBetween: 32,
            },
          }}
        >
          {testimonials.map((item, i) => (
            <SwiperSlide key={i} className="h-auto!">
              <div className="bg-[#F5F5F5] rounded-[20px] lg:py-[49px] md:py-10 py-[30px] lg:px-[39px] md:px-[30px] px-5 transition-transform duration-500">
                <h3 className="lg:text-[32px] md:text-[28px] text-[24px] font-medium leading-[100%] mb-[25px] text-[#080808]">
                  {item.name}
                </h3>
                <p className="lg:text-[24px] md:text-[22px] text-[18px] text-[#737373] font-medium leading-[100%]">
                  {item.position}
                </p>
                <p className="lg:text-[23.5px] md:text-[21px] text-[18px] max-w-[792px] font-medium text-[#737373] leading-[130%] lg:mb-[50px] md:mb-[35px] mb-7 lg:mt-[50px] md:mt-[35px] mt-7">
                  "{item.text}"
                </p>
                <div className="flex items-end">
                  <span className="lg:text-[102px] md:text-[80px] text-[64px] leading-[85%] text-[#080808] font-medium">
                    {Number(item.rating).toFixed(1)}{" "}
                  </span>
                  {[...Array(5)].map((_, j) => (
                    <svg
                      key={j}
                      className="w-5 h-5 text-yellow-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.959a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.45a1 1 0 00-.364 1.118l1.286 3.96c.3.92-.755 1.688-1.54 1.118l-3.37-2.45a1 1 0 00-1.176 0l-3.37 2.45c-.785.57-1.84-.198-1.54-1.118l1.286-3.96a1 1 0 00-.364-1.118L2.014 9.386c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.335-3.96z" />
                    </svg>
                  ))}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
