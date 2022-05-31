import React from "react";
import WaterfallGrid from "./Portfolio/Mainpage/waterfall-grid";
import Footer from "./Home/Components/Footer/Footer";
import LoginNav from "./Home/Components/LoginNav/LoginNav";
// import PDetails from "./Portfolio/Detail/PDetails";
import './App.css';

//component
import PhoneFooter from './Home/Components/PhoneFooter/PhoneFooter';
// import Comments from "./Portfolio/Detail/Comments";

export default function App() {
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      
      <div>
      <LoginNav/>

      <WaterfallGrid />
      {/* <App/> */}
      {/* <PDetails /> */}
      <Footer />
      <PhoneFooter />
      </div>
    </div>
  );
}
