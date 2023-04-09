import React, {useState} from "react";
// import "./UniversityCard.css";
import { useNavigate, useLocation } from "react-router-dom";
import EditSelectedCollege from "../../../Edit/EditCollege";

function CollageCard({ colInfo, editBtn }) {
  const [showEdit, setShowEdit] = useState(false);
  console.log("colInfo", colInfo)
  const navigate = useNavigate();
  const location = useLocation().state;
  const handelDetail = (e) => {
    navigate("/colleges/details", { state: { state: colInfo } });
  };
  const showEditForm = () => {
    setShowEdit(true)
  }
  return (
    <>
    {!!showEdit ? <EditSelectedCollege value={colInfo}/>:
      <>
    {editBtn === false && 
          <label onClick={showEditForm} className="edit-Icon-Card-Label">
            <p className="edit-Icon-Card" title="edit details">Edit</p>
          </label>
            }
    <div className="uni-card-container" onClick={handelDetail}>
      <div className="uni-img-container">
        <img src={colInfo?.Image_Gallery}></img>
      </div>
      <div className="uni-content-container">
        <div className="uni-title">
          <a href={colInfo?.url} target="_blank">
            {colInfo?.College_Name}
          </a>
        </div>
        <div className="uni-place-container">
          <p className="uni-place">
            <span className="uni-district">{colInfo?.college_District}</span>-
            <span className="uni-state">{colInfo?.State}</span>
          </p>
        </div>
        <div className="uni-other-container">
          <span className="uni-Yrofestab">{colInfo?.Yrofestab}</span>
          <span className="uni-type">{colInfo?.Type}</span>
        </div>
        <div className="uni-description"></div>
      </div>
      <div className="uni-stats-container">
        <div className="uni-stat-title"></div>
        <div className="uni-stat-value"></div>
      </div>
    </div>
    </>}
    </>
  );
}

export default CollageCard;
