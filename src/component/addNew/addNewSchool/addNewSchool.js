import React, {useState, useEffect} from "react";

import { useDispatch, useSelector } from "react-redux";

import { postSchools } from "../../../Store/Slice/AddSchoolData";

import "./addNewSchool.css";

const AddNewSchool = () => {

    const dispatch = useDispatch();
    
    const [buttonText, setButtonText] = useState("save")

    const [status, setStatus] = useState(false)

    const [values, setValue] = useState({
                SlNo: "",
                name: "",
                code: "",
                estdYr: "",
                Catagory: "",
                address: "",
                village: "",
                city: "",
                pin: "",
                district: "",
                state: "",
                location: "",
                areaType: "",
                principal: "",
                url: "",
                email: "",
                phone: "",
                AffiliationBody: "",
                AfiliationNumber: "",
                ClassesFrom: "",
                ClassesTo: "",
                Mol: "",
                streamsOffered: "",
                AboutSchool: "",
                facilities: "",
                events: "",
                managemnet: "",
                gender: "",
                AccStatus: "",
                schoolArea: "",
                facultyStrength: "",
                studentStrength: "",
                des: "",
                blogPosts: "",
                Gallery: "",
                Apply: ""
    })

    const [error, setError] = useState({})

    const handleChange = (e) => {
      const {name, value} = e.target
      setValue({...values, [name]: value})
    }

    const validate = (e) => {
        const errors = {}
        if (!e.SlNo || e.SlNo === "")
            errors.SlNo = "This field cannot be empty"
        
        return errors
    }

    const handledSubmit = (e) => {
        e.preventDefault()
        setError(validate(values))
        setStatus(true)
}

useEffect(() => {
    if(Object.values(error).length === 0 && status){
      setButtonText("saved")
      dispatch(postSchools(values))
    }
  }, [status])

    return (
        <div className="Add-new_School-form-container">
        <form className="Add-new_school-form" onSubmit={handledSubmit}>
            <h1>Add New School</h1>

            <input type="Number" name="SlNo" value={values.SlNo} placeholder="SlNo" onChange={handleChange}></input>
            <p>{error.SlNo}</p>

            <input type="text" name="name" value={values.name} placeholder="Program Type" onChange={handleChange}></input>
            <p>{error.name}</p>

            <input type="text" name="code" value={values.code} placeholder="Program" onChange={handleChange}></input>
            <p>{error.code}</p>

            <input type="Number" name="estdYr" value={values.estdYr} placeholder="Year of establishment" onChange={handleChange}></input>
            <p>{error.estdYr}</p>

            <input type="text" name="Catagory" value={values.Catagory} placeholder="Catagory" onChange={handleChange}></input>
            <p>{error.Catagory}</p>

            <input type="text" name="address" value={values.address} placeholder="address" onChange={handleChange}></input>
            <p>{error.address}</p>

            <input type="text" name="village" value={values.village} placeholder="village" onChange={handleChange}></input>
            <p>{error.village}</p>

            <input type="text" name="city" value={values.city} placeholder="city" onChange={handleChange}></input>
            <p>{error.city}</p>

            <input type="Number" name="pin" value={values.pin} placeholder="pin" onChange={handleChange}></input>
            <p>{error.pin}</p>

            <input type="text" name="district" value={values.district} placeholder="district" onChange={handleChange}></input>
            <p>{error.district}</p>

            <input type="text" name="state" value={values.state} placeholder="state" onChange={handleChange}></input>
            <p>{error.state}</p>

            <input type="text" name="location" value={values.location} placeholder="location" onChange={handleChange}></input>
            <p>{error.location}</p>

            <input type="text" name="areaType" value={values.areaType} placeholder="areaType" onChange={handleChange}></input>
            <p>{error.areaType}</p>

            <input type="text" name="principal" value={values.principal} placeholder="principal" onChange={handleChange}></input>
            <p>{error.principal}</p>

            <input type="text" name="url" value={values.url} placeholder="url" onChange={handleChange}></input>
            <p>{error.url}</p>

            <input type="email" name="email" value={values.email} placeholder="email" onChange={handleChange}></input>
            <p>{error.email}</p>

            <input type="text" name="phone" value={values.phone} placeholder="phone" onChange={handleChange}></input>
            <p>{error.phone}</p>

            <input type="text" name="AffiliationBody" value={values.AffiliationBody} placeholder="Affiliation Body" onChange={handleChange}></input>
            <p>{error.AffiliationBody}</p>

            <input type="text" name="AfiliationNumber" value={values.AfiliationNumber} placeholder="Afiliation Number" onChange={handleChange}></input>
            <p>{error.AfiliationNumber}</p>

            <input type="text" name="ClassesFrom" value={values.ClassesFrom} placeholder="Classes From" onChange={handleChange}></input>
            <p>{error.ClassesFrom}</p>

            <input type="text" name="ClassesTo" value={values.ClassesTo} placeholder="Classes To" onChange={handleChange}></input>
            <p>{error.ClassesTo}</p>

            <input type="text" name="Mol" value={values.Mol} placeholder="Mol" onChange={handleChange}></input>
            <p>{error.Mol}</p>

            <input type="text" name="streamsOffered" value={values.streamsOffered} placeholder="streams Offered" onChange={handleChange}></input>
            <p>{error.streamsOffered}</p>

            <input type="text" name="AboutSchool" value={values.AboutSchool} placeholder="About School" onChange={handleChange}></input>
            <p>{error.AboutSchool}</p>

            <input type="text" name="facilities" value={values.facilities} placeholder="facilities" onChange={handleChange}></input>
            <p>{error.facilities}</p>

            <input type="text" name="events" value={values.events} placeholder="events" onChange={handleChange}></input>
            <p>{error.events}</p>

            <input type="text" name="management" value={values.management} placeholder="management" onChange={handleChange}></input>
            <p>{error.management}</p>

            <input type="text" name="gender" value={values.gender} placeholder="gender" onChange={handleChange}></input>
            <p>{error.gender}</p>

            <input type="text" name="AccStatus" value={values.AccStatus} placeholder="Acceptance Status" onChange={handleChange}></input>
            <p>{error.AccStatus}</p>

            <input type="text" name="schoolArea" value={values.schoolArea} placeholder="schoolArea" onChange={handleChange}></input>
            <p>{error.schoolArea}</p>

            <input type="text" name="facultyStrength" value={values.facultyStrength} placeholder="faculty Strength" onChange={handleChange}></input>
            <p>{error.facultyStrength}</p>

            <input type="text" name="studentStrength" value={values.studentStrength} placeholder="student Strength" onChange={handleChange}></input>
            <p>{error.studentStrength}</p>

            <input type="text" name="des" value={values.des} placeholder="des" onChange={handleChange}></input>
            <p>{error.des}</p>

            <input type="text" name="blogPosts" value={values.blogPosts} placeholder="Blog Posts" onChange={handleChange}></input>
            <p>{error.blogPosts}</p>

            <input type="text" name="Gallery" value={values.Gallery} placeholder="Gallery" onChange={handleChange}></input>
            <p>{error.Gallery}</p>

            <input type="text" name="Apply" value={values.Apply} placeholder="Apply" onChange={handleChange}></input>
            <p>{error.Apply}</p>

            <button className={`Add-new_school-form-${buttonText}`}>{buttonText}</button>
        </form>
    </div>
  )
}

export default AddNewSchool