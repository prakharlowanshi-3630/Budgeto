import React from "react";
import "./best.css";

const BestDigital = ()=>{
    return (
        // top level container
        <div className="bg-[#201734] mt-14 w-[100%] mx-auto">
            {/* wrapper */}
             <div className="whydes mx-auto w-[90%] flex flex-col justify-center items-center pt-6  gap-10 ">
                <div className="w-[75%] flex flex-col justify-center items-center  gap-6 ">
                     {/* heading */}
                <h1 className="font-bold text-5xl text-center text-white">Best Digital Marketing Agency</h1>
                {/* descryption */}
               
                <p className="leading-7 pl-3 text-[#A5A5A5] text-lg">As a Best digital marketing agency based in Dubai, India, and Albania, iDigitalise operates globally.
              Our expertise spans a comprehensive range of digital marketing services, including search engine optimization, paid search,
              social media management, website development, e-commerce solutions, UI/UX design, content creation, and more. With a deep understanding
             of various industries, our agency assists companies in achieving remarkable outcomes and establishing a robust digital presence.</p>
                </div>
                
                {/* data section */}
                <div className=" datades w-[100%]  flex justify-between items-center pb-10">
                    {/* left data section*/}
                    <div className=" flex flex-col gap-9 mr-7 ml-7">
                        {/* revenue part */}
                        <div className="flex flex-col">
                          <div className=" flex  text-white">
                            <p className="text-[100px]">30</p>
                            <p className="text-[100px]">+</p>
                            </div>
                            <p className="text-xl text-white">Billion Revenue Generated</p> 
                             {/* partation line  */}
                            <div className=" part h-[3px] w-[300px] mt-4 bg-[#A5A5A5]"></div>
                           </div>
                           {/* Million Leads Generated */}
                           <div className="flex flex-col">
                          <div className=" flex  text-white">
                            <p className="text-[100px]">01</p>
                            <p className="text-[100px]">+</p>
                            </div>
                            <p className="text-xl text-white">Million Leads Generated</p> 
                             {/* partation line  */}
                            <div className="part h-[3px] w-[300px] mt-4 bg-[#A5A5A5]"></div>
                           </div>
                           {/* Clients From Over 40 Countries */}
                           <div className="flex flex-col">
                          <div className=" flex  text-white">
                            <p className="text-[100px]">160</p>
                            <p className="text-[100px]">+</p>
                            </div>
                            <p className="text-xl text-white">Clients From Over 40 Countries</p> 
                             {/* partation line  */}
                            <div className="part h-[3px] w-[300px] mt-4 bg-[#A5A5A5]"></div>
                           </div>

                    </div>

                    {/* center img */}
                 <div 
                 className="object-cover">   <img src="dataimg.png" alt="" className=" imgsize h-[550px]"></img>
                 </div>
                 
                    {/* right data section */}
                    <div className=" flex flex-col gap-9 ml-7 mr-7">
                        {/* revenue part */}
                        <div className="flex flex-col">
                          <div className=" flex  text-white">
                            <p className="text-[100px]">20</p>
                            <p className="text-[100px]">+</p>
                            </div>
                            <p className="text-xl text-white">Years of Work Experience</p> 
                             {/* partation line  */}
                            <div className="part h-[3px] w-[300px] mt-4 bg-[#A5A5A5]"></div>
                           </div>
                           {/* Million Leads Generated */}
                           <div className="flex flex-col">
                          <div className=" flex  text-white">
                            <p className="text-[100px]">0.5</p>
                            <p className="text-[100px]">+</p>
                            </div>
                            <p className="text-xl text-white">Billion Ad Spend Managed</p> 
                             {/* partation line  */}
                            <div className="part h-[3px] w-[300px] mt-4 bg-[#A5A5A5]"></div>
                           </div>
                           {/* Clients From Over 40 Countries */}
                           <div className="flex flex-col">
                          <div className=" flex  text-white">
                            <p className="text-[100px]">95</p>
                            <p className="text-[100px]">%</p>
                            </div>
                            <p className="text-xl text-white">Satisfied and Happy Clients</p> 
                             {/* partation line  */}
                            <div className="part h-[3px] w-[300px] mt-4 bg-[#A5A5A5]"></div>
                           </div>

                    </div>
                    


                </div>
                 {/* img */}
               

             </div>
        </div> 
    )
}
export default BestDigital;







