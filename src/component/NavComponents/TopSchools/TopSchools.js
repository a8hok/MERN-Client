import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSchoolData } from "../../../Store/Slice/getSchool";

import Navbar from "../../Navbar/navbar";
import Footer from "../../Footer/footer";
import RightSideBar from "../RightSideBar";
import Loadergif from "../../Event/img/loader.gif";

import { topColleges, specialization } from "../ConstNavComponents/ConstNavComponents.js";
import SchoolsCard from "./TopSchoolCard/TopSchoolCard";

const TopSchools = () => {

  const state = [];

  const {allSchoolData, schoolLoading} = useSelector((state) => state.getSchoolData)

  const dispatch = useDispatch();

  const [stateSelected, setState] = useState([]);

  const [district, setDistrict] = useState([]);

  const [districtDisplayed, setDistrictDisplayed] = useState([]);

  const [allSchoolDatafinal, setallSchoolData] = useState([]);

  useEffect(() => {
    dispatch(getSchoolData())
  }, [])

  allSchoolData.forEach((element) => {
    if (!state.includes(element.state)) {
      state.push(element.state);
    }
  });

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

  useEffect(() => {
    function generateRandomInt(max) {
      return Math.floor(Math.random() * max);
    }
    const randomNumber = generateRandomInt(allSchoolData.length - 10);
    setallSchoolData(
      allSchoolData.slice(randomNumber, randomNumber + 10)
    );
  }, [allSchoolData]);

  useEffect(() => {
    setallSchoolData(
      allSchoolData.filter((element) => {
        if (element.state === stateSelected) return element;
      })
    );
  }, [stateSelected]);

  useEffect(() => {
    setallSchoolData(
      allSchoolData.filter((element) => {
        if (element.district === districtDisplayed) return element;
      })
    );
  }, [districtDisplayed]);

  useEffect(() => {
    district.splice(0, district.length);
    allSchoolData.forEach((element) => {
      if (element.state === stateSelected) district.push(element.district);
    });
  }, [stateSelected]);

  return (
    <>
      <Navbar />
      <div className="category-page-container">
        <div className="category-details">
          <RightSideBar options={topColleges} />

          <div className="university-main-heading">Top Schools</div>

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
          {schoolLoading === true && (
            <div className="loader">
              <img className="loadergif" src={Loadergif}></img>
            </div>
          )}
            {allSchoolDatafinal.length > 0 &&
            allSchoolDatafinal.map((obj, index) => (
            <SchoolsCard key={index} SchoolInfo={obj}></SchoolsCard>
            ))}
            </div>
            </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TopSchools;
