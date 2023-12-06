import { Typography } from "@mui/material";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { calculateReadingTime, getFormattedDate } from "@/utils/Common";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Slider from "react-slick";

const InsightsDashboard = ({ page, data }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const [activeData, setActiveData] = useState(data[0]);
  console.log(activeSlide, "ajdsfhsd");
  useEffect(() => {
    if (data) {
      setActiveData(data[activeSlide]);
    }
  }, [activeSlide, data]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    pauseOnHover: false,
    vertical: true,
    beforeChange: (current, next) => setActiveSlide(next),
    appendDots: (dots) => (
      <div className="">
        <ul className=" absolute w-[60%]  sm:w-[40%] pb-2 pr-[10%] flex justify-between left-[10%] sm:left-[-87%]  border-b-[2px]">
          {" "}
          {dots}{" "}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <a>
        {activeSlide === i ? (
          <p className="text-[#FF4D4F] ">0{i + 1}</p>
        ) : (
          <p className="text-[#808080] ">0{i + 1}</p>
        )}
      </a>
    ),
  };
  return (
    <div className="w-full h-[100vh] ">
      <div className=" h-[10vh] sm:h-[12vh] w-full"></div>

      <p className="absolute top-[12vh] md:top-[15vh] left-12  md:left-24 z-20">
        <Link href={"/"} className="text-[0.85rem] text-[#808080]">
          Home
        </Link>{" "}
        <span className="px-1">/</span>{" "}
        <span className="font-semibold text-[0.9rem]">{page}</span>
      </p>
      <div className="h-[90vh]">
        <>
          <div className="h-[80vh] sm:h-[90vh] w-full flex flex-col md:flex-row mb-6 sm:mb-0 ">
            <div
              className="w-full md:w-[50%]  h-full md:py-14 px-12 md:px-24 flex flex-col justify-center bg-white fadeOut"
              key={activeData?.id ? activeData?.id : 0}
            >
              {activeData?.type === "events" ? (
                <p className="mb-4 sm:mb-6 text-pink text-[0.9rem]  sm:font-semibold">
                  Upcoming Events
                </p>
              ) : (
                <></>
              )}
              <p className="text-[1.2rem] sm:text-[2rem] font-normal leading-tight font-mukta">
                {activeData?.title}
              </p>
              {activeData?.type === "events" ? (
                <div className="flex gap-4 items-center py-4">
                  <p className="text-[#666666] text-[0.8rem] sm:text-[0.9rem] ">
                    <CalendarMonthIcon className="text-[0.8rem] sm:text-[1.1rem] mb-1" />{" "}
                    {getFormattedDate(activeData?.created_at)}
                  </p>
                  <div className="h-1 w-1 rounded bg-[#666666]"></div>
                  <p className="text-[#666666] text-[0.8rem] sm:text-[0.9rem] ">
                    <AccessTimeIcon className="text-[0.8rem] sm:text-[1.1rem] mb-1" />{" "}
                    {activeData?.startTime} - {activeData?.endTime}
                  </p>
                </div>
              ) : (
                <>
                  <p className="text-[#666666] text-[0.9rem] mt-4">
                    {getFormattedDate(activeData?.created_at) + " /  "}
                    {calculateReadingTime(activeData?.section) + " min"}
                  </p>
                </>
              )}

              <p
                className={`text-[#666666] text-[0.9rem] ${
                  activeData?.type === "events" ? "hidden" : ""
                } sm:block sm:text-[1rem] mt-2 `}
              >
                {activeData?.description?.length > 90
                  ? activeData?.description.slice(0, 90)
                  : activeData?.description}
                {activeData?.type == "events" && (
                  <span className=" text-pink cursor-pointer text-[0.85rem] sm:text-[1rem] font-mukta">
                    <Link
                      href={`/${activeData?.type}/${activeData?.slug}-${activeData?.id}`}
                    >
                      {"  "}
                      Read More
                      <KeyboardBackspaceIcon className="rotate-180 mb-[0.2rem] ml-2" />
                    </Link>
                  </span>
                )}
              </p>

              {activeData?.type == "events" && activeData?.is_upcoming && (
                <div className="w-full  flex gap-6 mt-6">
                  <button className="bg-[#EF4136] text-white py-2 px-3 rounded-[4px] text-[0.85rem] sm:text-[0.96rem] font-mukta">
                    {" "}
                    Book A Meeting
                  </button>
                  <button className="text-pink rounded-[4px] border border-pink py-2 px-3 rounded text-[0.85rem] sm:text-[0.96rem] font-mukta">
                    {" "}
                    Contact Us
                  </button>
                </div>
              )}
              {activeData?.type == "blogs" && (
                <p className="mt-10 text-pink cursor-pointer text-[0.85rem] sm:text-[0.96rem] font-mukta">
                  <Link
                    href={`/${activeData?.type}/${activeData?.slug}-${activeData?.id}`}
                  >
                    Read More
                    <KeyboardBackspaceIcon className="rotate-180 mb-[0.2rem] ml-2" />
                  </Link>
                </p>
              )}
            </div>

            <div className=" sm:w-[50%]  sm:h-full flex justify-center items-center">
              <Slider {...settings}>
                {data?.map((HeaderContent, index) => (
                  <div
                    className={`h-[40vh] sm:h-[50vh] w-full overflow-hidden bg-slate-500 ${
                      index === activeSlide ? "opacity-100" : "opacity-0"
                    } transition-all duration-1000`}
                  >
                    <img
                      src={
                        HeaderContent?.thumbnailImgUrl
                          ? HeaderContent?.thumbnailImgUrl
                          : ""
                      }
                      alt={HeaderContent?.type}
                      className={`h-full w-full  object-cover bg-slate-300`}
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </>
      </div>
    </div>
  );
};

export default InsightsDashboard;
