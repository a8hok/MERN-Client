import React, {useEffect, useState} from "react";
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

function Landing() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [screenedEvents, setScreenedEvents] = useState([]);
  const [showSearch, setShowSearch] = useState(0);
  const [limit, setLimit] = useState(10);
  const [keyWords, setKeyWords] = useState("");
  const locationState = useLocation().state;
  const navigateDetail = () => {
    navigate("/detail");
  };
  const navigateSearch = () => {
    navigate("/search");
  };
  const navigateAbout = () => {
    navigate("/about")
  }

  function ScreeningEvents (e) {
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
  const {SearchedUniversity} = useSelector((state) => state.searchUniversityByNameInfo);

  // console.log(SearchedUniversity)
  
  useEffect(() => {
    setScreenedEvents(eventsData.filter(ScreeningEvents))
  }, [eventsData])

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

      <form onSubmit={handelSearch}>
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
      </form>

      {showSearch === 1 ? 
      <div className="after_search-results_container">
        {SearchedUniversity.length >=10 && <h1 className="after_search-results-top10">{`Top ${limit} results from your search`}</h1>}
        <div className="after_search-results">
          {SearchedUniversity.slice(0, limit).map((i) => {
          return(<div key={i?._id} className="after_search-results_cards"
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
      </div>:null}

      <MiniNotes/>

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
      <Testimonials/>
        <Footer />
    </>
  );
}

export default Landing;
