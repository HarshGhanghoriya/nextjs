import React, { useState } from "react"
import { menus } from "./Header"
import Link from "next/link"
import CloseIcon from "@mui/icons-material/Close"
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"

const MobileMenu = ({ closeMobileMenu, isInView }) => {
  const [activeMenu, setActiveMenu] = useState(0)
  const makeMenuActive = index => {
    setActiveMenu(index)
  }
  return (
    <>
      <div className="fixed w-[100%] z-50 h-[100vh] bg-white">
        <div className="flex justify-start md:ml-auto md:mr-auto lg:ml-0 lg:mr-0 lg:flex-row md:mt-0 mt-10 md:flex-col flex-col xl:w-[60%] lg:w-[70%] md:w-[70%]">
          {menus?.length > 0 &&
            menus.map((menu, i) => {
              return (
                <>
                  <li
                    key={i}
                    className={`list-none md:text-base  md:mt-5 lg:mt-0 mt-5 pl-8  uppercase text-base  font-normal ${
                      i === 4 || i === 5 ? "hidden" : ""
                    }`}
                  >
                    <Link
                      href={menu?.url}
                      passHref={true}
                      onClick={() => {
                        makeMenuActive(i), closeMobileMenu()
                      }}
                    >
                      <p>{menu.name}</p>
                    </Link>
                  </li>
                  <li
                    className={`${
                      i === 4 ? "" : "hidden"
                    } list-none md:text-base  mt-2 pl-8  uppercase text-base  font-normal`}
                  >
                    <Accordion sx={{ boxShadow: "none" }}>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        sx={{ paddingLeft: "0px", margin: "0px" }}
                      >
                        <p className="uppercase text-base  font-normal">
                          {menu.name}
                        </p>
                      </AccordionSummary>
                      <AccordionDetails>
                        <ul className="upppercase flex flex-col gap-2">
                          <li
                            className="uppercase"
                            key={"/sdsdss"}
                            onClick={() => closeMobileMenu()}
                          >
                            <Link href={"/blogs"} passHref={true}>
                              Blogs
                            </Link>
                          </li>
                          <li
                            className="uppercase"
                            key={"/blogs-enevrs"}
                            onClick={() => closeMobileMenu()}
                          >
                            <Link href={"/events"} passHref={true}>
                              Events
                            </Link>
                          </li>
                          <li
                            className="uppercase"
                            key={"/market-insights"}
                            onClick={() => closeMobileMenu()}
                          >
                            <Link href={"/market-insights"} passHref={true}>
                              Market Insights
                            </Link>
                          </li>
                        </ul>
                      </AccordionDetails>
                    </Accordion>
                  </li>
                  <li
                    className={`${
                      i === 5 ? "" : "hidden"
                    } list-none md:text-base  pl-8  uppercase text-base  font-normal`}
                  >
                    <Accordion sx={{ boxShadow: "none" }}>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        sx={{ paddingLeft: "0px" }}
                      >
                        <p className="uppercase text-base  font-normal">
                          {menu.name}
                        </p>
                      </AccordionSummary>
                      <AccordionDetails>
                        <ul className="flex flex-col gap-2">
                          <li
                            key={"careers"}
                            className="uppercase"
                            onClick={() => closeMobileMenu()}
                          >
                            <Link href={""} passHref={true}>
                              Careers
                            </Link>
                          </li>
                          <li
                            key={"/contact-elchecmy"}
                            className="uppercase"
                            onClick={() => closeMobileMenu()}
                          >
                            <Link href={"/contact-elchemy"} passHref={true}>
                              Contact Us
                            </Link>
                          </li>
                        </ul>
                      </AccordionDetails>
                    </Accordion>
                  </li>
                </>
              )
            })}
          <div
            onClick={() => {
              closeMobileMenu()
            }}
            className="mt-10 text-center cursor-pointer"
          >
            <CloseIcon />
          </div>
        </div>
      </div>
    </>
  )
}

export default MobileMenu
