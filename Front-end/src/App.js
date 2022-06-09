import React from "react";
import WaterfallGrid from "./Portfolio/Pages/Mainpage/waterfall-grid";
import Footer from "./Home/Components/Footer/Footer";
import LoginNav from "./Home/Components/LoginNav/LoginNav";
// import PDetails from "./Portfolio/Pages/Detail/PDetails";
import './App.css';
// import Waterfall from "./waterfall/app";
// import AskPageOne from "./forum(Steven only)/Askpage/AskPage"

//component
import PhoneFooter from './Home/Components/PhoneFooter/PhoneFooter';
// import Comments from "./Portfolio/Detail/Comments";

export default function App1() {
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      
      <div>
      <LoginNav/>

      <WaterfallGrid />
      {/* <WaterfallPosition /> */}
      {/* <Waterfall/> */}
      {/* <PDetails /> */}
      {/* <AskPageOne /> */}
      <Footer />
      <PhoneFooter />
      </div>
    </div>
  );
}
