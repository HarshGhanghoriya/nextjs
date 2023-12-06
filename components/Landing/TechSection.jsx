import Image from "next/image"
import React from "react"
import SkewedBar from "../Common/SkewedBar"
import ContactUsModal from "../Modal/ContactUs"
import { Grid } from "@mui/material";
const options = [{
  id: "1",
  label:"Request a DOMS demo"
}]
const TechSection = () => {
  return (
    <>
      <Grid container spacing={{ lg: 10, xs: 4, md: 6 }} className="lg:pt-[10rem] py-5rem">
        <Grid item xs={12} md={6} lg={6}>
          <SkewedBar
            color="#F15B2A"
            animation={false}
            header="DIGITAL ORDER MANANGEMENT SYSTEM"
            subHeader="Revolutionizing Supply Chain"
          />

          <Grid container>
            <Grid item xs={12} md={1} lg={1.2}></Grid>
            <Grid item xs={12} md={11} lg={10.8}>
              {" "}
              <div className="">
                <p className="text-[1rem] font-mukta font-light py-12">
                  Crafted by Elchemy, this groundbreaking system is tailor-made
                  to address the unique challenges of the chemical industry's
                  operations. DOMS isn't just another software; it's your
                  strategic ally in the journey towards operational excellence.
                  Welcome to the future of supply chain management; welcome to
                  DOMS
                </p>

                <ContactUsModal
                  options={options}
                  heading={"Request A Demo"}
                  subHeading={
                    "Any question or remarks? Just write us a message!"
                  }
                  title={"Request A Demo"}
                  classes={
                    "w-[163px] font-mukta text-[#FFFFFF] h-[48px] bg-[#EF4136] rounded-[4px] font-medium text-[16px]"
                  }
                >
                  <div>Request A Demo</div>
                </ContactUsModal>
              </div>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <div className="boxShadow w-[100%] bg-red-300">
            <Image
              src="https://elchemydev.s3.amazonaws.com/static/image'/2023-12-01/17:44:34.777689.gif"
              alt="laptop image"
              width={100}
              height={100}
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </Grid>
      </Grid>
    </>
  );
}

export default TechSection
