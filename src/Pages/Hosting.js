import React from "react";
import{motion} from 'framer-motion';
import Card from "../components/Card/Card";


const Hosting = ()=>{
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
          "title": "Performance Marketing",
          "description": "Unleash Your Brand's Potential with iDigitalise Digital Marketing Agency. Maximize ROI and achieve exceptional results.",
           image:"marking.jpg",
          
          
        },
        {
          "id": 2,
          "title": "Lead Generation",
          "description": "Fuel Your Growth Engine with iDigitalise's Tailored Strategies. Convert your audience into valuable leads for sustainable success",
           image:"leadgenration.png",
          "thumbnail": "",
          
        },
        {
          "id": 3,
          "title": "SEO Services",
          "description": "Elevate Your Online Visibility with iDigitalise's Unmatched Expertise. Dominate search rankings and stand out in the digital landscape.",
          image:"SEO.png",
          "thumbnail": "",
          
        },
        {
          "id": 4,
          "title": "Paid Ads",
          "description": "Get Noticed, Get Results with iDigitalise's Creative Edge. Reach the right audience at the right time for remarkable business growth.",
          image:"Ads.jpg",
          "thumbnail": "",
          
        },
        {
          "id": 5,
          "title": "Digital PR",
          "description": "Build Trust, Amplify Your Reach with iDigitalise's Tailored Approach. Enhance brand reputation and establish industry authority for unparalleled visibility.",
          image:"PRR.png",
          "thumbnail": "",
          
        },
        
        {
          "id": 6,
          "title": "Social Media Marketing",
          "description": "Connect, Engage, and Grow. iDigitalise's expert strategies elevate your brand's presence on social platforms.",
          image:"SOCIALMEDIA.png",
          "thumbnail": "",
          
        },
        {
          "id": 7,
          "title": "Web Design & Development",
          "description": "Get a user-friendly, high-performance website to reduce bounce rates and boost engagement, traffic, and conversions. CMO Services",
          image:"webdev.jpg",
          "thumbnail": "",
          
        },
        
        {
          "id": 8,
          "title": "Marketing Consultancy",
          "description": "Elevate Your Strategy. iDigitalise's Consultancy expertise enhances your marketing efforts for unparalleled success.",
           image:"consulting.png",
          "thumbnail": "",
          
        }
        
      ]
      var bgColors = { "circle": '#F8F0D1',
      "border": '#F8EAB7',
      "back":'#FFFBED',
  
  };
    return(
        <div id="digitalM" className="w-[100%] flex flex-row justify-center mt-24 h-full">

        <div className="wrapper w-[80%] flex justify-center gap-6 flex-col items-center">
        <motion.div  variants={textVariants} initial = "initial" animate = "animate" className=" flex w-[100%] flex-wrap justify-around gap-y-5" > 
         {
          data.map((data)=>(<Card data= {data} key = {data.id} bgColors={bgColors}/>))

         }

        </motion.div>
        </div>
  
    </div>
    )
}
export default Hosting;