import React from "react";
import courseimage from "../Landing/Img/Rectangle-15.png";
import "./detailPage.css";
import { course } from '../../Store/Slice/DetailPageSlice.js';
import {useEffect} from "react"
import { useDispatch,useSelector } from 'react-redux';
import { render } from "react-dom";
function DetailPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(course());
  }, []);
  return (
    <div>
      <div className="navbar-container" >
      </div>
      <div className="mainbody-container">
        <div className="header-container">
          <h1 className="title">Java</h1>
          <p className="content-container">
            Sos pipoda bärar. Spegt pseudon dorade. Töngar podyda potinat. Ove
            Holm niled. Multirade lädirade lell. Kode jäkiren, Lina Bengtsson.
            Robothandel pevis: och al.lorem ipsum dipse ulti lorem iupsumoch al.lorem ipsum dipse ulti lorem iupsum
          </p>
          <img className="detailimage" src={courseimage} />
          <p className="subcontent-container">
            Sos pipoda bärar. Spegt pseudon dorade. Töngar podyda potinat. Ove
            Holm niled. Multirade lädirade lell. Kode jäkiren, Lina Bengtsson.
            Robothandel pevis: och al.lorem ipsum dipse ulti lorem iupsum Sos
            pipoda bärar. Spegt pseudon dorade. Töngar podyda potinat. Ove Holm
            niled. Multirade lädirade lell. Kode jäkiren, Lina Bengtsson.
            Robothandel pevis: och al.lorem ipsum dipse ulti lorem iupsum Sos
            pipoda bärar. Spegt pseudon dorade. Töngar podyda potinat. Ove Holm
          </p>
        </div>

        <div className="course-container">
          <p><a href="">Chapters</a></p>
          <p><a href="">Machines</a></p>
          <p><a href="">Electrical</a></p>
          <p><a href="">Java</a></p>
          <p><a href="">C++</a></p>
          <p><a href="">Python</a></p>
          <p><a href="">Javascript</a></p>
          <p><a className="course-seemore-btn " href="">SeeMore</a>
          </p>
        </div>
      </div>

    </div>

  );
}

export default DetailPage;
