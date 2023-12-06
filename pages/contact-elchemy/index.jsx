import Head from "next/head";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import ReachUs from "../../components/Contact-us/ReachUs";
import ContactUsForm from "@/components/Contact-us/ContactUsForm";
import AnimatedTitleHeader from "@/components/TitleHeader/AnimatedTitleHeader";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { Typography } from "@mui/material";
import CardComponent from "../../components/Card/CardComponent";
import { ToastContainer } from "react-toastify";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";

const ContactUs = () => {
  const router = useRouter();
  

  const options = [
    {
      id: "1",
      label: "Chemical Sourcing Inquiry",
    },
    {
      id: "2",
      label: " Custom Manufacturing requirements",
    },
    {
      id: "3",
      label: " Request a DOMS demo",
    },
    {
      id: "4",
      label: "  Interest in joining the team",
    },
    {
      id: "5",
      label: "Interested in other partnership",
    },
  ];

  return (
    <>
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

          content="https://elchemydev.s3.amazonaws.com/static/image'/2023-11-30/10:48:38.255645.svg"

        />

      </Head>    <Head>

        <title>Home Page | Elchemy</title>

        <meta name="Elchemy Home Page" content="Home Page" key="desc" />

        <meta

          property="og:title"

          content="Elchemy: India's leading chemical exporter with unparalleled service. Get the fastest turnaround on chemical exports from India. Contact us today!"

        />

        <meta property="og:description" content="Largest Chemical Exporter Elchemy" />

        <meta

          property="og:image"

          content="https://elchemydev.s3.amazonaws.com/static/image'/2023-11-30/10:48:38.255645.svg"

        />

      </Head>
     
      <div className="w-full h-16 "></div>
      <AnimatedTitleHeader text={"Contact Us" } imgSrc={"https://elchemydev.s3.amazonaws.com/static/image'/2023-12-04/11:34:39.531514.png"} />

      <div className="px-24 py-8">
        <div className="p-4">
          <Breadcrumbs aria-label="breadcrumb">
            <Link
              underline="hover"
              color="inherit"
              href="/"
              style={{ fontSize: "0.9rem", fontWeight: "semibold" }}
            >
              Home
            </Link>
            <Link
              underline="hover"
              color="inherit"
              href="/material-ui/getting-started/installation/"
              style={{ fontSize: "0.9rem", fontWeight: "600" }}
            >
              Contact Us
            </Link>
          </Breadcrumbs>
        </div>
      </div>
      <div className="px-[16%] mt-4">
        <ToastContainer />
        <div className="">
          <Image
            src="./images/brand-logo.svg"
            width={50}
            height={50}
            className="relative top-[-1.5rem]"
            alt="brand-logo"
          />

          <h1 className=" mt-3 text-[1.8rem] font-mukta font-normal text-[2rem]">
            Elchemy is the high-trust gateway to the{" "}
          </h1>
          <h1 className="-mt-1 text-[1.8rem]">
            Indian Chemical Industry.{" "}
          </h1>
          <p className="mt-2 font-normal text-[16px] text-[#777777]">
            Any question or remarks? Just write us a message!
          </p>
        </div>
        <ContactUsForm options={options} />
      </div>
      <div className="relative mt-[10rem]">
        <CardComponent />
      </div>
    </>
  );
};

export default ContactUs;
