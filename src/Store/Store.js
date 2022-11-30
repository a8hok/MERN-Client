import { configureStore, combineReducers } from "@reduxjs/toolkit";
import signupReducer from "./Slice/SignupSlice";
import TopicReducer from "./Slice/TopicSlice";
import DisplayReducer from "./Slice/EventSlice";
import postUniversitiesReducer from "./Slice/ExcelToJson";
import courseReducer from "./Slice/DetailPageSlice.js";
import LoginReducer from "./Slice/LoginSlice";
import postProgrammeReducer from "./Slice/postProgramme";
import getProgrammeReducer from "./Slice/getProgramme";
import educationDetails from "./Slice/getEducation";
import userprofileReducer from "./Slice/UserprofilePageSlice";
import addEventReducer from "./Slice/AddEventSlice";
import universitiesReducer from "./Slice/getUniversities";
import quizUploadReducer from "./Slice/uploadQuizSlice";
import getQuizDataReducer from "./Slice/QuizDataSlice";
import addProfilepic from "./Slice/profilepicpost";
import UserProfilepic from "./Slice/getProfilepic";
import editedEventReducer from "./Slice/editEvent";
import removingSelectedUniversity from "./Slice/deleteUniversity";
import postSchoolsReducer from "./Slice/AddSchoolData";
import schoolDetailsReducer from "./Slice/getSchool";
import removingSelectedProgramme from "./Slice/deleteProgramme";
import removingSelectedSchool from "./Slice/deleteSchool";
import searchUniversityByName from "./Slice/SearchUniversity";
import CollageDetailsReducer from "./Slice/postCollage";
import CollageDetails from "./Slice/getCollageData";
import removingSelectedcollage from "./Slice/deleteCollage";
import selectedUniversity from "./Slice/selectedUniversity";

const rootReducer = combineReducers({
  signupInfo: signupReducer,
  topicInfo: TopicReducer,
  eventsInfo: DisplayReducer,
  postUniversitiesInfo: postUniversitiesReducer,
  courseInfo: courseReducer,
  loginInfo: LoginReducer,
  postProgrammeInfo: postProgrammeReducer,
  educationInfo: educationDetails,
  universitiesInfo: universitiesReducer,
  getProgrammeInfo: getProgrammeReducer,
  userProfileInfo: userprofileReducer,
  postEventInfo: addEventReducer,
  quizUploadInfo: quizUploadReducer,
  getQuizInfo: getQuizDataReducer,
  profilepicInfo: addProfilepic,
  newprofilepicInfo: UserProfilepic,
  editEvent: editedEventReducer,
  selectDeletingUniversity: removingSelectedUniversity,
  addSchoolData: postSchoolsReducer,
  getSchoolData: schoolDetailsReducer,
  deleteProgramme: removingSelectedProgramme,
  deleteSchool: removingSelectedSchool,
  postCollageInfo: CollageDetailsReducer,
  searchUniversityByNameInfo:searchUniversityByName,
  CollageInfo: CollageDetails,
  deleteCollage: removingSelectedcollage,
  getUniversity: selectedUniversity,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});

export default store;
