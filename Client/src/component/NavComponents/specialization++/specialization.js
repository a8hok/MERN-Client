import { useState } from "react"
import Navbar from "../../Navbar/navbar"
import Footer from "../../Footer/footer"
import "./css/specialization.css"
import RightSideBar from "../RightSideBar"

const Specialization = () => {
    const options = [
        "Agriculture",

        "Architecture",

        "Arts & Science",

        "Commerce",

        "Education",

        "Engineering",

        "Hospitality",

        "Journalism & Media",

        "Law",

        "Management",

        "Medical",

        "Paramedical"
    ]
    
    const [state, setState] = useState()

    const settingState = (e) => {
        setState(e.target.value)
    }
    return (
        <>
        <Navbar/>
        <div className="specialization-page-container">
            <div className="specialization-details">
                {state ? <div className="specialization-details-card">
                    <p><strong>Specialization : </strong>{state}</p>
                </div> : <h1>select the required specialization from the right dashboard</h1>}
            </div>
            <RightSideBar options={options}/>
        </div>
        <Footer/>
        </>
    )
}

export default Specialization
