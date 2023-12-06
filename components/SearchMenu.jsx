import React from "react"
import CloseIcon from "@mui/icons-material/Close"
import Image from "next/image"
import SearchIcon from "@mui/icons-material/Search"
import { useState } from "react"
import { Grid } from "@mui/material"
import {motion} from "framer-motion"

const SearchMenu = ({ closeMemnu }) => {
  const [menuIndex, setMenuIndex] = useState(null)
  const searchMenus = [
    {
      title: "Food & Nutrition",
      icon: "./images/iconOne.svg",
    },
    {
      title: "Food & Nutrition",
      icon: "./images/iconOne.svg",
    },
    {
      title: "Food & Nutrition",
      icon: "./images/iconOne.svg",
    },
    {
      title: "Food & Nutrition",
      icon: "./images/iconOne.svg",
    },
    {
      title: "Food & Nutrition",
      icon: "./images/iconOne.svg",
    },
    {
      title: "Food & Nutrition",
      icon: "./images/iconOne.svg",
    },
    {
      title: "Food & Nutrition",
      icon: "./images/iconOne.svg",
    },
    {
      title: "Food & Nutrition",
      icon: "./images/iconOne.svg",
    },
  ]
  const close = () => {
    closeMemnu()
  }
  const makeMenuActive = index => {
    setMenuIndex(index)
  }
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: "-100%",  }}
        animate={{ opacity: 1, y: 0, }}
        transition={{ duration: 3, type: "spring", stiffness: 50, delay: 0 }}
        style={{ zIndex: "1000" }}
      >
        <div className="p-20 pt-10 bg-white relative z-100 h-[100vh]">
          <div className="flex justify-between">
            <div>
              <Image
                src="./images/elchemylogo.svg"
                alt="logo"
                width={100}
                height={100}
              />
            </div>
            <div onClick={close} className="cursor-pointer  ">
              <CloseIcon style={{ width: "30px", height: "30px" }} />
            </div>
          </div>
          <div className="flex mt-5 flex-col items-center">
            <div className="text-center text-[1.7rem]">
              What are you looking for?
            </div>
            <div className="w-[65%]  text-center relative mt-10 ">
              <input
                className="w-[100%] p-5 searchInputBox"
                type="text"
                placeholder="Search Product by Industry or Application or CAS No."
              />
              <div className="w-[42px] h-[42px] rounded-[50%] bg-red-500 absolute right-8 flex justify-center items-center top-3  ">
                <SearchIcon style={{ color: "white" }} />
              </div>
            </div>
            <div className="w-[65%] flex justify-between mt-10 items-center">
              <div className="border border-gray-300 w-[35%] h-[1px] "></div>
              <div className="uppercase text-center">or search by Industry</div>
              <div className="border border-gray-300 w-[35%] h-[1px] "></div>
            </div>
          </div>
          <div className="flex w-[65%] ml-auto mr-auto justify-between">
            <Grid container spacing={2}>
              {searchMenus?.length > 0 &&
                searchMenus.map((menu, index) => (
                  <Grid
                    item
                    key={index}
                    xs={12}
                    sm={6}
                    md={4}
                    lg={3}
                    // onClick={() => handleClick(index)}
                  >
                    <div
                      className={`cursor-pointer w-[100%] border flex flex-col mt-5 p-5 box-border rounded-xs ${
                        index === menuIndex && "bg-red-600 text-white"
                      }`}
                    >
                      <div>
                        <Image
                          src={menu?.icon}
                          width={50}
                          height={50}
                          alt="menu icon"
                        />
                      </div>
                      <div>{menu.title}</div>
                    </div>
                  </Grid>
                ))}
            </Grid>
          </div>
        </div>
      </motion.div>
    </>
  )
}

export default SearchMenu
