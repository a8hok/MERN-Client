import React, {useState} from "react";
import "./UniversityCard.css";
import { useNavigate, useLocation } from "react-router-dom";
import EditSelectedUniversity from "../../../Edit/EditUniversity";
import subBuilding from "../../../Landing/Img/substitute.png"

function UniversityCard({ uniInfo, editBtn }) {

  const navigate = useNavigate();
  const [showEdit, setShowEdit] = useState(false);
  const location = useLocation().state;

const showEditForm = () => {
  setShowEdit(true)
}

  const handelDetail = (e) => {
    navigate("/universities/details", { state: { state: uniInfo } });
  };
  
  return (
    <>
    {!!showEdit ? <EditSelectedUniversity value={uniInfo}/>:
    <>
    {editBtn === false && 
          <label onClick={showEditForm} className="edit-Icon-Card-Label">
            <p className="edit-Icon-Card" title="edit details">Edit</p>
          </label>
            }
    <div className="uni-card-container" onClick={handelDetail}>
      <div className="uni-img-container">
        <img src={uniInfo?.Image ? uniInfo?.Image : subBuilding}></img>
      </div>
      <div className="uni-content-container">
        <div className="uni-title">
          <a href={uniInfo?.url} target="_blank">
            {uniInfo?.Name_1}
          </a>
        </div>
        <div className="uni-place-container">
          <p className="uni-place">
            <span className="uni-district">{uniInfo?.District}</span>-
            <span className="uni-state">{uniInfo?.State}</span>
          </p>
        </div>
        <div className="uni-other-container">
          <span className="uni-Yrofestab">{uniInfo?.Yrofestab}</span>
          <span className="uni-type">{uniInfo?.Univ_name}</span>
        </div>
        <div className="uni-description">
          {uniInfo?.Specialised === "No" ? `Specialisation: None` : `Specialisation: ${uniInfo?.Specialised}`}
        </div>
      </div>
    </div>
    </>
    }
    </>
  );
}

export default UniversityCard;
