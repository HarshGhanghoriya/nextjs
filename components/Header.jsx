import Image from "next/image"
import Link from "next/link"
import SearchIcon from "@mui/icons-material/Search"
import React, { createRef } from "react"
import { useState } from "react"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import SearchMenu from "./SearchMenu"
import MenuIcon from "@mui/icons-material/Menu"
import MobileMenu from "./MobileMenu"
import HoverMenu from "./HoverMenu/HoverMenu"
import { useSelector } from "react-redux"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export const menus = [
  {
    name: "Products",
    Items: [],
    url: "",
  },
  {
    name: "Custom Manufacturing",
    Items: [],
    // url: "/quality-custom-chemical-manufacturing",
    url: "",
  },
  {
    name: "DOMS",
    Items: [],
    url: "/elchemy-tech",
  },
  {
    name: "About us",
    Items: [],
    url: "/about-us",
  },
  {
    name: "Insights",
    url: "/insights",
    Items: [
      {
        url: "/events",
        title: "Events",
      },
      {
        url: "/blogs",
        title: "Blogs",
      },
      {
        url: "/market-insights",
        title: "Market Insights",
      },
    ],
  },
  {
    name: "Contact Us ",
    url: "/contact-elchemy",
    Items: [
      {
        // url: "/careers",
        url: "",
        title: "Careers",
      },
      {
        url: "/contact-elchemy",
        title: "Contact Us",
      },
    ],
  },
]

export const navbarRef = createRef()

const Header = () => {
  const [openMobileMenu, setopenMobileMenu] = useState(false)
  const [openMenu, setopenMenu] = useState(false)
  const [activeMenu, setActiveMenu] = useState(0)
  const [searchMenu, setSearchMenu] = useState(false)
  const pathname = usePathname()

  const { bg } = useSelector(state => state.Blog)

  const makeMenuActive = index => {
    setActiveMenu(index)
  }

  const closeMemnu = () => {
    setopenMenu(false)
    setSearchMenu(false)
  }

  const closeMobileMenu = () => {
    setopenMobileMenu(false)
  }

  let activeLinkTwo = null
  let activeLinkOne = null

  activeLinkTwo = ["/careers", "/contact-elchemy"].includes(pathname)
  activeLinkOne = ["/blogs", "/events", "/market-insights"].includes(pathname)

  return (
    <motion.div
      initial={{ opacity: 1, y: "-100%", position: "absolute" }}
     
      animate={{ opacity: 1, y: 0, position: "fixed" }}
      transition={{ duration: 4, type: "spring", stiffness: 50, delay: 2 }}
      style={{
        zIndex: "1000",
        background: bg ? "#ffff" : "",
        boxShadow: bg ? "0px 4px 12px 0px #00000014" : "",
      }}
    >
      <div
        className={`w-[100vw] ${openMobileMenu ? "h-[100vh]" : ""} ${
          pathname !== "/" ? "bg-white header-shadow" : ""
        } `}
      >
        {openMobileMenu && (
          <MobileMenu closeMobileMenu={closeMobileMenu} bg={bg} />
        )}
        <div
          className={`searchMenuCon relative ${
            openMenu && "searchMenuConClicked"
          }`}
        >
          {searchMenu && (
            <>
              <SearchMenu closeMemnu={closeMemnu} />
            </>
          )}
        </div>

        <div>
          {typeof window !== undefined && (
            <div
              className="lg:flex justify-between hidden lg:px-[7.5rem] lg:py-[1rem] lg:flex-row md:flex-col h-[6vh] sm:h-[12vh] items-center"
              style={{ alignItems: "center" }}
            >
              <Link href="/" passHref={true} className="lg:w-[15%] ">
                {pathname === "/" ? (
                  <>
                    <Image
                      src={`${
                        bg
                          ? "./images/elchemylogo.svg"
                          : "./images/whitelogo.svg"
                      }`}
                      alt="logo"
                      width="119"
                      height="44"
                    />
                  </>
                ) : (
                  <>
                    <Image
                      src="./images/elchemylogo.svg"
                      alt="logo"
                      width="119"
                      height="44"
                    />
                  </>
                )}
              </Link>

              <div className="flex md:ml-auto md:mr-auto   lg:ml-0 lg:mr-0   lg:flex-row justify-end items-center md:mt-0 mt-10 md:flex-col flex-col w-[80%]">
                {menus?.length > 0 &&
                  menus.map((menu, i) => {
                    return (
                      <>
                        {
                          <>
                            <li
                              key={i}
                              className={`list-none ${
                                i === 4 || i === 5 ? "hidden" : ""
                              } ${
                                pathname === "/"
                                  ? bg
                                    ? "text-[#000]"
                                    : "text-[#FFFFFF]"
                                  : ` ${
                                      pathname === menu?.url
                                        ? " text-red-400 "
                                        : "text-[#161616]"
                                    }`
                              }
                     
                      
                      md:text-[1rem]  md:mt-5 lg:mt-0 mt-5 pl-8  cursor-pointer   text-base  font-medium `}
                            >
                              <Link
                                href={menu?.url ?? {}}
                                passHref={true}
                                onClick={() => {
                                  makeMenuActive(i)
                                }}
                              >
                                <p className="md:text-center">{menu.name}</p>
                              </Link>
                            </li>
                            <li
                              key={i}
                              className={`list-none ${i === 4 ? "" : "hidden"} 
                      
                               md:text-[1rem] text-[#FFFFFF]  md:mt-5 lg:mt-0 mt-5 pl-8  cursor-pointer   text-base  font-medium `}
                            >
                              <HoverMenu listItem={menu.Items}>
                                <div
                                  className={`${
                                    pathname === "/"
                                      ? bg
                                        ? "text-[#000]"
                                        : "text-[#FFFFFF]"
                                      : ` ${
                                          activeLinkOne
                                            ? " text-red-400 "
                                            : "text-[#161616]"
                                        }`
                                  }`}
                                >
                                  {menu.name} <KeyboardArrowDownIcon className={`${
                                    pathname === "/"
                                      ? bg
                                        ? "text-[#000]"
                                        : "text-[#FFFFFF]"
                                      : ` ${
                                          activeLinkOne
                                            ? " text-red-400 "
                                            : "text-[#161616]"
                                        }`
                                  }`}/>
                                </div>
                              </HoverMenu>
                            </li>
                            <li
                              key={i}
                              className={`list-none ${i === 5 ? "" : "hidden"} 
                      
                               md:text-[1rem] text-[#FFFFFF]  md:mt-5 lg:mt-0 mt-5 pl-8  cursor-pointer   text-base  font-medium `}
                            >
                              <HoverMenu listItem={menu.Items}>
                                <div
                                  className={`${
                                    pathname === "/"
                                      ? bg
                                        ? "text-[#000]"
                                        : "text-[#FFFFFF]"
                                      : ` ${
                                          activeLinkTwo
                                            ? " text-red-400 "
                                            : "text-[#161616]"
                                        }`
                                  }`}
                                >
                                  {menu.name} <KeyboardArrowDownIcon className={`${
                                    pathname === "/"
                                      ? bg
                                        ? "text-[#000]"
                                        : "text-[#FFFFFF]"
                                      : ` ${
                                        activeLinkTwo
                                            ? " text-red-400 "
                                            : "text-[#161616]"
                                        }`
                                  }`}/>
                                </div>
                              </HoverMenu>
                            </li>
                          </>
                        }
                      </>
                    )
                  })}
                <li key={"icon-search"} className="flex">
                  <div
                    className=" w-[2.5rem] ml-8 h-[2.5rem] bg-red-500 rounded flex justify-center items-center relative mr-1 cursor-pointer"
                    style={{ borderRadius: "50%" }}
                    onClick={() => setSearchMenu(true)}
                  >
                    <SearchIcon style={{ color: "white" }} />
                  </div>
                </li>
              </div>
              <div></div>
            </div>
          )}
        </div>
        <div className="h-[10vh] sm:[12vh] flex justify-between p-10 lg:hidden items-center">
          <div>
            <Link href="/" passHref={true} className="lg:w-[15%] ">
              <Image
                src={`${
                  pathname === "/" && !bg
                    ? "./images/whitelogo.svg"
                    : "./images/elchemylogo.svg"
                }`}
                alt="logo"
                width="119"
                height="44"
              />
            </Link>
          </div>
          <div
            className=""
            onClick={() => {
              setopenMobileMenu(true)
            }}
          >
            <MenuIcon
              style={{
                color: `${pathname === "/" && !bg ? "white" : "black"}`,
                cursor: "pointer",
              }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Header
