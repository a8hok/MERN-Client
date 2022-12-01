import React, {useState} from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import EditSelectedSchool from "../../../Edit/EditSchool";

function SchoolsCard({ SchoolInfo, editBtn }) {
  const [showEdit, setShowEdit] = useState(false);
  const navigate = useNavigate();
  const location = useLocation().state;
  const handelDetail = (e) => {
    navigate("/schools/details", { state: { state: SchoolInfo } });
  };
  const showEditForm = () => {
    setShowEdit(true)
  }
  return (
    <>
    {!!showEdit ? <EditSelectedSchool value={SchoolInfo}/>:
    <>
    {editBtn && 
          <label onClick={showEditForm} className="edit-Icon-Card-Label">
            <p className="edit-Icon-Card" title="edit details">Edit</p>
          </label>
            }
    <div className="uni-card-container" onClick={handelDetail}>
      <div className="uni-img-container">
        <img src={SchoolInfo?.Gallery}></img>
      </div>
      <div className="uni-content-container">
        <div className="uni-title">
          <a href={SchoolInfo?.url} target="_blank">
            {SchoolInfo?.name}
          </a>
        </div>
        <div className="uni-place-container">
          <p className="uni-place">
            <span className="uni-district">{SchoolInfo?.district}</span>-
            <span className="uni-state">{SchoolInfo?.state}</span>
          </p>
        </div>
        <div className="uni-other-container">
          <span className="uni-Yrofestab">{SchoolInfo?.estdYr}</span>
          <span className="uni-type">{SchoolInfo?.AccStatus}</span>
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

export default SchoolsCard;
