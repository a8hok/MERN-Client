import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import file from "../../Event/img/pngtree.jpg";
import { PostAdvertisement } from "../../../Store/Slice/AddNewAdvertisements";

const AddNewAdvertisement = ({userData}) => {

    const dispatch = useDispatch();

    const [statusNum, setStatusNum] = useState(1);

    const DisciplineBased = [
        {
            Option: "select your preferred sub catagory",
            value: ""
        },
        {
            Option: "Arts & Science",
            value: "Arts & Science"
        },
        {
            Option: "Law",
            value: "Law"
        },
        {
            Option: "Medical",
            value: "Medical"
        },
        {
            Option: "Engineering",
            value: "Engineering"
        },
        {
            Option: "Hotel Management",
            value: "Hotel Management"
        }
    ];

    const mainCatagory = [
        {
            Option: "select your preferred catagory",
            value: ""
        },
        {
            Option: "Schools",
            value: "Schools"
        },
        {
            Option: "Colleges",
            value: "Colleges"
        },
        {
            Option: "Universities",
            value: "Universities"
        }
    ];

    const adPlan = [
        {
            option: "Select the Ad time limit",
            value: ""
        },
        {
            option: "1 month",
            value: "1 month"
        },
        {
            option: "2 month",
            value: "2 month"
        }
    ];
  
    const [name, setname] = useState()
    const [files, setFile] = useState()
    const [message, setmessage] = useState()
  
    const onFileChange = (e) => {
      setFile(e.target.files[0])
      setname(e.target.files[0].name)
    }
  
    useEffect(() => {
      if(userData?.superAdminStatus){
        setStatusNum(0)
      }else{
        setStatusNum(1)
      }
    }, [userData])

    const HandelEventData = (e) => {
        e.preventDefault();
        const element = e.target.elements;
        const Title = element[0].value;
        const catagory = element[1].value;
        const subCatagory = element[2].value;
        const timeScreening = element[3].value;
        const userEmail = userData?.userEmail;
        const status = statusNum;
        element[0].value = "";
        element[1].value = "";
        element[2].value = "";
        element[3].value = "";
        dispatch(PostAdvertisement({ Title, catagory, subCatagory, files, userEmail, status, timeScreening }));
        if (name.length > 0) {
            setmessage("Event uploaded successfully")
        }
        setTimeout(() => {
            window.location.reload(false)
        }, "1000")
    };

    return (
        <>
            <div className="form-container">
                <form onSubmit={HandelEventData}>
                    <div className="form-content">
                        <h1>Advertisement Form</h1>
                        <input
                            className="input-title"
                            type="text"
                            required={true}
                            placeholder="Enter the Title">
                        </input>

                        <select className="input-title" required={true}>
                            {mainCatagory.map((i) => (<option key={i.Option} value={i.value}>{i.Option}</option>))}
                        </select>

                        <select className="input-title">
                            {DisciplineBased.map((i) => (<option key={i.Option} value={i.value}>{i.Option}</option>))}
                        </select>

                        <select className="input-title">
                            {adPlan.map((i) => (<option key={i.option} value={i.value}>{i.option}</option>))}
                        </select>

                        <label className="add-new-profile-pic">
                            <img
                                src={file}
                                alt="no img found"
                                className="profile-file-img"
                            ></img>
                            {name ? <label className="upload-pic-txt">{name}</label> : <label className="upload-pic-txt">
                                Upload PNG,JPEG,JPG,SVG only
                            </label>}
                            <input
                                type="file"
                                className="select-new-pic"
                                required={true}
                                onChange={onFileChange}
                            ></input>
                        </label>

                        {message && <div className="addEvent-success-msg">{message}</div>}

                        <button className="btn-submit">Submit</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default AddNewAdvertisement;
