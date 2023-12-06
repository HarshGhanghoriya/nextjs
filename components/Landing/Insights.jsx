import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import SkewedBar from "../Common/SkewedBar";
import api from "@/api/Axios";
import { calculateReadingTime, getFormattedDate } from "@/utils/Common";

const Insights = () => {
  const [recentInsights, setFetchedData] = useState([]);
  const getRecentInsights = async () => {
    try {
      const resp = await api.get(`/blog-event-newsletter`);
      if (resp?.data) {
        setFetchedData([
          resp?.data?.blogdata,
          resp?.data?.eventdata,
          resp?.data?.newsletterdata,
        ]);
      }
    } catch (error) {}
  };

  useEffect(() => {
    getRecentInsights();
  }, []);

  return (
    <>
      <div className="sm:pt-10">
        <SkewedBar
          color="#F15B2A"
          animation="false"
          header="Elchemy Insights"
          subHeader=" Blogs, Events & News At Elchemy"
        />

        <div className="flex gap-10 pt-16 sm:pl-6 md:flex-row flex-col justify-center mb-20">
          {recentInsights?.length > 0 &&
            recentInsights.map((data, index) => {
              if (index === 0) {
                data.path = "blogs";
              } else if (index === 1) {
                data.path = "events";
              } else {
                data.path = "market-insights";
              }
              return (
                <>
                  <div className="md:w-[30%] sm:w-[90%] md:mt-0 mt-5 cursor-pointer h-[22rem] relative">
                    <div className="absolute top-0 left-0 p-1 px-4 rounded capitalize text-white   bg-[#EF4136]">
                      {data?.type}
                    </div>
                    <div className="w-[100%] h-[55%]">
                      <img
                        src={data?.thumbnailImgUrl ? data?.thumbnailImgUrl : ""}
                        alt={data?.type}
                        className={`h-full w-full object-cover bg-slate-300`}
                      />
                    </div>
                    <div className="p-2 pt-6 ">
                      <div className="flex  items-center text-[#979797] font-medium text-[14px] ">
                        <p>{getFormattedDate(data?.created_at)}</p>
                        <span className="h-1 w-1 mx-2 rounded-lg bg-[#979797]"></span>
                        <p>{calculateReadingTime(data?.section) + " min"}</p>
                      </div>
                      <div className="mt-2 h-[3.5rem] w-[80%] text-[1.2rem] hideLongTypography2">
                        {data?.title}
                      </div>
                      <div className="mt-8  text-[0.9rem] text-pink capitalize">
                        <Link href={{ pathname: data?.path, query: data }}>
                          View all {data?.type}
                        </Link>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Insights;
