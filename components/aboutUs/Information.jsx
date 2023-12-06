import React from "react"

const Information = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-[30px]">
      <div className="flex-1 flex flex-col justify-between gap-3  font-normal items-start md:px-10">
        <h2 className="relative">
          <div className="h-[30px] w-[9px] md:font-medium whatWeDoBar bg-[#F15B2A] absolute md:-top-3 md:-left-1.5 -top-2 -left-2.5 font-sans md:text-[#333]"></div>
          n 2021, Hardik Seth, a skilled chemical engineer, and Shobhit Jain, an
          accomplished electronics engineer, founded Elchemy to revolutionize
          the global chemical industry with cutting-edge technology.
        </h2>
        <h2 className="md:mt-3 font-sans md:text-[#333]">
          Their team, <span className="text-[#F15B2A]">'The Elchemists'</span>,
          works to improve chemical distribution and custom manufacturing,
          addressing challenges for customers and suppliers. Elchemy's
          tech-driven solutions are transforming the industry, one customer at a
          time.
        </h2>
        <h2 className="md:mt-3 text-[#333]">
          This is the future of chemistries—This is Elchemy!
        </h2>
      </div>
      <div className="md:w-[52%] md:h-[100%] md:pt-10 md:flex md:justify-center md:items-center font-normal">
        <div className="flex flex-col justify-center items-center relative">
          <div className="absolute top-[17px] right-[20%] flex items-center justify-center">
            <div className="h-[1px] w-[70px] md:w-[100px] md:h-[1px] bg-[#666666]"></div>
            <h5 className="pl-1 md:pl-2 font-mukta ">Shobhit Jain</h5>
          </div>

          <img
            src="./images/info.png"
            alt=""
            className=" rounded-xs mb-[20px] object-cover"
          />
          <div className="absolute bottom-[25px] left-[20%] flex items-center justify-center">
            <h5 className="pr-1 md:pr-2 font-mukta text-[#161616]">
              Hardik Seth
            </h5>
            <div className="h-[1px] w-[70px] md:w-[100px] md:h-[1px] bg-[#666666]"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Information
