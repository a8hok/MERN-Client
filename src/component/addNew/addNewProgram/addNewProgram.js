import React, {useState, useEffect} from "react";

import { useDispatch, useSelector } from "react-redux";

import { postProgramme } from "../../../Store/Slice/postProgramme";

import "./addNewProgram.css";

const AddNewProgram = () => {
    const dispatch = useDispatch();
    
    const [buttonText, setButtonText] = useState("save")

    const [status, setStatus] = useState(false)

    const [state, setState] = useState({
      programmeID: "",
      programmeDomain: "",
      programmeSubDomain: "",
      programmeSpecialisation: "",
      programmeLevel: "",
      degreeDescription: "",
      degreeShortName: "",
      degreeFullName: "",
    })

    const [error, setError] = useState({})

    const handleChange = (e) => {
      const {name, value} = e.target
      setState({...state, [name]: value})
    }

    const validate = (e) => {
      const errors={}
      if (!e.programmeID){
        errors.programmeID = "enter the serial number"
      }
      if(!e.programmeDomain){
        errors.programmeDomain = "enter the program type"
      }
      if(!e.programmeSubDomain){
        errors.programmeSubDomain = "enter the program"
      }
      if(!e.programmeSpecialisation){
        errors.programmeSpecialisation = "enter the course name"
      }
      if(!e.programmeLevel){
        errors.programmeLevel = "enter the programme level"
      }
      if(!e.degreeDescription){
        errors.degreeDescription = "enter the degree description"
      }
      if(!e.degreeShortName){
        errors.degreeShortName = "enter the degree short name"
      }
      if(!e.degreeFullName){
        errors.degreeFullName = "enter the degree full name"
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

            <input type="text" name="programmeID" value={state.programmeID} placeholder="programmeID" onChange={handleChange}></input>
            <p>{error.programmeID}</p>

            <input type="text" name="programmeDomain" value={state.programmeDomain} placeholder="Program domain" onChange={handleChange}></input>
            <p>{error.programmeDomain}</p>

            <input type="text" name="programmeSubDomain" value={state.programmeSubDomain} placeholder="Program sub domain" onChange={handleChange}></input>
            <p>{error.programmeSubDomain}</p>

            <input type="text" name="programmeSpecialisation" value={state.programmeSpecialisation} placeholder="Name" onChange={handleChange}></input>
            <p>{error.programmeSpecialisation}</p>

            <input type="text" name="programmeLevel" value={state.programmeLevel} placeholder="programme level" onChange={handleChange}></input>
            <p>{error.programmeLevel}</p>

            <input type="text" name="degreeDescription" value={state.degreeDescription} placeholder="Degree description" onChange={handleChange}></input>
            <p>{error.degreeDescription}</p>

            <input type="text" name="degreeShortName" value={state.degreeShortName} placeholder="degree short name" onChange={handleChange}></input>
            <p>{error.degreeShortName}</p>

            <input type="text" name="degreeFullName" value={state.degreeFullName} placeholder="Degree full name" onChange={handleChange}></input>
            <p>{error.degreeFullName}</p>

            <button className={`Add-new_program-form-${buttonText}`}>{buttonText}</button>
        </form>
    </div>
  )
}

export default AddNewProgram