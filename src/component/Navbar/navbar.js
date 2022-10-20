import { Link } from "react-router-dom";
import { useRef } from "react";
import "./landingNav.css";
import Logo from "../About/img/Learn.svg"
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import Dropdown from "./Dropdown/Dropdown";

const Navbar = ({ profileInfo }) => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header className="navbars">
      <div className="top-navmenus">
        <nav ref={navRef}>
          <a href="/about">About us</a>
          <a href="/#">Study Abroad</a>
          <a href="/#">Announcement</a>
          <a href="/#">Forum</a>
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
          <a href="/#">Concepts++</a>
          <a href="/#">Career++</a>
          <a href="/#">Entrance++</a>
          <a href="/#">Perceptions++</a>
          <a href="/#">Competition++</a>
          <a href="/quiz">Quiz</a>
          {profileInfo && <Dropdown profileInfo={profileInfo}></Dropdown>}

          {/* <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button> */}
        </nav>
      </div>
      <div className="bot-navmenus">
        <nav ref={navRef}>
          <div className="inside-nav-option hidden-navbar-options ">
          <a href="/about">About us</a>
          <a href="/#">Study Abroad</a>
          <a href="/#">Announcement</a>
          <a href="/#">Forum</a>
          <a href="/#">Ask a Question</a>
          <a href="/login">Login</a>
          <a href="/signup">Register</a>
          </div>
          <hr className="hidden-divider"></hr>
          <div className="inside-nav-option hidden-navbar-options">
          <a href="/#">Home</a>
          <a href="/#">Skills++</a>
          <a href="/#">Concepts++</a>
          <a href="/#">Career++</a>
          <a href="/#">Entrance++</a>
          <a href="/#">Perceptions++</a>
          <a href="/#">Competition++</a>
          <a href="/quiz">Quiz</a>
          </div>
          <hr className="hidden-divider"></hr>
          <div className="inside-nav-option visible-nav-option">
            <a href="/categories">category++</a>
            <a href="/specialization">Specialization++</a>
            <a href="/universities">Top Universities</a>
            <a href="/colleges">Top Colleges</a>
            <a href="/#">Top Schools</a>
            <a href="/#">Top Placements</a>
            <a href="/#">Top Events</a>
            <a href="/#">Resources</a>
            <a href="/#">Internships/Jobs</a>
          </div>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <CloseIcon />
          </button>
        </nav>
      </div>

      {/* <div onClick={logout}>
          <button className='Logout-btn' id="logout-button">Log out</button>
        </div> */}

      <button className="nav-btn" onClick={showNavbar}>
        <MenuIcon />
      </button>
    </header>
  );
};

export default Navbar;
