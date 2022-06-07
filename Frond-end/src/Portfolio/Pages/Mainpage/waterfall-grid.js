import React, { useState, useRef } from "react";
import Waterfall from "waterfalljs-layout/react";
import "./waterfall-grid.css";
import { BsChevronDoubleDown } from "react-icons/bs";
import "./test.css"



const defimages = [
  "https://picsum.photos/640/200/?random",
  "https://picsum.photos/360/640/?random",
  "https://picsum.photos/480/720/?random",
  "https://picsum.photos/480/640/?random",
  "https://picsum.photos/360/?random",
  "https://picsum.photos/360/520/?random",
  "https://picsum.photos/520/360/?random",
  "https://picsum.photos/520/360/?random",
  "https://picsum.photos/520/360/?random",
  "https://picsum.photos/720/640/?random"
];



export default function WaterfallGrid() {
  const [images, setImages] = useState(defimages);
  const ulMaxHRef = useRef(0);

  const handleSearchImage = async () => {
    function random(min, max) {
      return min + Math.floor(Math.random() * (max - min + 1));
    }
    const arr = [];
    for (let i = 0; i < 9; i++) {
      const imgSrc = `${defimages[i]}=${random(1, 10000)}`;
      arr.push(imgSrc);
    }
    setImages((prev) => [...prev, ...arr]);
  };
  return (
    <div className="mianbody">
      <Waterfall
     
        mode="grid"
        el="#react-waterfall-grid-comps"
        columnWidth={300}
        // columnCount= {5}
        rowGap={24}
        // customStyle={customStyleGrid}
        onChangeUlMaxH={(h) => (ulMaxHRef.current = h)}
      >
        {images.map((item, index) => {
          return (
            <li key={index} onClick={() => alert("圖片網址:" + item)}>
              <div>
                {index + 1}
                <img src={item} alt="" />
              </div>
            </li>
          );
        })} 
      </Waterfall>
      <div style={{ textAlign: "center"}}>
        <button className="loadBtn"
          onClick={() => handleSearchImage()}
        >
          <BsChevronDoubleDown />
        </button>
      </div>
    </div>
  );
}