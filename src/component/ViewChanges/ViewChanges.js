import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import ListEvent from '../Event/ListEvent/ListEvent';

const ViewChanges = ({data}) => {
const [buttonView, setButtonView] = useState(true)
    return (
        <div>
            <ListEvent eventsData={data ?? []} allow={buttonView}/>
        </div>
  )
}

export default ViewChanges
