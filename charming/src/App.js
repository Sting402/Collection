import React from "react";
import WaterfallGridDemo from "./waterfall-grid";
import Footer from "./Home/Components/Footer/Footer";
import LoginNav from "./Home/Components/LoginNav/LoginNav";

export default function App() {
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      
      <div>
      <LoginNav/>
       <h3>grid版本</h3>
      <WaterfallGridDemo />
      <Footer />
      </div>
    </div>
  );
}
