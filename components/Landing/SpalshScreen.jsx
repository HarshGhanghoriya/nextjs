import Image from "next/image";
import React, { useEffect } from "react";
import { useState } from "react";

const SpalshScreen = () => {
  const [animate, setAnimate] = useState(false);
  const [animateLogo, setAnimateLogo] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);
      setAnimateLogo(true);
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <div className="w-[100%] h-[100vh] fixed bg-white flex justify-center items-center" style={{zIndex:"2000"}}>
        <div className="">
          <Image
            src="./images/elchemylogo.svg"
            width={100}
            height={100}
            style={{ width: "200px", height: "200px" }}
            className={`logoBeforeAnimate ${animate && "animateLogo"}`}
          />
        </div>
        <span className={`${animate && "animateDiv"} beforeAnimateDiv flex justify-center`}>
          <Image
            src="./images/loading-screen-arrow.svg"
            width={100}
            height={100}
          />
        </span>
      </div>
    </>
  );
};

export default SpalshScreen;
