import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import React, { useState } from "react"
import Box from "@mui/material/Box"
import Tab from "@mui/material/Tab"
import { TabContext, TabList, TabPanel } from "@mui/lab"
import { Grid } from "@mui/material"
import SideMenu from "@/components/Product/SideMenu"

const Product = () => {
  const [activeTab, setActiveTab] = useState("1")

  const handleChange = (event, newValue) => {
    setActiveTab(newValue)
  }
  return (
    <>
      <Head>
        <title>Products | Elchemy</title>
        <meta
          name="Elchemy Product Page"
          content="Elchemy Product Page"
          key="desc"
        />
      </Head>
      <div>
        <div className="w-full pt-[12vh] h-[25rem] flex bg-[#F3F4F6]">
          <div className="w-[50%] flex items-center h-[100%] px-10">
            <div className="flex sm:gap-[4] gap-[6]">
              <Image
                src="./images/brand-logo.svg"
                width={64}
                height={72}
                className="relative top-[-1.1rem]"
                alt="brand-logo"
              />

              <div
                className={`md:text-[40px] font-light text-[25px] text-[#161616] font-mukta`}
              >
                Personal Care
              </div>
            </div>
          </div>
          <div className="w-[50%]">
            <Image
              src="./images/sliderImgOne.svg"
              width={100}
              height={100}
              className="object-cover w-full h-full"
              style={{ objectPosition: "90% 50%" }}
              alt="brand-logo"
            />
          </div>
        </div>
      </div>
      {/* <div>
        <div className="w-full pt-[12vh] h-[25rem] flex relative bg-product">
          <div className="absolute top-[50%] left-[2%]">
            <div className="flex sm:gap-[4] gap-[6]">
              <Image
                src="./images/brand-logo.svg"
                width={64}
                height={72}
                className="relative top-[-1.1rem]"
                alt="brand-logo"
              />

              <div
                className={`md:text-[40px] font-light text-[25px] text-[#161616] font-mukta`}
              >
                Personal Care
              </div>
            </div>
          </div>
          <div className="w-[100%]">
            <Image
              src="./images/sliderImgOne.svg"
              width={100}
              height={100}
              className="object-cover w-full h-full"
              style={{objectPosition:"90% 50%"}}
              alt="brand-logo"
            />
          </div>
        </div>

      </div> */}

      <section className="spacing_lg">
        <p className="z-20">
          <Link
            href={"/"}
            passHref={true}
            className="text-[0.85rem] text-[#808080]"
          >
            Home
          </Link>{" "}
          <span className="px-1">/</span>{" "}
          <span className="font-semibold text-[0.9rem]">Personal Care</span>
        </p>
        <div className="py-10">
          <TabContext value={activeTab}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                onChange={handleChange}
                textColor="#EF4136"
                TabIndicatorProps={{ style: { backgroundColor: "#EF4136" } }}
                aria-label="lab API tabs example"
              >
                <Tab
                textColor="#EF4136"
                  label="Industry"
                  value="1"
                  sx={{ fontSize: "24px" }}
                  className="font-mukta font-normal"
                />
                <Tab
               classes={"text-[#EF4136]"}
                  label="Application"
                  value="2"
                  sx={{ fontSize: "24px" }}
                  className="font-mukta font-normal"
                />
              </TabList>
            </Box>

            <TabPanel value={"1"}>
              <Grid container spacing={2}>
                <Grid xs={12} md={4} lg={4}>
                  <SideMenu></SideMenu>
                </Grid>
                <Grid xs={12} md={8} lg={8}></Grid>
              </Grid>
            </TabPanel>
            <TabPanel value="2">
              <Grid container spacing={2}>
                <Grid xs={12} md={4} lg={4}></Grid>
                <Grid xs={12} md={8} lg={8}></Grid>
              </Grid>
            </TabPanel>
          </TabContext>
        </div>
      </section>
    </>
  )
}

export default Product
