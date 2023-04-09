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

  const [typeOf, setType] = useState();

  const [allValues, setAllValues] = useState({
    difficulty: "",
    mainDomain: "",
    typeOf: ""
  })

  const [difficulty, setDifficulty] = useState("");

  const [mainDomain, setMainDomain] = useState("");

  const difficultyOption = [
    {
      option: "Beginner",
      value: "Beginner"
    },
    {
      option: "Intermediate",
      value: "Intermediate"
    },
    {
      option: "Advanced",
      value: "Advanced"
    }
  ]

  const domain = [
    {
      option: "Medical",
      value: "Medical"
    },
    {
      option: "Engineering",
      value: "Engineering"
    },
    {
      option: "Agriculture",
      value: "Agriculture"
    },
    {
      option: "Law",
      value: "Law"
    },
    {
      option: "Dental",
      value: "Dental"
    }
  ]

  const {TypeOfQuiz} = useSelector((state) => state.selectTypeQuiz)

  useEffect(() => {
    setType(TypeOfQuiz)
  }, [])

  const startQuiz = () => {
    if(mainDomain == "" || mainDomain == undefined && difficulty == "" || difficulty == undefined){
      alert(`Please select main domain and difficulty level`)
    }else if (mainDomain.length > 0 && difficulty.length > 0) {
      dispatch(getQuizData(allValues));
      setTimeout(() => {
        navigate("/quiz/start");
      }, "1500")
    }else {
      alert(`the value is not passed`)
    }
  }

  useEffect(() => {
    allValues.difficulty = difficulty
    allValues.mainDomain = mainDomain
    allValues.typeOf = typeOf
  }, [startQuiz])

  const { quizInfo, getQuizDataLoading } = useSelector((state) => state.getQuizInfo);

  const quizDetails = quizInfo?.data?.data

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
                  <p>Type :</p>
                </div>
                  <div className="quiz-details-right">
                  <p>{todayDate}</p>
                  <p>{mainDomain == "" || mainDomain == undefined ? "-": mainDomain}</p>
                  <p>{difficulty == "" || difficulty == undefined ? "-": difficulty}</p>
                  <p>{typeOf}</p>
                </div>
              </div>
              <button onClick={() => startQuiz()} className="quiz-start-btn">
                Start
              </button>
            </div>
          </div>
        </div>
        <div className="chapters-container">
        {difficultyOption.map((i) => {
          return <button onClick={(e) => setDifficulty(e.target.value)} value={i.value}>{i.option}</button>
        })}
        <br></br>
        {domain.map((i) => {
          return <button onClick={(e) => setMainDomain(e.target.value)} value={i.value}>{i.option}</button>
        })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Quiz;
