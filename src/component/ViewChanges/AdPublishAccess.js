import React, {useState, useEffect} from 'react';
import HorizontalAutoScroll from '../Event/autoScroll';
import { useDispatch } from 'react-redux';
import { EditAdvertisement } from '../../Store/Slice/editAdvertisements';
import { deleteSelectedAdvertisement } from '../../Store/Slice/deleteAdvertisements';

const AdPublishAccess = ({filteredAd}) => {

    const [populate, setPopulate] = useState({});

    const dispatch = useDispatch();

    const [value, setValue] = useState([]);

    const handlingSubmit = (e) => {
        e.preventDefault()
        const Title = populate.Title;
        const catagory = populate.catagory;
        const subCatagory = populate.subCatagory;
        const timeScreening = populate.timeScreening;
        const userEmail = populate.userEmail;
        const advertisementID = populate.advertisementID;
        const status = 0;
        dispatch(EditAdvertisement({userEmail, Title, catagory, subCatagory, timeScreening, status, advertisementID}))
        setTimeout(() => {
          window.location.reload(false)
        }, "1000")
      }

useEffect(() => {
  filteredAd.map((i) => {
    setPopulate(i)
  })
}, [filteredAd])

useEffect(() => {
    setValue(filteredAd)
}, [filteredAd])

const deletePreviewAdvertisement = (e) => {
  dispatch(deleteSelectedAdvertisement(e))
  setTimeout(() => {
    window.location.reload(false)
  }, "1000")
}

  console.log(populate)

  const {userEmail, Title, catagory, subCatagory, timeScreening, status, advertisementID} = populate

  console.log(userEmail, Title, catagory, subCatagory, timeScreening, status, advertisementID)

  return (
    <>
        <div>
            <HorizontalAutoScroll>
            {value?.length > 0 &&
                value?.map((obj, keyName) => {
                const base64String = btoa(
                    new Uint8Array(obj?.adImage?.data?.data)
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
                        <div className="third-head">{obj?.Title}</div>
                        </div>
                        <p className="event-details">
                        <p>{obj?.catagory}</p>
                        <p>{obj?.subCatagory}</p>
                        <p>{obj?.timeScreening}</p>
                        <p>{obj?.userEmail}</p>
                        </p>

                        <div className="changes-Button_Container">
                        <button className="Accept_changes-Button" onClick={handlingSubmit}>accept</button>
                        {/*  */}
                        <button className="Reject_changes-Button" onClick={() => deletePreviewAdvertisement(obj.advertisementID)}>reject</button>
                        </div>
                    </div>
                    </div>
                );
                })}
            {filteredAd.length === 0 && <div>No Events Found.</div>}
            </HorizontalAutoScroll>
        </div>
    </>
  )
}

export default AdPublishAccess;
