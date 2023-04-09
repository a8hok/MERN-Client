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
import quizUploadFileReducer from "./Slice/uploadQuizSliceByFile";
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
import selectedCollege from "./Slice/selectedCollege";
import selectedSchool from "./Slice/selectedSchool";
import removingSelectedEvent from "./Slice/deleteEvent";
import addContent from "./Slice/NewContent";
import ContentDetails from "./Slice/getContentData";
import ContentSubjectDetails from "./Slice/getCOntentSubject";
import QuizType from "./Slice/QuizType";
import ResultsDetailsReducer from "./Slice/postResults";
import ResultsDetails from "./Slice/getResults";
import entranceReducer from "./Slice/AddEntranceExam";
import EntranceDetails from "./Slice/getEntranceDetailsByType";
import EntranceDetailsBySubType from "./Slice/getEntranceDetailsBySubType";
import EntranceDetailsByStateExams from "./Slice/getEntranceDetailsbyStateExams";
import addAdvertisementReducer from "./Slice/AddNewAdvertisements";
import AdvertisementsDetails from "./Slice/getAdvertisements";
import editAdvertisementReducer from "./Slice/editAdvertisements";
import removingSelectedAdvertisement from "./Slice/deleteAdvertisements";
import addBlogReducer from "./Slice/AddNewBlogs";
import selectedBlogReducer from "./Slice/getFIlteredBlogsData";
import AllBlogReducer from "./Slice/getAllBlogData";
import selectedBlogbyDomainReducer from "./Slice/getBlogbyDomain";
import selectedData from "./Slice/individualBlogData";
import postQueryBlogReducer from "./Slice/UserQueryBlog";
import removingSelectedBlog from "./Slice/deleteBlogs";
import updateBlogReducer from "./Slice/editBlogData";
import postResourceSlice from "./Slice/postResources";
import getGASlice from "./Slice/getGAresources";
import getGSSASlice from "./Slice/getGSSAresources";
import getGSSVSlice from "./Slice/getGSSVresources";
import getGVSlice from "./Slice/getGVresources";
import PDFunivSlice from "./Slice/forFormUniversity";
import PDFColSlice from "./Slice/forFormCollege";
import PDFBrochureDownloadDetails from "./Slice/downloadBrochure";

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
  quizUploadFile: quizUploadFileReducer,
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
  getchoosenCollege: selectedCollege,
  getChoosenSchool: selectedSchool,
  deleteEvent: removingSelectedEvent,
  newContent: addContent,
  getContent: ContentDetails,
  contentBySubject: ContentSubjectDetails,
  selectTypeQuiz: QuizType,
  postingResults: ResultsDetailsReducer,
  getResults: ResultsDetails,
  postEntrance: entranceReducer,
  EntranceByType: EntranceDetails,
  EntranceBySubType: EntranceDetailsBySubType,
  EntranceByStateExams: EntranceDetailsByStateExams,
  addAdvertisements: addAdvertisementReducer,
  getAdvertisements: AdvertisementsDetails,
  editAdvertisement: editAdvertisementReducer,
  deleteAdvertisement: removingSelectedAdvertisement,
  addBlog: addBlogReducer,
  SelectedBlog: selectedBlogReducer,
  allBlog: AllBlogReducer,
  blogByDomain: selectedBlogbyDomainReducer,
  choosenBlog: selectedData,
  queryBlog: postQueryBlogReducer,
  deleteBlog: removingSelectedBlog,
  updateBlog: updateBlogReducer,
  postResource: postResourceSlice,
  GAresource: getGASlice,
  GSSAresource: getGSSASlice,
  GSSVresource: getGSSVSlice,
  GVresource: getGVSlice,
  PDFuniv: PDFunivSlice,
  PDFCol: PDFColSlice,
  DownloadPDF: PDFBrochureDownloadDetails
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
