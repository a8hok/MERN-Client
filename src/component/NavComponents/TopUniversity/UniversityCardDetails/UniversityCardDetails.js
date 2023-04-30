import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../../../Navbar/navbar";
import "./UniversityCardDetails.css";
import EditIcon from '@mui/icons-material/Edit';
import UniLogo from "./Img/logo.png";
import eduLogo from "./Img/educationlogo.png";
import EditSelectedUniversity from "../../../Edit/EditUniversity";

function UniversityCardDetail() {
  const location = useLocation();
  const detail = location.state.state;

  const [showData, setShowData] = useState(0)

  const [coursesOffered, setCoursesOffered] = useState([]);

  useEffect(() => {
    setCoursesOffered(detail?.coursesOffered)
  }, [detail])

  return (
    <>
      <Navbar />
        <div>
          <div className="clg-heading">
          <div className="clg-head-top">
            <div className="clg-name-head">
              <img className="clg-name-logo" src={detail?.Logo}></img>
            </div>
            <div className="clg-name">{detail?.Name_1}</div>
            <div className="clg-city">
              {detail?.City},{detail?.District},{detail?.State}
            </div>
          </div>
          <div id="details-div">
            <div className="clg-head-second">
              <img className="clg-img" src={detail?.Image}></img>
              <div className="clg-pharmacy">
                <h3 className="clg-topic">Pharmacy</h3>
              </div>
              <div className="clg-type">
                {" "}
                <img className="uni-logo" src={UniLogo}></img>
                {detail?.Type}
              </div>
              <div className="clg-co-education">
                <img className="edu-logo" src={eduLogo}></img>
                <h3 className="clg-topic">Co-Education</h3>
              </div>
              <div className="clg-year">
                <h3 className="clg-topic">Year Of Starting</h3>
                <br></br>
                {detail?.Yrofestab}
              </div>
              <div className="clg-campus">
                <h3 className="clg-topic">Campus Area</h3>
                <br></br>
                14
              </div>
              <div className="clg-faculty">
                <h3 className="clg-topic">Faculty Strength</h3>
                <br></br>
                140
              </div>
              <div className="clg-student">
                <h3 className="clg-topic">Student Strength</h3>
                <br></br>
                1440
              </div>
            </div>
            <div className="clg-sec-head">
              <div className="clg-sec-row">
                {/* <button className="clg-detail-button" onClick={() => setShowData(0)}>About</button> */}
                <button className="clg-detail-button" onClick={() => setShowData(1)}>Programmes Offered & Fee</button>
                <button className="clg-detail-button">Placements</button>
                <button className="clg-detail-button">Infrastructure</button>
                <button className="clg-detail-button">Entrance Test</button>
                <button className="clg-detail-button">Rating</button>
              </div>
            </div>
          </div>
          </div>

          <div className="about_university_Card">
            {showData === 0 && <p>{detail.AboutCollege}</p>}
            {showData === 1 &&
            <table className="table-of_Coursesoffered">
              <thead className="table-head-and_body">
                <tr className="table_Contents">
                  <th>SNO</th>
                  <th>Course code</th>
                  <th>Course Name</th>
                </tr>
              </thead>
            {coursesOffered.map((i, index) => (
              <tbody key={index} className="table-head-and_body">
                <tr className="table_Contents">
                  <td>{index+1}</td>
                  <td>{i?.value}</td>
                  <td>{i?.label}</td>
                </tr>
              </tbody>))}
            </table>
            }
          </div>
      </div>
      {/* {showEdit && <EditSelectedUniversity/>} */}

    </>
  );
}

export default UniversityCardDetail;
