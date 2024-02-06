import React from "react";
import { Outlet } from "react-router";
const ParentPage = ()=>{
    return(
        <div>
            
            <Outlet></Outlet>
        </div>
    )
    
}
export default ParentPage;
