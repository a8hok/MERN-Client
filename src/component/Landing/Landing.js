import React, { useEffect, useState } from "react";
import NavBar from "../Navbar/navbar";
import img1 from "./Img/Frame.svg";
// import img2 from "./Img/button.svg";
import img3 from "./Img/Vector.svg";
import img4 from "./Img/Rectangle-14.jpg";
import img6 from "./Img/BookLogo.svg";
import img7 from "./Img/NextButton.svg";
import subbuilding from "./Img/substitute.png";
import EastIcon from '@mui/icons-material/East';
import { useNavigate, useLocation } from "react-router-dom";
// import img5 from "./Img/Quiz.jpg"
import Footer from "../Footer/footer";
import "./Css/Landing.css";
import { useDispatch, useSelector } from "react-redux";
import { getTopicInfo } from "../../Store/Slice/TopicSlice.js";
import { getEventInfo } from "../../Store/Slice/EventSlice.js";
import { userProfileData } from "../../Store/Slice/UserprofilePageSlice";
import { getUniversityInfoByName } from "../../Store/Slice/SearchUniversity";
import { postLoginUser } from "../../Store/Slice/LoginSlice";
import ListEvent from "../Event/ListEvent/ListEvent";
import Testimonials from "../testimonials/testimonials";
import MiniNotes from "../MiniNotes/MiniNotes";

import { getSchoolData } from "../../Store/Slice/getSchool";
import { getCollageInfo } from "../../Store/Slice/getCollageData";
import { getUniversitiesInfo } from "../../Store/Slice/getUniversities";

function Landing() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [screenedEvents, setScreenedEvents] = useState([]);
  const [showSearch, setShowSearch] = useState(0);
  const [limit, setLimit] = useState(10);
  const [keyWords, setKeyWords] = useState("");
  const locationState = useLocation().state;

  const pageIndex = 1;
  const pageSize = 2000;

  const [instType, setInstType] = useState("");

  const [showType, setShowType] = useState(0);

  const [state, setState] = useState([]);
  const [selectedState, setSelectedState] = useState("");

  const [district, setDistrict] = useState([]);
  const [selectedDistrict, setSelectedDistrict] = useState("");

  const [forFilterData, setForFilterData] = useState([]);

  const navigateDetail = () => {
    navigate("/detail");
  };
  const navigateSearch = () => {
    navigate("/search");
  };
  const navigateAbout = () => {
    navigate("/about")
  }

  function ScreeningEvents(e) {
    return (e?.status === 0)
  }

  useEffect(() => {
    dispatch(getTopicInfo());
    dispatch(getEventInfo());
    dispatch(userProfileData(locationState?.email));
  }, []);

  const handleSearchChange = (e) => {
    setKeyWords(e.target.value)
    setShowSearch(0)
    setLimit(10)
  }

  const handelSearch = (e) => {
    e.preventDefault()
    setShowSearch(1)
    dispatch(getUniversityInfoByName(keyWords))
  };

  const toSeemore = (e) => {
    setLimit(limit + 10)
  }

  const { topicData, topicLoading } = useSelector((state) => state.topicInfo);
  const { eventsData, eventLoading } = useSelector((state) => state.eventsInfo);
  const { userData, loading } = useSelector((state) => state.userProfileInfo);
  const { SearchedUniversity } = useSelector((state) => state.searchUniversityByNameInfo);

  const { universitiesData, universitiesLoading } = useSelector(
    (state) => state.universitiesInfo
  );

  const { allSchoolData, schoolLoading } = useSelector((state) => state.getSchoolData)

  const { CollageData, CollageLoading } = useSelector((state) => state.CollageInfo)

  useEffect(() => {
    setScreenedEvents(eventsData.filter(ScreeningEvents))
  }, [eventsData])

  const filteredDistrict = (e) => {
    if (instType === "university" || instType === "college") {
      if (e.State === selectedState) {
        return e
      }
    } else if (instType === "school") {
      if (e.state === selectedState) {
        return e
      }
    }
  }

  const filterDesiredData = (e) => {
    if (instType === "university") {
      if (e.State === selectedState && e.District === selectedDistrict) {
        return e
      }
    } else if (instType === "school") {
      if (e.state === selectedState && e.district === selectedDistrict) {
        return e
      }
    } else if (instType === "college") {
      if (e.State === selectedState && e.college_District === selectedDistrict) {
        return e
      }
    }
  }

  const handleType = (e) => {
    setInstType(e.target.value)
    setSelectedState("")
    setSelectedDistrict("")
    setForFilterData([])
  }

  const handleState = (e) => {
    setSelectedState(e.target.value)
    setSelectedDistrict("")
    // setForFilterData([])
  }

  const handleDistrict = (e) => {
    setSelectedDistrict(e.target.value)
    // setForFilterData([])
  }

  useEffect(() => {
    if (instType === "school") {
      setShowType(1)
      dispatch(getSchoolData());
    } else if (instType === "college") {
      setShowType(2)
      dispatch(getCollageInfo());
    } else if (instType === "university") {
      setShowType(3)
      dispatch(getUniversitiesInfo({ pageIndex, pageSize }));
    } else if (instType === "") {
      setShowType(0)
    }
  }, [instType])

  useEffect(() => {
    if (showType === 1) {
      setForFilterData(allSchoolData)
    } else if (showType === 2) {
      setForFilterData(CollageData)
    } else if (showType === 3) {
      setForFilterData(universitiesData)
    }
  }, [showType, allSchoolData, CollageData, universitiesData])

  useEffect(() => {
    if (forFilterData.length > 0) {
      if (showType === 1) {
        const forSchoolState = forFilterData.map((i) => i.state)
        const uniqueSchoolState = [...new Set(forSchoolState)]
        setState(uniqueSchoolState)
      } else if (showType === 2) {
        const forCollegeState = forFilterData.map((i) => i.State)
        const uniqueCollegeState = [...new Set(forCollegeState)]
        setState(uniqueCollegeState)
      } else if (showType === 3) {
        const forUnivState = forFilterData.map((i) => i.State)
        const uniqueUnivState = [...new Set(forUnivState)]
        setState(uniqueUnivState)
      }
    }
  }, [forFilterData])

  useEffect(() => {
    if (showType === 1 && selectedState !== "") {
      const forSchoolDistrict = forFilterData.filter(filteredDistrict).map((i) => i.district)
      const uniqueSchoolDistrict = [...new Set(forSchoolDistrict)]
      setDistrict(uniqueSchoolDistrict)
    } else if (showType === 2 && selectedState !== "") {
      const forCollegeDistrict = forFilterData.filter(filteredDistrict).map((i) => i.college_District)
      const uniqueCollegeDistrict = [...new Set(forCollegeDistrict)]
      setDistrict(uniqueCollegeDistrict)
    } else if (showType === 3 && selectedState !== "") {
      const forUnivDistrict = forFilterData.filter(filteredDistrict).map((i) => i.District)
      const uniqueUnivDistrict = [...new Set(forUnivDistrict)]
      setDistrict(uniqueUnivDistrict)
    }
  }, [state, showType, selectedState])

  useEffect(() => {
    if (selectedDistrict !== "" && selectedState !== "" && instType !== "") {
      setShowSearch(1)
    } else {
      setShowSearch(0)
    }
  }, [selectedDistrict, selectedState, instType])

  console.log(forFilterData)

  const nextpageNavigate = (e) => {
    if (instType === "school") {
      navigate("/schools/details", { state: { state: e } })
    } else if (instType === "college") {
      navigate("/colleges/details", { state: { state: e } })
    } else if (instType === "university") {
      navigate("/universities/details", { state: { state: e } })
    }
  }

  return (
    <>
      <NavBar profileInfo={userData.data} />
      <div className="first-container">
        <div className="left">
          <div className="fst-con-head">
            <h1>
              Be led by the <span className="dreams-color">dreams</span> in
            </h1>

            <h1>
              your <span className="heart-color">heart</span>
            </h1>
          </div>

          <p className="first-con">
            Success is not how high you have climbed, but how <br></br>you make
            a positive difference to the world
          </p>
          <button className="know-button" onClick={navigateAbout}>
            <span className="but-text">Know More</span>
          </button>
        </div>
        <div className="right">
          <div>
            <img className="top-ryt-img" src={img1}></img>
          </div>
        </div>
      </div>

      {/* <form onSubmit={handelSearch}>
        <div className="search">
          <input
            type="text"
            placeholder="Search"
            className="search-box"
            required={true}
            onChange={handleSearchChange}
          ></input>
          <div className="search-img">
            <button className="but-click">
              <img className="search-but" src={img3}></img>
            </button>
          </div>
        </div>
      </form> */}

      <div className="search_index-container-all">

      <h1 className="after_search-results-top10">Select to search for any Institution</h1>

      <div className={(instType === "") ? "Home_selecting-preferences_Entrance_1" : ((instType !== "" && selectedState === "") ? "Home_selecting-preferences_Entrance_2" : ((instType !== "" && selectedState !== "") ? "Home_selecting-preferences_Entrance_3" : "Home_selecting-preferences_Entrance_3"))}>
        <div className="guide-selection">
          <span>Filter</span>
        </div>
        <select onChange={handleType} id="instiType" className={instType === "" ? "guide-selector guide-Selector_Last" : "guide-selector"}>
          {/* guide-Selector_Last */}
          <option value="">Select the type</option>
          <option value="school">School</option>
          <option value="college">College</option>
          <option value="university">University</option>
        </select>
        {(showType !== 0 && forFilterData.length > 0) ?
          <select className={selectedState === "" ? "guide-selector guide-Selector_Last" : "guide-selector"} onChange={handleState}>
            <option value="">Select State</option>
            {state.map((i, index) => {
              return (<option key={index} value={i}>{i}</option>)
            })}
          </select>
          : null}
        {
          (showType !== 0 && forFilterData.length > 0 && selectedState !== "") ?
            <select className={selectedDistrict === "" ? "guide-selector guide-Selector_Last" : "guide-selector guide-Selector_Last"} onChange={handleDistrict}>
              <option value="">Select District</option>
              {district.map((i, index) => {
                return (<option key={index} value={i}>{i}</option>)
              })}
            </select>
            : null
        }
      </div>

      {(showSearch === 1 & instType === "school") ?
        <div className="after_search-results_container">
          {forFilterData.filter(filterDesiredData).length >= 10 ? <h1 className="after_search-results-top10">{`Top ${limit} results from your search`}</h1>
            :
            <h1 className="after_search-results-top10">{`Top results from your search`}</h1>}
          <div className="after_search-results">
            {forFilterData.filter(filterDesiredData).slice(0, limit).map((i) => {
              return (
                <div key={i?._id} className="after_search-results_cards"
                  onClick={() => nextpageNavigate(i)}>
                  <div className="after_search-results_cards-Image_container">
                    {i?.Image ? <img src={`${i?.Image}`} alt="" /> : <img src={subbuilding} alt="" />}
                    <h1>{i?.name}</h1>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        :
        (showSearch === 1 && instType === "college") ?
          <div className="after_search-results_container">
            {forFilterData.filter(filterDesiredData).length >= 10 ? <h1 className="after_search-results-top10">{`Top ${limit} results from your search`}</h1>
              :
              <h1 className="after_search-results-top10">{`Top results from your search`}</h1>}
            <div className="after_search-results">
              {forFilterData.filter(filterDesiredData).slice(0, limit).map((i) => {
                return (
                  <div key={i?._id} className="after_search-results_cards"
                    onClick={() => nextpageNavigate(i)}>
                    <div className="after_search-results_cards-Image_container">
                      {i?.Logo ? <img src={`${i?.Logo}`} alt="" /> : <img src={subbuilding} alt="" />}
                      <h1>{i?.College_Name}</h1>
                    </div>
                  </div>
                )
              })}
            </div>
          </div> :
          (showSearch === 1 && instType === "university") ?
            <div className="after_search-results_container">
              {forFilterData.filter(filterDesiredData).length >= 10 ? <h1 className="after_search-results-top10">{`Top ${limit} results from your search`}</h1>
                :
                <h1 className="after_search-results-top10">{`Top results from your search`}</h1>}
              <div className="after_search-results">
                {forFilterData.filter(filterDesiredData).slice(0, limit).map((i) => {
                  return (
                    <div key={i?._id} className="after_search-results_cards"
                      onClick={() => nextpageNavigate(i)}>
                      <div className="after_search-results_cards-Image_container">
                        {i?.Image ? <img src={`${i?.Image}`} alt="" /> : <img src={subbuilding} alt="" />}
                        <h1>{i?.Univ_name}</h1>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
            :
            null
      }

      </div>

      {/* {showSearch === 1 ? 
      <div className="after_search-results_container">
        {SearchedUniversity.length >=10 && <h1 className="after_search-results-top10">{`Top ${limit} results from your search`}</h1>}
        <div className="after_search-results">
          {SearchedUniversity.slice(0, limit).map((i) => {
          return(
            <div key={i?._id} className="after_search-results_cards"
          onClick={() => navigate("/universities/details", { state: { state: i } })}>
              <div className="after_search-results_cards-Image_container">
                    {i?.Image ? <img src={`${i?.Image}`} alt="" />: <img src={subbuilding} alt="" />}
                    <h1>{i?.Name_1}</h1>
              </div>
            <div>
                </div>
          </div>)})}
          {SearchedUniversity.length > limit ? <div onClick={toSeemore} className="see-more_search-Results">See More<EastIcon/></div>:null}
        </div>
      </div>:null} */}

      <MiniNotes />

      <div className="third-container">
        <div className="third-content">
          <div className="third-top">
            <h1>Top Events</h1>
          </div>
          <div className="third-full-con">
            <ListEvent eventsData={screenedEvents} />
          </div>
        </div>
      </div>
      <Testimonials />
      <Footer />
    </>
  );
}

export default Landing;
