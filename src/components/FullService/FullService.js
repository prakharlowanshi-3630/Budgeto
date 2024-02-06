import React, { useState } from "react";
import Card from "../Card/Card";
import "./FullService.css";
import {color, motion} from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
const FullService = ()=>{
  const[style, setstyle] = useState("light")
  const changeStyle = () => {
    console.log("you just clicked");
    if (style !== "light") setstyle("light");
    else setstyle("dark");
};
 
  const textVariants = {
    initial:{
        x:-500,
        opacity:0,
    },
    animate:{
        x:0,
        opacity:1,
        transition:{
            duration:2,
            staggerChildren:0.1,
        },
    }, 
  };
    return(
        // top level container 
        <div className="w-[100%] flex flex-row justify-center mt-24 h-full h-auto">
          <div className="wrapper w-[80%] flex justify-center gap-6 flex-col items-center  ">
            {/* heading */}
            <h1 className="font-bold text-5xl ">Full-Service Digital Marketing Agency</h1>
            {/* descryption */}
            <p className="text-center text-lg">As the best digital marketing agency in India, we strategically position your brand and business in search engine rankings,
                 unlocking the potential for increased online visibility. With a physical presence in Albania, India, and Dubai, iDigitalise
                  aims to be your dedicated digital marketing partner, whether it's to build trust with clients or establish a notable online
                 presence.
            </p>
            {/* buttons */}
           <div className="flex justify-around font-medium  w-[100%]">
             
            <Link ><motion.button  whileHover={{scale:1.1}} whileTap={{color:"",scale:0.8}}  className="w-auto "> <Link to="" className=" focus:text-red-600 p-5"> Digital Marketing</Link></motion.button></Link>  
           <Link >  <motion.button whileHover={{scale:1.1}} whileTap={{color:"",scale:0.8}} > <Link to="/Technology" className="focus:text-red-600"> Technology</Link></motion.button> </Link> 
        <Link><motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }} ><Link to="/Hosting" className="focus:text-red-600">Hosting and Cloud Solutions</Link></motion.button> </Link>
       <Link ><motion.button whileHover={{scale:1.1}} whileTap={{scale:0.8}} > <Link to="/Communication" className="focus:text-red-600">Creative & Communications</Link></motion.button>
       </Link> 
            </div>
           
            

          </div>


        </div>

    )
}
export default FullService ;