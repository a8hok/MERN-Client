import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getGSSVResource } from '../../../Store/Slice/getGSSVresources';
import { getGVResource } from '../../../Store/Slice/getGVresources';
import { getGAResource } from '../../../Store/Slice/getGAresources';
import { getGSSAResource } from '../../../Store/Slice/getGSSAresources';

import Navbar from '../../Navbar/navbar';
import Footer from '../../Footer/footer';
import ResultsCard from './resourceResultCard/resultsCard';

import "./resources.css";

const INIT_FORMDATA = {
    cutoff: "",
    studyDetails: "",
    community: ""
}

const Resources = () => {

    const [formData, setFormdata] = useState(INIT_FORMDATA);

    const [pdfData, setPdfData] = useState("")

    const [pdfScreen, setPdfScreen] = useState(0)

    const dispatch = useDispatch();

    const [screen, setScreen] = useState(0)

    const [finalData, setFinalData] = useState([]);

    const [selectDomain, setSelectDomain] = useState("");

    const [selectSubDomain, setSelectSubDomain] = useState("");

    const [finalLevel, setFinalLevel] = useState("");

    const [selectData, setSelectData] = useState([
        {
            name: "Select your type of education",
            value: ""
        },
        {
            name: "GA - General Academic (stream of study)",
            value: "GA"
        },
        {
            name: "GSSA - Government school studied academic",
            value: "GSSA"
        },
        {
            name: "GSSV - Government school studied vocational",
            value: "GSSV"
        },
        {
            name: "GV - General vocational",
            value: "GV"
        }
    ]) 

    const [domain, setDomain] = useState([{
        name: "Under-Graduate",
        value: "UG"
    }]);

    const [subDomain, setSubDomain] = useState([{
        name: "Engineering",
        value: "Engineering"
    }]);
  
    const [levels, setLevels] = useState([{
        name: "TNEA",
        value: "TNEA"
    }]);

    const [loading, setLoading] = useState(false);
    const [disabled, setDisabled] = useState(true);

    const {GSSAdata} = useSelector((state) => state.GSSAresource)
    const {GAdata} = useSelector((state) => state.GAresource)
    const {GSSVdata} = useSelector((state) => state.GSSVresource)
    const {GVdata} = useSelector((state) => state.GVresource)

    console.log(finalData)

    const passData = (e) => {
        setPdfData(e)
        setPdfScreen(1)
    }

    useEffect(() => {
        const { cutoff, studyDetails, community } = formData;
        const isSearch = Object.values({
            cutoff, 
            studyDetails, 
            community}).every(el => Boolean(el))
            isSearch ? setDisabled(false) : setDisabled(true)
    }, [formData]);

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormdata(prevState => ({...prevState, [name]: value}))
        setScreen(0)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true)
        setScreen(1)
        setTimeout(() => {
            setLoading(false)
        }, "1000")
    }

    const settingState = (e) => {
        setSelectDomain(e.target.value);
        setSelectSubDomain("")
        setFinalLevel("")
    }
    
    const settingSubDomain = (e) => {
        setSelectSubDomain(e.target.value)
    }
    
    const settingFinalLevel = (e) => {
        setFinalLevel(e.target.value)
    }

    useEffect(() => {
        const {studyDetails} = formData
        if(studyDetails === ""){
            setDisabled(true)
        }else {
            setDisabled(false)
        }
    }, [formData])

    useEffect(() => {
        const {studyDetails} = formData
        if(studyDetails === "" && loading === true){
            console.log("Nothing is selected here")
            setFinalData([])
        }else if(studyDetails === "GA" && loading === true){
            dispatch(getGAResource(formData))
        }else if (studyDetails === "GSSA" && loading === true){
            dispatch(getGSSAResource(formData))
        }else if (studyDetails === "GSSV" && loading === true){
            dispatch(getGSSVResource(formData))
        }else if (studyDetails === "GV" && loading === true){
            dispatch(getGVResource(formData))
        }
    }, [formData, loading])

    useEffect(() => {
        if(GSSAdata.length > 0){
            setFinalData(GSSAdata)
        }else if (GAdata.length > 0){
            setFinalData(GAdata)
        }else if (GSSVdata.length > 0){
            setFinalData(GSSVdata)
        }else if (GVdata.length > 0){
            setFinalData(GVdata)
        }else {
            setFinalData([])
        }
    }, [GSSAdata, GAdata, GSSVdata, GVdata])

  return (
    <>
        <Navbar/>
            <div className="Main_resource-section_container">
                <div className="top_resource-section_container">
                    <form className="top_resource-section" onSubmit={handleSubmit}>
                        <div className="top_resource-text">TNEA 2023 - College Predictor</div>

                        <input 
                            className="top_resource_text-input" 
                            name="cutoff" 
                            placeholder="Your PCM cut off" 
                            onChange={handleChange}
                            type={"number"}
                            step="any"
                            min="0"
                        ></input>

                        <select 
                            className="top_resource_text-input"
                            name="studyDetails" 
                            onChange={handleChange}>
                            {selectData.map((i) => (
                                <option value={i.value} key={i.value}>{i.name}</option>
                            ))}
                        </select>

                        <div className="resource_community-container">
                            <div>Community</div>
                            <div className="resource_community_bot-container">
                                <label>
                                    <input type={'radio'} value="SC" name="community" onClick={handleChange}></input>
                                    SC
                                </label>
                                <label>
                                    <input type={'radio'} value="ST" name="community" onClick={handleChange}></input>
                                    ST
                                </label>
                                <label>
                                    <input type={'radio'} value="BC" name="community" onClick={handleChange}></input>
                                    BC
                                </label>
                                <label>
                                    <input type={'radio'} value="BCM" name="community" onClick={handleChange}></input>
                                    BCM
                                </label>
                                <label>
                                    <input type={'radio'} value="MBC" name="community" onClick={handleChange}></input>
                                    MBC
                                </label>
                            </div>
                        </div>
                        <button className="resource_search-button" type="submit" disabled={disabled}>
                            Search
                        </button>
                    </form>
                </div>
                <div className="mid_resource-section_container">
                    <div className="mid_resource-section">
                        <div className="selecting-preferences_Entrance_3">
                            <div className="guide-selection">
                                Filter
                            </div>
                            <select className="guide-selector" onChange={settingState}>
                                {/* <option value="">Select Programme Level</option> */}
                                {domain.map((i) => <option key={i.value} value={i.value}>{i.name}</option>)}
                            </select>
                            <select className="guide-selector" onChange={settingSubDomain}>
                                {/* <option value="">Select Programme Type</option> */}
                                {subDomain.map((i) => <option key={i.value} value={i.value}>{i.name}</option>)}
                            </select>
                            <select className="guide-selector guide-Selector_Last" onChange={settingFinalLevel}>
                                {/* <option value="">select Admission Entrance Exam / Process</option> */}
                                {levels.map((i) => <option key={i.value} value={i.value}>{i.name}</option>)}
                            </select>
                        </div>
                    </div>
                    {/* <button className="resource_search-button">Submit</button> */}
                </div>
                <div className="bot_resource-section_container">
                    <div className="bot_resource-results_text">Results</div>
                    {(finalData.length > 0 && screen === 1) ? <div className="bot_resource-section">
                            {(finalData.length > 0 && screen === 1) && finalData.map((i, index) => {
                                return (
                                    <ResultsCard key={index} formData={formData} cardData={i} passData={passData}/>
                                )
                            })}
                    </div> : <div className="bot_resource-results_No-text">No results found</div>}

                </div>
            </div>
        <Footer/>
    </>
  )
}

export default Resources;
