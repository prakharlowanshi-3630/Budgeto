import React from "react";
import { motion } from "framer-motion";
import Card from "../components/Card/Card";

const Technology = ()=>{
    const textVariants = {
        initial:{
            x:-500,
            opacity:0,
        },
        animate:{
            x:0,
            opacity:1,
            transition:{
                duration:0.8,
                staggerChildren:0.1,
            },
        }, 
      };
    const data = [
        {
          "id": 1,
          "title": "Software Development",
          "description": "Easy-to-maintain, safe, useful, and profitable business software. 70+ programmers and tech experts created it.",
           image:"marking.jpg",
          
          
        },
        {
          "id": 2,
          "title": "eCommerce Solutions",
          "description": "You can grow your business, get more customers, and make more revenue with e-commerce and user-centric technology.",
           image:"leadgenration.png",
          "thumbnail": "",
          
        },
        {
          "id": 3,
          "title": "WordPress Development",
          "description": "Our developers create scalable, feature-rich WordPress sites. These sites integrate APIs, create plugins, and more to improve your online presence.",
          image:"SEO.png",
          "thumbnail": "",
          
        },
        {
          "id": 4,
          "title": "Mobile Apps",
          "description": "We help global brands build better digital mobile apps by combining design and development services that work across devices and operating systems.",
          image:"Ads.jpg",
          "thumbnail": "",
          
        },
        {
          "id": 5,
          "title": "Product Development",
          "description": "We make business-specific products. Our product development team creates high-performing designs.",
          image:"PRR.png",
          "thumbnail": "",
          
        },
        
        {
          "id": 6,
          "title": "CMS Development",
          "description": "Our Digital marketing company create a custom CMS that makes it easy to edit, add, update, optimize, and publish web content..",
          image:"SOCIALMEDIA.png",
          "thumbnail": "",
          
        },
        {
          "id": 7,
          "title": "Digital Automation",
          "description": "Our Digital Marketing Agency specialise in using digital automation to reduce administrative and marketing expenses for our clients.",
          image:"webdev.jpg",
          "thumbnail": "",
          
        },
        
        {
          "id": 8,
          "title": "Influencer Marketing",
          "description": "Amplify Your Reach. iDigitalise connects you with influential voices, driving impactful results.",
           image:"consulting.png",
          "thumbnail": "",
          
        }
        
      ]
      var bgColors = { "circle": '#EAD8FA',
      "border": '#D2E7FC',
      "back":'#F5EAFF',
  
  };
    return(
        <div  className="w-[100%] flex flex-row justify-center mt-24 h-full">

        <div className="wrapper w-[80%] flex justify-center gap-6 flex-col items-center">
        <motion.div  variants={textVariants} initial = "initial" animate = "animate" className=" flex w-[100%] flex-wrap justify-around gap-y-5 " > 
         {
          data.map((data)=>(<Card data= {data} key = {data.id} bgColors={bgColors} />))

         }

        </motion.div>
        </div>
  
    </div>
    )
}
export default Technology;