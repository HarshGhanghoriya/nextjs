import { getFormattedDate } from "@/utils/Common";
import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Link from "next/link";

const IndividualInsightsFirstSectionInner = ({
  data,
  similarMarketInsights,
}) => {
  return (
    <div className="md:w-[80%]">
      {data?.type === "blogs" && (
        <>
          <div className="flex items-center mb-6 md:mb-20">
            <div className="bg-[#666666] w-10 h-[1px] mr-4"></div>
            <p className="text-[#666666] text-[0.8rem] ">
              {getFormattedDate(data?.created_at)}
            </p>
          </div>
          <div className="bg-[#F1F2F299] py-8 px-6 rounded">
            <p className="text-[1rem] font-medium mb-3">
              {data?.authorName ? data?.authorName : "Author"}
            </p>
            <p className="text-[#666666] text-[0.88rem] mb-8 md:mb-10">
              {data?.authorBio}
            </p>
            <div className="bg-[#666666] w-[100%] h-[1px] mb-6"></div>
            <div className="flex items-center ">
              <a href={data?.authorInstaLink} target="_blank">
                <InstagramIcon className="text-[#666666]" />
              </a>
              <a href={data?.authorLinkedinLink} target="_blank">
                <LinkedInIcon className="text-[#666666] ml-3" />
              </a>
              <a href={data?.authorTwitterLink} target="_blank">
                <TwitterIcon className="text-[#666666] ml-3" />
              </a>
            </div>
          </div>
        </>
      )}
      {data?.type === "events" && (
        <>
          <p className="font-medium md:font-semibold text-[#333333] text-[1.1rem] md:text-[0.88rem]">
            Event Details
          </p>
          <div className="bg-[#F1F2F299] py-8 px-6 rounded mt-4 sm:mt-10">
            <div className="flex ">
              <AccessTimeIcon className="text-pink text-[1.3rem] mr-4" />
              <div>
                <p className="text-[0.9rem]">
                  {getFormattedDate(data?.dateOfEvent)}
                </p>
                <p className="text-[#666666] text-[0.86rem] mt-1">
                  The event will start from {data?.startTime} to {data?.endTime}
                </p>
              </div>
            </div>
            <div className="bg-[#666666] w-full h-[1px] my-8"></div>

            <div className="flex">
              <LocationOnOutlinedIcon className="text-pink text-[1.4rem] mr-4 -ml-1" />
              <div>
                <p className="text-[0.9rem]">
                  {data?.buildingName},{data?.city}
                </p>
                <p className="text-[#666666] text-[0.86rem] mt-1">
                  {data?.locality}, {data?.city}, {data?.state}, {data?.country}
                </p>
                <p className="mt-8 text-pink cursor-pointer text-[0.9rem]">
                  <a href={data?.locationUrl} target="_blank">
                    View On Maps{" "}
                    <KeyboardBackspaceIcon className="rotate-180 text-[1.2rem] ml-1" />
                  </a>
                </p>
              </div>
            </div>
          </div>
        </>
      )}
      {data?.type === "market insights" && (
        <>
          <div className="flex items-center gap-2">
            <p className="font-semibold text-[#333333] text-[0.88rem]">
              News Summary
            </p>
            <ArrowForwardIcon className="text-[#333333] text-[1rem]" />
          </div>
          <div className="bg-[#F1F2F299] py-8 px-6 rounded mt-4">
            {data?.summaries?.map((data) => {
              return (
                <>
                  <div className=" flex items-center py-1 border-b-2">
                    <div className="h-1 w-1 bg-black rounded-lg mx-2 font-mukta font-medium"></div>
                    <p>{data?.summaryTitle}</p>
                  </div>
                  <p className="text-[#666666] text-[0.9rem] mt-3 mb-8 ">
                    {data?.summary}
                  </p>
                </>
              );
            })}
          </div>
          <div className="flex items-center gap-2 mt-14">
            <p className="font-semibold text-[#333333] text-[0.88rem]">
              Similar Insights
            </p>
            <ArrowForwardIcon className="text-[#333333] text-[1rem]" />
          </div>
          <div className=" mt-4">
            {similarMarketInsights?.map((data) => {
              return (
                <Link href={`/market-insights/${data?.slug}-${data?.id}`}>
                  <div className="flex gap-4 py-4 h-[6rem] border-b-2">
                    <img
                      src={data?.thumbnailImgUrl}
                      alt=""
                      className="w-[30%] object-cover rounded"
                    />
                    <p className="text-[0.8rem] text-[#333333] font-semibold hideLongTypography2">
                      {data?.title}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default IndividualInsightsFirstSectionInner;
