import React, { useState } from "react"
import Link from "next/link"
import { useDispatch } from "react-redux"
import { saveNewsLetterEmail } from "@/redux/slices/NewsLetter"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import Image from "next/image"
import ContactUsModalBtn from "./Modal/ContactUs"
const footerMenu = [
  {
    header: "industries",
    subMenu: [
      {
        name: "Plastics and Polymers",
        url: "",
      },
      {
        name: "Flavor and Fragrance",
        url: "",
      },
      {
        name: "Food and Nutrition",
        url: "",
      },
      {
        name: "Industrial Chemicals",
        url: "",
      },
      {
        name: "Paints and Coating",
        url: "",
      },
      {
        name: "Personal Care",
        url: "",
      },
      {
        name: "Home Care",
        url: "",
      },
      {
        name: "Oil and Drilling",
        url: "",
      },
    ],
  },
  {
    header: "services",
    subMenu: [
      {
        name: "DOMS",
        url: "/elchemy-tech",
      },
      {
        name: "Custom Manufacturing",
        // url: "/quality-custom-chemical-manufacturing",
        url: "",
      },
      {
        name: "About Us",
        url: "/about-us",
      },
      {
        name: "careers",
        // url: "/careers",
        url: "",
      },
      {
        name: "contact us",
        url: "/contact-elchemy",
      },
      {
        name: "blog",
        url: "/blogs",
      },
      {
        name: "Events",
        url: "/events",
      },
      {
        name: "Market Insights",
        url: "/market-insights",
      },
    ],
  },

  {
    header: "tools",
    subMenu: [
      {
        name: "RoDTEP",
        url: "",
      },
      {
        name: "HSN Code",
        url: "",
      },
      {
        name: "Drawback",
        url: "",
      },
      {
        name: "quick links",
        url: "",
      },
      {
        name: "privacy policy",
        url: "privacy-policy",
      },
      {
        name: "terms of services",
        url: "terms-and-conditions",
      },
    ],
  },
]

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

const Footer = () => {
  const [email, setEmail] = useState("")
  const dispatch = useDispatch()

  const validateEmail = email => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
  }
  const saveEmail = async e => {
    e.preventDefault()
    if (!validateEmail(email)) {
      return toast.error("Enter A Valid Email")
    }
    const res = await dispatch(saveNewsLetterEmail(email))
    if (res?.payload?.Status === 201) {
      toast.success(res?.payload?.Message)
      setEmail("")
    } else {
      toast.error("Something Went Wrong")
    }
  }

  return (
    <>
      <div className="bg-[#E6E6E685] md:pl-20 md:pr-20 md:pt-10 md:pb-5 p-10">
        <ToastContainer />
        <div className="flex justify-between md:flex-row flex-col gap-2">
          <div className="flex flex-col mt-5 md:w-[50%]">
            <Link href="/" className="w-full" passHref={true}>
              <Image
                src="./images/elchemylogo.svg"
                alt="logo"
                width="119"
                height="44"
              />
            </Link>
            <p className="text-black md:mt-5 font-mukta text-[1rem]">
              Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
              ipsum
            </p>
          </div>
          <div className=" flex flex-col gap-6 md:w-[30%]">
            <h5 className="text-black font-mukta text-[1.2rem] font-medium">
              Have any doubts? Let’s connect.
            </h5>
            <div className="w-full">
              <ContactUsModalBtn
                options={options}
                heading={"Contact Us"}
                subHeading={"Any question or remarks? Just write us a message!"}
                classes={
                  "w-[100%] text-[#FFFFFF] h-[48px] bg-[#EF4136] rounded-[4px] font-semibold font-mukta text-[1rem]"
                }
              >
                <div className="">Contact Us</div>
              </ContactUsModalBtn>
            </div>

            <div className="md:mt-5 relative"></div>
          </div>
        </div>
        <div className="border border-gray-400 mt-5 opacity-20"></div>

        <div className="flex justify-between md:flex-row flex-col   mt-10">
          {footerMenu?.length > 0 &&
            footerMenu.map((menu, key) => {
              return (
                <>
                  <div key={key}>
                    <h1 className="capitalize text-[#333333] text-[24px] my-8">
                      {menu?.header}
                    </h1>
                    <div>
                      {menu?.subMenu?.length > 0 &&
                        menu?.subMenu.map((sm, index) => {
                          return (
                            <>
                              <li
                                className={`list-none mt-4 text-[16px]  capitalize  ${
                                  sm?.name === "quick links" ||
                                  sm?.name === "About Us"
                                    ? "text-black text-lg mt-[2rem] "
                                    : "text-[#4D4D4D]"
                                } ${
                                  sm?.name === "About Us" ? "mt-[4rem]" : ""
                                }`}
                              >
                                <Link key={index} href={sm?.url}>
                                  {sm?.name}
                                </Link>
                              </li>
                            </>
                          )
                        })}
                    </div>
                  </div>
                </>
              )
            })}
          <div>
            <h1 className="capitalize text-[#333333] text-[24px] ">
              Contact Us
            </h1>
            <div className="list-none mt-8 capitalize">
              <div className="flex">
                <div className=" flex justify-center items-center">
                  <Image
                    src="https://elchemydev.s3.amazonaws.com/static/image'/2023-11-24/15:24:03.124653.png"
                    alt="phone icon"
                    width={44}
                    height={44}
                  />
                </div>
                <div className="ml-5">
                  <div className="text-#161616] text-[14px] font-bold">
                    Email:
                  </div>
                  <div className="text-[#4D4D4D] text-[14px] font-light">
                    contact@elchemy.com
                  </div>
                </div>
              </div>
            </div>
            <div className="list-none mt-8 capitalize flex">
              <div className=" flex justify-center items-center">
                <Image
                  src="https://elchemydev.s3.amazonaws.com/static/image'/2023-11-24/15:26:50.400850.png"
                  alt="phone icon"
                  width={44}
                  height={44}
                />
              </div>
              <div className="ml-5">
                <div className="text-#161616] text-[14px] font-bold">
                  Phone:
                </div>
                <div className="text-[#4D4D4D] text-[14px] font-light">
                  (908)687-5892
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border border-gray-400 opacity-20    mt-5"></div>
        <div className="text-center mt-4">
          Copyright {`@${new Date().getFullYear()}`} Elchemy (Bizinbiz
          Technologies Private Limited) | All Rights Reserved
        </div>
      </div>
    </>
  )
}

export default Footer
