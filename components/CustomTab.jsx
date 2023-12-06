import { Typography } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import React, { useEffect, useRef, useState } from "react";

const CustomTab = ({ Content, KeyPoints }) => {
  const [activeKey, setActiveKey] = useState("1");

  const getSelectedData = (e) => {
    let i;
    e?.map((data) => {
      if (data?.key === activeKey) {
        i = data?.data;
      }
    });
    return i;
  };

  const parentRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const parentElement = parentRef.current;
      const parentRect = parentElement.getBoundingClientRect();
      const isParentInViewport = parentRect.top <= 35;
      const stickyElement = parentElement.querySelector(".sticky");
      if (isParentInViewport) {
        stickyElement.classList.add("sticky-fixed");
      } else {
        stickyElement.classList.remove("sticky-fixed");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="px-24 py-8">
      <div className="flex ">
        <KeyboardBackspaceIcon className="cursor-pointer" />
        <Typography className="ml-2 ">Back</Typography>
      </div>
      <div
        className="flex justify-between w-full relative pt-[4rem]"
        ref={parentRef}
      >
        {" "}
        <div className="w-[30%]">
          <div className="  text-[#4D4D4D] flex flex-col sticky top-0">
            {KeyPoints?.map((data, index) => {
              return (
                <>
                  <span
                    className={`transition-all duration-200 pb-3  text-[0.95rem] cursor-pointer ${
                      data?.key === activeKey
                        ? "text-black border-b-[2px] border-b-[#EF4136] mb-7 font-semibold"
                        : "text-[#4D4D4D] mb-5"
                    }`}
                    onClick={() => setActiveKey(data?.key)}
                  >
                    {data?.text}
                  </span>
                </>
              );
            })}
          </div>
        </div>
        <div className="w-[65%] min-h-[80vh]">
          {getSelectedData(Content)?.map((data) => {
            return (
              <div>
                <Typography className=" text-[1.2rem] mb-6">
                  {data?.heading}
                </Typography>
                <div className="text-[0.9rem] mb-12 text-[#666666]">
                  {data?.text}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CustomTab;
