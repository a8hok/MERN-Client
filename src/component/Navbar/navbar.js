import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { selectTypeAction } from "../../Store/Slice/QuizType";

import "./landingNav.css";
import Logo from "../About/img/existLogo.png";
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import Dropdown from "./Dropdown/Dropdown";

const Navbar = ({ profileInfo }) => {
  const navRef = useRef();

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const selectSkill = (e) => {
    dispatch(selectTypeAction.typeSkill())
    navigate("/quiz")
  }

  const selectAcademics = (e) => {
    dispatch(selectTypeAction.typeAcademic())
    navigate("/quiz")
  }

  return (
    <header className="navbars">
      <div className="top-navmenus">
        <nav ref={navRef}>
          <a href="/about">About us</a>
          <a href="/#">Study Abroad</a>
          <a href="/#">Announcement</a>
          <a href="/blogs">Blog</a>
          <a href="/#">Ask a Question</a>
          <a href="/login">Login</a>
          <a href="/signup">Register</a>
          <a href="#">WhatsApp: +91-94421 10920</a>
        </nav>
      </div>
      <div className="mid-navmenus">
        <Link to="/landing" className="logo-img-contain">
          <img
            className="AcademyLogo"
            src={Logo}
            alt="no img found"
          ></img>
        </Link>
        <nav ref={navRef}>
          <a href="/#">Home</a>
          <a href="/#">Skills++</a>
          <a href="/content">Concepts++</a>
          <a href="/#">Career++</a>
          <a href="/entrance">Entrance++</a>
          <a href="/#">Perceptions++</a>
          <a href="/#">Competition++</a>
          <div className="dropdown">
          <a href="/#">Quiz</a>
            <div className="dropdown-content">
              <a onClick={selectSkill}>Skill</a>
              <a onClick={selectAcademics}>Academic</a>
            </div>
          </div> 
          
          {profileInfo && <Dropdown profileInfo={profileInfo}></Dropdown>}

        </nav>
      </div>
      <div className="bot-navmenus">
        <nav ref={navRef}>
          <div className="inside-nav-option hidden-navbar-options ">
          <a href="/about">About us</a>
          <a href="/#">Study Abroad</a>
          <a href="/#">Announcement</a>
          <a href="/blogs">Blog</a>
          <a href="/#">Ask a Question</a>
          <a href="/login">Login</a>
          <a href="/signup">Register</a>
          </div>
          <hr className="hidden-divider"></hr>
          <div className="inside-nav-option hidden-navbar-options">
          <a href="/#">Home</a>
          <a href="/#">Skills++</a>
          <a href="/content">Concepts++</a>
          <a href="/#">Career++</a>
          <a href="/entrance">Entrance++</a>
          <a href="/#">Perceptions++</a>
          <a href="/#">Competition++</a>
          <div className="dropdown">
          <a href="/#">Quiz</a>
            <div className="dropdown-content">
              <a onClick={selectSkill}>Skill</a>
              <a onClick={selectAcademics}>Academic</a>
            </div>
          </div> 
          </div>
          <hr className="hidden-divider"></hr>
          <div className="inside-nav-option visible-nav-option">
            <a href="/categories">Programme++</a>
            <a href="/specialization">Specialization++</a>
            <a href="/universities">Top Universities</a>
            <a href="/colleges">Top Colleges</a>
            <a href="/schools">Top Schools</a>
            <a href="/#">Top Placements</a>
            <a href="/#">Top Events</a>
            <a href="/resources">Resources</a>
            <a href="/internship">Internships/Jobs</a>
          </div>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <CloseIcon />
          </button>
        </nav>
      </div>

      <button className="nav-btn" onClick={showNavbar}>
        <MenuIcon />
      </button>
    </header>
  );
};

export default Navbar;
