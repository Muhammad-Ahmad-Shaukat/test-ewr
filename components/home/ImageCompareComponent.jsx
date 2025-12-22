"use client";

import React from "react";
import ReactCompareImage from "react-compare-image";

const beforeImage = "/before.png"; // Replace with your before image path
const afterImage = "/after.png"; // Replace with your after image path

export default function ImageCompareComponent() {
  return (
    <div className="w-full max-w-full md:pt-12 pt-[30px]">
      <h2 className="lg:text-[42px] md:text-[38px] text-[32px] text-white leading-[114%] font-semibold mb-[15px]  text-center md:px[0px] px-[15px]">
        Ideas Turened Into Design
      </h2>
      <p className="md:font-[18px] font-[16px] leading-[120%] text-white w-full max-w-[420px] font-regular mb-10 mx-auto text-center md:px[0px] px-[15px]">
        Watch how initial sketches take shape and become the final product
        interface
      </p>
      <div className="w-full max-w-[1178px] mx-auto compare-setup xl:px-0 px-5">
        <ReactCompareImage
          leftImage={beforeImage}
          rightImage={afterImage}
          leftLabel="before"
          rightLabel="after"
          hover={true}
          skeleton={true}
          aspectRatio="tall"
        />
      </div>
    </div>
  );
}
