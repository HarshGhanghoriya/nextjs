import React, { useState } from "react"
import SkewedBar from "../Common/SkewedBar"
import Slider from "react-slick"
import { Grid } from "@mui/material"
import sliderDot from "../../public/images/sliderDot.svg"
import activeDot from "../../public/images/activeDot.svg"
import Image from "next/image"

const TheElchemyAdvantage = () => {
  const [activeSlide, setActiveSlide] = useState(0)
  const sliderData = [
    {
      id: 0,
      image:
        "https://elchemydev.s3.amazonaws.com/static/image'/2023-11-30/16:35:49.244318.jpg",
      title: "Tailored Chemical Solutions",
      description:
        "With our streamlined processes and efficient logistics, we can get your products to you in record time.",
    },
    {
      id: 1,
      image:
        "https://elchemydev.s3.amazonaws.com/static/image'/2023-11-30/16:37:31.506126.png",
      title: "Quality Commitment",
      description:
        "Our unwavering commitment ensures confidence in every batch.",
    },
    {
      id: 2,
      image:
        "https://elchemydev.s3.amazonaws.com/static/image'/2023-11-30/16:45:28.092174.jpg",
      title: "Streamlined Project Mastery",
      description:
        "Experience seamless execution with agile project management.",
    },
    {
      id: 3,
      image:
        "https://elchemydev.s3.amazonaws.com/static/image'/2023-11-30/16:47:28.022296.jpg",
      title: "Confidentiality & Trusted Partnership",
      description: "Your data is safeguarded by stringent security protocols.",
    },
    {
      id: 4,
      image:
        "https://elchemydev.s3.amazonaws.com/static/image'/2023-11-30/16:48:10.569929.jpg",
      title: "Cost Efficiency",
      description: "Optimize costs without compromising quality.",
    },
    {
      id: 5,
      image:
        "https://elchemydev.s3.amazonaws.com/static/image'/2023-11-30/16:49:06.680640.jpg",
      title: "Technology-Driven Operational Excellence",
      description: "Leverage cutting-edge technology for real-time visibility.",
    },
  ]

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
    appendDots: dots => (
      <div className="">
        <ul className="px-4 py-4 flex justify-between items-center h-full slick-custom-ul">
          {" "}
          {dots}{" "}
        </ul>
      </div>
    ),
    customPaging: i => (
      <a>
        {activeSlide === i ? (
          <>
            <div>
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
    
  }

  return (
    <div className="">
      <div className="flex gap-[4] items-center">
        <Image
          src="./images/brand-logo-orange.svg"
          width={64}
          height={72}
          className="relative"
          alt="brand-logo"
        />
        <div className="">
          <div
            className={`md:text-[40px] font-light text-[20px] text-[#F2F2F2] font-mukta`}
          >
            The ELCHEMY ADVANTAGE
          </div>
        </div>
      </div>
      <div className="lg:pt-31 pt-6 lg:pb-16 flex flex-col md:flex-row justify-between items-center">
        <Grid container spacing={{ xs: 0, sm: 0, md: 0, lg: 0 }}>
          <Grid
            item
            xs={12}
            md={5}
            lg={5}
            className="self-center md:pl-20 md:pl-20"
            
          >
            <p className="text-[#FFFFFF] text-[30px] font-normal w-[60%] font-mukta">
              {sliderData[activeSlide]?.title}
            </p>
            <p className="text-[#FFFFFF] text-[16px] font-normal w-[60%]font-mukta">
              {sliderData[activeSlide]?.description}
            </p>
          </Grid>
          <Grid item xs={12} md={7} lg={7} className="self-center">
            <Slider {...settings}>
              {sliderData?.map((item, index) => (
                <div
                  key={index}
                  className="w-full h-[300px] md:h-[200px] lg:h-[350px] md:my-3 md:pl-10 center-image overflow-hidden"
                >
                  <Image
                    src={item.image}
                    width={370}
                    height={800}
                    alt={`Slide ${index}`}
                    className="w-full h-full rounded-xs"
                  />
                </div>
              ))}
            </Slider>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default TheElchemyAdvantage
