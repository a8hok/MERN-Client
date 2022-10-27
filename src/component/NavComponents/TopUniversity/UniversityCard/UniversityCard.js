import React from "react";
import "./UniversityCard.css";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

function UniversityCard({ uniInfo }) {
  const navigate = useNavigate();
  const location = useLocation().state;

  const handelDetail = (e) => {
    navigate("/universities/details", { state: { state: uniInfo } });
  };
  return (
    <div className="uni-card-container" onClick={handelDetail}>
      <div className="uni-img-container">
        <img src={uniInfo.Image}></img>
      </div>
      <div className="uni-content-container">
        <div className="uni-title">
          <a href={uniInfo.url} target="_blank">
            {uniInfo.Name_1}
          </a>
        </div>
        <div className="uni-place-container">
          <p className="uni-place">
            <span className="uni-district">{uniInfo.District}</span>
            -
            <span className="uni-state">{uniInfo.State}</span>
          </p>
        </div>
        <div className="uni-other-container">
          <span className="uni-Yrofestab">{uniInfo.Yrofestab}</span>
          <span className="uni-type">{uniInfo.Type}</span>
        </div>
        <div className="uni-description"></div>
      </div>
      <div className="uni-stats-container">
        <div className="uni-stat-title"></div>
        <div className="uni-stat-value"></div>
      </div>
    </div>
  );
}

export default UniversityCard;
