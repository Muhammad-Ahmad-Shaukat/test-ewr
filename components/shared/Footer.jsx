"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted email:", email);
    // Replace with your API call or form handler
    setEmail(""); // optional: clear input after submit
  };

  return (
    <section className="footer bg-[#131316] 2xl:pt-[98px] pt-[60px]  2xl:pb-[109px] pb-[90px] 2xl:px-[119px] xl:px-[70px] lg:px-[50px] md:px-10 px-5">
      <div className="w-full max-w-[1920px] mx-auto ">
        <h2 className="font-medium leading-[114%] text-[#F3EBE2] lg:text-[14vw] xl:text-[10vw] 2xl:text-[8vw] text-[7vw] whitespace-nowrap xl:mb-0 mb-[30px]">
          Lets connect
        </h2>

        <div className="flex justify-between md:flex-row flex-col-reverse">
          <div className="w-full md:max-w-[40%] max-w-full md:mt-5 mt-[70px]">
            <p className="font-medium text-white text-[18px] leading-[114%] w-full max-w-[204px] md:mb-28 mb-10">
              Drop Us a Line, And We'll Get In Touch
            </p>
            <Link
              href="mailto:"
              className="border-b-white md:mb-10 mb-5 font-medium text-[18px] leading-[114%] block text-white"
            >
              Schedule a Call
            </Link>
            <div className="soical_icon md:mb-[82px] mb-[30px]">
              <Image src="/link.svg" width={46} height={46} alt="LinkedIn" />
            </div>
            <div className="arrow_icon w-full lg:max-w-[5vw] md:max-w-[9vw] max-w-[12vw]">
              <Image src="/arrow.svg" width={90} height={90} alt="Arrow" />
            </div>
          </div>

          <div className="w-full max-w-[894px]">
            {/* Email Form */}
            <form onSubmit={handleSubmit} className="mb-9">
              <label
                htmlFor="email"
                className="block text-white 2xl:text-[80px] xl:text-[60px] lg:text-[50px] md:text-[40px] text-[30px] leading-[114%] font-medium md:mb-10 mb-[15px]"
              >
                Email Us!
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Email Here"
                className="w-full max-w-full bg-transparent border-b border-white text-white text-[18px] outline-none py-2"
              />
            </form>

            <ul className="flex lg:gap-[55px] md:gap-10 gap-5 md:flex-nowrap flex-wrap">
              <li>
                <Link
                  href="#"
                  className="font-normal text-[18px] leading-[142%] text-white"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="font-normal text-[18px] leading-[142%] text-white"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="font-normal text-[18px] leading-[142%] text-white"
                >
                  Case Study
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="font-normal text-[18px] leading-[142%] text-white"
                >
                  Our Team
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="font-normal text-[18px] leading-[142%] text-white"
                >
                  Careers
                </Link>
              </li>
            </ul>

            <div className="address flex xl:gap-36 lg:gap-[70px] md:gap-[50px] gap-5  2xl:mt-36 xl:mt-[110px] lg:mt-20 md:mt-[60px] mt-10">
              <div className="w-full max-w-[233px]">
                <h3 className="xl:text-[42px] lg:text-[30px] md:text-[28px] text-[23px] leading-[114%] text-white mb-2.5">
                  Minneapolis
                </h3>
                <p className="font-normal lg:text-[18px] md:text-[16px] text-[14px] leading-[142%] text-white w-full max-w-[194px]">
                  7760 France Ave South Suite 1100 Bloomington, MN 55435
                </p>
              </div>
              <div className="w-full max-w-[206px]">
                <h3 className="xl:text-[42px] lg:text-[30px] md:text-[28px] text-[23px] leading-[114%] text-white mb-2.5">
                  New York
                </h3>
                <p className="lg:text-[18px] md:text-[16px] text-[14px] font-normal leading-[142%] text-white">
                  2 Robert Speck Parkway Suite 750 Mississauga, Ontario L4Z 1H8,
                  Canada
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
