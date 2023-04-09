import React, {useState, useEffect} from "react";

import Select from 'react-select';

import { useDispatch, useSelector } from "react-redux";

import { postUniversities } from "../../../Store/Slice/ExcelToJson";

import { getProgrammeInfo } from "../../../Store/Slice/getProgramme";

import { postPDFUniversities } from "../../../Store/Slice/forFormUniversity";

import "./addNewUniversity.css";

const AddNewUniversity = () => {
    const dispatch = useDispatch();

    const [status, setStatus] = useState(false)

    const { programmeData } = useSelector((state) => state.getProgrammeInfo);

    const [error, setError] = useState({})

    const [name, setname] = useState()

    const [files, setFile] = useState()

    const [buttonText, setButtonText] = useState("save")

    const [selectedOption, setSelectedOption] = useState([]);

    const [options, setOptions] = useState([
      {value: "", label: ""}
    ]);

    const onFileChange = (e) => {
      const {name} = e.target;
      setState({...state, [name]: e.target.files[0]})
      setname(e.target.files[0].name)
    }

    const [state, setState] = useState({
      S_No: "",
      State: "",
      Type: "",
      Yrofestab: "",
      Location_Coordinates: "",
      Name: "",
      Name_1: "",
      City: "",
      District: "",
      PIN: "",
      url: "",
      Phone: "",
      Village: "",
      Email: "",
      Image: "",
      Logo: "",
      AboutCollege: "",
      coursesOffered: [],
      brochure: ""
    })

    useEffect(() => {
      dispatch(getProgrammeInfo())
    }, [])

    useEffect(() => {
      programmeData?.map((i) => options.push({value: i?.programmeID, label: `${i?.degreeFullName}`}))
    }, [programmeData])

    const handleChange = (e) => {
      const {name, value} = e.target
      setState({...state, [name]: value})
    }

    const validate = (e) => {
      const errors={}
      if (!e.S_No){
        errors.S_No = "please enter the serial number"
      }
      if(!e.State){
        errors.State = "please enter the State Name"
      }
      if(!e.Type){
        errors.Type = "please enter the Type of University"
      }
      if(!e.Yrofestab){
        errors.Yrofestab = "please enter the year of establishment"
      }
      if(!e.Location_Coordinates){
        errors.Location_Coordinates = "please enter the Location co-ordiantes"
      }
      if(!e.Name){
        errors.Name = "please enter the university name"
      }
      if(!e.Name_1){
        errors.Name_1 = "please enter the full university name"
      }
      if(!e.City){
        errors.City = "please enter the city name"
      }
      if(!e.District){
        errors.District = "please enter the District"
      }
      if(!e.PIN){
        errors.PIN = "please enter the PIN"
      }
      if(!e.url){
        errors.url = "please enter the url"
      }
      if(!e.Phone){
        errors.Phone = "please enter the Phone Number"
      }
      if(!e.Village){
        errors.Village = "please enter the Village Name"
      }
      if(!e.Email){
        errors.Email = "please enter the mail Id"
      }
      if(!e.Image){
        errors.Image = "please enter the Image Url"
      }
      if(!e.Logo){
        errors.Logo = "please enter the College Logo"
      }
      if(!e.AboutCollege){
        errors.About = "please enter about details"
      }
      return errors
    }

    const handletheSubmit = (e) => {
        e.preventDefault()
        setError(validate(state))
        setStatus(true)
    }

    useEffect(() => {
      setState({...state, ["coursesOffered"]: selectedOption})
    }, [selectedOption, status])

    useEffect(() => {
      if(Object.values(error).length === 0 && status){
        setButtonText("saved")
        dispatch(postPDFUniversities(state))
      }
    }, [status])

  return (
    <div className="Add-new_university-form-container">
        <form className="Add-new_university-form"onSubmit={handletheSubmit}>
            <h1>Add New Universities</h1>
            
            <input type="Number" name="S_No" placeholder="S_No" onChange={handleChange}></input>
            <p>{error.S_No}</p>

            <input type="text" name="State" placeholder="State" onChange={handleChange}></input>
            <p>{error.State}</p>

            <input type="text" name="District" placeholder="District" onChange={handleChange}></input>
            <p>{error.District}</p>

            <input type="text" name="City" placeholder="City" onChange={handleChange}></input>
            <p>{error.City}</p>

            <input type="text" name="Village" placeholder="village" onChange={handleChange}></input>
            <p>{error.Village}</p>

            <input type="Number" name="PIN" placeholder="PIN" onChange={handleChange}></input>
            <p>{error.PIN}</p>

            <Select
              className="multiSelectOption_courses"
              closeMenuOnSelect={false}
              isMulti
              defaultValue={selectedOption}
              onChange={setSelectedOption}
              options={options}
            />

            <input type="text" name="Type" placeholder="Type of University" onChange={handleChange}></input>
            <p>{error.Type}</p>

            <input type="Number" name="Yrofestab" placeholder="year of establishment" onChange={handleChange}></input>
            <p>{error.Yrofestab}</p>

            <input type="text" name="Location_Coordinates" placeholder="location coordinates" onChange={handleChange}></input>
            <p>{error.Location_Coordinates}</p>

            <input type="text" name="Name" placeholder="Name" onChange={handleChange}></input>
            <p>{error.Name}</p>

            <input type="text" name="Name_1" placeholder="Name_1" onChange={handleChange}></input>
            <p>{error.Name_1}</p>

            <input type="text" name="url" placeholder="url" onChange={handleChange}></input>
            <p>{error.url}</p>

            <input type="Number" name="Phone" placeholder="phone number" onChange={handleChange}></input>
            <p>{error.Phone}</p>

            <input type="email" name="Email" placeholder="email" onChange={handleChange}></input>
            <p>{error.Email}</p>

            <input type="text" name="Image" placeholder="image url" onChange={handleChange}></input>
            <p>{error.Image}</p>

            <input type="text" name="Logo" placeholder="logo" onChange={handleChange}></input>
            <p>{error.Logo}</p>

            <label className="add-new-profile-pic">
              <label className="file-label">
                <input
                  type="file"
                  name="brochure"
                  id="upload"
                  onChange={onFileChange}
                  className="admin-file-upload"
                />
                <label>{name}</label>
              </label>
            </label>

            <textarea placeholder="About the Institution" name="AboutCollege" onChange={handleChange} className="textarea-college_about"></textarea>
            <p>{error.AboutCollege}</p>

            <button className={`Add-new_university-form-${buttonText}`}>{buttonText}</button>
        </form>
    </div>
  )
}

export default AddNewUniversity

