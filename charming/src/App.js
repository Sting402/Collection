import React from "react";
import WaterfallGrid from "./Portfolio/Pages/Mainpage/waterfall-grid";
import Footer from "./Home/Components/Footer/Footer";
import LoginNav from "./Home/Components/LoginNav/LoginNav";
// import PDetails from "./Portfolio/Pages/Detail/PDetails";
import './App.css';
// import AskPageOne from "./forum(Steven only)/Askpage/AskPage"

//component
import PhoneFooter from './Home/Components/PhoneFooter/PhoneFooter';
// import WaterfallPosition from "./Portfolio/Mainpage/waterfall-position";
// import Comments from "./Portfolio/Detail/Comments";

export default function App() {
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      
      <div>
      <LoginNav/>

      <WaterfallGrid />
      {/* <WaterfallPosition /> */}
      {/* <App/> */}
      {/* <PDetails /> */}
      {/* <AskPageOne /> */}
      <Footer />
      <PhoneFooter />
      </div>
    </div>
  );
}
