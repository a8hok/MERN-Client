import React, { useState, useEffect, useRef } from "react";
import nextlogo from "./TopUniversity/Admission/Img/next-but.png";
import prevlogo from "./TopUniversity/Admission/Img/prev-but.png";

function RightSideBar({ options }) {
  const [state, setState] = useState();
  const [next, setNext] = useState(0);

  const settingState = (e) => {
    setState(e.target.value);
  };

  const len = options?.length

  setTimeout(() => {
    setNext((next + 4)% len)
  }, "10000")

  return (
    <div className="category-options-container">
      {next != 0 && (
        <button
          className="prev-but"
          onClick={() => {
            setNext(next - 4);
          }}
        >
          <img className="logo-img" src={prevlogo}></img>
        </button>
      )}
      <div className="floating_Selector-Container">
      {options.slice(next, next + 4).map((item) => {
        return (
          
          <button
            value={item}
            key={item}
            onClick={settingState}
            className="category-options-tile"
          >
            {item}
          </button>
          
        );
      })}
      </div>
      {next < options.length && (
        <button
          className="but"
          onClick={() => {
            setNext(next + 4);
          }}
        >
          <img className="logo-img1" src={nextlogo}></img>
        </button>
      )}
    </div>
  );
}

export default RightSideBar;
