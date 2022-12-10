import React, { useEffect } from 'react';

import { useDispatch, useSelector } from "react-redux";

import { useNavigate, useLocation } from 'react-router-dom';

import "./Internship.css";

import Navbar from '../../Navbar/navbar';

import Footer from '../../Footer/footer';

const Internship = () => {

const dispatch = useDispatch();

const navigate = useNavigate();

const location = useLocation();

const { loginData, loading } = useSelector((state) => state.loginInfo);

const handleInternshipClick = () => {
    if(loginData?.message === "Login success"){
        navigate("/categories")
    }else if(loginData?.message !== "Login success") {
        navigate("/login")
    }
}

useEffect(() => {
    if(location.state === null){
        location.state = "give this value"
    }
}, [location])

const loginClick = () => {
    navigate("/login")
}

const signUpClick = () => {
    navigate("/signup")
}

  return (
    <>
    <Navbar/>
        <div className="internship_Container">
            <div className="internship-Button_Container">
                <button onClick={handleInternshipClick}>Apply/post Internship</button>
                <button>Apply/post Job</button>
                <button onClick={signUpClick}>Register</button>
                <button onClick={loginClick}>Login</button>
            </div>
            <div className="internship_About-Container">
                <p>LearnPlusPlus Internship Notice Board allows 
                    students from all academic disciplines to 
                    register and submit their requests 
                    to industry. This platform connects 
                    industry with students looking for 
                    internships in a particular field of 
                    study and helps them with their track-based 
                    projects.</p>
            </div>
            <div className="internship-All-button_Container">
                <div className="internship-Mid-Button_Container">
                    <button>Internship/Jobs</button>
                    <button>Domain</button>
                    <button>Track</button>
                    <button>Location</button>
                    <button>Search</button>
                </div>
            </div>
            <section className="internship_Details-Container">
                <div className="internship_Left-Details-Floater"></div>
                <div className="internship_Right-Details"></div>
            </section>
        </div>
    <Footer/>
    </>
  )
}

export default Internship