import React from "react";
import WaterfallGrid from "./Portfolio/Pages/Mainpage/waterfall-grid";
import Footer from "./Home/Components/Footer/Footer";
import './App.css';
import {Routes, Route,Link, Router} from "react-router-dom";


//component
import LoginNav from "./Home/Components/LoginNav/LoginNav";
// import PhoneFooter from './Home/Components/PhoneFooter/PhoneFooter';
// import Comments from "./Portfolio/Detail/Comments";

//Pages
import PDetails from "./Portfolio/Pages/Detail/PDetails";


export default function App1() {
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      


    <div>
    <LoginNav/>
    <Router>
    <Routes>
    <Route path="/WaterfallGrid" element= {<WaterfallGrid />}/>
    <Route path="/PDetails" element= {<PDetails />}/>

    </Routes>
    </Router>
    <Footer />
    </div>



      {/* <WaterfallGrid /> */}
      {/* <PDetails /> */}
      {/* <AskPageOne /> */}
      {/* <PhoneFooter /> */} 
      {/* </div> */}
    </div>
  )}