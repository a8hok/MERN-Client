import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCollageInfo } from "../../../Store/Slice/getCollageData";

import Navbar from "../../Navbar/navbar";
import Footer from "../../Footer/footer";
import RightSideBar from "../RightSideBar";
import Loadergif from "../../Event/img/loader.gif";

import { topColleges, specialization } from "../ConstNavComponents/ConstNavComponents.js";
import CollageCard from "./TopCollageCard/TopCollageCard";

const TopColleges = () => {

  const state = [];

  const {CollageData, CollageLoading} = useSelector((state) => state.CollageInfo)

  console.log(CollageData)

  const dispatch = useDispatch();

  const [stateSelected, setState] = useState([]);

  const [district, setDistrict] = useState([]);

  const [districtDisplayed, setDistrictDisplayed] = useState([]);

  const [CollageDatafinal, setCollageStateData] = useState([]);

  useEffect(() => {
    dispatch(getCollageInfo())
  }, [])

  useEffect(() => {
    setCollageStateData(CollageData)
  }, [])

  useEffect(() => {
    function generateRandomInt(max) {
      return Math.floor(Math.random() * max);
    }
    const randomNumber = generateRandomInt(CollageData.length - 10);
    console.log(randomNumber);
    setCollageStateData(
      CollageData.slice(randomNumber, randomNumber + 10)
    );
  }, [CollageData]);
  useEffect(() => {
    setCollageStateData(
      CollageData.filter((element) => {
        if (element.State === stateSelected) return element;
      })
    );
  }, [stateSelected]);
  useEffect(() => {
    setCollageStateData(
      CollageData.filter((element) => {
        if (element.District === districtDisplayed) return element;
      })
    );
  }, [districtDisplayed]);

  useEffect(() => {
    district.splice(0, district.length);
    CollageData.forEach((element) => {
      if (element.State === stateSelected) district.push(element.District);
    });
  }, [stateSelected]);


  CollageData.forEach((element) => {
    if (!state.includes(element.State)) {
      state.push(element.State);
    }
  });

  const settingState = (e) => {
    setState(e.target.value);
  };

  const handelstate = (e) => {
    e.preventDefault();
    var select = document.getElementById("state");
    if (select) {
      var value = select.options[select.selectedIndex].value;

      setState(value);
    }
  };

  const handelDistrict = (e) => {
    e.preventDefault();
    var select = document.getElementById("district");
    if (select) {
      var value = select.options[select.selectedIndex].value;

      setDistrictDisplayed(value);
    }
  };

  return (
    <>
      <Navbar />
      <div className="category-page-container">
        <div className="category-details">
          <RightSideBar options={topColleges} />

          <div className="university-main-heading">Top Colleges</div>

          <div className="selecting-preferences">
        <div className="guide-selection">
          <span>select your preferences</span>
        </div>
        <select className="guide-selector">
          <option>Specialization</option>
          {specialization.length > 0 &&
            specialization.map((obj) => <option>{obj}</option>)}
        </select>
        <select onChange={handelstate} id="state" className="guide-selector">
          <option>State</option>
          {state?.length > 0 &&
            state.map((obj) => <option value={obj}>{obj}</option>)}
        </select>
        <select
          onChange={handelDistrict}
          id="district"
          className="guide-selector guide-Selector_Last"
        >
          <option>District</option>
          {district.length > 0 && district.map((obj) => <option>{obj}</option>)}
        </select>
      </div>

      <div className="uni-main-container">
        <div className="uni-list-main-container">
          {CollageLoading === true && (
            <div className="loader">
              <img className="loadergif" src={Loadergif}></img>
            </div>
          )}
            {CollageDatafinal.length > 0 &&
            CollageDatafinal.map((obj, index) => (
            <CollageCard key={index} colInfo={obj}></CollageCard>
            ))}
            </div>
            </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TopColleges;
