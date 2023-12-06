import { Typography } from "@mui/material";
import React from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import Link from "next/link";
import { calculateReadingTime, getFormattedDate } from "@/utils/Common";

const InsighsCard = ({ data }) => {
  return (
    <>
      <div
        className={`w-[100%]  mb-6 rounded-xs hover:shadow-lg ${
          data?.type == "events" ? "h-[25rem]" : "h-[22rem]"
        } `}
      >
        <div
          className={`w-[100%]  p-2 ${
            data?.type == "events" ? "h-[50%]" : "h-[55%]"
          } `}
        >
          <img
            src={data?.thumbnailImgUrl}
            alt="blog image"
            className="w-full h-full object-cover bg-slate-300 rounded-[4px]"
          />
        </div>
        <div className={`p-3 px-4 pb-0`}>
          <div className="flex  items-center text-[#979797] text-[0.8rem] ">
            <p>{getFormattedDate(data?.created_at)}</p>
            {data?.type == "blogs" && (
              <>
                <span className="h-1 w-1 mx-2 rounded-lg bg-[#979797]"></span>
                <p>{calculateReadingTime(data?.section) + " min"}</p>
              </>
            )}
          </div>
          <div className="mt-2 text-[1rm] h-[3.2rem] hideLongTypography2">
            {data?.title}
          </div>
          {data?.type == "events" && (
            <p className="text-[#666666] text-[0.85rem] h-[2.8rem] hideLongTypography2">
              {data?.description}
            </p>
          )}
          <p className="mt-5 text-pink text-[0.94rem] font-medium items-baseline cursor-pointer font-mukta">
            <Link href={`/${data?.type}/${data?.slug}-${data?.id}`}>
              {data?.type == "events" ? "View Now" : "Read Now"}
              <KeyboardBackspaceIcon className="rotate-180 mb-[0.2rem] ml-2 text-[1.2rem]" />
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default InsighsCard;
