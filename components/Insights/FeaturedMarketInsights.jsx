import React, { useEffect, useState } from "react";
import InsightsList from "./InsightsList";
import api from "@/api/Axios";

const FeaturedMarketInsights = () => {
  const [featuredInsights, setFeaturedInsights] = useState([]);
  const [page, setPage] = useState(1);
  const [isDataRemaining, setIsDataRemaining] = useState();
  const getfeaturedInsights = async () => {
    try {
      const resp = await api.get(
        `/newsletter/featured/?page=${page}&page_size=3`
      );
      if (resp?.data?.status == 200) {
        setFeaturedInsights(resp?.data?.data?.results);
        setIsDataRemaining(resp?.data?.data?.next === null ? false : true);
      }
    } catch (error) {}
  };

  useEffect(() => {
    getfeaturedInsights();
  }, [page]);

  return (
    <div>
      <InsightsList
        page={"Featured Insights"}
        data={featuredInsights}
        type={"market insights"}
        setPage={setPage}
        pagenumber={page}
        isNext={isDataRemaining}
      />
    </div>
  );
};

export default FeaturedMarketInsights;
