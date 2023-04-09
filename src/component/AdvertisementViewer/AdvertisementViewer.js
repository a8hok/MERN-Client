import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AdScroller from './adScroller';
import "./AdvertisementViewer.css";

export const AdvertisementViewer = ({children}) => {
    const dispatch = useDispatch();
    const [value, setValue] = useState([]);
    useEffect(() => {
        setValue(children)
    }, [children])
    return (
        <>
            {children?.length > 0 ? <div className="advertisement-main-container_Main">
                <h1 className="advertisement-Heading">Advertisement</h1>
                <AdScroller>
                {value?.length > 0 &&
                value?.map((obj, keyName) => {
                const base64String = btoa(
                    new Uint8Array(obj?.adImage?.data?.data)
                    .reduce((data, byte) => data + String.fromCharCode(byte), '')
                );
                return (
                    <div key={obj?._id} className={`card-item card-item-${keyName}`}>
                    <div className="third-sub-con-advertisement">
                        <div className="img">
                        <img
                            className="eve-img"
                            src={`data:image/png;base64,${base64String}`}
                        ></img>
                        </div>
                        <div className="center-pro">
                        <div className="third-head">{obj.Title}</div>
                        </div>
                    </div>
                    </div>
                );
                })} 
                </AdScroller>
            </div>: null}
        </>
    )
}
