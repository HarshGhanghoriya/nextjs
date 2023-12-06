import React, { useState } from "react"
import ImageSlider from "@/components/slider/ImageSlider"
import { Grid } from "@mui/material"
import Slider from "react-slick"
import Image from "next/image"
const details = [
  {
    id: 156755,
    text: "01",
    name: "Tailored Chemical Solutions",
    desc: "With our streamlined processes and efficient logistics, we can get your products to you in record time",
    img: "https://elchemydev.s3.amazonaws.com/static/image%27/2023-11-30/14:50:55.091041.png",
  },
  {
    id: 2567567,
    text: "02",
    name: "Quality Commitment",
    desc: "Our unwavering commitment to quality ensures that every product we manufacture meets the highest industry standards, providing you with confidence in every batch",
    img: "https://elchemydev.s3.amazonaws.com/static/image'/2023-11-30/14:52:33.683100.png",
  },
  {
    id: 3567567,
    text: "03",
    name: "Streamlined Project Mastery",
    img: "https://elchemydev.s3.amazonaws.com/static/image'/2023-11-30/14:53:04.685561.png",
    desc: "Experience seamless project execution with our agile project management, guaranteeing on-time deliveries and cost-effective solutions, every time",
  },
  {
    id: 456757,
    text: "04",
    name: "Confidentiality & Trusted Patnership",
    img: "https://elchemydev.s3.amazonaws.com/static/image'/2023-11-30/14:53:30.652341.png",
    desc: "Rest easy knowing that your proprietary formulations and sensitive data are handled with the utmost confidentiality, safeguarded by our stringent security protocols",
  },
  {
    id: 56757,
    text: "05",
    name: "Cost Efficiently",
    img: "https://elchemydev.s3.amazonaws.com/static/image'/2023-11-30/15:36:27.460168.png",
    desc: "Experience significant cost-efficiency gains in your custom chemical manufacturing projects through our optimized processes, delivering both exceptional quality and budget-friendly solution",
  },
  {
    id: 6056700,
    text: "06",
    name: "Technology Driven Operations",
    img: "https://elchemydev.s3.amazonaws.com/static/image'/2023-11-30/14:53:58.095146.png",
    desc: "Experience significant cost-efficiency gains in your custom chemical manufacturing projects through our optimized processes, delivering both exceptional quality and budget-friendly solution",
  },
]
const VisionaySection = () => {
  const [activeSlide, setActiveSlide] = useState(0)

  const settings = {
    dots: false,
    infinite: true,
    swipeToSlide: true,
    speed: 1000,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 5000,
    arrows: false,
    afterChange: (current, next) => {
      setActiveSlide(current)
    },
  }

  return (
    <>
      <div className="flex gap-[4]">
          <Image
            src="./images/brand-logo-orange.svg"
            width={64}
            height={72}
            className="relative top-[-1.5rem]"
            alt="brand-logo"
          />
        <div className="">
          <div className="text-[1rem] text-[#FCFCFC] font-bold uppercase font-mukta">
          ELCHEMY ADVANTAGE
          </div>
          <div
            className={`md:text-[40px] font-light text-[20px] text-[#F2F2F2] font-mukta`}
          >
           Elchemy's Visionary Steps
          </div>
        </div>
      </div>
      <div className="pt-16 hidden sm:block  pl-16">
        <Grid container spacing={10}>
          <Grid item xs={12} md={12} lg={6}>
            <h2 className="text-[#FFFFFF] text-[2.4rem] w-[80%] font-normal">
              {details[activeSlide]?.name}
            </h2>
            <div className="text-[#FFFFFF] text-[1rem] mt-5 w-[70%] font-light">
              {details[activeSlide]?.desc}
            </div>
          </Grid>
          <Grid item xs={12} md={12} lg={6} className="hidden sm:block">
            <ImageSlider data={details} />
          </Grid>
        </Grid>
      </div>
      <div className="mt-20 sm:hidden">
        <Slider {...settings}>
          {details?.map((data, index) => (
            <div key={index} style={{}}>
              <Image
                src={`${data.img}`}
                alt={`Slide ${index}`}
                width={100}
                height={100}
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "10px",
                }}
              />
              <div
                className="text-[1rem] font-normal text-[#F1F2F2]"
                style={{ padding: "0px 5px 0px 5px" }}
              >
                {data.name}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  )
}

export default VisionaySection
