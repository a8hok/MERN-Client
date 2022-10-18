import React, { useEffect, useState } from "react";
import Footer from "../Footer/footer";
import "./mainquiz.css";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../Navbar/navbar";
import ReactPaginate from "react-paginate";
import { useNavigate } from "react-router-dom";
import quizHintLogo from "../Login/Images/quizhintlogo.svg";
import leftArrow from "../Login/Images/left back.svg"
import { getQuizData } from "../../Store/Slice/QuizDataSlice";
import "bootstrap/dist/css/bootstrap.min.css";

const MainQuiz = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [index, setIndex] = useState(0);
  const [indexTo, setIndexTo] = useState(1);
  const [noOfPages, setNoOfPages] = useState(5);
  const [quizData, setQuizData] = useState();
  const [respondedAnswer, setRespondedAnswer] = useState([]);
  const [quizAnswer,setQuizAnswer] = useState([]);
  const [finalQuizAnswer,setFinalQuizAnswer] =useState();
  const [quizScoreStatus,setScoreStatus] =useState();
  const[errorbtnstatus,setbtnstatus] =useState();
  const [quizMarks,setQuizMarks]=useState();
  console.log(respondedAnswer);
  const handleQuestionPage = (data) => {
    setIndex(data.selected);
    setIndexTo(data.selected + 1);
  };
  const handelQuizResponse = (e) => {
    e.preventDefault();

    const element = e.target.elements;
    const answer1value = element[0].value;
    const answer2value = element[1].value;
    const answer3value = element[2].value;
    const answer4value = element[3].value;
    const answer1 = element[0].checked;
    const answer2 = element[1].checked;
    const answer3 = element[2].checked;
    const answer4 = element[3].checked;
    setIndex(index + 1);
    setIndexTo(indexTo + 1);
    console.log(answer1, answer2, answer3, answer4);
    element[0].checked = false;
    element[1].checked = false;
    element[2].checked = false;
    element[3].checked = false;
    if (answer1 === true) {
      console.log(answer1value);
      respondedAnswer.push(answer1value);
    }
    if (answer2 === true) {
      console.log(answer2value);
      respondedAnswer.push(answer2value);
    }
    if (answer3 === true) {
      console.log(answer3value);
      respondedAnswer.push(answer3value);
    }
    if (answer4 === true) {
      console.log(answer4value);
      respondedAnswer.push(answer4value);
    }
  };
 
  const handelSkipPage = (e) => {
    e.preventDefault();
    setIndex(index + 1);
    setIndexTo(indexTo + 1);
  };
  console.log(index);
  console.log(indexTo);

  useEffect(() => {
    dispatch(getQuizData());
  }, []);

  const { quizInfo, getQuizDataLoading } = useSelector(
    (state) => state.getQuizInfo
  );
  useEffect(() => {
    if (quizInfo.data && quizInfo.data.data) {
      setQuizData(quizInfo.data.data);
      setNoOfPages(quizInfo.data.data.length);
      console.log(quizInfo)
      quizInfo.data.data.forEach(element => {
        quizAnswer.push(element.quizAnswer)
        
      });
    }
    setFinalQuizAnswer(quizAnswer.slice(0,10))
    console.log(finalQuizAnswer);
    console.log(quizAnswer);
 
    console.log(quizData);
    console.log(noOfPages);
  }, [quizInfo]);

  const endTest = () => {
    const a = window.confirm("Do you want to close your text")
    console.log(a);
    if(a === true)
    {
      console.log(finalQuizAnswer);
console.log(respondedAnswer);
const correctAnswer = respondedAnswer.filter((element1) => finalQuizAnswer.some((element2) =>element1===element2));
console.log(correctAnswer);
const quizMarkss = correctAnswer.length
console.log(quizMarks)
setQuizMarks(quizMarkss)
setScoreStatus(1);
setbtnstatus(0)
     
    }
  };
  const closeQuiz = () =>
  {
    navigate("/quiz")

  }
  




  return (
    <div>
      <Navbar />
      <div className="main-quiz--conatiner">
        <div className="quiz-questions">
          <div className="quiz-questions--header">
            <h1 className="Question-number">Question 1</h1>
            <div className="quizhint-logo--container">
              <img src={quizHintLogo} alt="no img found"></img>
            </div>
          </div>

          <div>
            {
              <div>
                {quizData &&
                  quizData.slice(index, indexTo).map((obj) => (
                    <div>
                      <p className="question">{obj.quizQuestion}</p>
                      <form onSubmit={handelQuizResponse}>
                        <div className="option--container">
                          <div className="question-option--1">
                            <input type="radio" value={obj.quizOption1}></input>
                            <p>{obj.quizOption1}</p>
                          </div>
                          <div className="question-option--2">
                            <input type="radio" value={obj.quizOption2}></input>
                            <p>{obj.quizOption2}</p>
                          </div>
                          <div className="question-option--3">
                            <input type="radio" value={obj.quizOption3}></input>
                            <p>{obj.quizOption3}</p>
                          </div>
                          <div className="question-option--4">
                            <input type="radio" value={obj.quizOption4}></input>
                            <p>{obj.quizOption4}</p>
                          </div>
                          <button className="chapter-seemore-btn">Submit</button>
                        </div>
                      </form>
                    </div>
                  ))}
              </div>
            }
          </div>

          <div className="react-paginate--container">
            <ReactPaginate
              className="react-paginate"
              previousLabel={"<"}
              previousClassName={"previous-class"}
              pageClassName={"page-class"}
              onPageChange={handleQuestionPage}
              pageCount={noOfPages}
              breakClassName={"break-class"}
              breakLabel={"."}
              nextLabel={">"}
              nextClassName={"previous-class"}
            />
           
          <div className="endtest-block">
            <button className="Endtest-btn" onClick={endTest}>
              End Test
            </button>
            <div>
            {
        quizScoreStatus === 1 ?(
          <button type="button" class="Endtest-btn" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
  View Score
</button>

        ):null
       }
            </div>
            <div>
              <button onClick={handelSkipPage} className="Skip-btn">
                Skip
              </button>
            </div>
          
          </div>
      


<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="staticBackdropLabel">quiz Scores</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
     you have scored:{quizMarks}/{noOfPages} in quiz 
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onClick={closeQuiz}>Close</button>
      
      </div>
    </div>
  </div>
</div>
          </div>
        </div>

        <div>
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
      </div>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default MainQuiz;
