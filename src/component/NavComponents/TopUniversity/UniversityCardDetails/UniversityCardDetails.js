import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../../../Navbar/navbar";
import "../UniversityCardDetails/UniversityCardDetails.css";
import UniLogo from "../UniversityCardDetails/Img/logo.png";
import eduLogo from "../UniversityCardDetails/Img/educationlogo.png";

function UniversityCardDetails() {
  const location = useLocation();
  const details = location.state.state;
  console.log(details);

  return (
    <>
      <Navbar />
      <div className="clg-heading">
        <div className="clg-head-top">
          <div className="clg-name">{details.Name_1}</div>
          <div className="clg-city">
            {details.City},{details.District},{details.State}
          </div>
        </div>
        <div className="clg-head-second">
          <img className="clg-img" src={details.Logo}></img>
          <div className="clg-pharmacy">
            <h3 className="clg-topic">Pharmacy</h3>
          </div>
          <div className="clg-type">
            {" "}
            <img className="uni-logo" src={UniLogo}></img>
            {details.Type}
          </div>
          <div className="clg-co-education">
            <img className="edu-logo" src={eduLogo}></img>
            <h3 className="clg-topic">Co-Education</h3>
          </div>
          <div className="clg-year">
            <h3 className="clg-topic">Year Of Starting</h3>
            <br></br>
            {details.Yrofestab}
          </div>
          <div className="clg-campus">
            <h3 className="clg-topic">Campus Area</h3>
            <br></br>
            14
          </div>
          <div className="clg-faculty">
            <h3 className="clg-topic">Faculty Strength</h3>
            <br></br>
            140
          </div>
          <div className="clg-student">
            <h3 className="clg-topic">Student Strength</h3>
            <br></br>
            1440
          </div>
        </div>
        <div className="clg-sec-head">
          <div className="clg-sec-row">
            <button className="clg-detail-button">
              {" "}
              Programmes Offered&Fee{" "}
            </button>
            <button className="clg-detail-button">Placements</button>
            <button className="clg-detail-button">Infrastructure</button>
            <button className="clg-detail-button">Entrance Test</button>
            <button className="clg-detail-button">Perception/Feedback</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default UniversityCardDetails;
