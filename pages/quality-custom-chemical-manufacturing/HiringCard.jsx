import { Typography } from '@mui/material'
import React from 'react';
import EastIcon from '@mui/icons-material/East';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import Image from 'next/image';
const hiringDatas = [
  {
    id: 1,
    image: "./images/document-filled.svg",
    name: "Customer-Centric Innovation",
    icon: <EastIcon />,
    icon2: <ArrowDownwardIcon />,
  },
  {
    id: 2,
    image: "./images/call.svg",
    name: "Tech-Enabled Supply Chain",
    icon: <EastIcon />,
    icon2: <ArrowDownwardIcon />,
  },
  {
    id: 3,
    image: "./images/assignment.svg",
    name: "Total Product Ownership",
    icon: <EastIcon />,
    icon2: <ArrowDownwardIcon />,
  },
  {
    id: 4,
    image: "./images/office-building.svg",
    name: "Sourcing & Manufacturing",
    icon: <EastIcon />,
    icon2: <ArrowDownwardIcon />,
  },
  {
    id: 5,
    image: "./images/office-building.svg",
    name: "Trust, Transparency,& Reliability",
    icon: <EastIcon />,
    icon2: <ArrowDownwardIcon />,
  },
];

const HiringCard = () => {
  return (
    <div className=" my-5">
      <div className="w-full relative flex pl-10  mb-8 align-center md:mb-10">
        <Image
          src="./images/brand-logo.svg"
          width={64}
          height={50}
          className="relative top-[-1.5rem]"
          alt="brand-logo"
        />
        <h2 className="font-medium md:text-3xl">Why Elchemy </h2>
      </div>
      <div className="flex flex-col  md-w-full md:flex-row p-2 pl-28 items-center gap-12">
        {hiringDatas.map((hiringData, index) => (
          <>
            <div
              className="flex flex-col items-center justify-between mb-5 md:mb-0 md:mr-5"
              key={hiringData?.id}
            >
              <div className="w-[120px] h-[120px] md:w-[100px] md:h-[100px] font-mukta rounded-[100%] bg-[#EF41361A] flex justify-center items-center">
                <img src={hiringData?.image} alt={hiringData?.name} />
              </div>
              <h5 className="text-[#161616] font-medium text-[15px] md:text-[15px] font-Mukta capitalize mt-3 text-center break-normal">
                {hiringData?.name}
              </h5>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}

export default HiringCard