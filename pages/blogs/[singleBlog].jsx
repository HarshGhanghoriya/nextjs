import ScrollUpArrow from "@/components/Common/ScrollUpArrow";
import IndiividualInsightsFirstSection from "@/components/Insights/IndiividualInsightsFirstSection";
import InsightsList from "@/components/Insights/InsightsList";
import Head from "next/head";
import React from "react";

const SingleBlog = ({ data }) => {
  const blog = data?.Data?.results[0];
  const similarBlogs = data?.RelatedBlogData;
  return (
    <>
      <Head>
        <link
          rel="icon"
          href="https://assets-global.website-files.com/6210bac66fc36f6399c235d0/623979f050eca63c3c28b363_favicon-bgremove.png"
          type="image/x-icon"
        />
        {blog?.metaTitle ? (
          <title>{blog?.metaTitle}</title>
        ) : (
          <title>{blog?.title}</title>
        )}
        <meta name="title" content={blog?.metaTitle} />
        <meta name="description" content={blog?.metaDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://el-fe.antino.ca/" />
        <meta property="og:title" content={blog?.metaTitle} />
        <meta property="og:description" content={blog?.metaDescription} />
        <meta property="og:image" content={blog?.metaImage} />
        <meta charset="UTF-8" />
        <meta name="language" content="en" />
        <meta property="og:image" content={blog?.metaImage} />
        <meta property="twitter:image" content={blog?.metaImage} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://el-fe.antino.ca/" />
        <meta property="twitter:title" content={blog?.metaTitle} />
        <meta property="twitter:description" content={blog?.metaDescription} />
        <meta property="twitter:image" content={blog?.metaImage} />
      </Head>
      <div className="min-h-[100vh] min-w-full">
        <ScrollUpArrow />
        <div className="h-[10vh] sm:h-[12vh] w-full"></div>
        <IndiividualInsightsFirstSection data={blog} page={"Our Blogs"} />
        {similarBlogs?.length > 0 && (
          <InsightsList
            data={similarBlogs}
            page={"Similar Blogs"}
            type={"blogs"}
            isSimilar={true}
          />
        )}
      </div>
    </>
  );
};

export default SingleBlog;

export async function getServerSideProps(context) {
  const { query } = context;
  const id = query.singleBlog.slice(query.singleBlog.lastIndexOf("-") + 1);
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/blog/?id=${id}`);
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
