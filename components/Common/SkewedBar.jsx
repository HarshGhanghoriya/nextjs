import Image from "next/image";
import React from "react";

const SkewedBar = ({ color, animation, header, subHeader, subHeaderColor }) => {
  return (
    <>
      <div className="flex sm:gap-4 gap-2">
        {/* <div
          className={`md:w-[35px]  md:h-[75px] w-[25px] h-[65px] bg-[${color}] whatWeDoBar edgeBar `}
        ></div> */}
        <Image
          src="./images/brand-logo.svg"
          width={64}
          height={72}
          className="relative top-[-1.5rem]"
          alt="brand-logo"
        />
        <div className="">
          <div className="sm:text-[1rem] text-[1rem] text-[#EF4136] font-semibold uppercase font-mukta mb-[4px]">
            {header}
          </div>
          <div
            className={`md:text-[40px] font-light text-[25px] text-[#161616] text-[${subHeaderColor}] font-mukta`}
          >
            {subHeader}
          </div>
        </div>
      </div>
    </>
  );
};

export default SkewedBar;
