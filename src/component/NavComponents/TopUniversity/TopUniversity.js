import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUniversitiesInfo } from "../../../Store/Slice/getUniversities";
import { topColleges, specialization, categoriesOption } from "../ConstNavComponents/ConstNavComponents";
import UniversityCard from "./UniversityCard/UniversityCard";
import RightSideBar from "../RightSideBar";
import Navbar from "../../Navbar/navbar";
import { getAdvertisementsInfo } from "../../../Store/Slice/getAdvertisements";
import { AdvertisementViewer } from "../../AdvertisementViewer/AdvertisementViewer";

import "./TopUniversity.css";
import LoaderGif from "../../Event/img/loader.gif";

function TopUniversity() {
  const state = [];
  const [stateSelected, setState] = useState("");
  const [district, setDistrict] = useState([]);
  const [districtDisplayed, setDistrictDisplayed] = useState("");
  const [filteredAd, setFilteredAd] = useState([]);
  const {AdvertisementsData} = useSelector((state) => state.getAdvertisements);
  const { universitiesData, universitiesLoading } = useSelector(
    (state) => state.universitiesInfo
  );
  const [universityDatafinal, setuniversityStateData] = useState([]);
  const [searchText, setSearchText] = useState("Top universities");
  const pageIndex = 1;
  const pageSize = 2000;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUniversitiesInfo({ pageIndex, pageSize }));
    dispatch(getAdvertisementsInfo());
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

  // console.log(universitiesData)

  function filterUniversities (e) {
    return (e?.catagory === "Universities" && e.status === 0)
  }

  useEffect(() => {
    AdvertisementsData.map((i) => {
      if(i.catagory === "Universities" && i.status === 0){
        setFilteredAd(AdvertisementsData.filter(filterUniversities))
      }
    })
  }, [AdvertisementsData])

  const isTopUniversity = (e) => {
    if(e.isTopUniv === true){
      return e
    }
  }

  useEffect(() => {
    // function generateRandomInt(max) {
    //   return Math.floor(Math.random() * max);
    // }
    // const randomNumber = generateRandomInt(universitiesData.length - 10);
    setuniversityStateData(
      universitiesData.filter(isTopUniversity)
    );
  }, [universitiesData]);

  useEffect(() => {
    if(stateSelected === ""){
      setDistrictDisplayed("")
      setuniversityStateData(
        universitiesData.filter(isTopUniversity)
      );
    }else {
      setuniversityStateData(
        universitiesData.filter((element) => {
          if (element.State == stateSelected) return element;
        })
      );
    }
  }, [stateSelected])

  useEffect(() => {
    if(stateSelected !== "" || districtDisplayed !== ""){
      setSearchText("Top universities for your searches")
    }else {
      setSearchText("Top universities")
    }
  }, [stateSelected, districtDisplayed])

  useEffect(() => {
    if(districtDisplayed !== ""){
      setuniversityStateData(
        universitiesData.filter((element) => {
          if (element.District == districtDisplayed) return element;
        })
      );
    }
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
      {/* <div className="uni-right-sidebar">
        <RightSideBar options={categoriesOption} />
      </div> */}

      <AdvertisementViewer children={filteredAd}/>

      <div className="university-main-heading">{searchText}</div>

      <div className="selecting-preferences">
        <div className="guide-selection">
          <span>Filters</span>
        </div>
        {/* <select className="guide-selector">
          <option>Specialization</option>
          {specialization.length > 0 &&
            specialization.map((obj) => <option>{obj}</option>)}
        </select> */}
        <select onChange={handelstate} id="state" className="guide-selector">
          <option value="">State</option>
          {state.length > 0 &&
            state.map((obj) => <option value={obj}>{obj}</option>)}
        </select>
        <select
          onChange={handelDistrict}
          id="district"
          className="guide-selector guide-Selector_Last"
        >
          <option value="">District</option>
          {district.length > 0 && district.map((obj) => <option value={obj}>{obj}</option>)}
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
        {/* <div className="selecting-preferences">
        <div className="selecting-preferences_Children">
          {state.length > 0 && state.map((obj) => <button onClick={handelstate} id="state" value={obj}>{obj}</button>)}
        </div>
        <div className="selecting-preferences_Children">
          {district.length > 0 && district.map((obj) => <button onClick={handelDistrict} id="district" value={obj}>{obj}</button>)}
        </div>
      </div> */}
      </div>
    </>
  );
}

export default TopUniversity;
