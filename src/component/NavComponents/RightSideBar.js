import React, { useState } from "react";
import nextlogo from "./TopUniversity/Admission/Img/next-but.png";
import prevlogo from "./TopUniversity/Admission/Img/prev-but.png";

function RightSideBar({ options }) {
  const [state, setState] = useState();
  const [next, setNext] = useState(0);

  const settingState = (e) => {
    setState(e.target.value);
  };
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
      {options.slice(next, next + 4).map((item) => {
        return (
          <button
            value={item}
            onClick={settingState}
            className="category-options-tile"
          >
            {item}
          </button>
        );
      })}
      {next < options.length - 4 && (
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
