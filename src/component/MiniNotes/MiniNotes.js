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
                        Welcome to highereducationupdates.com©, your one-stop destination for all your higher education needs. We are a part of LPP Learning Technology Solutions Pvt. Ltd. and are committed to promoting transparency in the quality of education offered by institutions and universities in India and abroad.
                    </p>
                    <p>
                        Our mission is to empower prospective students with comprehensive and up-to-date information about the various career options available in India and around the world. In today's competitive world, education and career choices are crucial to success, and we strive to provide accurate and reliable information that can help students make informed decisions about their future.
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
