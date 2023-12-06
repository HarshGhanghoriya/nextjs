import React, { useRef } from "react"
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight"
import { useState } from "react"
import ScrollTrigger from "react-scroll-trigger"
import SkewedBar from "../Common/SkewedBar"
import { Grid } from "@mui/material"
import RequestSampleModalBtn from "../Modal/RequestSample"

import Slider from "react-slick"
import { motion, useInView } from "framer-motion"
import Image from "next/image"

 const Options = [
   { value: "Details of sample needed", label: "Details of sample needed" },
   {
     value: "Tentative requisition date",
     label: "Tentative requisition date",
   },
   { value: "Requisition country", label: "Requisition country" },
   // Add more options as needed
 ];
const ProductSlider = () => {
  const [activeSlide, setActiveSlide] = useState(0)

  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.05 })

  const sliderData = [
    {
      id: 1,
      title: "Guar Gum",
      desc: " Torem ipsum dolor sit amet, consectetur adipiscing elit. Nu vulputate libero et velit interdum, ac",
      img: "./images/sliderImgOne.svg",
    },
    {
      id: 2,
      title: "John",
      desc: " Torem ipsum dolor sit amet, consectetur adipiscing elit. Nu vulputate libero et velit interdum, ac",
      img: "./images/sliderImgTwo.svg",
    },
    {
      id: 3,
      title: "Stiphen",
      desc: " Torem ipsum dolor sit amet, consectetur adipiscing elit. Nu vulputate libero et velit interdum, ac",
      img: "./images/sliderImgOne.svg",
    },
    {
      id: 4,
      title: "Robert",
      desc: " Torem ipsum dolor sit amet, consectetur adipiscing elit. Nu vulputate libero et velit interdum, ac",
      img: "./images/sliderImgThree.svg",
    },
    {
      id: 5,
      title: "Guar Gum",
      desc: " Torem ipsum dolor sit amet, consectetur adipiscing elit. Nu vulputate libero et velit interdum, ac",
      img: "./images/sliderImgTwo.svg",
    },
    {
      id: 6,
      title: "Guar Gum",
      desc: " Torem ipsum dolor sit amet, consectetur adipiscing elit. Nu vulputate libero et velit interdum, ac",
      img: "./images/sliderImgThree.svg",
    },
    {
      id: 7,
      title: "Guar Gum",
      desc: " Torem ipsum dolor sit amet, consectetur adipiscing elit. Nu vulputate libero et velit interdum, ac",
      img: "./images/sliderImgTwo.svg",
    },
    {
      id: 8,
      title: "Guar Gum",
      desc: " Torem ipsum dolor sit amet, consectetur adipiscing elit. Nu vulputate libero et velit interdum, ac",
      img: "./images/sliderImgTwo.svg",
    },
    {
      id: 9,
      title: "Guar Gum",
      desc: " Torem ipsum dolor sit amet, consectetur adipiscing elit. Nu vulputate libero et velit interdum, ac",
      img: "./images/sliderImgThree.svg",
    },
  ]

  const settings = {
    dots: true,
    infinite: true,
    className: "slider",
    swipeToSlide: true,
    dotsClass: "slick-dots slick-dots-custom",
    speed: 1500,
    customPaging: function (i) {
      return (
        <a>
          <div className="custom-dots">
            <div
              className={`dot-container ${activeSlide === i ? "active" : ""}`}
            >
              <div className={activeSlide === i ? "outer-circle" : ""}>
                <div
                  className="inner-dot"
                  style={{
                    background: activeSlide === i ? "#EF4136" : "#B3B3B3",
                  }}
                />
              </div>
            </div>
          </div>
        </a>
      )
    },
    slidesToShow: 3,
    slidesPerRow: 1,
    slidesToScroll: 1,
    autoplay: true,
    initialSlide: 0,
    autoplaySpeed: 3000,
    beforeChange: (current, next) => setActiveSlide(next),
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <>
      <div>
        <ScrollTrigger>
          <div className="flex items-center">
            <SkewedBar
              color="#F15B2A"
              animation={false}
              header="WE DELIVER QUALITY"
              subHeader="Top Products"
            />
          </div>

          <Grid container spacing={4} columnSpacing={2} >
            <Grid item xs={12} md={0.2} lg={0.6}></Grid>
            <Grid item xs={12} md={3} lg={3} mt={{lg:4}}>
              <div className="text-[#161616] font-normal  text-[20px] mt-5">
                {sliderData[activeSlide]?.title}
              </div>
              <div className="text-[#161616] font-light text-[1rem] mt-5 ">
                {sliderData[activeSlide]?.desc}
              </div>
              <RequestSampleModalBtn
                Options={Options}
                heading={"Request A Quote"}
                subHeading={"Personal Details"}
                classes={
                  "w-[100%] text-[#EF4136] h-[48px] rounded-[4px] font-medium text-[1.1rem]"
                }
              >
                <div className="flex items-center justify-between mt-5">
                  <div>Get A Quote</div>
                  <div>
                    <KeyboardArrowRightIcon style={{ color: "#EF4136" }} />
                  </div>
                </div>
              </RequestSampleModalBtn>
            </Grid>
            <Grid item xs={12} md={8} lg={8.4} className="product-slider">
              <motion.div
                ref={ref}
                initial={{ height: "0", opacity: 1 }}
                animate={{
                  height: "100%",
                  opacity: isInView ? 1 : 0,
                }}
              >
                {" "}
                <Slider {...settings}>
                  {sliderData?.map((data, index) => (
                    <div key={index} className={`center-image`}>
                      <Image
                        src={data?.img}
                        alt={`Slide ${index}`}
                        width={800}
                        height={800}
                        style={{
                          height: activeSlide === index ? "27rem" : "14rem",
                          width:"auto",
                          objectFit:
                            activeSlide === index ? "cover" : "contain",
                          transition: "all 1s",
                          borderRadius: activeSlide === index ? "14px" : "10px",
                          objectPosition:activeSlide === index ? "20% 100%":""
                        }}
                      />
                    </div>
                  ))}
                </Slider>
              </motion.div>
            </Grid>
          </Grid>
        </ScrollTrigger>
      </div>
    </>
  );
}

export default ProductSlider
