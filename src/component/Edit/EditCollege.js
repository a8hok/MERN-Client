import React, {useState, useEffect} from "react";

import {axio} from "../../Config/Config"

const EditSelectedCollege = ({value}) => {

    const [buttonText, setButtonText] = useState("save")

    const handletheSubmit = (e) => {
        e.preventDefault()
        const element = e.target.elements;
        const values = { 
            SNo: element[0].value,
            c_id: element[1].value,
            State: element[2].value,
            college_District: element[3].value,
            Yrofestab: element[4].value,
            College_Name: element[5].value,
            Specialisation: element[6].value,
            Type: element[7].value,
            url: element[8].value,
            Phone: element[9].value,
            Email: element[10].value,
            location_coordinates: element[11].value,
            Image_Gallery: element[12].value,
            Logo: element[13].value,
            About: element[14].value,
            Updates: element[15].value,
            Programmes_Offered: element[16].value,
            Admissions: element[17].value,
            Placement: element[18].value,
            admissio_Test: element[19].value,
            Perceptions: element[20].value,
            NAAC_Grade_Validity: element[21].value,
            Ranking: element[22].value,
            fB: element[23].value,
            tR: element[24].value,
            yT: element[25].value,
            iG: element[26].value,
            LinkedIn: element[27].value
        }
        setButtonText("saved")

        const res = axio.put(`/api/edit-collage`, {
          values
        }).catch((err) => console.log(err,"editing error"))
        return res.data
    }

    const {SNo, c_id, State, college_District, Yrofestab, College_Name, Specialisation, Type, url, Phone, Email, location_coordinates, Image_Gallery, Logo, About, Updates, Programmes_Offered, Admissions, Placement, admissio_Test, Perceptions, NAAC_Grade_Validity, Ranking, fB, tR, yT, iG, LinkedIn
    } = value

  return (
    <div className="Add-new_university-form-container">
        <form className="Add-new_university-form"onSubmit={handletheSubmit}>
            <h1>Edit Universities</h1>

            <input type="Number" name="SNo" placeholder="SNo" 
             defaultValue={SNo} disabled></input>

            <input type="text" name="c_id" placeholder="c_id" 
             defaultValue={c_id} disabled></input>
          
            <input type="text" name="State" placeholder="State" 
             defaultValue={State}></input>

            <input type="text" name="college_District" placeholder="college_District" 
             defaultValue={college_District}></input>

            <input type="Number" name="Yrofestab" placeholder="year of establishment" 
             defaultValue={Yrofestab}></input>

            <input type="text" name="College_Name" placeholder="College_Name" 
             defaultValue={College_Name}></input>

            <input type="text" name="Specialisation" placeholder="Specialisation" 
             defaultValue={Specialisation}></input>
          
            <input type="text" name="Type" placeholder="Type of University" 
             defaultValue={Type}></input>

            <input type="text" name="url" placeholder="url" 
             defaultValue={url}></input>
            
            <input type="Number" name="Phone" placeholder="phone number" 
             defaultValue={Phone}></input>

            <input type="email" name="Email" placeholder="Email number" 
             defaultValue={Email}></input>
          
            <input type="text" name="location_coordinates" placeholder="location coordinates" 
             defaultValue={location_coordinates}></input>

            <input type="text" name="Image_Gallery" placeholder="Image Gallery" 
             defaultValue={Image_Gallery}></input>

            <input type="text" name="Logo" placeholder="Logo" 
             defaultValue={Logo}></input>
            
            <textarea placeholder="About the Institution" name="About" 
             defaultValue={About} className="textarea-college_about"></textarea>

            <input type="text" name="Updates" placeholder="updates" 
             defaultValue={Updates}></input>

            <input type="text" name="Programmes_Offered" placeholder="programmes offered" 
             defaultValue={Programmes_Offered}></input>

            <input type="text" name="Admissions" placeholder="Admissions" 
             defaultValue={Admissions}></input>
            
            <input type="text" name="Placement" placeholder="Placement" 
             defaultValue={Placement}></input>
            
            <input type="text" name="admissio_Test" placeholder="admission Test" 
             defaultValue={admissio_Test}></input>
            
            <input type="text" name="Perceptions" placeholder="Perceptions" 
             defaultValue={Perceptions}></input>
            
            <input type="text" name="NAAC_Grade_Validity" placeholder="NAAC Grade Validity" 
             defaultValue={NAAC_Grade_Validity}></input>
            
            <input type="text" name="Ranking" placeholder="Ranking" 
             defaultValue={Ranking}></input>
            
            <input type="text" name="fB" placeholder="fB" 
             defaultValue={fB}></input>
            
            <input type="text" name="tR" placeholder="tR" 
             defaultValue={tR}></input>

            <input type="text" name="yT" placeholder="yT" 
             defaultValue={yT}></input>

            <input type="text" name="iG" placeholder="iG" 
             defaultValue={iG}></input>

            <input type="text" name="LinkedIn" placeholder="LinkedIn" 
             defaultValue={LinkedIn}></input>
            
            <button className={`Add-new_university-form-${buttonText}`}>{buttonText}</button>
        </form>
    </div>
  )
}

export default EditSelectedCollege

