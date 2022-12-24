import React, { useState, useEffect } from "react";
import "./AddQuiz.css";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../Navbar/navbar";
import { postQuizData } from "../../Store/Slice/uploadQuizSlice";
import { Switch, FormControlLabel } from "@mui/material";
import camImg from "../Event/img/pngtree.jpg";
import FileBase64 from "react-file-base64";

const AddQuiz = () => {
  const dispatch = useDispatch();

  const [status, setStatus] = useState(false)

  const [sample, setSample] = useState()

  const [error, setError] = useState({})

  const [checked, setChecked] = useState(false)

  const [buttonText, setButtonText] = useState("Add-Quiz")

  const difficultyOption = [
    {
      option: "Select Difficulty Level",
      value: ""
    },
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
      option: "Select Domain",
      value: ""
    },
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

  const quizState = [
    {
      option: "Type of Quiz",
      value: ""
    },
    {
      option: "Skill",
      value: "Skill"
    },
    {
      option: "Academic",
      value: "Academic"
    }
  ]

  const [state, setState] = useState({
    SlNo: "",
    Stem: "",
    distractor1: "",
    distractor2: "",
    distractor3: "",
    distractor4: "",
    Key: "",
    Hint: "NA",
    Image: "NA",
    TypeOfAssessment: "",
    CourseTitle: "",
    CognitiveLevel: "",
    Subdomain: ""
  })

  const [selectedDomain, setSelectedDomain] = useState('');

  const [filteredSubs, setFilteredSubs] = useState([]);

  const filteredSubDomain = {
    Medical: [{
      option: "Sub-Domain",
      value: ""
    },{
      option: "Cardiology",
      value: "Cardiology"
    },{
      option: "Gynacology",
      value: "Gynacology"
    }],
    Engineering: [{
      option: "Sub-Domain",
      value: ""
    },{
      option: "Mechanical Engineering",
      value: "Mechanical Engineering"
    },{
      option: "Electrical Engineering",
      value: "Electrical Engineering"
    }],
    Agriculture: [{
      option: "Sub-Domain",
      value: ""
    },{
      option: "Agriculture of plants",
      value: "Agriculture of plants"
    },{
      option: "Animal Husbandary",
      value: "Animal Husbandary"
    }],
    Law: [{
      option: "Sub-Domain",
      value: ""
    },{
      option: "Tax-Laws",
      value: "Tax-Laws"
    },{
      option: "Prosecutor",
      value: "Prosecutor"
    }],
    Dental: [{
      option: "Sub-Domain",
      value: ""
    },{
      option: "RCT",
      value: "RCT"
    },{
      option: "Anasthetic",
      value: "Anasthetic"
    }]
  }

  useEffect(() => {
    if(selectedDomain === "Medical"){
      setFilteredSubs(filteredSubDomain.Medical)
    }else if (selectedDomain === "Engineering"){
      setFilteredSubs(filteredSubDomain.Engineering)
    }else if (selectedDomain === "Agriculture"){
      setFilteredSubs(filteredSubDomain.Agriculture)
    }else if (selectedDomain === "Law"){
      setFilteredSubs(filteredSubDomain.Law)
    }else if (selectedDomain === "Dental"){
      setFilteredSubs(filteredSubDomain.Dental)
    }
  }, [selectedDomain])

  const handleToggle = (e) => {
    setChecked(e.target.checked)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setState({ ...state, [name]: value })
  }

  const validate = (e) => {
    const errors = {}
    if (!e.SlNo) {
      errors.SlNo = "Please enter the serial number"
    }
    if (!e.Stem) {
      errors.Stem = "Please enter the question"
    }
    if (!e.distractor1) {
      errors.distractor1 = "Please enter the option"
    }
    if (!e.distractor2) {
      errors.distractor2 = "Please enter the option"
    }
    if (!e.Key) {
      errors.Key = "Please enter the correct answer"
    }
    if (!e.TypeOfAssessment) {
      errors.TypeOfAssessment = "Please select a quiz type"
    }
    if (!e.CourseTitle) {
      errors.CourseTitle = "Please select a domain"
    }
    if (!e.CognitiveLevel) {
      errors.CognitiveLevel = "Please select a difficulty level"
    }
    if (!e.Subdomain) {
      errors.Subdomain = "Please select a sub domain"
    }
    return errors
  }

  const handelAddQuiz = (e) => {
    e.preventDefault();
    setError(validate(state))
    setStatus(true)
  };

  useEffect(() => {
    setSelectedDomain(state.CourseTitle)
  }, [handleChange])

  useEffect(() => {
    if (Object.values(error).length === 0 && status) {
      setButtonText("Added-Quiz")
      dispatch(postQuizData(state))
    }
  }, [status])

  const { quizData, quizLoading } = useSelector(
    (state) => state.quizUploadInfo
  );

  return (
    <div className="total-page">
      <div className="form">
        <div className="form-add">
          <form onSubmit={handelAddQuiz} className="form-data">
            <div className="add-quiz-container">
              <h1>Add new Question</h1>
              <input type="Number" name="SlNo" placeholder="S-No" onChange={handleChange}></input>
              <p>{error.SlNo}</p>

              <textarea name="Stem" placeholder="Stem" onChange={handleChange}></textarea>
              <p>{error.Stem}</p>

              <input type="text" name="distractor1" placeholder="distractor 1" onChange={handleChange}></input>
              <p>{error.distractor1}</p>

              <input type="text" name="distractor2" placeholder="distractor 2" onChange={handleChange}></input>
              <p>{error.distractor2}</p>

              <input type="text" name="distractor3" placeholder="distractor 3" onChange={handleChange}></input>
              <p>{error.distractor3}</p>

              <input type="text" name="distractor4" placeholder="distractor 4" onChange={handleChange}></input>
              <p>{error.distractor4}</p>

              <input type="Number" name="Key" placeholder="Key" onChange={handleChange}></input>
              <p>{error.Key}</p>

              <input type="text" name="Hint" placeholder="Hint" onChange={handleChange}></input>
              <p></p>

              <select type="text" name="TypeOfAssessment" onChange={handleChange}>
                {quizState.map((i) => {return <option value={i.value}>{i.option}</option>})}
              </select>
              <p>{error.TypeOfAssessment}</p>

              <select type="text" name="CourseTitle" onChange={handleChange}>
                {domain.map((i) => {return <option value={i.value}>{i.option}</option>})}
              </select>
              <p>{error.CourseTitle}</p>

              {filteredSubs.length > 0 &&<>
                <select name="Subdomain" onChange={handleChange}>
                {filteredSubs.map((i) => {return <option value={i?.value}>{i?.option}</option>})}
                </select>
                <p>{error.Subdomain}</p>
              </>}

              <select type="text" name="CognitiveLevel" onChange={handleChange}>
                {difficultyOption.map((i) => (<option value={i.value}>{i.option}</option>))}
              </select>
              <p>{error.CognitiveLevel}</p>

              <FormControlLabel control={<Switch checked={checked} onChange={handleToggle} />} label="toggle to upload image if necessary" />

              {checked && <label className="add-New-Quiz_Question">
                <img
                  src={camImg}
                  alt="no img found"
                  className="quiz_Question_Image"
                ></img>
                <div className="select-new-Quiz-Picture">
                  <FileBase64
                  multiple={false}
                  name="Image"
                  onDone={(base64) => setSample(base64)}
                  onChange={handleChange}
                  />
                </div>
              </label>}
              <p></p>

              <button className={`add-button-${buttonText}`}>{buttonText}</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddQuiz;
