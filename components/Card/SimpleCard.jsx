import { Grid } from "@mui/material"
import Image from "next/image"
import RequestSampleModalBtn from "../Modal/RequestSample"

const SimpleCard = ({ Details, options }) => {
  return (
    <Grid container spacing={10}>
      {Details.map((items, index) => {
        return (
          <>
            {/* First Card */}
            <Grid item xs={12} sm={6} lg={4} key={index}>
              <div className="p-2 flex flex-col gap-8">
                <div className="flex flex-col gap-4">
                  <h5 className="font-bold text-[#FFF] font-mukta text-[1.3rem] font-mukta font-normal">
                    {items.title}
                  </h5>
                  <p className="text-[#FFF] text-[14px] ">{items.desc}</p>
                </div>
                <div className="">
                  <RequestSampleModalBtn
                    Options={options}
                    heading={"Request A Sample"}
                    subHeading={"Personal Details"}
                    classes={"w-[150px] h-[48px] bg-white rounded-[4px]"}
                  >
                    <div className="text-[#EF4136]">Request Sample</div>
                  </RequestSampleModalBtn>
                </div>
                <div className="flex justify-between pb-10">
                  <h1 className="font-bold text-[3rem] text-[#FFF] opacity-70">
                    0{items.id}
                  </h1>
                  <Image
                    src={items.icon1}
                    alt="me"
                    width="80"
                    height="64"
                    className=""
                  />
                </div>
              </div>

              <hr></hr>
            </Grid>
          </>
        )
      })}
    </Grid>
  )
}

export default SimpleCard
