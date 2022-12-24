import React, { useState, useEffect, useRef } from "react";
import EditEvents from "../../EditProfile/EditProfile";
import { editingEvent } from "../../../Store/Slice/editEvent";
import loader from "../img/loader.gif"
import { useSelector, useDispatch } from "react-redux";
import "./ListEvent.css";
import { deleteSelectedEvent } from "../../../Store/Slice/deleteEvent";

function ListEvent({ eventsData, editImg, allow }) {

  const dispatch = useDispatch();
  const [value, setValue] = useState();
  const [state, setState] = useState("event-list");
  const [data, setData] = useState();
  const [populate, setPopulate] = useState({})
  const [count, setCount] = useState(1)
  const [index, setIndex] = useState(0)
  const [time, setTime] = useState("1500")

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
    e.preventDefault()
    const eventName = populate.eventName;
    const eventDescription = populate.eventDescription;
    const eventDate = populate.eventDate;
    const eventTime = populate.eventTime;
    const eventId = populate.eventId;
    const author = populate.author
    const status = 0
    dispatch(editingEvent({eventId, eventName, eventDescription, eventDate, eventTime, author, status}))
    window.location.reload(false)
  }

  const deletePreviewEvent = (e) => {
      dispatch(deleteSelectedEvent(e))
      window.location.reload(false)
  }

  const elementRef = useRef(null);

  useEffect(() => {
      setTimeout(() => {
        const element = elementRef?.current?.children[index];
        element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setIndex((index + 1) % elementRef?.current?.children?.length);
      }, "4000");
    }, [count])
  
  setTimeout(() => {
      setCount(count + 1)
    }, "4000")

  return (
    <>
    {eventLoading &&<div className="loader-Container">
                      <img src={loader} className="for-loader"/>
                    </div>
    }
      {eventLoading === false && state === "event-list" && (
        <div className="third-full-con-pro" ref={elementRef}>    
          {value?.length > 0 &&
            value?.map((obj, keyName) => {
              const base64String = btoa(
                new Uint8Array(obj?.eventImage?.data?.data)
                  .reduce((data, byte) => data + String.fromCharCode(byte), '')
              );
              return (
                <div key={obj?._id} className={`card-item card-item-${keyName}`}>
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
