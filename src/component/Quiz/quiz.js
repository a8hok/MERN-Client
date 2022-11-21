import React, {useState, useEffect} from "react";
import NavBar from "../Navbar/navbar";
import startQuizLogo from "../Login/Images/startquiz.svg";
import quizImage from "../Login/Images/quiz.svg";
import "./quiz.css";
import Footer from "../Footer/footer";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getQuizData } from "../../Store/Slice/QuizDataSlice";

const Quiz = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const startQuiz = () => {
    navigate("/quiz/start");
  };

  const { quizInfo, getQuizDataLoading } = useSelector(
    (state) => state.getQuizInfo
  );

  useEffect(() => {
    dispatch(getQuizData());
  }, []);

  const quizDetails = quizInfo?.data?.data

  const forQuizData = (quizDetails?.slice(0,1))

  let newDate = new Date()
  let date = newDate.getDate();
  let month = newDate.getMonth()+1;
  let year = newDate.getFullYear();

  const todayDate = `${date}/${month < 10?`0${month}`:`${month}`}/${year}`

  return (
    <div>
      <NavBar />
      <div className="main-quiz-container">
        <div className="quiz-container">
          <img src={startQuizLogo} alt="no img found" className="quiz-header"></img>
          <div className="quiz-container-block">
            <div className="quiz-image-container">
              <img src={quizImage} alt="no img found" className="quiz-image"></img>
            </div>
            <div className="quiz-details-container">
              <div className="quiz-details">
                <div className="quiz-details-left">
                  <p>Date : </p>
                  <p>Title : </p>
                  <p>Level :</p>
                  <p>Code :</p>
                </div>
                {forQuizData?.length>0 && forQuizData.map ((data) => {
                  return <div className="quiz-details-right">
                  <p>{todayDate}</p>
                  <p>{data?.CourseTitle}</p>
                  <p>{data["Cognitive Level"]}</p>
                  <p>{data?.PurposeCode}</p>
                </div>
                })}
              </div>
              <button onClick={startQuiz} className="quiz-start-btn">
                Start
              </button>
            </div>
          </div>
        </div>
        <div className="chapters-container">
          <p>Chapters</p>
          <p>Machines</p>
          <p>Networks</p>
          <p> Electricals</p>
          <p>Java</p>
          <p>C++</p>
          <p>Python</p>
          <p>Javascript</p>
          {/* <button className="chapter-seemore-btn">See More</button> */}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Quiz;
