import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const MeetOurTeam = () => {
  const settings = {
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const datas = [
    {
      img: "https://elchemydev.s3.amazonaws.com/static/image'/2023-11-30/15:12:38.639781.jpg",
      name: "Hardik Seth",
      designation: "Co-Founder",
    },
    {
      img: "https://elchemydev.s3.amazonaws.com/static/image'/2023-11-30/15:12:38.639781.jpg",
      name: "Shobhit Jain",
      designation: "Co-Founder",
    },
    {
      img: "https://elchemydev.s3.amazonaws.com/static/image'/2023-11-30/15:12:38.639781.jpg",
      name: "Sanjay Bundagala",
      designation: "Sales Lead",
    },
    {
      img: "https://elchemydev.s3.amazonaws.com/static/image'/2023-11-30/15:12:38.639781.jpg",
      name: "Dinesh Bhatt",
      designation: "Finance Lead",
    },
    {
      img: "https://elchemydev.s3.amazonaws.com/static/image'/2023-11-30/15:12:38.639781.jpg",
      name: "Ankit Singh",
      designation: "Strategy Lead",
    },
    {
      img: "https://elchemydev.s3.amazonaws.com/static/image'/2023-11-30/15:12:38.639781.jpg",
      name: "Shubham Patil",
      designation: "Procurement Lead",
    },
    {
      img: "https://elchemydev.s3.amazonaws.com/static/image'/2023-11-30/15:12:38.639781.jpg",
      name: "Varun Singh",
      designation: "Operation Lead",
    },
    {
      img: "https://elchemydev.s3.amazonaws.com/static/image'/2023-11-30/15:12:38.639781.jpg",
      name: "Dhruvin Bavishi",
      designation: "Founders Office",
    },
    {
      img: "https://elchemydev.s3.amazonaws.com/static/image'/2023-11-30/15:12:38.639781.jpg",
      name: "Divya Ahedi",
      designation: "Peoples Function Lead",
    },
    {
      img: "https://elchemydev.s3.amazonaws.com/static/image'/2023-11-30/15:12:38.639781.jpg",
      name: "Krishnanshu Mishra",
      designation: "Tech Lead",
    },
  ];

  const [hoverStates, setHoverStates] = useState(
    Array(datas.length).fill(false)
  );

  const handleMouseEnter = (index) => {
    setHoverStates((prevStates) => {
      const newStates = [...prevStates];
      newStates[index] = true;
      return newStates;
    });
  };

  const handleMouseLeave = (index) => {
    setHoverStates((prevStates) => {
      const newStates = [...prevStates];
      newStates[index] = false;
      return newStates;
    });
  };

  return (
    <div className=" flex justify-center items-center py-10">
      <div className="w-full">
      <div className="flex gap-[6] items-center h-full">
        <Image
          src="./images/brand-logo.svg"
          width={64}
          height={72}
          className="relative "
          alt="brand-logo"
        />
          <div
            className={`md:text-[40px] font-light text-[30px] font-mukta`}
          >
            Meet Out Team
        </div>
      </div>
        <div className="py-10">
          <Slider {...settings} className="sm:ml-7 md:ml-12">
            {datas.map((data, index) => (
              <div
                key={index}
                className="focus:outline-none md:pl-5 px-2 flex flex-col items-start"
              >
                <div
                  className="relative overflow-hidden"
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={() => handleMouseLeave(index)}
                  key={index}
                >
                  <Image
                    src={data.img}
                    alt={data.name}
                    className="w-[250px] h-[250px] md:w-[400px] md:h-[200px] md:object-cover object-cover grayscale transition-transform duration-300 hover:grayscale-0 transform hover:scale-110"
                    width={250}
                    height={250}
                  />
                  <div
                    className={`absolute w-[40%] h-full top-0  whatWeDoBar ${
                      hoverStates[index] ? " left-[130%]" : "left-[-60%]"
                    } bg-[#ff0808] transition-all duration-1000`}
                    key={index}
                  ></div>
                </div>
                <h2 className="text-[20px] mt-5 font-mukta">
                  {data.name}
                </h2>
                <div className="text-[16px] text-[#666] mt-0.3 ">
                  {data.designation}
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default MeetOurTeam;
