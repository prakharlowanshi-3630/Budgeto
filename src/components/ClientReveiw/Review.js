import React from "react";
import ReviewCard from "./ReviewCard/ReviewCard";
const Review = ()=>{
    const data = [
        {
            "id": 1,
            "logotext":"J",
            "title": "JSL INTERNATIONAL",
            "description": "Our clients are from almost every industry. We can effectively complete any SEO, SMO, or PPC task due to our commitment and legal strategies. When it comes to digital marketing, the professionals at iDigitalise always come through.",
             "color":"#512da8",
             "name":"-Natwar Rathore,CTO",
             "country" :"India"
            
            
          },
          {
            "id": 2,
            "logotext":"B",
            "title": " BLUE MAGIC INTERNATIONAL",
            "description": " Our clients are from almost every industry. We can effectively complete any SEO, SMO, or PPC task due to our commitment and legal strategies. When it comes to digital marketing, the professionals at iDigitalise always come through. ",
             "color":"#00B1DE",
             "name":"-Sanskar Gour,CTO",
             "country" :"India"
            
          },
          {
            "id": 3,
            "logotext":"M",
            "title": " MEDIA X 360",
            "description": " Our clients are from almost every industry. We can effectively complete any SEO, SMO, or PPC task due to our commitment and legal strategies. When it comes to digital marketing, the professionals at iDigitalise always come through. ",
             "color":"#00B1DE",
             "name":"-Pritam Nagar,CTO",
             "country" :"India"
            
          },
    ]

    return(
        <div className="w-[100%] flex flex-row justify-center mt-24  h-full bg-[#f8fdff] pb-12">
           <div className="wrapper w-[90%] flex justify-center gap-6 flex-col items-center ">
            {/* heading */}
            <h1 className="font-bold text-5xl mt-14">Client Reviews</h1>
            {/* descryption */}
            <p className="text-center text-lg">Our clients are from almost every industry.
             We can effectively complete any SEO, SMO, or PPC task due to our commitment and legal strategies.
              When it comes to digital marketing, the professionals at iDigitalise always come through.

            </p>
            <div className="w-full flex flex-wrap justify-evenly mt-10 ">
            {data.map((data)=>(<ReviewCard data= {data} key = {data.id} />))}
            </div>


            </div>
        </div>

    )
}
export default Review;