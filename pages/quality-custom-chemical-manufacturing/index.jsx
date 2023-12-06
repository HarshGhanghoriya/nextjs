import SkewedBar from "@/components/Common/SkewedBar";
import Header from "@/components/Header";
import { Typography } from "@mui/material";
import Expertise from "@/components/Custom-manufacturing/Expertise";
import Image from "next/image";
import Link from "next/link";
import ElchemyExperitse from "@/components/Custom-manufacturing/ElchemyExperitse";
 import RequestSampleModalBtn from "@/components/Modal/RequestSample";
import HiringCard from "./HiringCard";
const CustomSolutions = () => {
 
  return (
    <>
      <div className="pt-[10vh] sm:[12vh]">
        <section>
          <div className="w-full h-[45vh] md:h-[60vh] bg-slate-400 relative">
            <img
              src="https://elchemydev.s3.ap-south-1.amazonaws.com/static/image'/2023-12-05/11:24:58.png"
              className="w-full h-full object-cover"
              style={{ height: "540px" }}
              alt=""
            />
            <div className="absolute top-0 w-full h-[540px] flex justify-center items-center z-10 bg-[#0000007e]">
              <Typography className="absolute top-4 left-2 sm:top-10 sm:left-20">
                <Link
                  href={"/"}
                  className=" font-semibold text-[0.85rem] text-[#dfdfdf]"
                >
                  Home
                </Link>{" "}
                <span className="px-1 text-white">/</span>{" "}
                <span className="font-semibold text-[0.9rem] text-white">
                  Custom Manufacturing
                </span>
              </Typography>
              <div className="flex flex-col justify-center items-center pt-20">
                <h1 className="text-[#FFFFFF] text-[56px] md:text-[3.4rem]  w-[80%] text-center p-1 px-4 font-mukta font-light">
                  Welcome to Elchemy's World of Custom Manufacturing Excellence
                </h1>

                <div className="pt-6 flex gap-4">
                  <div className="">
                    <RequestSampleModalBtn
                      // Options={Options}
                      heading={"Request A Sample"}
                      subHeading={"Personal Details"}
                      classes={
                        "w-[240px] h-[48px] bg-[#EF4136]  text-[#fff] rounded-[3px]"
                      }
                    >
                      <div> {"Request Custom Formulation"}</div>
                    </RequestSampleModalBtn>
                  </div>
                  <div className="border-2 border-[#fff] px-4 py-3 rounded-[3px] bg-white text-[#EF4136]">
                    Talk To An Expert
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="pt-20 p-20 mt-40 pl-60 flex gap-2  ">
            <Image
              src="./images/brand-logo.svg"
              width={19}
              height={20}
              className="relative top-[-1.5rem]"
              alt="brand-logo"
            />
            <p className="mt-[-20px] w-[80%]">
              At Elchemy, we transcend the ordinary, redefining the landscape of
              custom manufacturing for chemical innovators worldwide. Our
              commitment to enhancing your experience is not just a promise;
              it's our passion.
            </p>
          </div>
        </section>
        <section>
          <HiringCard />
        </section>
        <section>
          <div className="flex pl-10 pt-20 text-3xl ">
            <Image
              src="./images/brand-logo.svg"
              width={64}
              height={50}
              className="relative top-[-1.5rem]"
              alt="brand-logo"
            />
            <h1>Custom Manufacturing Solutions</h1>
          </div>
          <div className="flex ">
            <div className="flex flex-col gap-8  ml-24 pt-40">
              <div className=" flex flex-col gap-2  font-normal ">
                <h1 className="text-[30px] font-mukta">
                  Tailored Chemical Solutions
                </h1>

                <p className="w-[34%] text-[14px] ">
                  Discover limitless possibilities with our tailored chemical
                  solutions, meticulously designed to meet your unique
                  specifications and propel your innovations
                </p>
              </div>
              <div className="">
                <RequestSampleModalBtn
                  // Options={Options}
                  heading={"Request A Sample"}
                  subHeading={"Personal Details"}
                  classes={
                    "w-[240px] h-[48px] bg-[#EF4136]  text-[#fff] rounded-[3px]"
                  }
                >
                  <div> {"Request Custom Formulation"}</div>
                </RequestSampleModalBtn>
              </div>
            </div>
            <div className=" flex flex-row">
              <img src=""
              alt="hello"/>
            </div>
          </div>
          
        </section>
        <section></section>
        {/* <section className="headerImg">
            <div className="w-full h-full bg-[#EF4136E5] heroSection">
              <div className="w-[50%] p-[3rem] pb-[2rem]">
                <SkewedBar
                  color="#FDCD9A"
                  animation="false"
                  subHeader="Custom Manufacturing Solutions"
                  subHeaderColor="#F1F2F2"
                />
              </div>
              <div className="w-[42%] px-[5rem] py-0">
                <p className="text-[#F1F1F2]">
                  Elchemy harmoniously merges cutting-edge technology with the
                  chemical industry's time-tested traditions to create
                  tailor-made solutions that significantly advance your
                  projects.
                </p>
              </div>
              <div className="w-[45%] flex justify-between items-center px-[5rem] py-[3rem]">
                <div className="bg-[#fff] text-[#EF4136E5] px-5 py-4 rounded-[.5rem] font-bold">
                  <RequestSampleModalBtn
                    Options={Options}
                    heading={"Request A Sample"}
                    subHeading={"Personal Details"}
                    classes={"w-[150px] h-[48px] bg-white rounded-[4px]"}
                  >
                    <div> {"Request Sample"}</div>
                  </RequestSampleModalBtn>
                </div>
                <div className="border-2 border-[#fff] px-4 py-3 rounded-[.5rem] text-[#fff]">
                  Talk To An Expert
                </div>
              </div>
            </div>
          </section> */}
        {/* <section className="spacing_sm">
            <ElchemyExperitse />
          </section>
          <section className="spacing_sm">
            <ExpertiseAnimationCard />
          </section> */}
          <section >
            <Expertise />
          </section>
          {/* <section className="spacing_sm bg-[#EF4136E5] pb-20">
            <WhyElchemy />
          </section> */}
      </div>
      {/* <Form /> */}
    </>
  );
};

export default CustomSolutions;
