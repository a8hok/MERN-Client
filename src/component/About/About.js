import React from "react";
import Navbar from "../Navbar/navbar";
import Footer from "../Footer/footer";
import './About.css';
import Logo from "./img/Learn.svg"

function About() {
  return (
    <>
      <Navbar />
      <div className="all-about-container">
        <div className="all-img-container">
          <img src={Logo} alt="" className="all-img"/>
        </div>
        <div className="about-right-container">
          <div className="about-container">
            LearnPlusPlus is an information-based, interactive digital platform that
            offers educational services to help students of all levels to explore
            and design their own learning path to realize their goals. LearnPlusPlus
            team is based in Coimbatore, TamilNadu. We offers comprehensive and
            up-to-date information about, Indian Universities, Colleges, Schools,
            Competitive Examinations, Admission Entrance Tests, and other vital
            learning and skill-building services.
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
