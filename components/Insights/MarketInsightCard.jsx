import { getFormattedDate } from "@/utils/Common";
import { Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

const MarketInsightCard = ({ data }) => {
  return (
    <>
      <div className="w-[100%]  mb-8  px-6">
        <div className="mt-2 text-[1.1rem] h-[3.2rem] hideLongTypography2 font-mukta">
          {data?.title}
        </div>
        <div className="flex mt-2 items-center text-[#4D4D4D] text-[0.8rem] font-medium">
          <p>{getFormattedDate(data?.created_at)}</p>
        </div>

        <p className="text-[#666666] my-3 text-[0.85rem] h-[5.2rem] hideLongTypography4">
          {data?.description}
        </p>

        <p className="mt-10 text-pink text-[0.9rem] sm:text-[1rem] items-baseline cursor-pointer font-mukta font-medium">
          <Link href={`/market-insights/${data?.slug}-${data?.id}`}>
            Read More{" "}
            <KeyboardBackspaceIcon className="rotate-180 ml-1 text-[1.2rem] mb-[0.2rem]" />
          </Link>
        </p>
      </div>
    </>
  );
};

export default MarketInsightCard;
