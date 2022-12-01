import React from "react";
import Navbar from "../Navbar/navbar";
import Footer from "../Footer/footer";
import './About.css';
import Logo from "./img/existLogo.png";

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
            <h1>LPP Learning Technology Solutions - LearnPlusPlus.com
              <br></br>
                  THE COMPREHENSIVE DIGITAL EDUCATIONAL PLATFORM
            </h1>
              <p>
              Welcome to the home page of Learning Technology 
              Solutions Private Limited - LearnPlusPlus.com, 
              a knowledge-based digital technology platform 
              offering educational products and services to 
              enable learners at all levels to explore and 
              craft their learning paths.
              </p>
            <p>
              We serve the educational software industry with 
              products and services including online programme 
              management, training, and student services. 
              Primarily we assist students pursuing or planning 
              to pursue higher education in finding suitable 
              schools/ colleges/ universities and programmes 
              and provide content for learning and competitive 
              examinations. Further, the industry can also search 
              our portal for competent learners to support with their 
              internship and placement offers.
            </p>    
            <p>
              After 12th grade, every learner is engaged in 
              identifying a suitable programme of study to 
              continue learning and build a better career. 
              Many learners are unaware of the options open 
              to them based on their interests and hence face 
              difficulty in choosing the programmes or courses 
              they want to pursue after the 12th grade. 
              It is always preferable to understand various 
              facts of relevant programmes of study based 
              on one’s interest and then choose a discipline 
              based on the learners’ preferences and abilities. 
              This kind of career planning will help to choose 
              the correct programme, and this will ensure 
              learners achieve their life goals.
            </p>      
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
