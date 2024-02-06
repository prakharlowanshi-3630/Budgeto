import React, { useState } from "react";
import "./service.css";

const ServiceForm = ()=>{
    const [formdata, setformdata] = useState({Clientname:"", Emailaddress:"" ,country:"India" ,Phoneno:"",companyname:"" ,
    currency:"$",range:"",digitalmarketing:false, seoandsem:false,Perfomancemarketing:false,infulencemarketing:false,
    socialmediamarketing:false,emailmarketing:false,consulting:false,branding:false,productshoot:false,adsmarketing:false,
    bannerandpost:false,webdev:false,appdev:false

})
function changeHandler(event){
    const{name , type , value , checked} = event.target;
    console.log(formdata);
    setformdata(prevdata => {
      return{
        ...prevdata,
        [name] : type === "checkbox" ? checked :value
      }

    });

  }
  function submithandler(event){
    event.preventDefault();
    console.log("submit ho gya");
    console.log(formdata);
 }
    return(
        <div className="w-[full]   bg-[#f5eaff] mt-14  ">
          <div className="max-w-[1296px] mx-auto pb-16">
            <div className=" formdes w-[75%] mx-auto flex flex-col justify-center items-center text-center mx-auto pt-8 gap-6 ">
                 {/* heading */}
            <h1 className="font-bold text-5xl mx-auto "> Lets Get Project Started</h1>
            {/* descryption */}
           
            <p className="leading-7 pl-3 text-[#A5A5A5] text-lg"> Your inquiry is our priority. </p>
            </div>
          <form  className=" formdes mt-10 pt-8 pb-10 mainform rounded-lg  bg-white  h-auto  mx-auto  flex flex-wrap pl-10 pr-10 justify-between gap-[1rem]" onSubmit={submithandler}>
          
            <input type='text' placeholder='Name*' name ="Clientname" onChange={changeHandler} value={formdata.Clientname} className="p-3 w-[370px] border border-solid border-[#ebebeb] rounded-md"></input>
       
            <input type='email' placeholder='Email*' name ="Emailaddress" value={formdata.Emailaddress} onChange={changeHandler}  className=" border border-solid border-[#ebebeb] rounded-md p-3 w-[370px]" ></input>
            <div className=" w-[370px] flex p-3 bg-white overflow-hidden border border-solid border-[#ebebeb] rounded-md ">
              <select id="country" name="country" value={formdata.country} onChange={changeHandler} className=""  >
            <option value="">India</option>
            <option>US</option>
            <option>UK</option>
            <option>Canada</option>
            <option>South Africa</option>
           </select>
           <input type="tel" placeholder="Phone no*" name="Phoneno" value={formdata.Phoneno} onChange={changeHandler} className=""></input>
              </div>
            <input type='text' placeholder='Companyname*' value={formdata.companyname} onChange={changeHandler} name ="companyname" className=" border border-solid border-[#ebebeb] rounded-md p-3 w-[370px]"></input>
            <div className=" flex w-[370px] border border-solid border-[#ebebeb] rounded-md">
            <select id="currency" name="currency" value={formdata.currency}  onChange={changeHandler} className="p-3 w-[70px]"  >
            <option value="">$</option>
            <option>₹</option>
            <option>UK</option>
            <option>€</option>
            <option>¥</option>
           </select>
           <input type="text" placeholder="Budget Rang*" value={formdata.range}    onChange={changeHandler} name="range" className="p-3 w-[100%]"></input>
            </div>
            
            <div className="font-bold ">Select services*</div>
            <div className=" mx-auto flex flex-wrap max-w-950px w-[100%] gap-y-5  rounded-md">
               
                <div className="w-[283px] flex gap-3 ">
                <input  onChange={changeHandler} type="checkbox" name="digitalmarketing" value={formdata.digitalmarketing} id="digitalmarketing" ></input>
                <label htmlFor="digitalmarketing">Digital Marketing</label>
                </div>
                <div className="w-[283px] flex gap-3">
                <input onChange={changeHandler}  type="checkbox" name="seoandsem"   value={formdata.seoandsem} id="seoandsem"></input>
                <label htmlFor="seoandsem">SEO & SEM</label>
                </div>
                <div className="w-[283px] flex gap-3">
                <input  onChange={changeHandler} type="checkbox" name="Perfomancemarketing"   value={formdata.Perfomancemarketing} id="Perfomancemarketing" ></input>
                <label htmlFor="Perfomancemarketing">Perfomance Marketing</label>
                </div>
                <div className="w-[283px] flex gap-3">
                <input  onChange={changeHandler} type="checkbox" name="infulencemarketing"   value={formdata.infulencemarketing} id="infulencemarketing" ></input>
                <label htmlFor="infulencemarketing">Infulence Marketing</label>
                </div>
                <div className="w-[283px] flex gap-3">
                <input onChange={changeHandler}  type="checkbox" name="socialmediamarketing"   value={formdata.socialmediamarketing} id="socialmediamarketing" ></input>
                <label htmlFor="digitalmarketing">Social media Marketing</label>
                </div>
                <div className="w-[283px] flex gap-3">
                <input onChange={changeHandler} type="checkbox" name="emailmarketing"   value={formdata.emailmarketing} id="emailmarketing"></input>
                <label htmlFor="emailmarketing">Email Marketing</label>
                </div>
                <div className="w-[283px] flex gap-3">
                <input onChange={changeHandler} type="checkbox" name="consulting"   value={formdata.consulting} id="consulting" ></input>
                <label htmlFor="consulting">Consulting</label>
                </div>
                <div className="w-[283px] flex gap-3">
                <input onChange={changeHandler} type="checkbox" name="branding"   value={formdata.branding} id="branding" ></input>
                <label htmlFor="branding">Branding</label>
                </div>
                <div className="w-[283px] flex gap-3">
                <input onChange={changeHandler} type="checkbox" name="productshoot"   value={formdata.productshoot} id="productshoot" ></input>
                <label htmlFor="productshoot">Productshoot</label>
                </div>
                <div className="w-[283px] flex gap-3">
                <input  onChange={changeHandler} type="checkbox" name="adsmarketing"   value={formdata.adsmarketing}  id="adsmarketing" ></input>
                <label htmlFor="adsmarketing"> Ads Marketing</label>
                </div>
                <div className="w-[283px] flex gap-3">
                <input onChange={changeHandler}  type="checkbox" name="bannerandpost"    value={formdata.bannerandpost} id="bannerandpost"></input>
                <label htmlFor="bannerandpost">Banner and Post</label>
                </div>
                <div className="w-[283px] flex gap-3">
                <input onChange={changeHandler}  type="checkbox" name="webdev"    value={formdata.webdev} id="webdev" ></input>
                <label htmlFor="webdev"> Web Application Development</label>
                </div>
                <div className="w-[283px] flex gap-3">
                <input onChange={changeHandler}  type="checkbox" name="appdev"   value={formdata.appdev} id="appdev" ></input>
                <label htmlFor="appdev">App Development</label>
                </div>





                
            </div>

         <textarea className=" border border-solid border-[#ebebeb] rounded-md w-[100%] min-h-[80px] mt-8" placeholder="Briefly describe your needs, i.e. brief your tentative start date, references, budgets, etc.
"></textarea>

    <button className="mx-auto w-[150px] rounded-md bg-blue-500  p-2  " onD>send</button>         
           
            

        </form>
        </div>
        </div>
    )
}
export default ServiceForm;