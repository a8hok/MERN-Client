import React, { useState } from "react"
import "./css/category.css"
import Navbar from "../../Navbar/navbar"
import Footer from "../../Footer/footer"
import RightSideBar from "../RightSideBar"

const Category = () => {
    const options = [
        "Agriculture and Allied Disciplines",

        "Architecture, Planning and Design",

        "Arts, Humanities and Social Sciences",

        "Business Administration, Commerce, Management and Finance",

        "Education",

        "Engineering and Technology",

        "Fine Arts, Performing Arts, Visual Arts and Applied Arts",

        "Hotel Management, Hospitality, Tourism and Travel",

        "Journalism, Mass Communication and Media",

        "Law",

        "Library and Information Sciences",

        "Medical and Surgery",

        "Rehabilitation Sciences",

        "Sciences",

        "Vocational Education",
    ]
    
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

export default Category
