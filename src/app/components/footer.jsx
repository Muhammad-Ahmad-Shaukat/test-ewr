"use client";

import Image from 'next/image'
import Link from 'next/link'
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
    <section className="footer bg-[#131316] 2xl:pt-[98px] pt-[60px]  2xl:pb-[109px] pb-[90px] 2xl:px-[119px] xl:px-[70px] lg:px-[50px] md:px-[40px] px-[20px]">
      <div className="w-[100%] max-w-[1920px] mx-auto ">
<h2 className="font-medium leading-[114%] text-[#F3EBE2] text-[14vw] whitespace-nowrap xl:mb-[0px] mb-[30px]">
  Lets connect
</h2>



        <div className='flex justify-between md:flex-row flex-col-reverse'>
          <div className='w-[100%] md:max-w-[40%] max-w-[100%] md:mt-[20px] mt-[70px]'>
            <p className='font-medium text-[#fff] text-[18px] leading-[114%] w-[100%] max-w-[204px] md:mb-[112px] mb-[40px]'>
              Drop Us a Line, And We'll Get In Touch
            </p>
            <Link href="mailto:" className='border-b-[#fff] md:mb-[40px] mb-[20px] font-medium text-[18px] leading-[114%] block text-[#fff]'>
              Schedule a Call
            </Link>
            <div className='soical_icon md:mb-[82px] mb-[30px]'>
              <Image src="/link.svg" width={46} height={46} alt="LinkedIn" />
            </div>
            <div className='arrow_icon w-[100%] lg:max-w-[5vw] md:max-w-[9vw] max-w-[12vw]'>
              <Image src="/arrow.svg" width={90} height={90} alt="Arrow" />
            </div>
          </div>

          <div className='w-[100%] max-w-[894px]'>

            {/* Email Form */}
            <form onSubmit={handleSubmit} className="mb-[36px]">
              <label htmlFor="email" className="block text-[#fff] 2xl:text-[80px] xl:text-[60px] lg:text-[50px] md:text-[40px] text-[30px] leading-[114%] font-medium md:mb-[40px] mb-[15px]">
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
                className="w-full max-w-[100%] bg-transparent border-b border-[#fff] text-[#fff] text-[18px] outline-none py-[8px]"
              />
            </form>

            <ul className='flex lg:gap-[55px] md:gap-[40px] gap-[20px] md:flex-nowrap flex-wrap'>
              <li><Link href="#" className='font-normal text-[18px] leading-[142%] text-[#fff]'>Home</Link></li>
              <li><Link href="#" className='font-normal text-[18px] leading-[142%] text-[#fff]'>Services</Link></li>
              <li><Link href="#" className='font-normal text-[18px] leading-[142%] text-[#fff]'>Case Study</Link></li>
              <li><Link href="#" className='font-normal text-[18px] leading-[142%] text-[#fff]'>Our Team</Link></li>
              <li><Link href="#" className='font-normal text-[18px] leading-[142%] text-[#fff]'>Careers</Link></li>
            </ul>

            <div className='address flex xl:gap-[144px] lg:gap-[70px] md:gap-[50px] gap-[20px]  2xl:mt-[144px] xl:mt-[110px] lg:mt-[80px] md:mt-[60px] mt-[40px]'>
              <div className='w-[100%] max-w-[233px]'>
                <h3 className='xl:text-[42px] lg:text-[30px] text-[28px] leading-[114%] text-[#fff] mb-[10px]'>Minneapolis</h3>
                <p className='font-normal lg:text-[18px] text-[16px] leading-[142%] text-[#fff] w-[100%] max-w-[194px]'>
                  7760 France Ave South Suite 1100 Bloomington, MN 55435
                </p>
              </div>
              <div className='w-[100%] max-w-[206px]'>
                <h3 className='xl:text-[42px] lg:text-[30px] text-[28px] leading-[114%] text-[#fff] mb-[10px]'>New York</h3>
                <p className='lg:text-[18px] text-[16px] font-normal leading-[142%] text-[#fff]'>
                  2 Robert Speck Parkway Suite 750 Mississauga, Ontario L4Z 1H8, Canada
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
