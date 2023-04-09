import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useLocation } from "react-router-dom";

// import { getSelectedCollegeInfo } from '../../../../Store/Slice/selectedCollege';
import { getBrochureToDownload } from '../../../../Store/Slice/downloadBrochure';

import "./resultsCard.css";

const ResultsCard = ({cardData, formData, passData}) => {

    const navigate = useNavigate();

    const handelDetail = (e) => {
        navigate("/colleges/details", { state: { state: e } });
      };

    // const {SelectedCollegesData} = useSelector(state => state.getchoosenCollege)

    const dispatch = useDispatch();

    const collectData = (e) => {
        dispatch(getBrochureToDownload(e))
    }

    // useEffect(() => {
    //     console.log(SelectedCollegesData)
    // }, [SelectedCollegesData])

  return (
    <div className="results_card-box">
        <div>{cardData.College_Name}</div>
        <div className="">
            {/* <p>{cardData.place}</p>
            <p>{cardData.placement}</p>
            <p>{cardData.fee}</p> */}
        </div>
        <div className="results_card-box_bottom">
            <h5>{cardData.Programme_Name}</h5>
            <div className="results_card-box_partition">
                <div className="results_card-box_Leftpartition">
                    <p>category</p>
                    <p>Community</p>
                    <p>TNEA 2022 CutOff (Max)</p>
                    <p>TNEA 2022 CutOff (Min)</p>
                    <button className="button_leftPartition" onClick={() => handelDetail(cardData)}>Select</button>
                </div>
                <div className="results_card-box_Rightpartition">
                    <p>{formData.studyDetails}</p>
                    <p>{formData.community}</p>
                    <p>{cardData.GAMaxCutoff}</p>
                    <p>{cardData.GAMinCutoff}</p>
                    <a href={`https://academy-server-side.vercel.app/api/download/${cardData.College_Code}`} className="button_rightPartition" target='_blank'>download</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ResultsCard;
