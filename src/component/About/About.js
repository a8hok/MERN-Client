import React from "react";
import Navbar from "../Navbar/navbar";
import Footer from "../Footer/footer";
import './About.css'

function About() {
  return (
    <>
      <Navbar />
      <div className="about-container">
        LearnPlusPlus is an information-based, interactive digital platform that <br/>
        offers educational services to help students of all levels to explore <br/>
        and design their own learning path to realize their goals. LearnPlusPlus <br/>
        team is based in Coimbatore, TamilNadu. We offers comprehensive and <br/>
        up-to-date information about, Indian Universities, Colleges, Schools, <br/>
        Competitive Examinations, Admission Entrance Tests, and other vital <br/>
        learning and skill-building services.
      </div>
      <Footer />
    </>
  );
}

export default About;
