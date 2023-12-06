import Image from "next/image"
import React, { useState } from "react"
import SkewedBar from "../Common/SkewedBar"
import SimpleCard from "../Card/SimpleCard"
import RequestSampleModalBtn from "../Modal/RequestSample"

const datas = [
  {
    id: 1,
    icon: "/images/custom-manu-rail.png",
    icon1:
    "https://elchemydev.s3.amazonaws.com/static/image'/2023-12-03/21:57:31.925763.png",
    title: "Customized Formulations",
    desc: ` We specialize in crafting personalized chemical formulations, precisely tailored to meet your specific needs. Our team of skilled chemists and engineers collaborates closely with you to ensure the perfect alignment of properties and performance characteristics in our formulations`,
  },
  {
    id: 2,
    icon: "/images/cmIconOne.png",
    icon1:
      "https://elchemydev.s3.amazonaws.com/static/image'/2023-12-03/21:58:38.053761.png",

    title: "Quality Assurance",

    desc: ` Our foundation is built on quality, showcasing our unwavering dedication to the highest standards and safety. Rigorous quality control and cutting-edge testing facilities guarantee that each batch not only meets but surpasses industry and regulatory benchmarks, solidifying our reputation.`,
  },

  {
    id: 3,
    icon: "/images/cmIconThree.png",
    icon1:
      "https://elchemydev.s3.amazonaws.com/static/image'/2023-12-03/21:59:00.462613.png",
    title: "Process Expertise",
    desc: `Our skilled team offers extensive technical knowledge and experience. Refined processes ensure efficiency, yield, and quality optimization. From scaling production to resolving challenges, our experts guarantee a seamless, efficient, and cost-effective chemical manufacturing experience.`,
  },
  {
    id: 4,
    icon: "/images/cmIconTwo.png",
    icon1:
      "https://elchemydev.s3.amazonaws.com/static/image'/2023-12-03/21:59:25.518989.png",
    title: "Cost Competitiveness:",
    desc: `Our advanced technology-driven processes and supply chain management allow us to find cost efficiencies without compromising quality. With Elchemy, you get the best of both worlds – custom-tailored solutions at competitive prices.
    `,
  },
]
const Options = [
  { value: "Details of sample needed", label: "Details of sample needed" },
  {
    value: "Tentative requisition date",
    label: "Tentative requisition date",
  },
  { value: "Requisition country", label: "Requisition country" },
  // Add more options as needed
]

const CustomManufacturing = () => {
  const [activeIcons, setActiveIcons] = useState(0)

  return (
    <>
      <div>
        <section className="spacing_md">
          <SkewedBar
            color="#F15B2A"
            animation="false"
            header="CUSTOM MANUFACTURING"
            subHeader="Elchemy Expertise"
          />
        </section>
        <div className="hidden md:block mt-[4rem] ">
          <div className="flex justify-space h-full bg-[#E6E6E6] mt-[-4rem] overflow-hidden cursor-pointer ">
            {datas.map((item, index) => (
              <>
                <div
                  className={`bg-[#B0332B] h-[100%] cursor-pointer transition-all duration-300 expertise-card w-[40%] ${
                    activeIcons === index ? "show " : ""
                  }`}
                >
                  <div
                    className={`p-5  ${
                      activeIcons !== index ? "hidden" : ""
                    } p-[2rem]`}
                  >
                    <div className="font-light text-[white] text-[2.5rem] font-mukta">
                      {item.title}
                    </div>
                    <div className="font-light text-[white] text-[1.2rem] mt-5">
                      {item.desc}
                    </div>
                    <div className="my-10">
                      <RequestSampleModalBtn
                        Options={Options}
                        heading={"Request A Sample"}
                        subHeading={"Personal Details"}
                        classes={"w-[150px] h-[48px] bg-white rounded-[4px]"}
                      >
                        <div className="text-pink">Request Sample</div>
                      </RequestSampleModalBtn>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="text-[6rem] text-[#B5B5B5] font-bold opacity-50">
                        {`0${item.id}`}
                      </div>
                      <div className="opacity-50">
                        <Image
                          src={item.icon1}
                          alt="gas icon"
                          width={100}
                          height={20}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {activeIcons !== index && (
                  <div
                    className="flex items-end justify-center w-[20%] transition-all duration-300 cursor-pointer py-6"
                    onMouseEnter={() => setActiveIcons(index)}
                  >
                    <Image
                      src={item.icon}
                      alt="gas icon"
                      width={100}
                      height={20}
                      style={{ width: "7rem", height: "7rem" }}
                    />
                  </div>
                )}
              </>
            ))}
          </div>
        </div>
        <section className="md:hidden spacing_sm bg-[#EF4136]">
          <SimpleCard Details={datas} options={Options}/>
        </section>
      </div>
    </>
  )
}

export default CustomManufacturing
