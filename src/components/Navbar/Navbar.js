import { useEffect ,useState} from 'react';
import React  from "react";
import{motion} from 'framer-motion';
import { Link, useNavigate } from "react-router-dom";
import { click } from "@testing-library/user-event/dist/click";

const NavBar = ()=>{
   const navigate = useNavigate();

   function HomeClickHandler(){
    navigate("/");
   }
    
    
    
    return (
        <div className=" w-[100%] relative z-30">
            <div className="fixed top-0 left-0 w-[100%] bg-white ">
            <div className="pl-8 pr-10 flex justify-between  items-center   font-medium ">
                {/* img of budgeto */}
                <motion.img src="LOGO.png"  onClick = {HomeClickHandler} className="h-[80px] w-20 cursor-pointer "
               initial = { {opacity:0 , scale:0}}  
               animate = {{opacity:1 , scale: 1}}
               transition={{duration:0.7}}
                 
               
                /> 
               
                {/* bars */}
                < motion.div
                initial = {{opacity:0 , scale:0.5}}  
                animate = {{opacity:1 , scale: 1}}
                transition={{duration:0.7}}
                className="flex gap-8">
              <button> <Link to="/Services" className=""> Services</Link></button>
              <button> <Link to="/CaseStudies" className=""> CaseStudies</Link></button>
              <button> <Link to="/Clients" className="">Clients</Link></button>
              <button> <Link to="/OurWork" className="">OurWork</Link></button>
              <button> <Link to="/Pricing" className="">Pricing</Link></button>
              <button> <Link to="/Insights" className=""> Insights</Link></button>
              <button> <Link to="/Contact" className=""> Contact</Link></button>
              <button> <Link to="/AboutUs" className="">AboutUs</Link></button>
                </motion.div>
                {/* button */}
                <motion.button 
                initial = {{opacity:0 , scale:0.5}}  
                animate = {{opacity:1 , scale: 1}}
                transition={{duration:0.7}}
                className="border bg-red-700 font-sans font-medium text-white border-black border-solid p-2 rounded-md">Request Quotes</motion.button>
            </div>
            </div>
          
        </div>
    )
}
export default NavBar ;