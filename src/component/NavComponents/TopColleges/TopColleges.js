import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCollageInfo } from "../../../Store/Slice/getCollageData";

import Navbar from "../../Navbar/navbar";
import Footer from "../../Footer/footer";
import RightSideBar from "../RightSideBar";
import Loadergif from "../../Event/img/loader.gif";

import { topColleges, specialization, categoriesOption } from "../ConstNavComponents/ConstNavComponents.js";
import CollageCard from "./TopCollageCard/TopCollageCard";
import { getAdvertisementsInfo } from "../../../Store/Slice/getAdvertisements";
import { AdvertisementViewer } from "../../AdvertisementViewer/AdvertisementViewer";

const TopColleges = () => {

  const state = [];

  const { CollageData, CollageLoading } = useSelector((state) => state.CollageInfo)

  const dispatch = useDispatch();

  const [stateSelected, setState] = useState("");

  const [district, setDistrict] = useState([]);

  const [districtDisplayed, setDistrictDisplayed] = useState("");

  const [CollageDatafinal, setCollageStateData] = useState([]);

  const [filteredAd, setFilteredAd] = useState([]);

  const [searchText, setSearchText] = useState("Top Colleges");

  const {AdvertisementsData} = useSelector((state) => state.getAdvertisements);

  const isTopCollege = (e) => {
    if(e.isTopCol === true){
      return e
    }
  }

  useEffect(() => {
    dispatch(getCollageInfo())
    dispatch(getAdvertisementsInfo());
  }, [])

  function filterCollege (e) {
    return (e?.catagory === "Colleges" && e.status === 0)
  }

  CollageData.forEach((element) => {
    if (!state.includes(element.State)) {
      state.push(element.State);
    }
  });

  useEffect(() => {
    AdvertisementsData.map((i) => {
      if(i.catagory === "Colleges" && i.status === 0){
        setFilteredAd(AdvertisementsData.filter(filterCollege))
      }
    })
  }, [AdvertisementsData])

  // console.log(filteredAd)

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
    setCollageStateData(
      CollageData.filter(isTopCollege)
    );
  }, [CollageData]);

  useEffect(() => {
    if(stateSelected === ""){
      setDistrictDisplayed("")
      setCollageStateData(
        CollageData.filter(isTopCollege)
      );
    }else {
      setCollageStateData(
        CollageData.filter((element) => {
          if (element.State === stateSelected) return element;
        })
      );
    }
  }, [stateSelected]);

  useEffect(() => {
    if(districtDisplayed !== "") {
      setCollageStateData(
        CollageData.filter((element) => {
          if (element.college_District === districtDisplayed) return element;
        })
      );
    }
  }, [districtDisplayed]);

  useEffect(() => {
    district.splice(0, district.length);
    CollageData.forEach((element) => {
      if (element.State === stateSelected) district.push(element.college_District);
    });
  }, [stateSelected]);

  useEffect(() => {
    if(stateSelected !== "" || districtDisplayed !== ""){
      setSearchText("Top Colleges for your searches")
    }else {
      setSearchText("Top Colleges")
    }
  }, [stateSelected, districtDisplayed])

  return (
    <>
      <Navbar />
      <div className="category-page-container">
        <div className="category-details">
          {/* <RightSideBar options={topColleges} /> */}

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
              {state?.length > 0 &&
                state.map((obj) => <option value={obj}>{obj}</option>)}
            </select>
            <select
              onChange={handelDistrict}
              id="district"
              className="guide-selector guide-Selector_Last"
            >
              <option value="">District</option>
              {district.length > 0 && district.map((obj) => <option>{obj}</option>)}
            </select>
            {/* {state?.length > 0 &&
                state.map((obj) => <button value={obj}>{obj}</button>)} */}
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
