import ScrollUpArrow from "@/components/Common/ScrollUpArrow";
import IndiividualInsightsFirstSection from "@/components/Insights/IndiividualInsightsFirstSection";
import InsightsList from "@/components/Insights/InsightsList";
import Head from "next/head";
import React from "react";

const SingleEvents = ({ data }) => {
  const event = data?.Data?.results[0];
  const similarEvents = data?.RelatedEventData;
  console.log(event, "asjdfhsdf");
  return (
    <>
      <Head>
        <link
          rel="icon"
          href="https://assets-global.website-files.com/6210bac66fc36f6399c235d0/623979f050eca63c3c28b363_favicon-bgremove.png"
          type="image/x-icon"
        />
        {event?.metaTitle ? (
          <title>{event?.metaTitle}</title>
        ) : (
          <title>{event?.title}</title>
        )}
        <meta name="title" content={event?.metaTitle} />
        <meta name="description" content={event?.metaDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://el-fe.antino.ca/" />
        <meta property="og:title" content={event?.metaTitle} />
        <meta property="og:description" content={event?.metaDescription} />
        <meta property="og:image" content={event?.metaImage} />
        <meta charset="UTF-8" />
        <meta name="language" content="en" />
        <meta property="og:image" content={event?.metaImage} />
        <meta property="twitter:image" content={event?.metaImage} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://el-fe.antino.ca/" />
        <meta property="twitter:title" content={event?.metaTitle} />
        <meta property="twitter:description" content={event?.metaDescription} />
        <meta property="twitter:image" content={event?.metaImage} />
      </Head>

      <div className="min-h-[100vh] min-w-full">
        <ScrollUpArrow />
        <div className="h-[10vh] sm:h-[12vh] w-full"></div>
        <IndiividualInsightsFirstSection data={event} page={"Our Events"} />
        <InsightsList
          data={similarEvents}
          page={"Similar Events"}
          type={"events"}
          isSimilar={true}
        />
      </div>
    </>
  );
};

export default SingleEvents;

export async function getServerSideProps(context) {
  const { query } = context;
  const id = query.singleEvents.slice(query.singleEvents.lastIndexOf("-") + 1);
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/events/?id=${id}`
  );
  const data = await res.json();
  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data: data,
    },
  };
}
