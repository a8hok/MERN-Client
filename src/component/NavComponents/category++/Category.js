import React, { useState } from "react";
import "./css/category.css";
import Navbar from "../../Navbar/navbar";
import Footer from "../../Footer/footer";
import RightSideBar from "../RightSideBar";
import { categoriesOption } from "../ConstNavComponents/ConstNavComponents.js";
const Category = () => {
  const [state, setState] = useState();

  const settingState = (e) => {
    setState(e.target.value);
  };
  return (
    <>
      <Navbar />
      <div className="category-page-container">
        <div className="category-details">
          <RightSideBar options={categoriesOption} />

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

export default Category;
