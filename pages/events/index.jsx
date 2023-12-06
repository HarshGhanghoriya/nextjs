import api from "@/api/Axios";
import InsightsDashboard from "@/components/Insights/InsightsDashboard";
import InsightsList from "@/components/Insights/InsightsList";
import Head from "next/head";
import React, { useEffect, useState } from "react";

const index = () => {
  const [events, setEvents] = useState([]);
  const [UpComingEvents, setUpComing] = useState([]);
  const [page, setPage] = useState(1);
  const [isDataRemaining, setIsDataRemaining] = useState();

  const getEvents = async () => {
    try {
      const resp = await api.get(
        `/events/?page=${page}&page_size=6&IsUpComing=false`
      );
      if (resp?.data?.Status == 200) {
        setEvents(resp?.data?.Data?.results);
        setIsDataRemaining(resp?.data?.Data?.next === null ? false : true);
      }
    } catch (error) {}
  };

  const getUpcoming = async () => {
    try {
      const resp = await api.get(
        `/events/?page=${page}&page_size=6&IsUpComing=true`
      );
      if (resp?.data?.Status == 200) {
        setUpComing(resp?.data?.Data?.results);
      }
    } catch (error) {}
  };

  useEffect(() => {
    getEvents();
    getUpcoming();
  }, [page]);

  return (
    <div>
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
      {UpComingEvents.length > 0 && (
        <InsightsDashboard page={"Event"} data={UpComingEvents} />
      )}
      <div className={`${UpComingEvents.length > 0 ? "" : "pt-16"}`}>
        <InsightsList
          page={"Past Events"}
          data={events}
          type={"events"}
          setPage={setPage}
          pagenumber={page}
          isNext={isDataRemaining}
        />
      </div>
    </div>
  );
};

export default index;
