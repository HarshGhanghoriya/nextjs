import React, { useEffect, useState } from "react";
import InsightsDashboard from "@/components/Insights/InsightsDashboard";
import InsightsList from "@/components/Insights/InsightsList";
import api from "@/api/Axios";
import Link from "next/link";
import { Typography } from "@mui/material";
import FeaturedMarketInsights from "@/components/Insights/FeaturedMarketInsights";
import Head from "next/head";

const index = () => {
  const [marketInsights, setMarketInsights] = useState([]);
  const [page, setPage] = useState(1);
  const [isDataRemaining, setIsDataRemaining] = useState();
  const getmarketInsights = async () => {
    try {
      const resp = await api.get(`/newsletter/?page=${page}&page_size=6`);
      if (resp?.data?.status == 200) {
        setMarketInsights(resp?.data?.data?.results);
        setIsDataRemaining(resp?.data?.data?.next === null ? false : true);
      }
    } catch (error) {}
  };

  useEffect(() => {
    getmarketInsights();
  }, [page]);

  return (
    <>
      <Head>
        <title>Home Page | Elchemy</title>
        <meta name="Elchemy Home Page" content="Home Page" key="desc" />
        <meta
          property="og:title"
          content="Elchemy: India's leading chemical exporter with unparalleled service. Get the fastest turnaround on chemical exports from India. Contact us today!"
        />
        <meta
          property="og:description"
          content="Largest Chemical Exporter Elchemy"
        />
        <meta
          property="og:image"
          content="https://elchemydev.s3.amazonaws.com/static/image'/2023-11-30/14:52:33.683100.png"
        />
      </Head>
      <div className="pt-[10vh] sm:[12vh]">
        <div className="w-full h-[45vh] md:h-[60vh] bg-slate-400 relative">
          <img
            src="https://elchemydev.s3.amazonaws.com/static/image'/2023-11-29/12:42:46.264319.png"
            className="w-full h-full object-cover"
            alt=""
          />
          <div className="absolute top-0 w-full h-full flex justify-center items-center z-10 bg-[#0000007e]">
            <Typography className="absolute top-4 left-2 sm:top-10 sm:left-20">
              <Link href={"/"} className="text-[0.85rem] text-[#dfdfdf]">
                Home
              </Link>{" "}
              <span className="px-1 text-white">/</span>{" "}
              <span className="font-semibold text-[0.9rem] text-white">
                Market Insights
              </span>
            </Typography>
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-white text-[1.6rem] md:text-[3.2rem] text-center border-b-2 p-1 px-4 font-mukta font-light">
                Elchemy’s Market <span className="font-semibold">Insights</span>
              </h1>
              <p className="text-center w-[70%] text-white mt-6 font-mukta font-extralight">
                Welcome to Elchemy's Market Insights Hub, your gateway to
                industry knowledge and strategic foresight.
              </p>
            </div>
          </div>
        </div>
        <FeaturedMarketInsights />
        <InsightsList
          page={"More Insights"}
          data={marketInsights}
          type={"market insights"}
          setPage={setPage}
          pagenumber={page}
          isNext={isDataRemaining}
        />
      </div>
    </>
  );
};

export default index;
