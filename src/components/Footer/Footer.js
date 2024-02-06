import React from "react";
import "./footer.css";

const Footer = ()=>{
    return(
        <div className="bg-[#191919] flex flex-col w-[full] ">
            <div className=" footerdes flex flex-wrap justify-between w-[90%] mx-auto pt-10 gap-y-10 text-white">
            {/* 1st */}
          <div className="flex flex-col gap-4">
             <h2 className="mb-3 font-bold text-2xl"> Service</h2>
            <a href=""> Conversion Rate Optimization</a>
            <a href="">Revenue Generation</a>   
            <a href="">Lead Generation Services</a>
            <a href="">Facebook & Insta Marketing</a>
            <a href="">Consultancy Services</a>
            <a href="">Landing pages</a>
            <a href="">Real Estate Lead Generation</a>
            <a href="">Search ads</a>
            <a href="">Display Advertising</a>
          </div>
          {/* 2nd */}
          <div className="flex flex-col gap-4">
          <h2 className="mb-6 font-bold text-2xl"></h2>
            <a href="">Content Marketing</a>                 
            <a href="">Shopping Ads</a>
            <a href="">Social Media Advertising</a>
            <a href="">Amazon Marketing</a>
            <a href="">Search engine optimization</a>
            <a href="">Social Media Management</a>
            <a href="">Influencer Marketing</a>
            <a href="">Digital PR</a>
            <a href="">Online Reputation Marketing</a>


          </div>
           {/* 3rd */}
           <div className="flex flex-col gap-4">
           <h2 className="mb-3 font-bold text-2xl"> Pricing</h2>
           <a href="">   Seo Packages</a>                 
            <a href="">Social Media Packages</a>
            <a href="">Google PPC</a>
            <a href="">Shopping ads</a>
            <a href="">Digital Branding Packages</a>
            <a href="">Digital Marketing Packages</a>

            </div>
             {/* 4th */}
          <div className="flex flex-col gap-4">
          <h2 className="mb-6 font-bold text-2xl"></h2>
          <a href="">  Digital PR Packages</a>                 
            <a href="">Website and Development</a>
            <a href="">E-commerce Websites</a>
            <a href="">Landing Conversion Pages</a>
            <a href="">Software Developments</a>
            <a href="">Mob Apps</a>
            <a href="">Content Writing Pricing</a>
            <a href="">Hire Resources</a>

          </div>
          {/* 5th */}
          <div className="flex flex-col gap-4">
          <h2 className="mb-3 font-bold text-2xl"> About Company</h2>
             <a href="">About</a>                 
            <a href="">Testimonials</a>
            <a href="">CRO’s Message </a>
            <a href="">FAQ</a>
            <a href="">Group Businesses</a>
            <a href="">CSR</a>
            <a href="">Life at idigitalise</a>
            <a href="">Offices</a>


          </div>
          </div>
        </div>
        )
}
export default Footer;