import { Typography } from "@mui/material";
import React from "react";
import InsighsCard from "./InsighsCard";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MarketInsightCard from "./MarketInsightCard";
import Image from "next/image";

const InsightsList = ({
  page,
  data,
  type,
  setPage,
  pagenumber,
  isNext,
  isSimilar,
}) => {
  return (
    <div className=" w-full py-10 px-6 sm:p-20">
      <div className=" mb-2 sm:mb-0 flex items-center -ml-5 sm:-ml-0">
        <Image
          src="./images/brand-logo.svg"
          width={64}
          height={72}
          className=" h-8 sm:h-14 md:h-16 relative -ml-1 mb-2"
          alt="brand-logo"
        />
        <h1 className="text-[1.6rem] md:text-[2.4rem] -ml-4 sm:-ml-0 font-mukta font-light">
          {page}
        </h1>
      </div>
      <div
        className={`${
          isSimilar
            ? "flex overflow-x-scroll sm:overflow-auto w-full sm:grid xl:grid-cols-3 md:grid-cols-2 sm:gap-10 sm:my-4  sm:px-8 sm:py-2 md:px-14 md:py-6 sm:justify-start"
            : "grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10  sm:px-8 sm:my-4 sm:py-2 md:px-14 md:py-6 w-full sm:justify-start justify-center "
        }  ${
          type == "market insights"
            ? " sm:border-t-2 sm:border-b-2 relative"
            : ""
        }`}
      >
        {type == "market insights" ? (
          <>
            {data?.map((e, i) => {
              return (
                <>
                  <div
                    className={`border-b-2 sm:border-b-0  ${
                      i === 2 || i === 5 ? "" : "sm:border-r-2"
                    }`}
                  >
                    <MarketInsightCard data={e} type={type} />
                  </div>
                </>
              );
            })}
          </>
        ) : (
          <>
            {data?.map((e) => {
              return (
                <div
                  className={`${isSimilar ? "min-w-[80vw] sm:min-w-full" : ""}`}
                >
                  <InsighsCard data={e} type={type} />
                </div>
              );
            })}
          </>
        )}
      </div>

      {!isSimilar && (
        <div className="w-full flex justify-end gap-4">
          <ArrowBackIcon
            className={` ${
              pagenumber > 1 ? "text-pink cursor-pointer" : "text-[#ef42368a]"
            }`}
            onClick={() => {
              if (pagenumber > 1) {
                setPage(pagenumber - 1);
              }
            }}
          />
          <div
            onClick={() => {
              if (isNext) {
                setPage(pagenumber + 1);
              }
            }}
          >
            <ArrowForwardIcon
              className={`mb-1 ${
                isNext ? "text-pink cursor-pointer" : "text-[#ef42368a]"
              }`}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default InsightsList;
