import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { AddNewContentData } from '../../../Store/Slice/NewContent';

import "./addNewContent.css";

const AddNewContent = () => {

    const dispatch = useDispatch();

    const [buttonText, setButtonText] = useState("save")

    const [error, setError] = useState({})
    
    const catagory = [
        "K-12", 
        "Undergraduate-engineering", 
        "Undergraduate-commerce", 
        "Undergraduate-Business-Administration"
    ]

    const subject = [
        "Mathematics",
        "Physics",
        "Chemistry",
        "Biology",
        "Computer-Science"
    ]

    const [status, setStatus] = useState(false);

    const [state, setState] = useState({
        topic: "K-12",
        subject: "Mathamatics",
        content: ""
    })

    const handleChange = (e) => {
        const {name, value} = e.target
        setState({...state, [name]: value})
    }

    const validate = (e) => {
        const errors={}
        if (!e.content){
          errors.content = "please give some content"
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
        dispatch(AddNewContentData(state))
        setButtonText("saved")
        window.location.reload(false)
        }
    }, [status])

  return (
    <div className="Add-Content_Container">
        <form className="Add-Content_Form" onSubmit={handletheSubmit}>
            <h1>Add New Content</h1>
            <select className="add-Content-Select_Catagory" name="topic"  onChange={handleChange}>
                {catagory.map((i) => {return <option value={i}>{i}</option>})}
            </select>
            <select className="add-Content-Select_Catagory" name="subject" onChange={handleChange}>
                {subject.map((i) => {return <option value={i}>{i}</option>})}
            </select>
            <textarea className="add-Content" 
            placeholder="please enter some content here"
            name="content"
            onChange={handleChange}></textarea>
            <p>{error?.content}</p>
            <button className="add-Content_Button">{buttonText}</button>
        </form>
    </div>
  )
}

export default AddNewContent;
