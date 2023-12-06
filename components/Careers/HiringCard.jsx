import { Typography } from '@mui/material'
import React from 'react';
import EastIcon from '@mui/icons-material/East';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const hiringDatas = [
  {
    id: 1,
    image: "./images/document-filled.svg",
    name: "application",
    icon: <EastIcon />,
    icon2: <ArrowDownwardIcon />
  },
  {
    id: 2,
    image: "./images/call.svg",
    name: "Phone Call",
    icon: <EastIcon />,
    icon2: <ArrowDownwardIcon />
  },
  {
    id: 3,
    image: "./images/assignment.svg",
    name: "Assignments",
    icon: <EastIcon />,
    icon2: <ArrowDownwardIcon />
  },
  {
    id: 4,
    image: "./images/office-building.svg",
    name: "On-ste Visit",
    icon: <EastIcon />,
    icon2: <ArrowDownwardIcon />
  },
  {
    id: 5,
    image: "./images/tick-2.svg",
    name: "Hired!",
    icon: <EastIcon />,
    icon2: <ArrowDownwardIcon />
  }
]

const HiringCard = () => {
  return (
    <div className='py-10 md:py-20 my-5 md:my-10'>
      <div className="w-full relative pl-4 mb-8 align-center md:mb-10">
        <div className="h-[80px] w-[40px] whatWeDoBar bg-[#F15B2A] absolute -left-7 -top-6"></div>
        <h2 className='text-2xl font-medium md:text-4xl mb-2'>Elchemy’s Hiring Process</h2>
      </div>
      <div className='flex flex-col gap-10 md-w-full md:flex-row items-center md:justify-between'>
        {hiringDatas.map((hiringData, index) => (
          <>
          <div className='flex flex-col items-center justify-between mb-5 md:mb-0 md:mr-5' key={hiringData?.id}>
            <div className='w-[120px] h-[120px] md:w-[160px] md:h-[160px] rounded-[100%] bg-[#EF41361A] flex justify-center items-center'>
              <img src={hiringData?.image} alt={hiringData?.name} />
            </div>
            <h5 className='text-[#161616] font-medium text-lg md:text-2xl font-Mukta capitalize mt-3 text-center break-normal'>
              {hiringData?.name}
            </h5>
          </div>
           <div className={` flex items-center justify-between ${index === hiringDatas.length - 1 ? 'hidden' : ''}`}>
           <div className={`pb-3  md:hidden`}>{hiringData?.icon2}</div>
           <div className={`hidden md:flex`}>{hiringData?.icon}</div>
         </div>
         </>
        ))}
      </div>
    </div>



  )
}

export default HiringCard