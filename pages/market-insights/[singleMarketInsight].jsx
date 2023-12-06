import ScrollUpArrow from "@/components/Common/ScrollUpArrow";
import IndiividualInsightsFirstSection from "@/components/Insights/IndiividualInsightsFirstSection";
import InsightsList from "@/components/Insights/InsightsList";
import Head from "next/head";
import React from "react";

const SingleMarketInsight = ({ data }) => {
  const marketInsight = data?.data?.results[0];
  const similarMarketInsights = data?.RelatedNewsletterData;

  return (
    <>
      <Head>
        <link
          rel="icon"
          href="https://assets-global.website-files.com/6210bac66fc36f6399c235d0/623979f050eca63c3c28b363_favicon-bgremove.png"
          type="image/x-icon"
        />
        {marketInsight?.metaTitle ? (
          <title>{marketInsight?.metaTitle}</title>
        ) : (
          <title>{marketInsight?.title}</title>
        )}
        <meta name="title" content={marketInsight?.metaTitle} />
        <meta name="description" content={marketInsight?.metaDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://el-fe.antino.ca/" />
        <meta property="og:title" content={marketInsight?.metaTitle} />
        <meta
          property="og:description"
          content={marketInsight?.metaDescription}
        />
        <meta property="og:image" content={marketInsight?.metaImage} />
        <meta charset="UTF-8" />
        <meta name="language" content="en" />
        <meta property="og:image" content={marketInsight?.metaImage} />
        <meta property="twitter:image" content={marketInsight?.metaImage} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://el-fe.antino.ca/" />
        <meta property="twitter:title" content={marketInsight?.metaTitle} />
        <meta
          property="twitter:description"
          content={marketInsight?.metaDescription}
        />
        <meta property="twitter:image" content={marketInsight?.metaImage} />
      </Head>
      <div className="min-h-[100vh] min-w-full">
        <ScrollUpArrow />
        <div className="h-[10vh] sm:h-[12vh] w-full"></div>
        <IndiividualInsightsFirstSection
          data={marketInsight}
          page={"Our Market Insights"}
          similarMarketInsights={similarMarketInsights}
        />
      </div>
    </>
  );
};

export default SingleMarketInsight;

export async function getServerSideProps(context) {
  const { query } = context;
  const id = query.singleMarketInsight.slice(
    query.singleMarketInsight.lastIndexOf("-") + 1
  );
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/newsletter/?id=${id}`
  );
  const data = await res.json();
  if (!data) {
    return {
      notFound: true,
    };
    asdlfhsdh;
  }

  return {
    props: {
      data: data,
    },
  };
}
