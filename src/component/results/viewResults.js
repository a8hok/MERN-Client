import React, {useState, useEffect} from 'react';
import { getResults } from '../../Store/Slice/getResults';
import { useDispatch, useSelector } from 'react-redux';

import "./ViewResults.css";

const ViewResults = () => {

    const dispatch = useDispatch();

    const [state, setState] = useState([]);

    const [index, setIndex] = useState(0);

    const [indexOf, setIndexOf] = useState(5)

    useEffect(() => {
    dispatch(getResults())
    }, [])

    const {ResultsData} = useSelector((state) => state.getResults)

    useEffect(() => {
        setState(ResultsData.slice(index, indexOf))
    }, [ResultsData, indexOf, index])

    const nextPage = (e) => {
        setIndex(index + 5)
        setIndexOf(indexOf + 5)
    }

    const prevPage = (e) => {
        setIndex(index - 5)
        setIndexOf(indexOf - 5)
    }

  return (
    <div>
       
            <div className="results-card_Container">
                {state.map((i) => (<div key={i._id}
                className="results-card">
                    <div className="results-card_Left">
                        <p>Name</p>
                        <p>Mail-Id</p>
                        <p>Contact Number</p>
                        <p>Total marks</p>
                    </div>
                    <div className="results-card_Right">
                        <p>{i.name}</p>
                        <p>{i.email}</p>
                        <p>{i.phonenum}</p>
                        <p>{i.marks}</p>
                    </div>
                    
                </div>))}

                {ResultsData.length > 5 && <div className="Results_Button-Container">
                    
                    {index !== 0 && indexOf !== 5 && <button onClick={prevPage}>Prev</button>}
                    
                    {ResultsData.length > 5 && <button onClick={nextPage}>Next</button>}
                </div>}
            </div>   
       
    </div>
  )
};

export default ViewResults;
