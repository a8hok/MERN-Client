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

  const [state, setState] = useState({
    SlNo: "",
    Stem: "",
    distractor1: "",
    distractor2: "",
    distractor3: "",
    distractor4: "",
    Key: "",
    Hint: "",
    Image: "",
    TypeOfAssessment: "",
    CourseTitle: "",
    CognitiveLevel: "",
    ConceptCode: "",
    PurposeCode: "",
    EntranceCode: ""
  })

  useEffect(() => {
    console.log(sample)
    console.log(sample?.name)
    }, [sample])

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
      errors.SlNo = "enter the serial number"
    }
    if (!e.Stem) {
      errors.Stem = "enter the question"
    }
    if (!e.distractor1) {
      errors.distractor1 = "enter the option"
    }
    if (!e.distractor2) {
      errors.distractor2 = "enter the option"
    }
    if (!e.Key) {
      errors.Key = "enter the correct answer"
    }
    if (!e.TypeOfAssessment) {
      errors.TypeOfAssessment = "enter the type of assessment"
    }
    if (!e.CourseTitle) {
      errors.CourseTitle = "enter the Course Title"
    }
    if (!e.CognitiveLevel) {
      errors.CognitiveLevel = "enter the cognitive level"
    }
    return errors
  }

  const handelAddQuiz = (e) => {
    e.preventDefault();
    setError(validate(state))
    setStatus(true)
  };

  useEffect(() => {
    if (Object.values(error).length === 0 && status) {
      setButtonText("Added-Quiz")
      dispatch(postQuizData(state))
    }
  }, [status])

  const { quizData, quizLoading } = useSelector(
    (state) => state.quizUploadInfo
  );

  useEffect(() => {
    console.log(quizData);
  }, [quizData]);

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

              <input type="text" name="distractor1" placeholder="first option" onChange={handleChange}></input>
              <p>{error.distractor1}</p>

              <input type="text" name="distractor2" placeholder="second option" onChange={handleChange}></input>
              <p>{error.distractor2}</p>

              <input type="text" name="distractor3" placeholder="third option" onChange={handleChange}></input>
              <p>{error.distractor3}</p>

              <input type="text" name="distractor4" placeholder="fourth option" onChange={handleChange}></input>
              <p>{error.distractor4}</p>

              <input type="Number" name="Key" placeholder="Key" onChange={handleChange}></input>
              <p>{error.Key}</p>

              <input type="text" name="Hint" placeholder="Hint" onChange={handleChange}></input>
              <p></p>

              <input type="text" name="TypeOfAssessment" placeholder="Type Of Assessment" onChange={handleChange}></input>
              <p>{error.TypeOfAssessment}</p>

              <input type="text" name="CourseTitle" placeholder="Course Title" onChange={handleChange}></input>
              <p>{error.CourseTitle}</p>

              <input type="text" name="CognitiveLevel" placeholder="Cognitive Level" onChange={handleChange}></input>
              <p>{error.CognitiveLevel}</p>

              <input type="text" name="ConceptCode" placeholder="Concept Code" onChange={handleChange}></input>
              <p></p>

              <input type="text" name="PurposeCode" placeholder="PurposeCode url" onChange={handleChange}></input>
              <p></p>

              <input type="text" name="EntranceCode" placeholder="EntranceCode" onChange={handleChange}></input>
              <p></p>

              <FormControlLabel control={<Switch checked={checked} onChange={handleToggle} />} label="toggle to upload image if necessary" />

              {checked && <label className="add-New-Quiz_Question">
                <img
                  src={camImg}
                  alt="no img found"
                  className="quiz_Question_Image"
                ></img>
                {/* {name ?<label className="upload-pic-txt">{name}</label>:<label className="upload-pic-txt">
                Upload PNG,JPEG,JPG,SVG only
              </label>} */}
                <div className="select-new-Quiz-Picture">
                  <FileBase64
                  multiple={false}
                  name="Image"
                  onDone={(base64) => setSample(base64)}
                  onChange={handleChange}
                  />
                </div>
               
                {/* <input
                  type="file"
                  className="select-new-Quiz-Picture"
                  required={true}
                // onChange={onFileChange}
                // accept=".png,.svg,.jpeg,.jpg"
                ></input> */}
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
