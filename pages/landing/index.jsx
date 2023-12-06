import Image from "next/image"
import IndustrySection from "@/components/Landing/IndustrySection"
import Insights from "@/components/Landing/Insights"
import EdgeSection from "@/components/Landing/EdgeSection"
import TechSection from "@/components/Landing/TechSection"
import ProductSlider from "@/components/Landing/ProductSlider"
import SearchIcon from "@mui/icons-material/Search"
import CustomManufacturing from "@/components/Landing/CustomManufacturing"
import SpalshScreen from "@/components/Landing/SpalshScreen"
import { useEffect, useState } from "react"
import Head from "next/head"
import MarQuee from "@/components/slider/Marquee/MarqueSlider"
import { useScroll, motion, useTransform } from "framer-motion"
import Slider from "react-slick"
import ScrollBg from "@/components/ScrollBg"
import ScrollWrapper from "@/components/ScrollWrapper"

const index = () => {
  const [showSpalshScreen, setshowSpalshScreen] = useState(true)
  const [search, setSearch] = useState("")
  const { scrollYProgress } = useScroll()
  const x = useTransform(scrollYProgress, [0, 1], [`-30%`, `700%`])

  useEffect(() => {
    setTimeout(() => {
      setshowSpalshScreen(false)
    }, 1500)
  }, [])

  const settings = {
    dots: false,
    arrows: false,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    swipeToSlide: true,
  }

  const patnerImages = [
    "https://elchemydev.s3.ap-south-1.amazonaws.com/static/image/2023-12-05/18:36:34.png",
    "https://elchemydev.s3.ap-south-1.amazonaws.com/static/image/2023-12-05/18:38:19.png",
    "https://elchemydev.s3.ap-south-1.amazonaws.com/static/image/2023-12-05/18:38:42.png",
    "https://elchemydev.s3.ap-south-1.amazonaws.com/static/image/2023-12-05/18:39:06.png",
    "https://elchemydev.s3.ap-south-1.amazonaws.com/static/image/2023-12-05/18:49:22.jpeg",
    
  ]
  return (
    <>
      {/* <Head>
        <title>Elchemy: Fastest Turnaround Chemical Exporter from India</title>
        <link
          rel="icon"
          href="https://assets-global.website-files.com/6210bac66fc36f6399c235d0/623979f050eca63c3c28b363_favicon-bgremove.png"
          type="image/x-icon"
        />

        <meta
          name="title"
          content="Elchemy: Fastest Turnaround Chemical Exporter from India"
        />
        <meta
          name="description"
          content="Elchemy: India's leading chemical exporter with unparalleled service. Get the fastest turnaround on chemical exports from India. Contact us today!"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://el-fe.antino.ca/" />
        <meta
          property="og:image"
          content="https://elchemydev.s3.ap-south-1.amazonaws.com/static/image/2023-12-05/11:41:51.svg"
        />
        <meta
          property="og:title"
          content="Elchemy: Fastest Turnaround Chemical Exporter from India"
        />
        <meta
          property="og:description"
          content="Elchemy: India's leading chemical exporter with unparalleled service. Get the fastest turnaround on chemical exports from India. Contact us today!"
        />
        <meta
          property="og:image"
          content="https://elchemydev.s3.ap-south-1.amazonaws.com/static/image/2023-12-05/11:41:51.svg"
        />
        <meta
          property="twitter:image"
          content="https://elchemydev.s3.ap-south-1.amazonaws.com/static/image/2023-12-05/11:41:51.svg"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://el-fe.antino.ca/" />
        <meta
          property="twitter:title"
          content="Elchemy: Fastest Turnaround Chemical Exporter from India"
        />
        <meta
          property="twitter:description"
          content="Elchemy: Fastest Turnaround Chemical Exporter from India"
        />
        <meta
          property="twitter:image"
          content="https://elchemydev.s3.ap-south-1.amazonaws.com/static/image/2023-12-05/11:41:51.svg"
        />
      </Head> */}
       <Head>
        <title>Home Page | Elchemy</title>
        <meta name="Elchemy Home Page" content="Home Page" key="desc" />
        <meta
          property="og:title"
          content="Elchemy: India's leading chemical exporter with unparalleled service. Get the fastest turnaround on chemical exports from India. Contact us today!"
        />
        <meta property="og:description" content="Largest Chemical Exporter Elchemy" />
        <meta
          property="og:image"
          content="https://elchemydev.s3.ap-south-1.amazonaws.com/static/image/2023-12-05/11:41:51.svg"
        />
      </Head>

      {showSpalshScreen && <SpalshScreen />}

      <div className="relative h-full overflow-hidden w-full scroll-element bg-overlay">
        {/* <ScrollWrapper> */}
        <div className="scroll-container ">
          <motion.div
            className=""
            style={{
              x,
            }}
            initial={{ opacity: 1, x: "-120%" }}
            animate={{ opacity: 1, x: "-30%" }}
            transition={{
              duration: 4,
              type: "spring",
              stiffness: 50,
              delay: 2,
            }}
          >
            <motion.div
              style={{
                x: scrollYProgress,
              }}
            >
              <img
                src="./images/sideArrow.webp"
                alt="side arrow icon"
                style={{
                  height: "100vh",
                  objectFit: "cover",
                  objectPosition: "100% 50%",
                }}
              />
            </motion.div>
          </motion.div>
        </div>
        <div className="absolute top-0 bottom-0 z-[-10000] w-full">
          <video
            autoPlay={"autoplay"}
            playsInline
            muted
            preLoad="auto"
            loop
            id="myVideo"
            style={{ height: "100vh", width: "100vw", objectFit: "cover" }}
          >
            <source
              src="https://elchemydev.s3.amazonaws.com/static/video/2023-11-28/11:05:39.880762.webm"
              type="video/webm"
            ></source>
          </video>
        </div>

        <div className="mainSec w-[100%] top-align p-6 md:p-[12rem] z-[12] font-mukta flex flex-col gap-[10px]">
          <div className="text-white font-normal sm:text-[2rem] lg:text-left text-[1.4rem] lg:leading-[2.4rem]">
            Transforming
          </div>
          <div className="uppercase  text-white font-semibold lg:text-[6rem] sm:text-[3rem] text-[2rem] lg:text-left text-left">
            <p className="lg:leading-[6rem]">
              Industry Landscape
              <br />
              <span> WITH technology</span>
            </p>
          </div>
          <div className="text-white font-light lg:text-[1.6rem] text-[1rem] lg:text-left lg:leading-[1.95rem]">
            To Provide Global Chemical Distribution &<br /> Custom Manufacturing
            Solutions
          </div>
          <div className="lg:mt-0 mt-12 relative">
            <div className="bg-white sm:w-[500px] w-full relative h-[50px] lg:mt-[2rem] flex justify-between items-center rounded-[8px] p-2 ">
              <input
                type="text"
                placeholder="Search by"
                onChange={e => setSearch(e.target.value)}
                className="border-none outline-none w-[85%] p-2 globalSearchInput"
              />
              <div className="absolute md:left-[20%] left-[30%]">
                {!Boolean(search.length) && (
                  <Slider {...settings}>
                    <div key={2342}>Industry</div>
                    <div key={234}>Application</div>
                  </Slider>
                )}
              </div>
              <div className="w-[2.5rem] h-[2.5rem] bg-red-500 rounded-[8px] flex justify-center items-center relative cursor-pointer">
                <SearchIcon style={{ color: "white", fontSize: "1.5rem" }} />
              </div>
            </div>
          </div>
        </div>
        {/* </ScrollWrapper> */}
      </div>

      <section className="text-center spacing_md" id="check-header-bg">
        <ScrollBg />
      </section>

      <section className="spacing_lg scroll-element">
        {/* <ScrollWrapper> */}
        <IndustrySection />
        {/* </ScrollWrapper> */}
      </section>

      <section className="spacing_lg scroll-element">
        {/* <ScrollWrapper> */}
        <ProductSlider />
        {/* </ScrollWrapper> */}
      </section>

      <section className="scroll-element">
        {/* <ScrollWrapper> */}
        <CustomManufacturing />
        {/* </ScrollWrapper> */}
      </section>

      <section className="spacing_lg scroll-element">
        {/* <ScrollWrapper> */}
        <TechSection />
        {/* </ScrollWrapper> */}
      </section>

      <section className="scroll-element">
        {/* <ScrollWrapper> */}
        <EdgeSection />
        {/* </ScrollWrapper> */}
      </section>

        <section className="spacing_lg text-center overflow-hidden relative md:mt-[4.6rem]">
          <MarQuee>
            {patnerImages.map((data, index) => {
              return (
                <div className="h-[61px] w-[208px]">
                  <Image
                    src="https://elchemydev.s3.ap-south-1.amazonaws.com/static/image/2023-12-06/11:27:02.svg"
                    alt="logo ipsum"
                    width={208}
                    height={61}
                    style={{ opacity: ".6",marginRight:"2rem",objectFit:"cover" }}
                  />
                </div>
              )
            })}
          </MarQuee>
        </section>

      <section className="spacing_lg scroll-element">
        {/* <ScrollWrapper> */}
        <Insights />
        {/* </ScrollWrapper> */}
      </section>
    </>
  )
}

export default index
