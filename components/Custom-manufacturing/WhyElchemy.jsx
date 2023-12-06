import React, { useState } from "react";
import SkewedBar from "../Common/SkewedBar";
import Slider from "react-slick";
import { Grid } from "@mui/material";
import sliderDot from "../../public/images/sliderDot.svg";
import activeDot from "../../public/images/activeDot.svg";

const WhyElchemy = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const sliderData = [
    {
      id: 0,
      image: "./images/slide1.png",
      title: "Commitment to Customer Experience",
      description:
        "At Elchemy, our commitment to enhancing the customer experience is at the heart of everything we do. We harness technology to effectively address the challenges within the global chemical distribution and custom manufacturing landscape.",
    },
    {
      id: 1,
      image: "./images/custom-manufacturing-banner.svg",
      title: "Dommitment to Customer Experience",
      description:
        "At Elchemy, our commitment to enhancing the customer experience is at the heart of everything we do. We harness technology to effectively address the challenges within the global chemical distribution and custom manufacturing landscape.",
    },
    {
      id: 2,
      image: "./images/slide1.png",
      title: "Eommitment to Customer Experience",
      description:
        "At Elchemy, our commitment to enhancing the customer experience is at the heart of everything we do. We harness technology to effectively address the challenges within the global chemical distribution and custom manufacturing landscape.",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    beforeChange: (current, next) => setActiveSlide(next),
    dotsClass: "slick-dots custom-slick-dots",
    appendDots: (dots) => (
      <div className="">
        <ul className="m-0 px-4 flex justify-between items-center h-full slick-custom-ul">
          {" "}
          {dots}{" "}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <a>
        {activeSlide === i ? (
          <>
            <div className="">
              <img className="" src={activeDot.src} />
            </div>
          </>
        ) : (
          <div className="">
            <img className="" src={sliderDot.src} />
          </div>
        )}
      </a>
    ),
  };

  return (
    <div className="">
      <div className="mb-8">
        <SkewedBar
          color="#FDCD9A"
          subHeader="Why Elchemy"
          subHeaderColor="#fff"
        />
      </div>
      <div className="flex justify-between items-center gap-2 ml-8">
        <Grid container spacing={10}>
          <Grid item xs={12} md={4} lg={4}>
            <p className="text-[#fff] text-2xl">
              {sliderData[activeSlide]?.title}
            </p>
            <p className="text-[#fff] mt-6">
              {sliderData[activeSlide]?.description}
            </p>
          </Grid>
          <Grid item xs={12} md={7} lg={7}>
            <Slider {...settings}>
              {sliderData?.map((item, index) => (
                <div
                  key={index}
                  className="w-full h-fit center-image overflow-hidden"
                >
                  <img
                    src={item.image}
                    alt={`Slide ${index}`}
                    className="max-w-md rounded-xs"
                  />
                </div>
              ))}
            </Slider>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default WhyElchemy;
