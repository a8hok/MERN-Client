import React, {useState, useEffect} from 'react'
import campus from "./Img/campus.png";
import graduate from "./Img/graduate.png";
import { useNavigate } from "react-router-dom";
import "./MiniNotes.css";

const MiniNotes = () => {

const navigate = useNavigate();

const images = [
        { src: graduate, alt: 'Image 1' }
    ];

const navigateLogin = () => {
    navigate("/signup");
};

  return (
    <div className="MiniNotes_main-Container">
        <div className="MiniNotes-Container">
            <div className="slider">
            {images.map((image, index) => (
                <img
                    key={index}
                    src={image.src}
                    alt={image.alt}
                    />
                ))}
            </div>
            <div className="mini_aboutus-container">
                <h1>We make you Learn ++</h1>
                    <p>
                        We serve the educational software industry 
                        with products and services including online 
                        programme management, training, and student services. 
                        Primarily we assist students pursuing or planning to 
                        pursue higher education in finding suitable 
                        schools/ colleges/ universities and programmes and 
                        provide content for learning and competitive 
                        examinations. Further, the industry can also search 
                        our portal for competent learners to support with their 
                        internship and placement offers.
                    </p>
                    {/* <div> */}
                        <button onClick={navigateLogin} className="mini_notes-button">Join Us</button>
                    {/* </div> */}
            </div>
        </div>
    </div>
  )
}

export default MiniNotes;
