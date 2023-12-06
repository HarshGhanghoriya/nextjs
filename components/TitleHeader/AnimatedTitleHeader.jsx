import React from "react";
import Image from "next/image";

const AnimatedTitleHeader = ({ text, imgSrc }) => {
  return (
    <div className="relative overflow-hidden">
      <div className="w-full h-[14vh] md:h-[22vh] flex px-4 sm:px-12 justify-between items-center bg-[#F2F2F2]">
        <div className="flex justify-center items-center -ml-2 sm:-ml-0">
          <Image
            src="./images/brand-logo.svg"
            width={64}
            height={72}
            className=" h-10 sm:h-14 md:h-16 relative sm:-ml-1 sm:mb-2"
            alt="brand-logo"
          />

          <p className="text-[1.5rem] md:text-[2.2rem] -ml-4 sm:ml-0 font-mukta font-light">
            {text}
          </p>
        </div>
        <div className="h-full flex justify-center items-center">
          <img src={imgSrc} alt="" className="h-[30%] md:h-[60%]" />
        </div>
      </div>
      <div className="h-[16vh] md:h-[22vh] w-[110vw] absolute top-0 left-[130%] animateLeftToRight  bg-white ">
        <img
          src="/images/AnimateArrow.png"
          className="relative  left-[-22%] sm:left-[-12%] md:left-[-6%]  h-[16vh] md:h-[22vh]"
        />
      </div>
    </div>
  );
};

export default AnimatedTitleHeader;
