import React, { useEffect, useRef, useState } from "react"
import CountUp from "react-countup"
import ScrollTrigger from "react-scroll-trigger"
import VisionaySection from "./VisionaySection"
import Image from "next/image"

const EdgeSection = () => {
  let timer = null
  let animateTimer=null
  const data = [{name:"Industries",numbers:7,countDif:4}, {name:"Countries",numbers:22,countDif:16}, {name:"MT Shipped",numbers:3400,countDif:3390}, {name:"Ports",numbers:26,countDif:5}]

  const [showAnotherSection, setShowAnotherSection] = useState(false)

  const cmpRef = useRef(null)

  const [animateBar, setAnimateBar] = useState(false)

  const [counterSection, setCounterSection] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  useEffect(() => {
    if (showAnotherSection) {
      setAnimateBar(false)
    }
  }, [showAnotherSection])

  const handleOtherSection = () => {
    setCounterSection(true)
    animateTimer=setTimeout(() => {
      setAnimateBar(true)
    }, 3000)
    timer = setTimeout(() => {
      setShowAnotherSection(true)
    }, 4500)
  }

  const handleIntersection = entries => {
    // entries is an array of observed elements
    const [entry] = entries
    setIsVisible(entry.isIntersecting)
  }

  useEffect(() => {
    const options = {
      root: null, // use the viewport as the root
      rootMargin: "0px",
      threshold: 0.8, // 0 means not visible, 1 means fully visible
    }

    const observer = new IntersectionObserver(handleIntersection, options)

    if (cmpRef.current) {
      observer.observe(cmpRef.current)
    }

    // Cleanup the observer on component unmount
    return () => {
      if (cmpRef.current) {
        observer.unobserve(cmpRef.current)
        clearTimeout(timer)
        clearTimeout(animateTimer)
      }
    }
  }, []) // Run effect only once on component mount

  return (
    <div ref={cmpRef}>
      {!showAnotherSection ? (
        <>
          <div className="relative md:h-[40rem]">
            <div className="spacing_lg ">
              <div className="flex gap-[4]">
                <div className={` ${animateBar && isVisible && "animateBar"}`}>
                  <Image
                    src="./images/brand-logo.svg"
                    width={64}
                    height={72}
                    className="relative top-[-1.5rem]"
                    alt="brand-logo"
                  />
                </div>
                <div className="">
                  <div className="text-[1rem] text-pink font-bold uppercase font-mukta">
                    ELCHEMY EDGE
                  </div>
                  <div
                    className={`md:text-[40px] font-light text-[20px] text-[#161616] font-mukta`}
                  >
                    Achievements at Elchemy
                  </div>
                </div>
              </div>

              <div className="flex justify-between mt-20 ">
                <ScrollTrigger
                  onEnter={handleOtherSection}
                  onExit={() => {
                    setCounterSection(false)
                    setShowAnotherSection(false)
                    setAnimateBar(false)
                    clearTimeout(timer)
                  }}
                  className="flex md:flex-row  flex-col md:justify-between justify-between w-[100%] sm:gap-10 gap-4"
                 
                >
                  {data?.length > 0 &&
                    data.map(({name,numbers,countDif}, index) => {
                      return (
                        <>
                          <div className="flex flex-col justify-center items-center md:text-[6rem] text[3rem] font-medium px-[1rem]">
                            <CountUp
                              start={countDif}
                              end={counterSection && numbers}
                              duration={6}
                              separator=" "
                              delay={2}
                              decimals={""}
                              prefix=""
                              suffix=" +"
                              decimal=","
                            
                            >
                              {({ countUpRef, start }) => (
                                <>
                                  <div>
                                    <span
                                      ref={countUpRef}
                                      className="font-medium font-mukta lg:text-[6rem] text-[2rem] text-black"
                                    />
                                  </div>
                                </>
                              )}
                            </CountUp>
                            <div className="text-[#161616] lg:text-[1.8rem] text-[1rem] font-normal font-mukta">
                              {name}
                            </div>
                          </div>
                        </>
                      )
                    })}
                </ScrollTrigger>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <ScrollTrigger
            onExit={() => {
              setShowAnotherSection(false)
            }}
          >
            
            <div className="xl:p-24 lg:p-24 md:p-24 py-16 px-10 bg-[#B0332B] flex flex-col justify-center lg:h-[41rem]">
              
              <VisionaySection />
            </div>
          </ScrollTrigger>
        </>
      )}
    </div>
  )
}

export default EdgeSection
9
