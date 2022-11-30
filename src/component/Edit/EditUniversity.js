import React, {useState, useEffect} from "react";

import {axio} from "../../Config/Config"

const EditSelectedUniversity = ({value}) => {

    const [buttonText, setButtonText] = useState("save")

    const handletheSubmit = (e) => {
        e.preventDefault()
        const element = e.target.elements;
        const values = { 
          S_No : element[0].value,
          State : element[1].value,
          Type : element[2].value,
          Yrofestab : element[3].value,
          Location_Coordinates : element[4].value,
          Name : element[5].value,
          Name_1 : element[6].value,
          City : element[7].value,
          District : element[8].value,
          PIN : element[9].value,
          url : element[10].value,
          Phone : element[11].value,
          Village : element[12].value,
          Email : element[13].value,
          Image : element[14].value,
          Logo : element[15].value,
          AboutCollege : element[16].value,
        }
        setButtonText("saved")

        const res = axio.put(`/api/edit-universities`, {
          values
        }).catch((err) => console.log(err,"editing error"))
        return res.data
    }

    const {S_No, State, Type, Yrofestab, Location_Coordinates, Name, Name_1, City, District, PIN, url, Phone, Village, Email, Image, Logo, AboutCollege} = value

  return (
    <div className="Add-new_university-form-container">
        <form className="Add-new_university-form"onSubmit={handletheSubmit}>
            <h1>Edit Universities</h1>
            
            <input type="Number" name="S_No" placeholder="S_No" 
             defaultValue={S_No} disabled></input>
          
            <input type="text" name="State" placeholder="State" 
             defaultValue={State}></input>
          
            <input type="text" name="Type" placeholder="Type of University" 
             defaultValue={Type}></input>
          
            <input type="Number" name="Yrofestab" placeholder="year of establishment" 
             defaultValue={Yrofestab}></input>
          
            <input type="text" name="Location_Coordinates" placeholder="location coordinates" 
             defaultValue={Location_Coordinates}></input>
          
            <input type="text" name="Name" placeholder="Name" 
             defaultValue={Name}></input>
          
            <input type="text" name="Name_1" placeholder="Name_1" 
             defaultValue={Name_1}></input>
            
            <input type="text" name="City" placeholder="City" 
             defaultValue={City}></input>
            
            <input type="text" name="District" placeholder="District" 
             defaultValue={District}></input>
            
            <input type="Number" name="PIN" placeholder="PIN" 
             defaultValue={PIN}></input>
            
            <input type="text" name="url" placeholder="url" 
             defaultValue={url}></input>
            
            <input type="Number" name="Phone" placeholder="phone number" 
             defaultValue={Phone}></input>
            
            <input type="text" name="Village" placeholder="village" 
             defaultValue={Village}></input>
            
            <input type="email" name="Email" placeholder="email" 
             defaultValue={Email}></input>
            
            <input type="text" name="Image" placeholder="image url" 
             defaultValue={Image}></input>
            
            <input type="text" name="Logo" placeholder="logo" 
             defaultValue={Logo}></input>
            
            <textarea placeholder="About the Institution" name="AboutCollege" 
             defaultValue={AboutCollege} className="textarea-college_about"></textarea>
            
            <button className={`Add-new_university-form-${buttonText}`}>{buttonText}</button>
        </form>
    </div>
  )
}

export default EditSelectedUniversity

