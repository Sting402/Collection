import { React, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Waterfall from "waterfalljs-layout/react";
import "./waterfall-grid.css";
import { BsChevronDoubleDown } from "react-icons/bs";
import pic from "./pic";
import introduce1 from "../../../Home/Assets/charmingMan.png";

//設定圖片與高度
function WaterfallGrid() {
  const [images, setImages] = useState(pic);
  const ulMaxHRef = useRef(0);
//
  const handleSearchImage = async () => {
    function random(min, max) {
      return min + Math.floor(Math.random() * (max - min + 1));
    }
    const arr = [];
    for (let i = 0; i < 9; i++) {
      const imgSrc = `${pic[i]}=${random(1, 10000)}`;
      arr.push(imgSrc);
    }
    setImages((prev) => [...prev, ...arr]);
  };
  return (
    <div className="mianbody">
      <img className="introduce"src={introduce1} alt="introduce" />
      <Waterfall
        className="waterfall"
        mode="grid"
        el="#react-waterfall-grid-comps"
        columnWidth={350}
        columnCount={4}
        rowGap={20}
        // customStyle={customStyleGrid}
        onChangeUlMaxH={(h) => (ulMaxHRef.current = h)}
      >
        {images.map((item, index) => {
          return (
            <li>
              <div>
              <Link to="/PDetails"> 
                <img className="img"
                  key={index}
                  src={item}
                  alt="/PDetails"
                />
              </Link>
              </div>
            </li>
          );
        })}
      </Waterfall>
      <div style={{ textAlign: "center" }}>
        <button className="loadBtn" onClick={() => handleSearchImage()}>
          <BsChevronDoubleDown />
        </button>
      </div>
    </div>
  );
}
export default WaterfallGrid;
