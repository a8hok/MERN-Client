import React, { useState } from "react";
import { axio } from "../../../Config/Config";
import EditEvents from "../../EditProfile/EditProfile";
import { editingEvent } from "../../../Store/Slice/editEvent";
import loader from "../img/loader.gif"
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./ListEvent.css";
import { useEffect } from "react";
import { deleteSelectedEvent } from "../../../Store/Slice/deleteEvent";

function ListEvent({ eventsData, editImg, allow }) {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [value, setValue] = useState();
  const [state, setState] = useState("event-list");
  const [data, setData] = useState();
  const [populate, setPopulate] = useState({})

  useEffect(() => {
    eventsData.map((i) => {
      setPopulate(i)
    })
  }, [eventsData, editImg, allow])

  useEffect(() => {
    setValue(eventsData)
  }, [eventsData, editImg, allow, deleteSelectedEvent, editingEvent])

  const {eventLoading } = useSelector((state) => state.eventsInfo);

  const redirect = (e) => {
    setData(e);
    setState("edit-events");
  };

  const handlingSubmit = (e) => {
    alert("the made changes are accepted")
    e.preventDefault()
    const eventName = populate.eventName;
    const eventDescription = populate.eventDescription;
    const eventDate = populate.eventDate;
    const eventTime = populate.eventTime;
    const eventId = populate.eventId;
    const author = populate.author
    const status = 0
    dispatch(editingEvent({eventId, eventName, eventDescription, eventDate, eventTime, author, status}))
    }

    const deletePreviewEvent = (e) => {
      alert("The submitted data is not accepted")
      dispatch(deleteSelectedEvent(e))
    }
  return (
    <>
    {eventLoading &&<div className="loader-Container">
                      <img src={loader} className="for-loader"/>
                    </div>
    }
      {eventLoading === false && state === "event-list" && (
        <div className="third-full-con-pro">
          {value?.length > 0 &&
            value?.map((obj) => {
              const base64String = btoa(
                new Uint8Array(obj?.eventImage?.data?.data)
                  .reduce((data, byte) => data + String.fromCharCode(byte), '')
              );
              return (
                <div key={obj.eve}>
                  <div className="third-sub-con">
                    <div className="img">
                      <img
                        className="eve-img"
                        src={`data:image/png;base64,${base64String}`}
                      ></img>
                    </div>
                    <div className="center-pro">
                      <div className="third-head">{obj.eventName}</div>
                      {editImg &&(
                        <div className="button-pro">
                          <button
                            className="edit-info"
                            onClick={() => redirect(obj)}
                          >
                            <img src={editImg}></img>
                          </button>
                        </div>
                      )}
                    </div>
                    <p className="event-details">
                      <p>{obj.eventDescription}</p>
                      <p>{obj.eventDate}</p>
                      <p>{obj.eventTime}</p>
                      {obj?.author && <p>{obj?.author}</p>}
                    </p>
                    {allow && <div className="changes-Button_Container">
                    <button className="Accept_changes-Button" onClick={handlingSubmit}>accept</button>
                    <button className="Reject_changes-Button" onClick={() => deletePreviewEvent(obj.eventId)}>reject</button>
                    </div>}
                    
                  </div>
                </div>
              );
            })}
          {eventsData.length === 0 && <div>No Events Found.</div>}
        </div>
      )}
      {state === "edit-events" && <EditEvents eventObj={data} />}
    </>
  );
}

export default ListEvent;
