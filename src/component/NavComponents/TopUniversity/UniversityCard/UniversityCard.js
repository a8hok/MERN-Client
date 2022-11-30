import React, {useState} from "react";
import "./UniversityCard.css";
import { useNavigate, useLocation } from "react-router-dom";
import EditSelectedUniversity from "../../../Edit/EditUniversity";

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
    {editBtn && 
          <label onClick={showEditForm} className="edit-Icon-Card-Label">
            <p className="edit-Icon-Card" title="edit details">Edit</p>
          </label>
            }
    <div className="uni-card-container" onClick={handelDetail}>
      <div className="uni-img-container">
        <img src={uniInfo.Image}></img>
      </div>
      <div className="uni-content-container">
        <div className="uni-title">
          <a href={uniInfo.url} target="_blank">
            {uniInfo.Name_1}
          </a>
        </div>
        <div className="uni-place-container">
          <p className="uni-place">
            <span className="uni-district">{uniInfo.District}</span>-
            <span className="uni-state">{uniInfo.State}</span>
          </p>
        </div>
        <div className="uni-other-container">
          <span className="uni-Yrofestab">{uniInfo.Yrofestab}</span>
          <span className="uni-type">{uniInfo.Type}</span>
        </div>
        <div className="uni-description"></div>
      </div>
      <div className="uni-stats-container">
        <div className="uni-stat-title"></div>
        <div className="uni-stat-value"></div>
      </div>
    </div>
    </>
    }
    </>
  );
}

export default UniversityCard;
