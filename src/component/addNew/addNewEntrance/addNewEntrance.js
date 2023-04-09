import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { postEntranceExam } from '../../../Store/Slice/AddEntranceExam';

const AddNewEntanceTest = () => {

    const dispatch = useDispatch();

    const [buttonText, setButtonText] = useState("save");

    const [error, setError] = useState({});

    const [stateExams, setStateExams] = useState([]);
    
    const NationalLevel = [
        {
            option: "Please select one sub type",
            value: ""
        },
        {
            option: "NEET",
            value: "NEET"
        },
        {
            option: "JEE MAIN",
            value: "JEE MAIN"
        },
        {
            option: "CMAT",
            value: "CMAT"
        },
        {
            option: "GPT",
            value: "GPT"
        },
        {
            option: "JEE Advanced",
            value: "JEE Advanced"
        },
    ]

    const StateLevel = [
        {
            option: "Please select one sub type",
            value: ""
        },
        {
            option: "Tamil Nadu",
            value: "Tamil Nadu"
        },
        {
            option: "Kerala",
            value: "Kerala"
        },
        {
            option: "Andhra Pradesh",
            value: "Andhra Pradesh"
        },
        {
            option: "Telengana",
            value: "Telengana"
        },
        {
            option: "Karnataka",
            value: "Karnataka"
        },
    ]

    const DisciplineBased = [
        {
            option: "Please select one sub type",
            value: ""
        },
        {
            option: "Arts & Science Entrance",
            value: "Arts & Science Entrance"
        },
        {
            option: "Law",
            value: "Law"
        },
        {
            option: "Medical",
            value: "Medical"
        },
        {
            option: "Engineering",
            value: "Engineering"
        },
        {
            option: "Hotel Management",
            value: "Hotel Management"
        },
    ]

    const EmployemntExam = [
        {
            option: "Please select one sub type",
            value: ""
        },
        {
            option: "UPSC",
            value: "UPSC"
        },
        {
            option: "CDS",
            value: "CDS"
        },
        {
            option: "PSC",
            value: "PSC"
        },
        {
            option: "UGC-NET",
            value: "UGC-NET"
        },
        {
            option: "Civil Services Exam",
            value: "Civil Services Exam"
        }
    ]

    const [status, setStatus] = useState(false);

    const [type, setType] = useState([
        {
            option: "Please select one type",
            value: ""
        },
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

    const [state, setState] = useState({
        type: "",
        subType: "",
        content: "",
        date: "",
        examLink: "",
        examName: "NA",
        endDate: "",
        dateofExam: "",
        examFee: 0
    });

    const [option, setOption] = useState([]);

    const handleChange = (e) => {
        const {name, value} = e.target
        setState({...state, [name]: value})
    }

    const validate = (e) => {
        const errors={}
        if (!e.content){
          errors.content = "please give some content"
        }
        if (e.type === ""){
            errors.type = "please select a type"
        }
        if (e.subType === "" && state.type !== ""){
            errors.subType = "please select a sub-type"
        }
        if (e.date === ""){
            errors.date = "please select the start date for exam registration"
        }
        if (e.examLink === ""){
            errors.examLink = "please select the date of exam"
        }
        if (e.endDate === ""){
            errors.endDate = "please select the end date for exam registration"
        }
        if (e.dateofExam === ""){
            errors.dateofExam = "please select the date of examination"
        }
        if (e.examName === "" && stateExams.length > 0){
            errors.examName = "please select the exam name"
        }
        if (e.examFee === ""){
            errors.examFee = "please give the exam fee"
        }
        return errors
      }

    const handletheSubmit = (e) => {
        e.preventDefault()
        setError(validate(state))
        setStatus(true)
    }

    useEffect(() => {
        if(Object.values(error).length === 0 && status){
        dispatch(postEntranceExam(state))
        setButtonText("saved")
        setTimeout(() => {
            window.location.reload(false)
          }, "1000")
        }
    }, [status])

    useEffect(() => {
        if(state.type === "National Level") {
            setOption(NationalLevel)
        } else if (state.type === "State Level") {
            setOption(StateLevel)
        } else if (state.type === "Discipline Based") {
            setOption(DisciplineBased)
        } else if (state.type === "Employment Exam") {
            setOption(EmployemntExam)
        }
    }, [state])

    useEffect(() => {
        if(state.subType === "Tamil Nadu") {
            setStateExams(
                [
                    {option: "Please select the exam", value: ""},
                    {option: "TNPSC", value: "TNPSC"},
                    {option: "TNEB", value: "TNEB"},
                    {option: "TNMRB", value: "TNMRB"},
                ]
            )
        }else if(state.subType === "Kerala") {
            setStateExams(
                [
                    {option: "Please select the exam", value: ""},
                    {option: "KLPSC", value: "KLPSC"},
                    {option: "KLEB", value: "KLEB"}
                ]
            )
        }else if(state.subType === "Andhra Pradesh") {
            setStateExams(
                [
                    {option: "Please select the exam", value: ""},
                    {option: "KLPSC", value: "KLPSC"},
                    {option: "KLEB", value: "KLEB"}
                ]
            )
        }else if(state.subType === "Telengana") {
            setStateExams(
                [
                    {option: "Please select the exam", value: ""},
                    {option: "KLPSC", value: "KLPSC"},
                    {option: "KLEB", value: "KLEB"}
                ]
            )
        }else if(state.subType === "Karnataka") {
            setStateExams(
                [
                    {option: "Please select the exam", value: ""},
                    {option: "KLPSC", value: "KLPSC"},
                    {option: "KLEB", value: "KLEB"}
                ]
            )
        }else {
            setStateExams([])
        }
    }, [state])

  return (
    <div className="Add-Content_Container">
        <form className="Add-Content_Form" onSubmit={handletheSubmit}>
            <h1>Add Entrance Exam</h1>

            <select className="add-Content-Select_Catagory" name="type"  onChange={handleChange}>
                {type.map((i) => {return <option value={i.value} key={i.option}>{i.option}</option>})}
            </select>
            {error?.type ? (<p>{error?.type}</p>): null}

            {state.type !== "" ? <select className="add-Content-Select_Catagory" name="subType" onChange={handleChange}>
                {option.map((i) => {return <option key={i?.option} value={i?.value}>{i?.option}</option>})}
            </select>: null}
            {error?.subType ? (<p>{error?.subType}</p>): null}

            {stateExams.length > 0 ? <select className="add-Content-Select_Catagory" name="examName" onChange={handleChange}>
                {stateExams.map((i) => {return <option key={i?.option} value={i?.value}>{i?.option}</option>})}
            </select>: null}
            {error?.subType ? (<p>{error?.examName}</p>): null}

            <input type={"Number"} className="add-Content-Select_Catagory" placeholder="Examination fee" name="examFee" onChange={handleChange}></input>
            {error?.examFee ? (<p>{error?.examFee}</p>):null}

            <input type={"text"} className="add-Content-Select_Catagory" placeholder="select the start day for registration" 
                name="date" onChange={handleChange}
                onFocus={(e) => (e.target.type = "date")}
                onBlur={(e) => (e.target.type = "text")}>
            </input>
            {error?.date ? (<p>{error?.date}</p>):null}

            <input type={"text"} className="add-Content-Select_Catagory" placeholder="select the end day for registration" 
                name="endDate" onChange={handleChange}
                onFocus={(e) => (e.target.type = "date")}
                onBlur={(e) => (e.target.type = "text")}>
            </input>
            {error?.endDate ? (<p>{error?.endDate}</p>):null}

            <input type={"text"} className="add-Content-Select_Catagory" placeholder="select the date of exam" 
                name="dateofExam" onChange={handleChange}
                onFocus={(e) => (e.target.type = "date")}
                onBlur={(e) => (e.target.type = "text")}>
            </input>
            {error?.dateofExam ? (<p>{error?.dateofExam}</p>):null}

            <input type={"text"} className="add-Content-Select_Catagory" placeholder="Place the entrance exam website link" name="examLink" onChange={handleChange}></input>
            {error?.examLink ? (<p>{error?.examLink}</p>):null}

            <textarea className="add-Content" 
                placeholder="please enter some content here"
                name="content"
                onChange={handleChange}>
            </textarea>
            {error?.content ? (<p>{error?.content}</p>):null}

            <button className="add-Content_Button">{buttonText}</button>
        </form>
    </div>
  )
}

export default AddNewEntanceTest;
