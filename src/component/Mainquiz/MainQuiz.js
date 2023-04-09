import React, { useEffect, useState } from "react";
import Footer from "../Footer/footer";
import "./mainquiz.css";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../Navbar/navbar";
import { useNavigate } from "react-router-dom";
import { getQuizData } from "../../Store/Slice/QuizDataSlice";
import "bootstrap/dist/css/bootstrap.min.css";
import TipsAndUpdatesOutlinedIcon from '@mui/icons-material/TipsAndUpdatesOutlined';
import TipsAndUpdatesRoundedIcon from '@mui/icons-material/TipsAndUpdatesRounded';
import Loader from "../Event/img/loader.gif";
import { Checkbox } from "@mui/material";
import { yellow } from '@mui/material/colors';
import { result } from "lodash";
import { postResultsData } from "../../Store/Slice/postResults";

const MainQuiz = () => {
  const [data, setData] = useState();

  const [respondedAnswer, setRespondedAnswer] = useState();

  const [detail, setDetail] = useState()

  const [selectedAnswer, setSelectedAnswer] = useState("");

  const [correct, setCorrect] = useState(0);

  const [buttonText, setButtonText] = useState("next");

  const [checked, setChecked] = useState(false)

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [index, setIndex] = useState(0)

  const [indexTo, setIndexTo] = useState(1)

  const [sample, setSample] = useState(false);

  const [name, setName] = useState("");

  const [phoneNum, setPhoneNum] = useState("");

  const [email, setEmail] = useState("");

  const [submit, setSubmit] = useState()

  const [results, setResults] = useState({
    name: "",
    phonenum: "",
    email: "",
    marks: ""
  });

  const IdentifyLastQuestion = data?.length;

  useEffect(() => {
    dispatch(getQuizData());
  }, []);

  const { quizInfo, getQuizDataLoading } = useSelector(
    (state) => state.getQuizInfo
  );

  useEffect(() => {
    setData(quizInfo?.data?.data)
  }, [quizInfo])

  useEffect(() => {
    setDetail(data?.slice(index, indexTo))
  }, [data, index, indexTo])

  const handelQuizResponse = (e) => {
    setRespondedAnswer(e)
    if (index != IdentifyLastQuestion - 1 && indexTo != IdentifyLastQuestion) {
      setIndex(index + 1)
      setIndexTo(indexTo + 1)
    } else {
      setTimeout(() => {
        const a = window.confirm("Do you want to close your test");
        if (a === true) {
          setSample(true)
        }
      }, "2000")
    }
  }

  const handelSkipPage = () => {
    setIndex(index + 1);
    setIndexTo(indexTo + 1);
  };

  const closeQuiz = () => {
    navigate("/quiz");
  };

  const onClicker = (e) => {
    setSelectedAnswer(e.target.value)
  }

  useEffect(() => {
    if (respondedAnswer == selectedAnswer) {
      setCorrect(correct + 1)
    }
  }, [respondedAnswer, selectedAnswer])

  useEffect(() => {
    if (IdentifyLastQuestion === indexTo) {
      setButtonText("submit");
    } else if (IdentifyLastQuestion !== indexTo) {
      setButtonText("next");
    }
  }, [indexTo, index])

  const endTest = (e) => {
    setIndex(IdentifyLastQuestion - 1);
    setIndexTo(IdentifyLastQuestion);
  }

  const handleToggle = (e) => {
    setChecked(e.target.checked)
  }

  const finalResult = `${correct}/${IdentifyLastQuestion}`

  const handleResults = (e) => {
    results.name = name
    results.phonenum = phoneNum
    results.email = email
    results.marks = finalResult
  }

  const handleForm = (e) => {
    e.preventDefault()
    handleResults()
    dispatch(postResultsData(results))
  }

  return (
    <>
      <Navbar />
      {!sample && <div className="main-quiz--conatiner">
        {detail?.map((obj) => (<div key={obj?.SlNo} className="quiz-questions">
          <div className="quiz-questions--header">
            <div className="quiz-question-container">
              <h1 className="Question-number">
                Question {indexTo}
              </h1>
            </div>
          </div>

          <meter
            min="0"
            max={IdentifyLastQuestion}
            value={index + 1}
            className="meter-scale"
          ></meter>

          {obj.Hint != "NA" && <div className="quizhint-logo--container">
            <Checkbox checked={checked}
              onChange={handleToggle}
              icon={<TipsAndUpdatesOutlinedIcon />}
              checkedIcon={<TipsAndUpdatesRoundedIcon />}
              className="hint_Box"
              sx={{
                color: yellow[800],
                '&.Mui-checked': {
                  color: yellow[600],
                },
              }} />
          </div>}
          {checked && <div className="quiz-Hint_Container">
            <h2>{obj.Hint}</h2>
          </div>
          }

          <h1 className="Quiz_Questions">{obj?.Stem}</h1>
          {obj.Image != "NA" && <div>
            <img src={`${obj.Image}`} alt="" className="quiz-Question_Image" />
          </div>}
          <div className="option--container">
            <label className="question-option">
              <input
                type="radio"
                value={1}
                key={obj.distractor1}
                name="quizOption"
                onClick={onClicker}
              ></input>
              <p>{obj.distractor1}</p>
            </label>
            <label className="question-option">
              <input
                type="radio"
                value={2}
                key={obj.distractor2}
                name="quizOption"
                onClick={onClicker}
              ></input>
              <p>{obj.distractor2}</p>
            </label>
            <label className="question-option">
              <input
                type="radio"
                value={3}
                key={obj.distractor3}
                name="quizOption"
                onClick={onClicker}
              ></input>
              <p>{obj.distractor3}</p>
            </label>
            <label className="question-option">
              <input
                type="radio"
                value={4}
                key={obj.distractor4}
                name="quizOption"
                className="question-option-input"
                onClick={onClicker}
              ></input>
              <p>{obj.distractor4}</p>
            </label>
          </div>

          <button className={buttonText} onClick={() => handelQuizResponse(obj.Key)}>
            {buttonText}
          </button>

          <div className="endtest-block">
            <button onClick={handelSkipPage} className="Skip-btn">
              Skip
            </button>

            <button className="Endtest-btn" onClick={endTest}>
              End Test
            </button>
          </div>

        </div>))}
      </div>}
      {!!sample && <>
        <div className="main-quiz--conatiner">
          
            <form className="quiz-questions_Results">

              <h1>Submit your results</h1>

              <input type={"text"}
               placeholder="Enter your name" 
               className="results-submission_Form"
               onChange={(e) => (setName(e.target.value))}
               ></input>

              <input type={"tel"} 
              placeholder="Enter your phone number" 
              className="results-submission_Form"
              onChange={(e) => (setPhoneNum(e.target.value))}
              ></input>

              <input type={"email"} 
              placeholder="Enter your mail id" 
              className="results-submission_Form"
              onChange={(e) => (setEmail(e.target.value))}
              ></input>

              <h4>
              Final Marks: {`${correct}/${IdentifyLastQuestion}`}
              </h4>

              <button className={buttonText} onClick={handleForm}>Submit</button>
            </form>
          
        </div>
        <button onClick={closeQuiz} className="next-button_Result">Retake Quiz</button>
      </>}
      <Footer />
    </>
  );
};

export default MainQuiz;
