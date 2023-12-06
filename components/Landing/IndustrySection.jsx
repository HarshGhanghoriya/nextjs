import Image from "next/image";
import React, { useState } from "react";
import SkewedBar from "../Common/SkewedBar";
import Slider from "react-slick";

const IndustrySection = () => {
  const [activeIcon, setActiveIcon] = useState(null);
  const [activeDot, setactiveDot] = useState(0);
  const details = [
    {
      title: "Food & Nutrition",
      icon: "./images/iconOne.svg",
    },
    {
      title: "Plastic & Polymers",
      icon: "./images/iconTwo.svg",
    },
    {
      title: "Paints & Coating",
      icon: "./images/iconThree.svg",
    },
    {
      title: "Home Care",
      icon: "./images/iconFour.svg",
    },
    {
      title: "Flavor & Fragrance",
      icon: "./images/iconFive.svg",
    },
    {
      title: "Industrial Chemicals",
      icon: "./images/iconSix.svg",
    },
    {
      title: "Personal Care",
      icon: "./images/iconSeven.svg",
    },
    {
      title: "Oil & Drilling",
      icon: "./images/iconEight.svg",
    },
    {
      title: "Oil & Drilling",
      icon: "./images/iconEight.svg",
    },
    ,
    {
      title: "Personal Care",
      icon: "./images/iconSeven.svg",
    },
    {
      title: "Oil & Drilling",
      icon: "./images/iconEight.svg",
    },
    {
      title: "Oil & Drilling",
      icon: "./images/iconEight.svg",
    },
  ];
  const makeIconActive = (index) => {
    if (index === activeIcon) {
      return setActiveIcon(null);
    }
    setActiveIcon(index);
  };
  const makeIconInActive = () => {
    setActiveIcon(null);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    dotsClass: "slick-dots slick-dots-custom",
    customPaging: function (i) {
      return (
        <a>
          <div className="custom-dots" >
            <div
              className={`dot-container ${activeDot === i ? "active" : ""}`} 
            >
              <div className={activeDot === i ? "outer-circle" : ""}>
                <div
                  className="inner-dot"
                  style={{
                    background: activeDot === i ? "#EF4136" : "#B3B3B3",
                  }}
                />
              </div>
            </div>
          </div>
        </a>
      )
    },

    slidesToShow: 2,
    slidesToScroll: 1,
    slidesPerRow: 2,
    // autoplay: true,
    rows: 2,
    autoplaySpeed: 3000,
    beforeChange: (current, next) => (setActiveIcon(null),setactiveDot(next)),
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          slidesPerRow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          slidesPerRow: 2,
        },
      },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 0.5,
            slidesToScroll: 0.5,
            slidesPerRow: 2,
          }
      },
      ,
        {
          breakpoint: 300,
          settings: {
            slidesToShow: 0.5,
            slidesToScroll: 0.5,
            slidesPerRow: 2,
          }
      },
      // Add more breakpoints as needed
    ],
  };
  return (
    <>
      <SkewedBar
        color="#F15B2A"
        animation={false}
        header="INDUSTRIES WE SERVE"
        subHeader="Navigating Diverse Sectors"
      />

      <div className="md:my-[1.5rem] sm:px-[3rem]">
         <Slider {...settings}>
          {details.map((data, index) => (
            <div key={index} className={`flex flex-wrap md:mt-0 mt-10 md:flex-row flex-col justify-between customSlide`}>
              <div
                onMouseEnter={() => setActiveIcon(index)}
                onMouseLeave={() => setActiveIcon(null)}
                className={`md:m-1 md:mt-10 w-[90%] border rounded-[8px] h-[220px] cursor-pointer relative bg-[#FCFCFC] overflow-hidden flex flex-col justify-between`}
              >
                <div className="absolute sm:right-[-50px] sm:top-[-50px] right-[-50px] top-[-30px] md:w-[11rem] md:h-[10rem] w-[8rem] h-[8rem] flex justify-center items-center rounded-[50%]" style={{background:"#ef413617"}}>
                  <Image src={data?.icon} alt="icon" width={50} height={50} className="relative top-5 right-5" />
                </div>
                <div className="w-[40%] text-[#161616] font-medium text-[1rem] p-5 sm:pt-5 pt-16">{data?.title}</div>
                <div className="p-4 flex">
                  <div className={`${activeIcon === index ? "fade-element" : "hidden-element"} text-red-500`}>View Product</div>
                  <div className={`flex cursor-pointer arrowIcon ${activeIcon === index && "animateArrow"}`}>
                    <Image src="/images/polygon.svg" alt="icon" width={20} height={20} className="relative left-2" />
                    {/* <Image src="/images/fadedPoligon.svg" alt="icon" width={20} height={20} /> */}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default IndustrySection;
