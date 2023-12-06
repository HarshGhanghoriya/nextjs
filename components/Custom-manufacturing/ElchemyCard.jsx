import Image from "next/image";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ElchemyCard = ({ logo, title, description, index }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  return (
    <motion.div
      className="w-full h-full rounded-[.5rem] px-6 py-8 relative"
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }}
      transition={{ duration: 1.2 }}
    >
      <motion.div
        className="w-full bg-[#F1F2F2] rounded-[.5rem] absolute bottom-0 left-0 -z-10"
        initial={{ height: 0, originY: 1 }}
        animate={{ height: "100%", originY: 0 }}
        transition={{ delay: index * 1.2, ease: "linear" }}
      ></motion.div>
      <motion.div
        className="w-[80px] h-[80px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: index * 1.6 }}
      >
        <Image src={logo} width={100} height={100} />
      </motion.div>
      <motion.div
        className="mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: index * 1.5 }}
      >
        <p className="text-[#161616] font-bold py-2">{title}</p>
        <p className="text-[#4D4D4D]">{description}</p>
      </motion.div>
    </motion.div>
  );
};

export default ElchemyCard;
