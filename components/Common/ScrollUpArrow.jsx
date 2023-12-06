import React from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const ScrollUpArrow = () => {
  const navigateTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div
      className="bg-[#EF4136] hover:bg-[] w-[3rem] h-[3rem] rounded-[50%] cursor-pointer z-40 flex justify-center items-center fixed top-[85%] right-[3%]"
      onClick={navigateTop}
    >
      <ArrowUpwardIcon className="text-white" />
    </div>
  );
};

export default ScrollUpArrow;
