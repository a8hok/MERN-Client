import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUniversitiesInfo } from "../../../Store/Slice/getUniversities";
import { topColleges } from "../ConstNavComponents/ConstNavComponents";
import { specialization } from "../ConstNavComponents/ConstNavComponents";
import UniversityCard from "./UniversityCard/UniversityCard";
import RightSideBar from "../RightSideBar";
import Navbar from "../../Navbar/navbar";

import "./TopUniversity.css";
import LoaderGif from "../../Event/img/loader.gif";

function TopUniversity() {
  const state = [];
  const [stateSelected, setState] = useState([]);
  const [district, setDistrict] = useState([]);
  const [districtDisplayed, setDistrictDisplayed] = useState([]);
  const { universitiesData, universitiesLoading } = useSelector(
    (state) => state.universitiesInfo
  );
  const [universityDatafinal, setuniversityStateData] = useState([]);
  const pageIndex = 1;
  const pageSize = 2000;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUniversitiesInfo({ pageIndex, pageSize }));
  }, []);
  universitiesData.forEach((element) => {
    if (!state.includes(element.State)) {
      state.push(element.State);
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
    const randomNumber = generateRandomInt(universitiesData.length - 10);
    setuniversityStateData(
      universitiesData.slice(randomNumber, randomNumber + 10)
    );
  }, [universitiesData]);
  useEffect(() => {
    setuniversityStateData(
      universitiesData.filter((element) => {
        if (element.State == stateSelected) return element;
      })
    );
  }, [stateSelected]);
  useEffect(() => {
    setuniversityStateData(
      universitiesData.filter((element) => {
        if (element.District == districtDisplayed) return element;
      })
    );
  }, [districtDisplayed]);

  useEffect(() => {
    district.splice(0, district.length);
    universitiesData.forEach((element) => {
      if (element.State === stateSelected) district.push(element.District);
    });
  }, [stateSelected]);

  return (
    <>
      <Navbar />
      <div className="uni-right-sidebar">
        <RightSideBar options={topColleges} />
      </div>
      <div className="university-main-heading">Top Universities</div>
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
          {state.length > 0 &&
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
          {universitiesLoading === true && (
            <div className="loader">
              <img className="loadergif" src={LoaderGif}></img>
            </div>
          )}
          {universityDatafinal.length > 0 &&
            universityDatafinal.map((obj, index) => (
              <UniversityCard key={index} uniInfo={obj}></UniversityCard>
            ))}
        </div>
      </div>
    </>
  );
}

export default TopUniversity;
