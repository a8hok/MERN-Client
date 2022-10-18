import React, {useState} from "react";

function RightSideBar({ options }) {
  const [state, setState] = useState();

  const settingState = (e) => {
    setState(e.target.value);
  };
  return (
    <div className="category-options-container">
      {options.map((item) => {
        return (
          <button
            value={item}
            onClick={settingState}
            className="category-options"
          >
            {item}
          </button>
        );
      })}
    </div>
  );
}

export default RightSideBar;
