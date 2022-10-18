import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userProfileData } from "../../Store/Slice/UserprofilePageSlice";
import { postLoginUser } from "../../Store/Slice/LoginSlice";
import AdminNavBar from "./AdminNavBar";
import EditProfile from "../EditProfile/EditProfile";
import profilepic from "../Login/Images/PROFILEPIC.svg";
import ProfileImg from "../../component/Login/Images/Vector.svg";
import { getTopicInfo } from "../../Store/Slice/TopicSlice.js";
import "./UserProfile.css";
import enrolledImg from "../Login/Images/enrollImg.svg";
// import editProfileImg from "../Login/Images/edit.svg";
import logoutImg from "../Login/Images/log-img.svg";
import quizImg from "../Login/Images/quizImg.svg";
import dashImg from "../Login/Images/dashboard-img.svg";
import contactImg from "../Login/Images/contact-img.svg";
import img4 from "../Landing/Img/Rectangle-14.jpg";
import profilequiz from "../Login/Images/profilequiz.svg";
import dashIconImg from "../Login/Images/dash-icon.png";
import eventImg from "../Login/Images/event-icon.png";
import AddEvent from "../Event/AddEvent";
import { GetProfilepic } from "../../Store/Slice/getProfilepic";
import { getEventInfo } from "../../Store/Slice/EventSlice";
import { PostProfilepic } from "../../Store/Slice/profilepicpost";
import editImg from "../Event/img/edit.svg";
import { Link, useLocation } from "react-router-dom";
import ListEvent from "../Event/ListEvent/ListEvent";
//dashboard, program, fileupload, addevent-(superadmin) superadmin@gmail.com superadmin

//normal login - addevent

const UserProfile = () => {
  const [name, setname] = useState();
  const [img, setimg] = useState();
  const locationState = useLocation()?.state;
  const [content, setcontent] = useState("user-profile");
  const dispatch = useDispatch();
  const { userImage, userImageloading } = useSelector(
    (state) => state.newprofilepicInfo
  );
  const { userData, loading } = useSelector((state) => state.userProfileInfo);
  useEffect(() => {
    dispatch(getTopicInfo());
    dispatch(getEventInfo());
    if(locationState){
      dispatch(userProfileData(locationState));
    }
  }, []);

  useEffect(() => {
    dispatch(GetProfilepic());
  }, [img]);

  const forlastimg = userImage.length;

  const forsecondlastimg = userImage.length - 1;

  const lastimg = userImage.slice(forsecondlastimg, forlastimg);

  // const { topicData, eventLoading } = useSelector((state) => state.topicInfo);
  const { eventsData, eventLoading } = useSelector((state) => state.eventsInfo);
  // console.log(eventsData)

  const AddEvents = (e) => {
    const imagefile = e.target.files[0];
    dispatch(PostProfilepic(imagefile));
    setimg("changed");
  };

  return (
    <>
      <AdminNavBar profileInfo={userData.data} />
      <div>
        <div className="profilepage-container">
          <div className="left-container--profilepage">
            <div className="main-dashboard--container">
              <div className="user-Info">
                <div className="Loginlogo-pro">
                <label className="img-label">
                  {lastimg.map((item) => {
                    const collectingpic = item.profilePic.data.data;
                    const base64String = btoa(
                      String.fromCharCode(...new Uint8Array(collectingpic))
                    );
                    return (
                      <img
                        src={`data:image/png;base64,${base64String}`}
                        className="img-indicator"
                        alt="no img found"
                      ></img>
                    );
                  })}

                  <input
                    type="file"
                    name="upload"
                    id="upload-image"
                    onChange={AddEvents}
                    className="userprofile-upload"
                  />
                </label>
                </div>
                <div className="user-data-container">
                  <h3>{userData?.data?.userFirstName}&nbsp; {userData?.data?.userLastName}</h3>
                  <p>Student</p>
                </div>
                {/* <div className="edit-profile-btn">
                onClick={() => setcontent("edit-profile")}
                  <button >
                    Edit
                  </button>
                </div> */}
              </div>
              <div className="left-container--dashboard">
                <div className="dashboard-content-container">
                  {/* <div className="left-container--dashboard--content">
                    <img
                      className="quiz-img"
                      src={dashIconImg}
                      alt="no img found"
                    ></img>
                    <a href="/admin/dashboard">Dashboard</a>
                  </div> */}

                  <div className="left-container--dashboard--content">
                    <img
                      className="quiz-img"
                      src={quizImg}
                      alt="no img found"
                    ></img>
                    <a href="/quiz">Quiz</a>
                  </div>
                  <div className="left-container--dashboard--content">
                    <img
                      className="quiz-img"
                      src={enrolledImg}
                      alt="no img found"
                    ></img>
                    <a href="/#">Enrolled Course</a>
                  </div>
                  <div className="left-container--dashboard--content">
                    <img
                      className="quiz-img"
                      src={quizImg}
                      alt="no img found"
                    ></img>
                    <a href="/#">Saved Items</a>
                  </div>
                  <div className="left-container--dashboard--content">
                    <img
                      className="quiz-img"
                      src={editImg}
                      alt="no img found"
                    ></img>
                    <a onClick={() => setcontent("user-profile")}>Profile</a>
                  </div>
                  <div className="left-container--dashboard--content">
                    <img
                      className="quiz-img"
                      src={eventImg}
                      alt="no img found"
                    ></img>
                    <a onClick={() => setcontent("add-event")}>Add Event</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {content === "user-profile" && (
            <div>
              <div className="profilepic-container">
                <h2>{userData?.data?.userFirstName}&nbsp; {userData?.data?.userLastName}</h2>
                <p>Student</p>
              </div>
              {<div className="eve-top">Events</div>}
              <ListEvent eventsData = {eventsData} editImg={editImg}/>
            </div>
          )}
          {content === "add-event" && <AddEvent />}
          {/* {content === "edit-profile" && <EditProfile reqValues={eventsData}/>} */}
        </div>
      </div>
    </>
  );
};

export default UserProfile;
