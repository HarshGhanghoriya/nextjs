import { Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import IndividualInsightsFirstSectionInner from "./IndividualInsightsFirstSectionInner";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";

const IndiividualInsightsFirstSection = ({
  data,
  page,
  similarMarketInsights,
}) => {
  const renderHTML = (htmlString) => {
    return { __html: htmlString };
  };

  return (
    <>
      <div className="h-[40vh] md:h-[50vh] border-2 relative bg-slate-500">
        <img
          src={data?.thumbnailImgUrl}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 w-full h-full flex justify-center items-center z-10 bg-[#00000099]">
          <p className="absolute top-4 left-2 sm:top-10 sm:left-20">
            <Link href={"/"} className="text-[0.85rem] text-[#dfdfdf]">
              Home
            </Link>{" "}
            <span className="px-1 text-white">/</span>{" "}
            <Link
              href={`/${
                data?.type !== "market insights"
                  ? data?.type
                  : "market-insights"
              }`}
              className="text-[0.85rem] text-[#dfdfdf]"
            >
              {page}
            </Link>
            <span className="px-1 text-white">/</span>{" "}
            <span className="font-semibold text-[0.9rem] text-white">
              {data?.title.slice(0, 20) + "..."}
            </span>
          </p>
          <div className=" w-[90%] sm:w-[40%] ">
            <p className="text-[1.4rem] sm:text-[2.2rem] text-center text-white font-thin font-mukta">
              {data?.title}
            </p>
            {data?.type == "events" && data?.is_upcoming && (
              <div className="w-full  flex justify-center gap-6 mt-6">
                <button className="bg-[#EF4136] text-white py-2 px-3 rounded-[2px]">
                  {" "}
                  Book A Meeting
                </button>
                <button className="bg-white text-pink  py-2 px-3 rounded-[2px]">
                  {" "}
                  Contact Us
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="py-10 mt-8 flex flex-col sm:flex-row justify-between px-8 sm:14 md:px-24">
        <div className="md:w-[30%]">
          <IndividualInsightsFirstSectionInner
            data={data}
            similarMarketInsights={similarMarketInsights}
          />
        </div>
        <div className="md:w-[65%]">
          {data?.section?.map((e) => {
            return (
              <>
                {e?.sectionHeading && (
                  <p className="text-[1rem] md:text-[1.1rem] mb-2 md:mb-6 mt-10 md:mt-0">
                    {e?.sectionHeading}
                  </p>
                )}
                <div
                  suppressHydrationWarning={true}
                  className="mb-12 md:leading-8 text-[#666666]"
                  dangerouslySetInnerHTML={renderHTML(e?.sectionText)}
                />
                {e?.image && <img src={data?.iamge} />}
              </>
            );
          })}
          <div className="border-t-2 pt-6 md:pt-10 flex justify-end gap-3">
            <a href="" target="_blank">
              <InstagramIcon className="text-[#808080] text-[1.6rem]" />
            </a>
            <a href="" target="_blank">
              <WhatsAppIcon className="text-[#808080] text-[1.6rem]" />
            </a>
            <a href="" target="_blank">
              <TwitterIcon className="text-[#808080] text-[1.6rem]" />
            </a>
            <a href="" target="_blank">
              <LinkedInIcon className="text-[#808080] text-[1.6rem]" />
            </a>
            <a href="" target="_blank">
              <FacebookRoundedIcon className="text-[#808080] text-[1.6rem]" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default IndiividualInsightsFirstSection;
