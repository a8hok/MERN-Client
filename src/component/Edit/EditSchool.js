import React, {useState, useEffect} from "react";

import {axio} from "../../Config/Config"

const EditSelectedSchool = ({value}) => {

    const [buttonText, setButtonText] = useState("save")

    const handletheSubmit = (e) => {
        e.preventDefault()
        const element = e.target.elements;
        const values = { 
                SlNo: element[0].value,
                name: element[1].value,
                code: element[2].value,
                estdYr: element[3].value,
                Catagory: element[4].value,
                address: element[5].value,
                village: element[6].value,
                city: element[7].value,
                pin: element[8].value,
                district: element[9].value,
                state: element[10].value,
                location: element[11].value,
                areaType: element[12].value,
                principal: element[13].value,
                url: element[14].value,
                email: element[15].value,
                phone: element[16].value,
                AffiliationBody: element[17].value,
                AfiliationNumber: element[18].value,
                ClassesFrom: element[19].value,
                ClassesTo: element[20].value,
                Mol: element[21].value,
                streamsOffered: element[22].value,
                AboutSchool: element[23].value,
                facilities: element[24].value,
                events: element[25].value,
                managemnet: element[26].value,
                gender: element[27].value,
                AccStatus: element[28].value,
                schoolArea: element[29].value,
                facultyStrength: element[30].value,
                studentStrength: element[31].value,
                des: element[32].value,
                blogPosts: element[33].value,
                Gallery: element[34].value,
                Apply: element[35].value
        }
        setButtonText("saved")

        const res = axio.put(`/api/edit-school`, {
          values
        }).catch((err) => console.log(err,"editing error"))
        return res.data
    }

    const {
        SlNo, name, code, estdYr, Catagory, address, village, city, pin, district, state, location, areaType, principal, url, email, phone, AffiliationBody, AfiliationNumber, ClassesFrom, ClassesTo, Mol, streamsOffered, AboutSchool, facilities, events, managemnet, gender, AccStatus, schoolArea, facultyStrength, studentStrength, des, blogPosts, Gallery, Apply
    } = value

  return (
    <div className="Add-new_school-form-container">
        <form className="Add-new_school-form"onSubmit={handletheSubmit}>
            <h1>Edit Universities</h1>

            <input type="Number" name="SNo" placeholder="SNo" 
             defaultValue={SlNo} disabled></input>

            <input type="text" name="name" placeholder="name" 
             defaultValue={name}></input>
          
            <input type="text" name="code" placeholder="code" 
             defaultValue={code}></input>

            <input type="Number" name="estdYr" placeholder="estdYr" 
             defaultValue={estdYr}></input>

            <input type="text" name="Catagory" placeholder="Catagory" 
             defaultValue={Catagory}></input>

            <input type="text" name="address" placeholder="address" 
             defaultValue={address}></input>

            <input type="text" name="village" placeholder="village" 
             defaultValue={village}></input>
          
            <input type="text" name="city" placeholder="city" 
             defaultValue={city}></input>

            <input type="text" name="pin" placeholder="pin" 
             defaultValue={pin}></input>
            
            <input type="text" name="district" placeholder="district" 
             defaultValue={district}></input>

            <input type="text" name="state" placeholder="state" 
             defaultValue={state}></input>
          
            <input type="text" name="location" placeholder="location" 
             defaultValue={location}></input>

            <input type="text" name="areaType" placeholder="area type" 
             defaultValue={areaType}></input>

            <input type="text" name="principal" placeholder="principal" 
             defaultValue={principal}></input>

            <input type="text" name="url" placeholder="url" 
             defaultValue={url}></input>

            <input type="email" name="email" placeholder="email" 
             defaultValue={email}></input>

            <input type="Number" name="phone" placeholder="phone" 
             defaultValue={phone}></input>
            
            <input type="text" name="AffiliationBody" placeholder="affiliation body" 
             defaultValue={AffiliationBody}></input>
            
            <input type="text" name="AfiliationNumber" placeholder="affiliation number" 
             defaultValue={AfiliationNumber}></input>
            
            <input type="text" name="ClassesFrom" placeholder="classes from" 
             defaultValue={ClassesFrom}></input>
            
            <input type="text" name="ClassesTo" placeholder="classes to" 
             defaultValue={ClassesTo}></input>
            
            <input type="text" name="Mol" placeholder="Mol" 
             defaultValue={Mol}></input>
            
            <input type="text" name="streamsOffered" placeholder="streams offered" 
             defaultValue={streamsOffered}></input>

            <textarea placeholder="About School" name="AboutSchool" defaultValue={AboutSchool}>
             </textarea>
            
            <input type="text" name="facilities" placeholder="facilities" 
             defaultValue={facilities}></input>

            <input type="text" name="events" placeholder="events" 
             defaultValue={events}></input>

            <input type="text" name="managemnet" placeholder="managemnet" 
             defaultValue={managemnet}></input>

            <input type="text" name="gender" placeholder="gender" 
             defaultValue={gender}></input>

            <input type="text" name="AccStatus" placeholder="account status" 
             defaultValue={AccStatus}></input>

            <input type="text" name="schoolArea" placeholder="school area" 
             defaultValue={schoolArea}></input>

            <input type="text" name="facultyStrength" placeholder="faculty strength" 
             defaultValue={facultyStrength}></input>

            <input type="text" name="studentStrength" placeholder="student strength" 
             defaultValue={studentStrength}></input>

            <input type="text" name="des" placeholder="destination" 
             defaultValue={des}></input>

            <input type="text" name="blogPosts" placeholder="blog posts" 
             defaultValue={blogPosts}></input>

            <input type="text" name="Gallery" placeholder="gallery" 
             defaultValue={Gallery}></input>

            <input type="text" name="Apply" placeholder="apply" 
             defaultValue={Apply}></input>

            <button className={`Add-new_university-form-${buttonText}`}>{buttonText}</button>
        </form>
    </div>
  )
}

export default EditSelectedSchool

