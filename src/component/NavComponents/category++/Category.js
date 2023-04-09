import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProgrammeInfo } from "../../../Store/Slice/getProgramme";
import { getAdvertisementsInfo } from "../../../Store/Slice/getAdvertisements";

import "./css/category.css";
import Navbar from "../../Navbar/navbar";
import Footer from "../../Footer/footer";

const Category = () => {
  const [selectDomain, setSelectDomain] = useState("");
  const [selectSubDomain, setSelectSubDomain] = useState("");
  const [finalLevel, setFinalLevel] = useState("");

  const [data, setData] = useState([]);

  const [domain, setDomain] = useState([]);

  const [subDomain, setSubDomain] = useState([]);

  const [levels, setLevels] = useState([]);

  const dispatch = useDispatch();

  const [states, setStates] = useState([
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jarkhand",
    "Karnataka",
    "kerala",
    "Madya Pradesh",
    "Maharashtra",
    "Manipur",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Sikkim",
    "Punjab",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttarkhand",
    "Uttar Pradesh",
    "West Bengal",
  ])

  const { programmeData } = useSelector((state) => state.getProgrammeInfo);

  const {AdvertisementsData} = useSelector((state) => state.getAdvertisements);

  useEffect(() => {
    dispatch(getProgrammeInfo())
    dispatch(getAdvertisementsInfo());
  }, [])

  const filterSubDomainOptions = (e) => {
    return (e?.programmeDomain == selectDomain)
  }

  const filterBysubDomain = (e) => {
    return (e?.programmeSubDomain == selectSubDomain)
  }

  const filterByLevels = (e) => {
    if(selectSubDomain != ""){
      return (e?.programmeSubDomain == selectSubDomain && e?.programmeLevel == finalLevel)
    }else {
      return (e?.programmeLevel == finalLevel)
    }
  }

  useEffect(() => {
    if(programmeData.length != 0){
      setData(programmeData)
      const forDomain = programmeData.map((i) => i.programmeDomain)
      const uniqueDomain = [...new Set(forDomain)]
      setDomain(uniqueDomain)
      const forSubDomain = (selectDomain == "" ? programmeData.map((i) => i.programmeSubDomain) : programmeData.filter(filterSubDomainOptions).map((i) => i.programmeSubDomain))
      const uniqueSubDomain = [...new Set(forSubDomain)]
      setSubDomain(uniqueSubDomain)
      const forLevels = (selectSubDomain == "" ? programmeData.map((i) => i.programmeLevel) : programmeData.filter(filterBysubDomain).map((i) => i.programmeLevel))
      const uniqueLevels = [...new Set(forLevels)]
      setLevels(uniqueLevels)
    }
  }, [programmeData, selectDomain, selectSubDomain])

  const settingState = (e) => {
    setSelectDomain(e.target.value);
    setSelectSubDomain("")
    setFinalLevel("")
  };

  const settingSubDomain = (e) => {
    setSelectSubDomain(e.target.value)
  }

  const settingFinalLevel = (e) => {
    setFinalLevel(e.target.value)
  }

  return (
    <>
      <Navbar />
      <div className="category_all-Container">
        <div className="main_left-category_Container">
          <div className="category_leftSide-container">
            {states.map((i, index) => {
              return(
                <label key={index} className="states_Label-rectangles">
                  <input type={"radio"} name="state" id={i} value={i}></input>
                  <p>{i}</p>
                </label>
              )
            })}
          </div>
        </div>
        <div className="main_right-category_Container">
          <div className="selecting-preferences-category">
            <select className="guide-selection" onChange={settingState}>
              <option value="">select Domain</option>
                {domain.map((i, index) => {
                  return (
                    <option key={index} value={i}>{i}</option>
                  )
                })}
            </select>
            <select className="guide-selector" onChange={settingSubDomain}>
              <option value="">select Sub-Domain</option>
                {subDomain.map((i, index) => {
                  return (
                    <option key={index} value={i}>{i}</option>
                  )
                })}
            </select>
            <select className="guide-selector guide-Selector_Last" onChange={settingFinalLevel}>
              <option value="">select Level</option>
              {levels.map((i, index) => {
                return (
                  <option key={index} value={i}>{i}</option>
                )
              })}
            </select>
          </div>
          <div className="bottom_category-Data">
            <div className="Category-main_content-container">
              {data.length > 0 ? 
              ((selectDomain == "" && selectSubDomain == "" && finalLevel == "") ? 
              <div className="degree_Holder-Frame">
                {data.reduce((acc, cur) => {
                    const existing = acc.find(i => i.programmeDomain === cur.programmeDomain);
                    if (existing) {
                      existing.children.push(cur);
                    } else {
                      acc.push({ programmeDomain: cur.programmeDomain, children: [cur] });
                    }
                    return acc;
                  }, []).map((i, index) => {
                    return (
                      <details key={index} className="degrees_holder">
                        <summary className="degree-Summary">{`Top ${i.programmeDomain} programmes`}</summary>
                        {i.children.map((child, childIndex) => {
                          return (
                            <div className="course_Options" key={childIndex}>{child.degreeFullName}</div>
                          );
                        })}
                      </details>
                    );
                  })}
              </div>:
              ((selectSubDomain == "" && finalLevel == "") ? 
              <div className="degree_Holder-Frame">
              {data.filter(filterSubDomainOptions).reduce((acc, cur) => {
                  const existing = acc.find(i => i.programmeDomain === cur.programmeDomain);
                  if (existing) {
                    existing.children.push(cur);
                  } else {
                    acc.push({ programmeDomain: cur.programmeDomain, children: [cur] });
                  }
                  return acc;
                }, []).map((i, index) => {
                  return (
                    <details key={index} className="degrees_holder">
                      <summary className="degree-Summary">{`Top ${i.programmeDomain} programmes`}</summary>
                      {i.children.map((child, childIndex) => {
                        return (
                          <div className="course_Options" key={childIndex}>{child.degreeFullName}</div>
                        );
                      })}
                    </details>
                  );
                })}
              </div>:
              ((finalLevel == "" && selectSubDomain != "") ? 
              <div className="degree_Holder-Frame">
              {data.filter(filterBysubDomain).reduce((acc, cur) => {
                  const existing = acc.find(i => i.programmeDomain === cur.programmeDomain);
                  if (existing) {
                    existing.children.push(cur);
                  } else {
                    acc.push({ programmeDomain: cur.programmeDomain, children: [cur] });
                  }
                  return acc;
                }, []).map((i, index) => {
                  return (
                    <details key={index} className="degrees_holder">
                      <summary className="degree-Summary">{`Top ${i.programmeDomain} programmes`}</summary>
                      {i.children.map((child, childIndex) => {
                        return (
                          <div className="course_Options" key={childIndex}>{child.degreeFullName}</div>
                        );
                      })}
                    </details>
                  );
                })}
              </div>:
              <div className="degree_Holder-Frame">
              {data.filter(filterByLevels).reduce((acc, cur) => {
                  const existing = acc.find(i => i.programmeDomain === cur.programmeDomain);
                  if (existing) {
                    existing.children.push(cur);
                  } else {
                    acc.push({ programmeDomain: cur.programmeDomain, children: [cur] });
                  }
                  return acc;
                }, []).map((i, index) => {
                  return (
                    <details key={index} className="degrees_holder">
                      <summary className="degree-Summary">{`Top ${i.programmeDomain} programmes`}</summary>
                      {i.children.map((child, childIndex) => {
                        return (
                          <div className="course_Options" key={childIndex}>{child.degreeFullName}</div>
                        );
                      })}
                    </details>
                  );
                })}
              </div>))
              )
              :"loading"}
            </div>
            <div className="Category_advertisement-Container">
              {AdvertisementsData.length > 0 ? (AdvertisementsData.map((i, index) => {
                 const base64String = btoa(
                  new Uint8Array(i?.adImage?.data?.data)
                  .reduce((data, byte) => data + String.fromCharCode(byte), ''));
                return (
                  <div key={i?._id} className="advertisement_Square-box">
                    <div className="advertisement-box_image-container">
                      <img src={`data:image/png;base64,${base64String}`} alt={i?.Title}></img>
                    </div>
                    <div className="context-of_advertisement-category">{i?.Title}</div>
                  </div>
                )
              })):null}
            </div>
          </div>  
        </div>

      </div>
      <Footer />
    </>
  );
};

export default Category;
