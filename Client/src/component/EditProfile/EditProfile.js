import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import file from "./img/pngtree.jpg";
import { editingEvent } from "../../Store/Slice/editEvent";
import Navbar from "../Navbar/navbar";
import Footer from "../Footer/footer";
import "./EditProfile.css"

function EditEvents({ eventObj }) {
  const [name, setname] = useState()
  const [files, setFile] = useState()
  const [message, setMessage] = useState()
  const dispatch = useDispatch()
  // const { eventsData, eventLoading } = useSelector((state) => state.eventsInfo);
  
  // const onFileChange = (e) => {
  //   setFile(e.target.files[0])
  //   setname(e.target.files[0].name)
  //   console.log(name)
  // }

  const handlingSubmit = (e) => {
    e.preventDefault()
    const element = e.target.elements;
    const eventName = element[0].value;
    const eventDescription = element[1].value;
    const eventDate = element[2].value;
    const eventTime = element[3].value;
    const eventId = eventObj.eventId
    element[0].value = "";
    element[1].value = "";
    element[2].value = "";
    element[3].value = "";
    dispatch(editingEvent({eventId, eventName, eventDescription, eventDate, eventTime }))
    {eventId ? setMessage("Event updated successfully"): setMessage("Event is not updated")}
  }
  
  return (
    <>
      {eventObj && (
        <div className="edit-profile-container">
          <form className="edit-profile-form" onSubmit={handlingSubmit}>
            <h1 className="edit-profile-container-heading">Edit Events</h1>

            <input
              type="text"
              defaultValue={eventObj.eventName}
              className="edit-profile-inputs"
            ></input>

            <input
              type="text"
              defaultValue={eventObj.eventDescription}
              className="edit-profile-inputs"
            ></input>

            <input
              className="edit-profile-inputs"
              type="date"
              defaultValue={eventObj.eventDate}
            ></input>

            <input
              className="edit-profile-inputs"
              type="time"
              defaultValue={eventObj.eventTime}
            ></input>

            <label className="add-new-profile-pic">
            <img src={file} alt="no img found" className="profile-file-img"></img>
            {name && <label className="upload-pic-txt">
                Upload PNG,JPEG,JPG,SVG only
            </label>}
            <input type="file" className="select-new-pic"></input>
          </label>

          {message && <div className="addEvent-success-msg">{message}</div>}

            <button className="login-btn">Save Changes</button>
          </form>
        </div>
      )}
    </>
  );
}

export default EditEvents;
