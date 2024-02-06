import React, { useState } from "react";
import "./Card.css";
const Card = ({data,bgColors})=>{
    const circle = bgColors.circle;
    const border = bgColors.border;
    const back = bgColors.back;
    
    return (
<div style ={{backgroundColor:back,borderColor:border}} className={`w-[233px] h-[370px]  flex flex-col gap-14 relative border border-solid  z-1 pl-3 rounded-md`}>
    <div style ={{backgroundColor:circle}} className="w-[110px] h-[110px]  z-0 rounded-full mt-3 ml-3"></div>
   <div >
   <img src={data.image} className="h-[70px] w-[70px] z-10 absolute top-7 left-11" ></img> 
   <h2 className="text-[24px] font-medium -mt-5">{data.title}</h2>
   <p className="text-[#70798b] text-[16px]">{data.description}</p>
    
   </div>
    
</div>
    );
}
export default Card;