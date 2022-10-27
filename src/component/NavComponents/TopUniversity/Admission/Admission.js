import React from "react";
import Navbar from "../../../Navbar/navbar";
import "./Admission.css";
import logo from "../Admission/Img/India-logo.jpg";
import NTAlogo from "../Admission/Img/NTA-logo.jpeg";

function Admission() {
  return (
    <>
      <Navbar />
      <div>
        <div className="ad-top-head">
          <img className="ad-logo" src={logo}></img>
          <h1 className="ad-right-head">
            स्वास्थ्य और परिवार कल्याण मंत्रालय<br></br>
            Ministry of Health and Family Welfare
          </h1>
          <div>
            <h1 className="ad-head">NATIONAL ELIGIBILITY CUM ENTRANCE TEST</h1>
            <h3 className="ad-center-head">(UG) NEET 2003</h3>
          </div>

          <h1 className="ad-left-head">NATIONAL MEDICAL COMMISSION</h1>
          <img className="ad-right-logo" src={NTAlogo}></img>
        </div>
        <div className="ad-sec-head">
          <div className="ad-but">
            <button
              className="ad-but-1"
              onClick={() => {
                const showItem = document.getElementById("show");
                showItem.style.display =
                  showItem.style.display === "none" ? "block" : "none";
              }}
            >
              MBBC
            </button>
            <button
              className="ad-but-2"
              onClick={() => {
                const showItem = document.getElementById("show2");
                showItem.style.display =
                  showItem.style.display === "none" ? "block" : "none";
              }}
            >
              BDC
            </button>
          </div>
        </div>
        <div id="show">
          <div className="ad-third-head">
            <div className="ad-clg-seats">
              <h1 className="clg-seats">No.Of.Govt.Collegs</h1>
              <h3 className="seats-num">36</h3>
            </div>
            <div className="ad-clg-seats">
              <h1 className="clg-seats">No.Of.Private Collegs & UD s</h1>
              <h3 className="seats-num">36</h3>
            </div>
            <div className="ad-clg-seats">
              <h1 className="clg-seats">No.Of.Govt.Collegs Seats</h1>
              <h3 className="seats-num">36</h3>
            </div>
            <div className="ad-clg-seats">
              <h1 className="clg-seats">No.Of.Private Collegs & UDs Seats</h1>
              <h3 className="seats-num">36</h3>
            </div>
            <div className="ad-clg-seats">
              <h1 className="clg-seats">Total.No.Of.Collegs</h1>
              <h3 className="seats-num">36</h3>
            </div>
            <div className="ad-clg-seats">
              <h1 className="clg-seats">Total.No.Of.MBBC Seats</h1>
              <h3 className="seats-num">36</h3>
            </div>
          </div>
        </div>
        <div id="show2">
          <div className="ad-third-head">
            <div className="ad-clg-seats">
              <h1 className="clg-seats">No.Of.Govt.Collegs</h1>
              <h3 className="seats-num">3</h3>
            </div>
            <div className="ad-clg-seats">
              <h1 className="clg-seats">No.Of.Private Collegs & UD s</h1>
              <h3 className="seats-num">6</h3>
            </div>
            <div className="ad-clg-seats">
              <h1 className="clg-seats">No.Of.Govt.Collegs Seats</h1>
              <h3 className="seats-num">6</h3>
            </div>
            <div className="ad-clg-seats">
              <h1 className="clg-seats">No.Of.Private Collegs & UDs Seats</h1>
              <h3 className="seats-num">6</h3>
            </div>
            <div className="ad-clg-seats">
              <h1 className="clg-seats">Total.No.Of.Collegs</h1>
              <h3 className="seats-num">6</h3>
            </div>
            <div className="ad-clg-seats">
              <h1 className="clg-seats">Total.No.Of.MBBC Seats</h1>
              <h3 className="seats-num">6</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Admission;