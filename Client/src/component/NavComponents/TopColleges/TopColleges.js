import React, { useState } from "react"
import Navbar from "../../Navbar/navbar"
import Footer from "../../Footer/footer"
import RightSideBar from "../RightSideBar"

const TopColleges = () => {
    const options = [
        "Top Arts, Science & Commerce Colleges",
        "Top Engineering Colleges",
        "Top Pharmacy Colleges",
        "Top Medical Colleges",
        "Top G Dental Colleges",
        "Top Law Colleges",
        "Top Architecture Colleges",
      ];
    
    const [state, setState] = useState()

    const settingState = (e) => {
        setState(e.target.value)
    }
    return (
        <>
        <Navbar/>
        <div className="category-page-container">
            <div className="category-details">
                {state ? <div className="category-details-card">
                    <p><strong>category : </strong>{state}</p>
                </div> : <h1>select the required category from the right dashboard</h1>}
            </div>
            <RightSideBar options={options}/>
        </div>
        <Footer/>
        </>
    )
}

export default TopColleges
