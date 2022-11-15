import React, { useState } from "react";
import "./EventUpdate.css";
import { PostEventData } from "../../Store/Slice/AddEventSlice";
import { axio } from "../../Config/Config";
import axios from "axios";
import file from "./img/pngtree.jpg";
import { useLocation } from "react-router-dom";

function EventUpdate() {
  const [NewTitle, setNewTitle] = useState("");
  const [NewDiscription, setNewDiscription] = useState("");
  const [NewDate, setNewDate] = useState("");
  const [NewTime, setNewTime] = useState("");
  const location = useLocation();

  const UpdateEventData = () => {
    axios.put(`api/update-event`, {
      eventId: location.state.blockDetails._id,
      NewTitle: NewTitle,
      NewDiscription: NewDiscription,
      NewDate: NewDate,
      NewTime: NewTime,
    });
  };

  return (
    <>
      <div>
        <form onSubmit={UpdateEventData}>
          <div className="update-content-container">
            <input
              className="update-title"
              type="text"
              placeholder="Enter the Title "
              onSubmit={(event) => {
                setNewTitle(event.target.value);
              }}
            ></input>

            <input
              className="update-discription"
              type="text"
              placeholder="Enter the Discription"
              onSubmit={(event) => {
                setNewDiscription(event.target.value);
              }}
            ></input>

            <input
              className="update-date"
              type="date"
              placeholder="Enter the Date"
              onSubmit={(event) => {
                setNewDate(event.target.value);
              }}
            ></input>

            <input
              className="update-time"
              type="time"
              placeholder="Enter the Time"
              onSubmit={(event) => {
                setNewTime(event.target.value);
              }}
            ></input>

            <label className="add-new-profile-pic">
              <img
                src={file}
                alt="no img found"
                className="profile-file-img"
              ></img>
              <label className="upload-pic-txt">
                Upload PNG,JPEG,JPG,SVG only
              </label>
              <input
                type="file"
                className="select-new-pic"
                required={true}
                accept=".png,.svg,.jpeg,.jpg"
              ></input>
            </label>

            <button className="update-submit">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default EventUpdate;
