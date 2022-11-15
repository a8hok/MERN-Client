import React, {useState, useEffect} from "react";

import { useDispatch, useSelector } from "react-redux";

import { postCollageData } from "../../../Store/Slice/postCollage";

import "./addNewCollage.css";

const AddNewCollage = () => {

    const dispatch = useDispatch();

    const [status, setStatus] = useState(false)

    const [error, setError] = useState({})

    const [buttonText, setButtonText] = useState("save")

    const [state, setState] = useState({
        SNo: "",
        c_id: "",
        State: "",
        college_District: "",
        Yrofestab: "",
        College_Name: "",
        Specialisation: "",
        Type: "",
        url: "",
        Phone: "",
        Email: "",
        location_coordinates: "",
        Image_Gallery: "",
        Logo: "",
        About: "",
        Updates: "",
        Programmes_Offered: "",
        Admissions: "",
        Placement: "",
        admissio_Test: "",
        Perceptions: "",
        NAAC_Grade_Validity: "",
        Ranking: "",
        fB: "",
        tR: "",
        yT: "",
        iG: "",
        LinkedIn: ""
    })

    const handleChange = (e) => {
      const {name, value} = e.target
      setState({...state, [name]: value})
    }

    const validate = (e) => {
      const errors={}
      if (!e.SNo){
        errors.SNo = "enter the serial number"
      }

      return errors
    }


    const handletheSubmit = (e) => {
        e.preventDefault()
        setError(validate(state))
        setStatus(true)
    }

    useEffect(() => {
      if(Object.values(error).length === 0 && status){
        setButtonText("saved")
        dispatch(postCollageData(state))
      }
    }, [status])

  return (
    <div className="Add-new_Collage-form-container">
        <form className="Add-new_Collage-form"onSubmit={handletheSubmit}>
            <h1>Add New Universities</h1>
            
            <input type="Number" name="SNo" placeholder="SNo" onChange={handleChange}></input>
            <p>{error.SNo}</p>

            <input type="text" name="c_id" placeholder="c_id" onChange={handleChange}></input>
            <p>{error.c_id}</p>

            <input type="text" name="State" placeholder="State" onChange={handleChange}></input>
            <p>{error.State}</p>

            <input type="text" name="college_District" placeholder="District" onChange={handleChange}></input>
            <p>{error.college_District}</p>

            <input type="Number" name="Yrofestab" placeholder="Year of establishment" onChange={handleChange}></input>
            <p>{error.Yrofestab}</p>

            <input type="text" name="Collage_Name" placeholder="Collage Name" onChange={handleChange}></input>
            <p>{error.Collage_Name}</p>

            <input type="text" name="Specialisation" placeholder="Specialisation" onChange={handleChange}></input>
            <p>{error.Specialisation}</p>

            <input type="text" name="Type" placeholder="Type" onChange={handleChange}></input>
            <p>{error.Type}</p>

            <input type="text" name="url" placeholder="url" onChange={handleChange}></input>
            <p>{error.url}</p>

            <input type="text" name="Phone" placeholder="Phone" onChange={handleChange}></input>
            <p>{error.Phone}</p>

            <input type="email" name="Email" placeholder="Email" onChange={handleChange}></input>
            <p>{error.Email}</p>

            <input type="text" name="location_coordinates" placeholder="location coordinates" onChange={handleChange}></input>
            <p>{error.location_coordinates}</p>

            <input type="text" name="Image_Gallery" placeholder="Image Gallery" onChange={handleChange}></input>
            <p>{error.Image_Gallery}</p>

            <input type="text" name="Logo" placeholder="Logo" onChange={handleChange}></input>
            <p>{error.Logo}</p>

            <input type="text" name="Image" placeholder="image url" onChange={handleChange}></input>
            <p>{error.Image}</p>

            <input type="text" name="Logo" placeholder="logo" onChange={handleChange}></input>
            <p>{error.Logo}</p>

            <textarea placeholder="About the Institution" name="About" onChange={handleChange} className="textarea-collage_about"></textarea>
            <p>{error.About}</p>

            <input type="text" name="Updates" placeholder="updates" onChange={handleChange}></input>
            <p>{error.Updates}</p>

            <input type="text" name="Programmes_Offered" placeholder="Programms Offered" onChange={handleChange}></input>
            <p>{error.Programmes_Offered}</p>

            <input type="text" name="Admissions" placeholder="Admissions" onChange={handleChange}></input>
            <p>{error.Admissions}</p>

            <input type="text" name="Placement" placeholder="Placement" onChange={handleChange}></input>
            <p>{error.Placement}</p>

            <input type="text" name="admisso_Test" placeholder="admisson Test" onChange={handleChange}></input>
            <p>{error.admisso_Test}</p>

            <input type="text" name="Perceptions" placeholder="Perceptions" onChange={handleChange}></input>
            <p>{error.Perceptions}</p>

            <input type="text" name="NAAC_Grade_Validity" placeholder="NAAC Grade Validity" onChange={handleChange}></input>
            <p>{error.NAAC_Grade_Validity}</p>

            <input type="text" name="Ranking" placeholder="Ranking" onChange={handleChange}></input>
            <p>{error.Ranking}</p>

            <input type="text" name="fB" placeholder="faceBook" onChange={handleChange}></input>
            <p>{error.fB}</p>

            <input type="text" name="tR" placeholder="telegram" onChange={handleChange}></input>
            <p>{error.tR}</p>

            <input type="text" name="yT" placeholder="YouTube" onChange={handleChange}></input>
            <p>{error.yT}</p>

            <input type="text" name="iG" placeholder="Instagram" onChange={handleChange}></input>
            <p>{error.iG}</p>

            <input type="text" name="LinkedIn" placeholder="LinkedIn" onChange={handleChange}></input>
            <p>{error.LinkedIn}</p>

            <button className={`Add-new_Collage-form-${buttonText}`}>{buttonText}</button>
        </form>
    </div>
  )
}

export default AddNewCollage

