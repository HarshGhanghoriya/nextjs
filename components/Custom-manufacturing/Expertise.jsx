import React, { useState } from "react";
import SkewedBar from "../Common/SkewedBar";
import Image from "next/image";
import { Grid } from "@mui/material";
import RequestSampleModalBtn from "../Modal/RequestSample";
import Slider from "react-slick";

const Expertise = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const sliderData = [
    {
      id: 0,
      image: "./images/slide1.png",
      title: "Tailored Chemical Solutions",
      description:
        "Discover limitless possibilities with our tailored chemical solutions, meticulously designed to meet your unique specifications and propel your innovations",
    },
    {
      id: 1,
      image: "./images/custom-manufacturing-banner.svg",
      title: "Uailored Chemical Solutions",
      description:
        "Discover limitless possibilities with our tailored chemical solutions, meticulously designed to meet your unique specifications and propel your innovations",
    },
    {
      id: 2,
      image: "./images/slide1.png",
      title: "Vailored Chemical Solutions",
      description:
        "Discover limitless possibilities with our tailored chemical solutions, meticulously designed to meet your unique specifications and propel your innovations",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
    autoplaySpeed: 1000,
    // arrows: false,
    vertical: true,
    
    beforeChange: (current, next) => setActiveSlide(next),
    dotsClass: "slick-dots custom-slick-dots",
    // appendDots: (dots) => (
    //   <div className="">
    //     <ul className="m-0 px-4 flex justify-between items-center h-full slick-custom-ul">
    //       {" "}
    //       {dots}{" "}
    //     </ul>
    //   </div>
    // ),
    // customPaging: (i) => (
    //   <a>
    //     {activeSlide === i ? (
    //       <>
    //         <div className="">
    //           <img className="" src={activeDot.src} />
    //         </div>
    //       </>
    //     ) : (
    //       <div className="">
    //         <img className="" src={sliderDot.src} />
    //       </div>
    //     )}
    //   </a>
    // ),
  };

  return (
    <div className="">
      <div className="pl-10 pt-24">
        <div className="flex  pt-20 text-3xl ">
          <Image
            src="./images/brand-logo.svg"
            width={64}
            height={50}
            className="relative top-[-1.5rem]"
            alt="brand-logo"
          />
          <h1>Custom Manufacturing Solutions</h1>
        </div>
      </div>
      <div className="flex justify-between items-center gap-2 ml-8">
        <Grid container spacing={10}>
          <Grid item xs={12} md={4} lg={6}>
            <div className="pl-20 pt-20 flex flex-col gap-8 pb-40">
              <p className="text-2xl  font-mukta">
                {sliderData[activeSlide]?.title}
              </p>
              <p className="mt-6 w-120  text-[16px] font-normal ">
                We understand that one size does not fit all in the world of
                chemicals. That's why we excel at crafting bespoke chemical
                formulations that align perfectly with your specific
                requirements. Our team of skilled chemists and engineers
                collaborates closely with you to design and adapt formulas that
                achieve the precise properties and performance characteristics
                you demand.
              </p>
              <RequestSampleModalBtn
                // Options={Options}
                heading={"Request A Sample"}
                subHeading={"Personal Details"}
                classes={
                  "w-[240px] h-[48px] bg-[#EF4136]  text-[#fff] rounded-[3px]"
                }
              >
                <div> {"Join Us"}</div>
              </RequestSampleModalBtn>
            </div>
          </Grid>
          <Grid item xs={12} md={7} lg={6}>
            <div className="mt-20  ">
              {/* <img
                src="https://elchemydev.s3.ap-south-1.amazonaws.com/static/image/2023-12-05/15:55:50.png"
                width
              /> */}
              <Slider {...settings}>
                {sliderData?.map((item, index) => (
                  <div key={index} className="w-[20%] h-full center-image">
                    <img src={item.image} alt={`Slide ${index}`} className="" />
                  </div>
                ))}
              </Slider>
            </div>
            {/* <Slider {...settings}>
              {sliderData?.map((item, index) => (
                <div key={index} className="w-full h-full center-image">
                  <img src={item.image} alt={`Slide ${index}`} className="" />
                </div>
              ))}
            </Slider> */}
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Expertise;
