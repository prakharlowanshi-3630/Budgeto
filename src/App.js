import './App.css';
import NavBar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import BestDigital from './components/BestDigital/BestDigital';
import { Routes ,Route} from 'react-router-dom';
import Home from './Pages/Home';
import Services from './Pages/Services';
import CaseStudies from './Pages/CaseStudies';
import Clients from './Pages/Clients';
import OurWork from './Pages/OurWork';
import Pricing from './Pages/Pricing';
import Insights from './Pages/Insights';
import Contact from './Pages/Contact';
import AboutUs from './Pages/AboutUs';
import ParentPage from './Pages/ParentPage';
import Technology from './Pages/Technology';
import DigitalMarketing from './Pages/DigitalMarketing';
import Hosting from './Pages/Hosting';
import Communication from './Pages/Communication';
import { useState } from 'react';

function App() {
  const [isstarting , setisstarting] = useState(true);
  return (
   <div className="h-auto relative box-border m-0 overflow-hidden">
        <NavBar   className ="fixed  "/>
  <Routes>
    <Route path = "/" element ={<ParentPage></ParentPage>}>
         <Route path = "/" element={<Home></Home>}>
          {/* nested routing */}
        <Route index element={<DigitalMarketing></DigitalMarketing>}></Route>
         <Route path = "/Technology" element ={<Technology></Technology>}> </Route>
          <Route path = "/Hosting" element ={<Hosting></Hosting>}> </Route>
            <Route path = "/Communication" element ={<Communication></Communication>}> </Route>
     </Route>
    <Route path = "/Services" element ={<Services></Services>}> </Route>
    <Route path = "/CaseStudies" element ={<CaseStudies></CaseStudies>}> </Route>
    <Route path = "/Clients" element ={<Clients></Clients>}> </Route>
    <Route path = "/OurWork" element ={<OurWork></OurWork>}> </Route>
    <Route path = "/Pricing" element ={<Pricing></Pricing>}> </Route>
    <Route path = "/Insights" element ={<Insights></Insights>}> </Route>
    <Route path = "/Contact" element ={<Contact></Contact>}> </Route>
    <Route path = "/AboutUs" element ={<AboutUs></AboutUs>}> </Route>
       </Route>
   
  </Routes>
 
  
   </div>
  );
}

export default App;
