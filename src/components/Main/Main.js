import React, { useEffect, useState } from "react";
import {motion} from "framer-motion";

const textVariants = {
  initial:{
      x:-500,
      opacity:0,
  },
  animate:{
      x:0,
      opacity:1,
      transition:{
          duration:1,
          staggerChildren:0.1,
      },
  }, 
};
const Main = ()=>{
    
    
    return(
        
        <div className="Main w-full pt-20 h pb-14 ">
           <motion.div variants={textVariants} initial="initial" animate="animate"className="flex flex-col items-center justify-center mt-28 ">
             <motion.span variants={textVariants}className="font-extrabold text-7xl ">One-Stop Digital Marketing</motion.span> 
             <motion.span variants={textVariants} className="mt-8 text-2xl text-[#A5A5A5]">Over 40 countries and 65 clients use iDigitalise. We offer result-driven digital and performance</motion.span> 
             <motion.span variants={textVariants} className="text-2xl text-[#A5A5A5]">marketing,</motion.span> 
             <motion.span variants={textVariants} className="text-2xl text-[#A5A5A5]">web solutions, design, communication, cloud and automation solutions.</motion.span> 
             <motion.button variants={textVariants} className="mt-12 border  text-white border-black border-solid p-4 pl-8 pr-8 rounded-md bg-red-700">Get Started</motion.button>
           </motion.div>
        </div>
    )
}
export default Main ;