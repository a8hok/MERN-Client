import React, { useEffect, useState } from "react";
import { axio } from "../../Config/Config";
import { useDispatch, useSelector } from "react-redux";
import { userProfileData } from "../../Store/Slice/UserprofilePageSlice";
import { postLoginUser } from "../../Store/Slice/LoginSlice";
import AdminNavBar from "./AdminNavBar";
import { getTopicInfo } from "../../Store/Slice/TopicSlice.js";
import "./UserProfile.css";
import AddEvent from "../Event/AddEvent";
import { GetProfilepic } from "../../Store/Slice/getProfilepic";
import { getEventInfo } from "../../Store/Slice/EventSlice";
import { PostProfilepic } from "../../Store/Slice/profilepicpost";
import editImg from "../Event/img/edit.svg";
import { useLocation, useNavigate } from "react-router-dom";
import ListEvent from "../Event/ListEvent/ListEvent";
import AddQuiz from "../AddQuiz/AddQuiz";
import AddNewProgram from "../addNew/addNewProgram/addNewProgram";
import SaveAltOutlinedIcon from '@mui/icons-material/SaveAltOutlined';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PostAddIcon from '@mui/icons-material/PostAdd';
import EventIcon from '@mui/icons-material/Event';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import QuizOutlinedIcon from '@mui/icons-material/QuizOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import AddchartIcon from '@mui/icons-material/Addchart';
import AddNewUniversity from "../addNew/addNewUniversity/addNewUniversity";
import AddNewSchool from "../addNew/addNewSchool/addNewSchool";
import AddNewCollage from "../addNew/addNewCollage/addNewCollage";
import { getSelectedUniversityInfo } from "../../Store/Slice/selectedUniversity";
import { getSelectedCollegeInfo } from "../../Store/Slice/selectedCollege";
import { getSelectedSchoolInfo } from "../../Store/Slice/selectedSchool";
import CollageCard from "../NavComponents/TopColleges/TopCollageCard/TopCollageCard";
import UniversityCard from "../NavComponents/TopUniversity/UniversityCard/UniversityCard";
import SchoolsCard from "../NavComponents/TopSchools/TopSchoolCard/TopSchoolCard";
import AddNewContentCreator from "../addNew/addNewContentCreator/addNewContentCreator";
import ViewChanges from "../ViewChanges/ViewChanges";

const UserProfile = () => {
  const [img, setimg] = useState();
  const locationState = useLocation()?.state;
  const [content, setcontent] = useState("user-profile");
  const [selectedEvent, setSelectedEvent] = useState([]);
  const [creator, setCreator] = useState({});
  const [authorization, setAuthorization] = useState();
  const [creatorStatus, setCreatorStatus] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [allUse, setAllUse] = useState()
  const { userImage, userImageloading } = useSelector(
    (state) => state.newprofilepicInfo
  );
  const { userData, loading } = useSelector((state) => state.userProfileInfo);

  const { eventsData, eventLoading } = useSelector((state) => state.eventsInfo);

  const { SelectedUniversitiesData } = useSelector((state) => state.getUniversity);

  const { SelectedCollegesData } = useSelector((state) => state.getchoosenCollege);

  const { SelectedSchoolData } = useSelector((state) => state.getChoosenSchool);
  useEffect(() => {
    dispatch(getTopicInfo());
    dispatch(getEventInfo());
    if(locationState){
      dispatch(userProfileData(locationState));
    }
    return () => {}
  }, []);

  const univName = SelectedUniversitiesData?.Name_1

  const colName = SelectedCollegesData?.College_Name

  const SchoolName = SelectedSchoolData?.name

  useEffect(() => {
    setTimeout(() => {
      dispatch(getEventInfo());
    }, "240000")
  }, [eventsData])

  useEffect(() => {
    dispatch(GetProfilepic());
  }, [img]);

  function checkSchool (e) {
    return (e?.author === SchoolName && e?.status === 0)
  }

  function checkCollege (e) {
    return (e?.author === colName && e?.status === 0)
  }

  function checkUniv (e) {
    return (e?.author === univName && e?.status === 0)
  }

  function ValUniv (e) {
    return (e?.author === univName && e?.status === 1)
  }

  function ValClg (e) {
    return (e?.author === colName && e?.status === 1)
  }

  function ValSchool (e) {
    return (e?.author === SchoolName && e?.status === 1)
  }

  useEffect(() => {
    eventsData.filter((i) => {
      if(i.author === univName){
        setSelectedEvent(eventsData.filter(checkUniv))
        setAuthorization(eventsData.filter(ValUniv))
      }else if (i.author === colName){
        setSelectedEvent(eventsData.filter(checkCollege))
        setAuthorization(eventsData.filter(ValClg))
      }else if (i.author === SchoolName){
        setSelectedEvent(eventsData.filter(checkSchool))
        setAuthorization(eventsData.filter(ValSchool))
      }else {
        setSelectedEvent(null)
      }
    })
  }, [userData, content, eventsData])

  useEffect(() => {
    eventsData.filter((i) => {
      if(i.author === univName){
        setAuthorization(eventsData.filter(ValUniv))
      }else if (i.author === colName){
        setAuthorization(eventsData.filter(ValClg))
      }else if (i.author === SchoolName){
        setAuthorization(eventsData.filter(ValSchool))
      }
    })
  }, [userData, content, eventsData])

  const forlastimg = userImage.length;

  const forsecondlastimg = userImage.length - 1;

  const lastimg = userImage.slice(forsecondlastimg, forlastimg);

  const userStatus = userData?.data?.superAdminStatus

  const userAffiliation = userData?.data?.userAffiliation

  const S_No = userData?.data?.userAffiliationId

  const c_id = userData?.data?.userAffiliationId

  const SlNo = userData?.data?.userAffiliationId

  const Status = userData?.data?.contentCreator

  const S_no = parseInt(S_No,10)

  useEffect(() => {
    if(userAffiliation === "University"){
      dispatch(getSelectedUniversityInfo(S_no))
    }else if(userAffiliation === "College"){
      dispatch(getSelectedCollegeInfo(c_id))
    }else if(userAffiliation === "School"){
      dispatch(getSelectedSchoolInfo(SlNo))
    }
  }, [userData])

  useEffect(() => {
    if(userAffiliation === "University"){
      setAllUse({name: univName, belong: userAffiliation, key: S_No, Status: Status})
      setCreator({name: univName, belong: userAffiliation, key: S_No, state: creatorStatus, Status: Status})
    }else if(userAffiliation === "College"){
      setAllUse({name: colName, belong: userAffiliation, key: S_No, Status: Status})
      setCreator({name: colName, belong: userAffiliation, key: S_No, state: creatorStatus, Status: Status})
    }else if(userAffiliation === "School"){
      setAllUse({name: SchoolName, belong: userAffiliation, key: S_No, Status: Status})
      setCreator({name: SchoolName, belong: userAffiliation, key: S_No, state: creatorStatus, Status: Status})
    }
  }, [userData, content, eventsData])

  console.log(userData?.data)

  const AddEvents = (e) => {
    const imagefile = e.target.files[0];
    dispatch(PostProfilepic(imagefile));
    setimg("changed");
  };

  const navigation = (e) => {
    navigate("/quiz")
  }

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
                  <p>{userAffiliation}</p>
                </div>
              </div>
              <div className="left-container--dashboard">
                <div className="dashboard-content-container">
                  <div className="left-container--dashboard--content">
                    <QuizOutlinedIcon/>
                    <button onClick={navigation}>Quiz</button>
                  </div>
                  <div className="left-container--dashboard--content">
                    <AssignmentOutlinedIcon/>
                    <button>Enrolled Course</button>
                  </div>
                  <div className="left-container--dashboard--content">
                    <SaveAltOutlinedIcon/>
                    <button>Saved Items</button>
                  </div>
                  <div className="left-container--dashboard--content">
                    <PermIdentityOutlinedIcon/>
                    <button onClick={() => setcontent("user-profile")}>Profile</button>
                  </div>
                  <div className="left-container--dashboard--content">
                    <EventIcon/>
                    <button onClick={() => setcontent("add-event")}>Add Event</button>
                  </div>
                  <div className="left-container--dashboard--content">
                    <PostAddIcon/>
                    <button onClick={() => setcontent("add-quiz")}>Add Quiz</button>
                  </div>
                  {!userStatus && Status === false && <div className="left-container--dashboard--content">
                    <AddchartIcon/>
                    <button onClick={() => setcontent("new-content-creator")}>create content creator</button>
                  </div>}
                  {!userStatus && Status === false && <div className="left-container--dashboard--content">
                    <NotificationsIcon/>
                    <button onClick={() => setcontent("Change-Requests")}>Creator Requests</button>
                  </div>}
                  {userStatus && <div className="left-container--dashboard--content">
                    <AddchartIcon/>
                    <button onClick={() => setcontent("new-university")}>Add University</button>
                  </div>}
                  {userStatus && <div className="left-container--dashboard--content">
                    <AddchartIcon/>
                    <button onClick={() => setcontent("new-program")}>Add Program</button>
                  </div>}
                  {userStatus && <div className="left-container--dashboard--content">
                    <AddchartIcon/>
                    <button onClick={() => setcontent("new-school")}>Add school</button>
                  </div>}
                  {userStatus && <div className="left-container--dashboard--content">
                    <AddchartIcon/>
                    <button onClick={() => setcontent("new-Collage")}>Add college</button>
                  </div>}
                </div>
              </div>
            </div>
          </div>
          {content === "user-profile" && (
            <div className="userProfile-RightSide_Container">
              <div className="profilepic-container">
                {SelectedUniversitiesData && <h2>{SelectedUniversitiesData?.Name_1}</h2>}
                {SelectedCollegesData && <h2>{SelectedCollegesData?.College_Name}</h2>}
                {SelectedSchoolData && <h2>{SelectedSchoolData?.name}</h2>}
                <p>{userAffiliation}</p>
              </div>
              {userStatus && <div className="eve-top">Events</div>}
              {!userStatus && userAffiliation === "University" &&<UniversityCard uniInfo={SelectedUniversitiesData} editBtn={Status}></UniversityCard>}
              {!userStatus && userAffiliation === "College" &&<CollageCard colInfo={SelectedCollegesData} editBtn={Status}></CollageCard>}
              {!userStatus && userAffiliation === "School" &&<SchoolsCard SchoolInfo={SelectedSchoolData} editBtn={Status}></SchoolsCard>}
              {userStatus && <ListEvent eventsData = {eventsData} editImg={editImg}/>}
              {selectedEvent && Status === false &&<ListEvent eventsData = {selectedEvent} editImg={editImg}/>}
              {selectedEvent && Status === true && <ListEvent eventsData = {selectedEvent}/>}
            </div>
          )}
          {content === "add-event" && <AddEvent userData={allUse} />}
          {content === "add-quiz" && <AddQuiz/>}
          {content === "new-university" && <AddNewUniversity/>}
          {content === "new-program" && <AddNewProgram/>}
          {content === "new-school" && <AddNewSchool/>}
          {content === "new-Collage" && <AddNewCollage/>}
          {content === "new-content-creator" && <AddNewContentCreator data={creator}/>}
          {content === "Change-Requests" && <ViewChanges data={authorization}/>}
        </div>
      </div>
    </>
  );
};

export default UserProfile;
