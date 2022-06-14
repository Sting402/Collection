import React from "react";
import Footer from "./Home/Components/Footer/Footer";
import "./App.css";
import { Route, Routes,  } from "react-router-dom";

//component
import LoginNav from "./Home/Components/LoginNav/LoginNav";
// import PhoneFooter from './Home/Components/PhoneFooter/PhoneFooter';
// import Comments from "./Portfolio/Detail/Comments";

//Pages
import WaterfallGrid from "./Portfolio/Pages/Mainpage/waterfallgrid";
import PDetails from "./Portfolio/Pages/Detail/PDetails";
import PDetails1 from "./Portfolio/Pages/Detail/PDetails1";
// import PDetails from "./Portfolio/Pages/Detail/PDetails";

export default function App() {
  return (
    <div>
    <LoginNav/>
       <Routes>
          <Route path="/Waterfallgrid" element={<WaterfallGrid />} />
          <Route path="/PDetails" element={<PDetails />} />
          <Route path="/PDetails1" element={<PDetails1/>} />
        </Routes>
        <Footer />
      </div>
    )
}