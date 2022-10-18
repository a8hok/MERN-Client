import React from "react";
import { useEffect } from "react";
import NavBar from "../Navbar/navbar";
import img1 from "./Img/Frame.svg";
// import img2 from "./Img/button.svg";
import img3 from "./Img/Vector.svg";
import img4 from "./Img/Rectangle-14.jpg";
import img6 from "./Img/BookLogo.svg";
import img7 from "./Img/NextButton.svg";
import { useNavigate, useLocation } from "react-router-dom";
// import img5 from "./Img/Quiz.jpg"
import Footer from "../Footer/footer";
import "./Css/Landing.css";
import { useDispatch, useSelector } from "react-redux";
import { getTopicInfo } from "../../Store/Slice/TopicSlice.js";
import { getEventInfo } from "../../Store/Slice/EventSlice.js";
import { userProfileData } from "../../Store/Slice/UserprofilePageSlice";
import { postLoginUser } from "../../Store/Slice/LoginSlice";
import ListEvent from "../Event/ListEvent/ListEvent";

function Landing() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const locationState = useLocation().state;
  const navigateDetail = () => {
    navigate("/detail");
  };
  const navigateSearch = () => {
    navigate("/search");
  };

  useEffect(() => {
    dispatch(getTopicInfo());
    dispatch(getEventInfo());
    dispatch(userProfileData(locationState?.email));
  }, []);

  const { topicData, topicLoading } = useSelector((state) => state.topicInfo);
  const { eventsData, eventLoading } = useSelector((state) => state.eventsInfo);
  const { userData, loading } = useSelector((state) => state.userProfileInfo);
  return (
    <div>
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
          <button className="know-button">
            <span className="but-text">Know More</span>
          </button>
        </div>
        <div className="right">
          <div>
            <img className="top-ryt-img" src={img1}></img>
          </div>
        </div>
      </div>
      <div className="search">
        <input
          type="text"
          placeholder="  Search  a words you prefer"
          className="search-box"
          required={true}
        ></input>
        <div className="search-img">
          <button className="but-click" onClick={navigateSearch}>
            <img className="search-but" src={img3}></img>
          </button>
        </div>
      </div>
      {/* <div className="second-contant">
          <div className="sub-con">
            <h1 className="topic"> Topics</h1>

            <div className="sub-top">
              {topicData.length > 0 &&
                topicData.map((obj) => {
                  return (
                    <div className="sub-top-1" key={obj.id}>
                      <h2 className="topic1">{obj.topicTitle}</h2>
                      <p className="sub-contain">{obj.topicDescription}</p>

                      <div className="Read-More">
                        <a href="/detail">
                          <img src={img6} className="book-logo"></img>
                          Read More
                        </a>
                      </div>
                    </div>
                  );
                })}
              <div className="next-but">
                <button onClick={navigateDetail}>
                  <img className="click-but" src={img7}></img>
                </button>
              </div>
            </div>
          </div>
        </div> */}
      <div className="third-container">
        <div className="third-content">
          <div className="third-top">
            <h1>Top Events</h1>
          </div>
          <div className="third-full-con">
          <ListEvent eventsData = {eventsData}/>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Landing;
