import Header from "@/components/Header";
import { Grid, Card, CardContent, Typography } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Divider from "@mui/material/Divider";
import Image from "next/image";
import SkewedBar from "@/components/Common/SkewedBar";
import CustomManufacturing from "@/components/Landing/CustomManufacturing";
import EdgeSection from "@/components/Landing/EdgeSection";
import IndustrySection from "@/components/Landing/IndustrySection";
import TechSection from "@/components/Landing/TechSection";
import VisionaySection from "@/components/Landing/VisionaySection";
import Head from "next/head";
import React, { useState, useEffect } from "react";
import ContactUsModal from "@/components/Modal/ContactUs";
import Cards from "@/components/Card/Cards";

const CardsDetails = [
  {
    heading: "Enhanced Customer Experience",
    description:
      "We put you, the customer, at the heart of our innovation. With DOMS, you'll enjoy a smoother, more transparent, and hassle-free experience",
    img: "./images/p1.svg",
  },
  {
    heading: "Trust and Transparency",
    description:
      "Transparency breeds trust, and DOMS is built to reinforce that trust. With every transaction, you'll see the transparency and integrity that Elchemy brings to the table",
    img: "./images/p2.svg",
  },
  {
    heading: "Quicker TAT",
    description:
      "Faster operations mean quicker turnaround times. Experience the satisfaction of swift order fulfillment with DOMS",
    img: "./images/p3.svg",
  },
  {
    heading: "Efficiency Personified",
    description:
      "Less cumbersome processes mean more efficiency. DOMS optimizes your operations, letting you focus on what matters most: your core business, leave the rest to us",
    img: "./images/p4.svg",
  },
  {
    heading: "Organized Excellence",
    description:
      "DOMS brings order to chaos. Your entire order fulfillment experience is streamlined and organized, leaving no room for operational hiccups",
    img: "./images/p5.svg",
  },
];
const options = [
  {
    id: "1",
    label: "Request a DOMS demo",
  },
];
const keyfeature = [
  {
    id: "1",
    heading: "Seamless Operations",
    description:
      "Say goodbye to the days of disjointed processes. DOMS streamlines all your operations, bringing harmony to every step of your supply chain",
  },
  {
    id: "2",
    heading: "Real-Time Tracking",
    description:
      "Gain unparalleled visibility with live shipment tracking. Know where your products are at all times, boosting trust and confidence in your partnership with Elchemy",
  },
  {
    id: "3",
    heading: "Effortless Communication",
    description:
      "Bid adieu to the back-and-forth exchanges that bog down your efficiency. With DOMS, communication flows seamlessly, ensuring swift responses.",
  },
  {
    id: "4",
    heading: "Tailored to You",
    description:
      "DOMS isn't a one-size-fits-all solution. It's uniquely customized to tackle the specific challenges faced by your industry, ensuring a perfect fit for your business",
  },
];
const Dom = () => {
  
  const [activeItem, setActiveItem] = useState(0);
  const [playing, setPlaying] = useState(false);

  const handleMotion = (index) => {
    setActiveItem(index);
  };

  useEffect(() => {
    let intervalId;

    intervalId = setInterval(() => {
      setActiveItem((prevItem) => (prevItem + 1) % keyfeature.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [keyfeature.length]);

  return (
    <>
      <Head>
        <title>Home Page | Elchemy</title>

        <meta name="Elchemy Home Page" content="Home Page" key="desc" />

        <meta
          property="og:title"
          content="Elchemy: India's leading chemical exporter with unparalleled service. Get the fastest turnaround on chemical exports from India. Contact us today!"
        />

        <meta
          property="og:description"
          content="Largest Chemical Exporter Elchemy"
        />

        <meta
          property="og:image"
          content="https://elchemydev.s3.amazonaws.com/static/image'/2023-11-30/10:48:38.255645.svg"
        />
      </Head>
      <div className="overflow-hidden   ">
        <section>
          <div className="mt-20 p-6 sm:p-20">
            <Grid container spacing={0}>
              <Grid item xs={12} md={6} lg={6}>
                <SkewedBar
                  color="#F15B2A"
                  animation={false}
                  subHeader="Revolutionizing Supply Chain with DOMS"
                  style={{
                    fontFamily: "Mukta, sans-serif",
                  }}
                />

                <div className=" pl-8 sm:pl-16">
                  <p className="text-[16px] mt-6  font-normal py-8 w-80">
                    Revolutionizing Chemical Industry Supply Chains: Introducing
                    DOMS, Your Digital Order Management Solution. Harnessing the
                    synergy of industry expertise and tech innovation, we
                    simplify operations, enhance transparency, and redefine
                    customer experience
                  </p>
                  <ContactUsModal
                    heading={"Book A Demo"}
                    options={options}
                    subHeading={
                      "Any question or remarks? Just write us a message!"
                    }
                    title={"Book A Demo"}
                    classes={
                      "w-[163px] text-[#FFFFFF] h-[48px] bg-[#EF4136] rounded-[4px] font-semibold text-[16px]"
                    }
                  >
                    <div>Book A Demo</div>
                  </ContactUsModal>
                </div>
              </Grid>
              <Grid item xs={12} md={6} lg={6}>
                <div className=" mt-24 w-[108%] ">
                  <img
                    src="https://elchemydev.s3.amazonaws.com/static/image'/2023-11-24/14:24:50.614839.png"
                    alt="laptop image"
                  />
                </div>
              </Grid>
            </Grid>
            <div className="mt-24">
              <Grid container spacing={1}>
                <Grid item xs={12} md={6} lg={6}>
                  <SkewedBar
                    color="#F15B2A"
                    animation={false}
                    subHeader="The Key Features"
                    style={{
                      fontFamily: "Mukta, sans-serif",
                      fontWeight: "bold",
                    }}
                  />

                  <a>
                    <div className="text-[#666666] pl-12 sm:pl-16 pt-6 flex flex-col gap-5">
                      {keyfeature?.map((items, index) => (
                        <div className="flex flex-row  ml-[-2rem] sm:ml-[0]">
                          {activeItem === index ? (
                            <span
                              className={`w-[10px] inline-block text-[4rem]  h-[88px] bg-[#F15B2A]  ${
                                activeItem === index
                                  ? "bg-[#F15B2A]  rounded-lg  text-[4rem]"
                                  : "transition-all duration-100 ease-in-out"
                              }`}
                            ></span>
                          ) : null}
                          <div className="flex flex-col ml-2">
                            <span
                              className={` inline-block font-normal  text-[18px] text-[${
                                activeItem === index || activeItem > index
                                  ? " font-semibold #161616 "
                                  : "#B3B3B3"
                              }]`}
                            >
                              {items.heading}
                            </span>
                            <p
                              className={`  inline-block pt-2  w-70 sm:w-[80%] text-[${
                                activeItem === index || activeItem > index
                                  ? "#666666 "
                                  : "#B3B3B3"
                              }]`}
                              style={{ fontSize: "0.9rem" }}
                            >
                              {items?.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </a>
                </Grid>
                <Grid item xs={12} md={6} lg={6}>
                  <div className="boxShadow mt-0  sm:mt-32 w-[100%]">
                    <img
                      src="https://elchemydev.s3.ap-south-1.amazonaws.com/static/image'/2023-12-04/18:44:34.468623.gif"
                      height="70%"
                    ></img>
                  </div>
                </Grid>
                <Grid container spacing={1}>
                  <Grid item xs={12} md={6} lg={6}>
                    <div className="pt-40">
                      <SkewedBar
                        color="#F15B2A"
                        animation={false}
                        subHeader="The Advantages"
                        style={{
                          fontFamily: "Mokta, sans-serif",
                          fontWeight: "bold",
                        }}
                      />
                    </div>
                  </Grid>
                </Grid>
              </Grid>
              <div className="flex w-full flex-wrap">
                {CardsDetails.map((items, index) => {
                  return (
                    <>
                      <Cards
                        heading={items?.heading}
                        description={items?.description}
                        img={items?.img}
                      />
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Dom;
