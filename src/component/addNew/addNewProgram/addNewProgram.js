import React, {useState, useEffect} from "react";

import { useDispatch, useSelector } from "react-redux";

import { postProgramme } from "../../../Store/Slice/postProgramme";

import "./addNewProgram.css";

const AddNewProgram = () => {
    const dispatch = useDispatch();
    
    const [buttonText, setButtonText] = useState("save")

    const [status, setStatus] = useState(false)

    const [state, setState] = useState({
      SNo: "",
      ProgrammeType: "",
      Programme: "",
      Name: "",
      Discipline: ""
    })

    const [error, setError] = useState({})

    const handleChange = (e) => {
      const {name, value} = e.target
      setState({...state, [name]: value})
    }

    const validate = (e) => {
      const errors={}
      if (!e.SNo){
        errors.SNo = "enter the serial number"
      }
      if(!e.ProgrammeType){
        errors.ProgrammeType = "enter the program type"
      }
      if(!e.Programme){
        errors.Programme = "enter the program"
      }
      if(!e.Name){
        errors.Name = "enter the course name"
      }
      if(!e.Discipline){
        errors.Discipline = "enter the discipline"
      }
      return errors
    }

    const handledSubmit = (e) => {
        e.preventDefault()
        setError(validate(state))
        setStatus(true)
}

useEffect(() => {
  if(Object.values(error).length === 0 && status){
    setButtonText("saved")
    dispatch(postProgramme(state))
  }
}, [status])

  return (
    <div className="Add-new_program-form-container">
        <form className="Add-new_program-form" onSubmit={handledSubmit}>
            <h1>Add New Program</h1>

            <input type="text" name="SNo" value={state.SNo} placeholder="SNo" onChange={handleChange}></input>
            <p>{error.SNo}</p>

            <input type="text" name="ProgrammeType" value={state.ProgrammeType} placeholder="Program Type" onChange={handleChange}></input>
            <p>{error.ProgrammeType}</p>

            <input type="text" name="Programme" value={state.Programme} placeholder="Program" onChange={handleChange}></input>
            <p>{error.Programme}</p>

            <input type="text" name="Name" value={state.Name} placeholder="Name" onChange={handleChange}></input>
            <p>{error.Name}</p>

            <input type="text" name="Discipline" value={state.Discipline} placeholder="Discipline" onChange={handleChange}></input>
            <p>{error.Discipline}</p>

            <button className={`Add-new_program-form-${buttonText}`}>{buttonText}</button>
        </form>
    </div>
  )
}

export default AddNewProgram