import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getEntranceInfoByType } from '../../../Store/Slice/getEntranceDetailsByType';
import { getEntranceInfoBySubType } from '../../../Store/Slice/getEntranceDetailsBySubType';
import { getEntranceInfoByStateExams } from '../../../Store/Slice/getEntranceDetailsbyStateExams';

import Navbar from '../../Navbar/navbar';
import Footer from '../../Footer/footer';

import "./Entrance.css";

const Entrance = () => {

    const NationalLevel = ["NEET", "JEE MAIN", "CMAT", "GPT", "JEE Advanced"]

    const StateLevel = ["Tamil Nadu", "Kerala", "Andhra Pradesh", "Telengana", "Karnataka"]

    const DisciplineBased = ["Arts & Science Entrance", "Law", "Medical", "Engineering", "Hotel Management"]

    const EmployemntExam = ["UPSC", "CDS", "PSC", "UGC-NET", "Civil Services Exam"]

    const stateExamForTamilNadu = ["TNPSC", "TNEB", "TNMRB"]

    const stateExamsforKerala = ["KLPSC", "KLEB"]

    const [type, setType] = useState([
        {
            option: "National Level",
            value: "National Level"
        },
        {
            option: "State Level",
            value: "State Level"
        },
        {
            option: "Discipline Based",
            value: "Discipline Based"
        },
        {
            option: "Employment Exam",
            value: "Employment Exam"
        }
    ]);

    const [mainType, setMainType] = useState("");

    const [subType, setSubType] = useState([]);

    const [stateExams, setStateExams] = useState([]);

    const [clickSubType, setClickSubType] = useState("");

    const [finalData, setFinalData] = useState([]);

    const [clickStatus, setClickStatus] = useState();

    const {EntranceData} = useSelector((state) => state.EntranceByType)

    const {EntranceDataBySubType} = useSelector((state) => state.EntranceBySubType)

    const {EntranceDataByStateExams} = useSelector((state) => state.EntranceByStateExams)

    const dispatch = useDispatch();

    const catagorySelector = (e) => {
        dispatch(getEntranceInfoByType(e.target.value))
        setMainType(e.target.value)
        setClickStatus(0)
    }

    const subTypeSelector = (e) => {
        dispatch(getEntranceInfoBySubType(e.target.value))
        setClickSubType(e.target.value)
        setClickStatus(1)
    }

    const stateExamSelector = (e) => {
        dispatch(getEntranceInfoByStateExams(e.target.value))
        setClickSubType(e.target.value)
        setClickStatus(2)
    }

    useEffect(() => {
        if(clickStatus === 0) {
                setFinalData(EntranceData)
        }else if (clickStatus === 1) {
                setFinalData(EntranceDataBySubType)
        }else if (clickStatus === 2) {
                setFinalData(EntranceDataByStateExams)
        }
    }, [mainType, clickSubType, clickStatus, catagorySelector, subTypeSelector]);

    useEffect(() => {
        if(mainType === "National Level") {
            setSubType(NationalLevel)
        } else if (mainType === "State Level") {
            setSubType(StateLevel)
        } else if (mainType === "Discipline Based") {
            setSubType(DisciplineBased)
        } else if (mainType === "Employment Exam") {
            setSubType(EmployemntExam)
        }
    }, [mainType]);

    useEffect(() => {
        if(clickSubType === "Tamil Nadu" && mainType === "State Level"){
            setStateExams(stateExamForTamilNadu)
        }else if (clickSubType === "Kerala" && mainType === "State Level") {
            setStateExams(stateExamsforKerala)
        }else if (clickSubType === "Andhra Pradesh" && mainType === "State Level") {
            setStateExams(stateExamsforKerala)
        }else if (clickSubType === "Telengana" && mainType === "State Level") {
            setStateExams(stateExamsforKerala)
        }else if (clickSubType === "Karnataka" && mainType === "State Level") {
            setStateExams(stateExamsforKerala)
        }
    }, [clickSubType]);

    return (
        <>
            <Navbar/>
                <div className="entance_all_container">
                    <div className={(mainType != "State Level" && mainType === "")? "selecting-preferences_Entrance_1":(mainType === "State Level" && clickSubType?"selecting-preferences_Entrance_3":"selecting-preferences_Entrance_2")}>
                        <div className="guide-selection">
                            <span>Filters</span>
                        </div>
                        <select onChange={catagorySelector} className={mainType != "" ? "guide-selector":"guide-selector guide-Selector_Last"}>
                            <option>Select a type</option>
                            {type.map((i, index) => {
                                return (
                                    <option value={i.value} key={index}>
                                        {i.option}
                                    </option>
                                )
                            })}
                        </select>
                        {mainType && <select onChange={subTypeSelector} className={(clickSubType != "") ? "guide-selector":"guide-selector guide-Selector_Last"}>
                            <option>select a subtype</option>
                            {subType.map((i, index) => {
                                return(
                                <option value={i} key={index}>{i}</option>
                                )
                            })}
                        </select>}
                        {(mainType === "State Level" && clickSubType) && <select onChange={stateExamSelector} className="guide-selector guide-Selector_Last">
                            <option>Select a exam</option>
                            {stateExams.map((i, index) => {
                                return(
                                    <option key={index} value={i}>{i}</option>
                                )
                            })}
                            </select>}
                    </div>
                    {/* <div className="floating_Selector-Container">
                        {type.map((item) => {
                            return (
                                <button
                                    value={item.value}
                                    key={item.option}
                                    onClick={catagorySelector}
                                    className="category-options-tile"
                                >
                                    {item.option}
                                </button>
                            );
                        })}
                    </div>
                    {mainType && <div className="floating_Selector-Container">
                        {subType.map((item) => {
                            return (
                                <button
                                    value={item}
                                    key={item}
                                    onClick={subTypeSelector}
                                    className="category-options-tile"
                                >
                                    {item}
                                </button>
                            );
                        })}
                    </div>}
                    {mainType === "State Level" && <div className="floating_Selector-Container">
                        {stateExams.map((item) => {
                            return (
                                <button
                                    value={item}
                                    key={item}
                                    onClick={stateExamSelector}
                                    className="category-options-tile"
                                >
                                    {item}
                                </button>
                            );
                        })}
                    </div>} */}
                    {finalData ? <div className="Entrance_Card-Container">
                        {finalData.map((i, index) => (<div key={index} className="Entrance_Card">
                            <div className="Entrance_Card-Top">
                                <p>{i.type}</p>
                                <p>{i.subType}</p>
                            </div>
                            <div className="Entrance_Card-Mid">
                                <p>{i.date}</p>
                                <a href={i.examLink}>click here to enroll</a>
                            </div>
                            <div className="Entrance_Card-Bottom">{i.content}</div>
                        </div>))}
                    </div>: null}
                </div>
            <Footer/>
        </>
    )
}

export default Entrance;
