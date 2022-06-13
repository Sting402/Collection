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
// import PDetails from "./Portfolio/Pages/Detail/PDetails";

export default function App() {
  return (
    <div>
    <LoginNav/>
       <Routes>
          <Route path="/" element={<WaterfallGrid />} />
          <Route path="/PDetails" element={<PDetails />} />
        </Routes>
        <Footer />
      </div>
    )
}