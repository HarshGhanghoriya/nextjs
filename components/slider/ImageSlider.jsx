import React from "react"
import Slider from "react-slick"

const ImageSlider = ({ data }) => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    initialSlide: 0,
    autoplaySpeed: 5000,
    vertical: true,
    verticalSwiping: true,
  }

  return (
    <>
      <div className="w-[100%] h-[100%] relative flex justify-center flex-col items-center">
        <Slider {...settings}>
          {data.map((item, idx) => (
            <div className="relative" key={`${idx}`}>
              <div className="bottom-[-30px] absolute font-semibold text-[96px] text-[#BABABA] ">
                {item.text}
              </div>
              <img
                src={`${item.img}`}
                alt="logo"
                style={{ width: "40rem", height: "20rem", borderRadius: "10px" }}
              />
            </div>
          ))}
        </Slider>
      </div>
    </>
  )
}

export default ImageSlider
