import React from "react";
import "./why.css";

const Why = ()=>{
    return(
        <div className=" mt-14 w-[100%] mx-auto">
        {/* wrapper */}
         <div className=" whydes mx-auto w-[90%] flex flex-col justify-center items-center pt-6  gap-14 ">
            <div className="w-[75%] flex flex-col justify-center items-center  gap-6 ">
                 {/* heading */}
            <h1 className="font-bold text-5xl "> Why choose Budgeto ?</h1>
            {/* descryption */}
           
            <p className="leading-7 pl-3 text-[#A5A5A5] text-lg">  Our ethics stand by our side all along the journey from zero to 99.9%
                  online and offline visibility for our clients.</p>
            </div>
            
            {/* data section */}
            <div className=" w-[100%] flex  flex-wrap gap-y-10 justify-around items-center pb-10">
                {/* left data section*/}
                <div className=" flex flex-col justify-between gap-9 mr-7 ml-7 text-center">
                    {/* revenue part */}
                    <div className="flex flex-col w-[180px] ">
                      
                        <p className="font-bold text-xl">Full-Service Agency</p>
                        <p className="">Ideation, design, development, marketing, strategy planning, execution, and ROI stabilization</p>
                        
                       
                       </div>
                       {/* Million Leads Generated */}
                       <div className="flex flex-col w-[180px]">
                      
                      <p className="font-bold text-xl">Performance First</p>
                      <p className="">Our strategies, ideas, and track records help our clients' businesses grow.</p>
                      
                     
                     </div>
                       {/* Clients From Over 40 Countries */}
                       <div className="flex flex-col w-[180px] ">
                      
                      <p className="font-bold text-xl">Accountability</p>
                      <p className="">Transparent, relationship-focused account executives serve clients.</p>
                      
                     
                     </div>

                </div>

                {/* center img */}
             <div  className="object-cover"> 
               <img src="idi.webp" alt="" className=" imgsize h-[550px]"></img>
             </div>
             
                {/* right data section */}
                <div className=" flex flex-col gap-9 ml-7 mr-7 text-center">
                    {/* revenue part */}
                    <div className="flex flex-col w-[180px] ">
                      
                        <p className="font-bold text-xl">Top-Rated Agency</p>
                        <p className="">We're a top Digital agency worldwide. Our services and expertise are seamless in 30+ countries.</p>
                        
                       
                       </div>
                       {/* Million Leads Generated */}
                       <div className="flex flex-col w-[180px] ">
                      
                        <p className="font-bold text-xl">Teamwork</p>
                        <p className="">Our team holds professionals who have expertise in their respective domains</p>
                        
                       
                       </div>
                       {/* Clients From Over 40 Countries */}
                       <div className="flex flex-col w-[180px] ">
                      
                        <p className="font-bold text-xl">Flexibility</p>
                        <p className="">Integrated with the latest trends, our techies are flexy to consume and deliver more</p>
                        
                       
                       </div>

                </div>
                


            </div>
             {/* img */}
           

         </div>
    </div>
    )
}
export default Why;


