import React from "react";
import NavBar from "../Navbar/navbar";
import startQuizLogo from "../Login/Images/startquiz.svg";
//import quizImage from "../Login/Images/quiz.svg";
import "./quiz.css";
import Footer from "../Footer/footer";
import { useNavigate } from "react-router-dom";
const Quiz = () => {
  const navigate = useNavigate();
  const startQuiz = () => {
    navigate("/quiz/start");
  };
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div className="main-container">
        <div className="quiz-container">
          <img src={startQuizLogo} alt="no img found" className="quiz-header"></img>
          <div className="quiz-container-block">
            <div className="quiz-image">
              <img  alt="no img found"></img>
            </div>
            <div className="quiz-details-container">
              <div className="quiz-details">
                <div className="quiz-details-left">
                  <p>Date: </p>
                  <p>Time Limit: </p>
                  <p>Attempts:</p>
                  <p>Points:</p>
                </div>
                <div className="quiz-details-right">
                  <p>18/09/2022</p>
                  <p>30 Mins</p>
                  <p>Once</p>
                  <p>200 Points</p>
                </div>
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
          <button className="chapter-seemore-btn">See More</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Quiz;
