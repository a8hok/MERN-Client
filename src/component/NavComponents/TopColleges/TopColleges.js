import React, { useState } from "react";
import Navbar from "../../Navbar/navbar";
import Footer from "../../Footer/footer";
import RightSideBar from "../RightSideBar";
import { topColleges } from "../ConstNavComponents/ConstNavComponents.js";

const TopColleges = () => {
  const [state, setState] = useState();

  const settingState = (e) => {
    setState(e.target.value);
  };
  return (
    <>
      <Navbar />
      <div className="category-page-container">
        <div className="category-details">
          <RightSideBar options={topColleges} />

          {state ? (
            <div className="category-details-card">
              <p>
                <strong>category : </strong>
                {state}
              </p>
            </div>
          ) : (
            <h1>select the required category from the right dashboard</h1>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TopColleges;
