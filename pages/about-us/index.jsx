import WorkingWithUs from "@/components/Careers/WorkingWithUs"
import React from "react"
import Head from "next/head"
import AnimatedTitleHeader from "@/components/TitleHeader/AnimatedTitleHeader"
import Information from "@/components/aboutUs/Information"
import MeetOurTeam from "@/components/aboutUs/MeetOurTeam"
import TheElchemyAdvantage from "@/components/aboutUs/TheElchemyAdvantage"

const AboutUs = () => {
  const imgData = "./images/Frame123.svg"

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
          content="https://elchemydev.s3.amazonaws.com/static/image'/2023-11-30/10:48:38.255645.svg"
        />
      </Head>{" "}
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
          content="https://elchemydev.s3.amazonaws.com/static/image'/2023-11-30/10:48:38.255645.svg"
        />
      </Head>
      <div className="h-[10vh] sm:h-[12vh]"></div>
      <AnimatedTitleHeader text={"About Us"} imgSrc={imgData} />
      <section className="spacing_lg">
        <Information />
      </section>
      <section className="spacing_sm bg-[#EF4136] md:spacing_md md:h-full h-[100vh]">
        <TheElchemyAdvantage />
      </section>
      <section className="spacing_sm md:spacing_md">
        <MeetOurTeam />
      </section>
      <section className="w-[100%] md:px-20">
        <WorkingWithUs />
      </section>
    </>
  );
}

export default AboutUs
