import React, { useEffect, useState } from "react";
import InsightsDashboard from "@/components/Insights/InsightsDashboard";
import InsightsList from "@/components/Insights/InsightsList";
import api from "@/api/Axios";
import Head from "next/head";

const index = () => {
  const [blogs, setBlogs] = useState([]);
  const [page, setPage] = useState(1);
  const [isDataRemaining, setIsDataRemaining] = useState();
  const getBlogs = async () => {
    try {
      const resp = await api.get(`/blog/?page=${page}&page_size=6`);

      if (resp?.data?.Status == 200) {
        setBlogs(resp?.data?.Data?.results);
        setIsDataRemaining(resp?.data?.Data?.next === null ? false : true);
      }
    } catch (error) {}
  };

  useEffect(() => {
    getBlogs();
  }, [page]);

  const HeaderContent = blogs.length > 3 ? blogs.slice(0, 3) : blogs;
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
      <div>
        <InsightsDashboard page={"Our Blogs"} data={HeaderContent} />
        <InsightsList
          page={"Our Blogs"}
          data={blogs}
          type={"blogs"}
          setPage={setPage}
          pagenumber={page}
          isNext={isDataRemaining}
        />
      </div>
    </>
  );
};

export default index;
