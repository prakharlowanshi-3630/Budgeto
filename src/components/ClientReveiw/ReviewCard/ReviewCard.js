import React from "react";
const ReviewCard = ({data})=>{
    const color = data.color;
    return(
     
        // container
        <div className="w-[350px] h-[600px] border border-solid border-black rounded-md" >

            <div className=" w-[full] h-[full] ">
                <div className="relative flex w-[full] mb-[24px] gap-4 mt-10 ">
                 <div style={{backgroundColor:color}} className="h-[100px] m-2 w-[100px] rounded-[50%] flex justify-center  text-2xl font-bold items-center border border-solid border-black">{data.logotext}</div>
                  {/* <span className="absolute text-2xl font-bold top-7 left-10">{data.logotext}</span> */}
                  <div className=" flex-col  w-[calc(100%-150px)] ">
                    <div className="flex ">
                    <span><img src="starimg.png" className="h-[20px]"></img></span>
                    <span><img src="starimg.png" className="h-[20px]"></img></span>
                    <span><img src="starimg.png" className="h-[20px]"></img></span>
                    <span><img src="starimg.png" className="h-[20px]"></img></span>
                    <span><img src="starimg.png" className="h-[20px]"></img></span>
                    </div>
                    <div className="text-[24px] font-bold">{data.title}</div>
                  </div>
                </div>
                <div className="flex flex-col gap-12 h-[full]" >
                <div className="text-[#70798b] font-[16px] font-medium p-5">{data.description}</div>
                 <div className="text-[#70798b] font-[16px] font-medium p-5"  >
                  <div>{data.name}</div>
                  <div>{data.country}</div>
              </div>
                </div>
                <div className="w-[full] h-[3px] bg-[#656c7a] mt-4"></div>
                <div className="flex justify-between text-[#70798b] font-[16px] font-medium pl-4 pr-4 mt-2">
                   <span>Source</span> 
                   <img src="starimg.png"></img>
                </div>


            </div>
       
        </div>
    )
}
export default ReviewCard ;