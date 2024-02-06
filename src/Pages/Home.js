import React from "react";
import Main from "../components/Main/Main";
import BestDigital from "../components/BestDigital/BestDigital";
import FullService from "../components/FullService/FullService";
import { Routes ,Route, Outlet} from 'react-router-dom';
import Review from "../components/ClientReveiw/Review";

import Why from "../components/Why/Why";
import NavBar from "../components/Navbar/Navbar";
import ServiceForm from "../components/Form/ServiceForm";
import Footer from "../components/Footer/Footer";

const Home = ()=>{
    return(
        <div>
       
           <Main/>
           <BestDigital/>
           <FullService></FullService>
           <Outlet></Outlet>
           <Review></Review>
           <Why></Why>
           <ServiceForm></ServiceForm>
           <Footer></Footer>          

        </div>
    )
}
export default Home;