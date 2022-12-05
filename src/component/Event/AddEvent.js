import React, { useEffect, useState } from "react";
import "./AddEvent.css";
// import NavBar from "../Navbar/navbar";
import { useDispatch } from "react-redux";
import { PostEventData } from "../../Store/Slice/AddEventSlice";
import file from "./img/pngtree.jpg";

const AddEvent = ({userData}) => {
  const dispatch = useDispatch();

  console.log(userData)

  const [statusNum, setStatusNum] = useState(1)

  const [name, setname] = useState()
  const [files, setFile] = useState()
  const [message, setmessage] = useState()

  const onFileChange = (e) => {
    setFile(e.target.files[0])
    setname(e.target.files[0].name)
  }

  console.log(userData?.Status)

  console.log(statusNum)

  useEffect(() => {
    if(userData?.Status){
      setStatusNum(1)
    }else{
      setStatusNum(0)
    }
  }, [userData])

  const HandelEventData = (e) => {
    e.preventDefault();
    const element = e.target.elements;
    const eventName = element[0].value;
    const eventDescription = element[1].value;
    const eventDate = element[2].value;
    const eventTime = element[3].value;
    const author = userData?.name;
    const status = statusNum;
    element[0].value = "";
    element[1].value = "";
    element[2].value = "";
    element[3].value = "";
    dispatch(PostEventData({ eventName, eventDescription, eventDate, eventTime, files, author, status}));
    if (name.length > 0){
      setmessage("Event uploaded successfully")
    }
  };

  return (
    <div>
      <div className="form-container">
        <form onSubmit={HandelEventData}>
          <div className="form-content">
            <h1>Add Event</h1>
            <input
              className="input-title"
              type="text"
              required={true}
              placeholder="Enter the Title "
            ></input>
            <input
              className="input-discription"
              type="text"
              required={true}
              placeholder="Enter the Discription"
            ></input>
            <input
              className="input-date"
              type="date"
              required={true}
              placeholder="Enter the Date"
            ></input>
            <input
              className="input-time"
              type="time"
              required={true}
              placeholder="Enter the Time"
            ></input>

            <label className="add-new-profile-pic">
              <img
                src={file}
                alt="no img found"
                className="profile-file-img"
              ></img>
              {name ?<label className="upload-pic-txt">{name}</label>:<label className="upload-pic-txt">
                Upload PNG,JPEG,JPG,SVG only
              </label>}
              <input
                type="file"
                className="select-new-pic"
                required={true}
                onChange={onFileChange}
                // accept=".png,.svg,.jpeg,.jpg"
              ></input>
            </label>

            {message && <div className="addEvent-success-msg">{message}</div>}
            {/* {<div>Event is not added</div>} */}

            <button className="btn-submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEvent;
