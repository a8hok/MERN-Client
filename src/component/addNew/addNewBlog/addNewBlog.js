import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { toAddNewBlog } from '../../../Store/Slice/AddNewBlogs';

import "./addNewBlog.css";

const AddNewBlog = () => {

    const [blogData, setBlogData] = useState({
        Domain: "",
        subDomain: "",
        title1: "",
        body1: "",
        title2: "", 
        body2: "", 
        title3: "", 
        body3: "", 
        title4: "", 
        body4: "",
        title5: "", 
        body5: "",
        title6: "", 
        body6: "",
        title7: "", 
        body7: ""
    });

    const {addedBlogs} = useSelector((state) => state.addBlog);

    const dispatch = useDispatch();

    const [buttonText, setButtonText] = useState("save");

    const [status, setStatus] = useState(false);

    const [error, setError] = useState({});

    const onChangeFields = (e) => {
        setBlogData({...blogData, [e.target.name]: e.target.value})
    };

    const validate = (e) => {
        const errors = {};
        if (!e.Domain){
            errors.Domain = "enter domain"
        }
        if (!e.subDomain){
            errors.subDomain = "enter sub domain"
        }
        return errors
    };

    const handleSave = (e) => {
        e.preventDefault();
        setError(validate(blogData))
        setStatus(true)
    };

    useEffect(() => {
        if(Object?.values(error)?.length === 0 && status){
          setButtonText("saved")
            dispatch(toAddNewBlog(blogData))
        }
      }, [status]);

    useEffect(() => {
        if(Object.values(error) > 0){
            setError(validate(blogData))
        }
    }, [blogData]);

    return (
        <>
            <div className="Add-new_blog-form-container">
                <form className="Add-new_blog-form" onSubmit={handleSave}>
                    <h1>Add New Blog</h1>

                    <input type={"text"} name="Domain" 
                    placeholder="Domain" onChange={onChangeFields}></input>
                    <p>{error?.Domain}</p>

                    <input type={"text"} name="subDomain" 
                    placeholder="sub Domain" onChange={onChangeFields}></input>
                    <p>{error?.subDomain}</p>

                    <h3>Blog 1</h3>
                    <input type={"text"} name="title1" 
                    placeholder="title" onChange={onChangeFields}></input>

                    <textarea type={"text"} name="body1" 
                    placeholder="blog" onChange={onChangeFields}></textarea>

                    <h3>Blog 2</h3>
                    <input type={"text"} name="title2" 
                    placeholder="title" onChange={onChangeFields}></input>

                    <textarea type={"text"} name="body2" 
                    placeholder="blog" onChange={onChangeFields}></textarea>

                    <h3>Blog 3</h3>
                    <input type={"text"} name="title3" 
                    placeholder="title" onChange={onChangeFields}></input>

                    <textarea type={"text"} name="body3" 
                    placeholder="blog" onChange={onChangeFields}></textarea>

                    <h3>Blog 4</h3>
                    <input type={"text"} name="title4" 
                    placeholder="title" onChange={onChangeFields}></input>

                    <textarea type={"text"} name="body4" 
                    placeholder="blog" onChange={onChangeFields}></textarea>

                    <h3>Blog 5</h3>
                    <input type={"text"} name="title5" 
                    placeholder="title" onChange={onChangeFields}></input>

                    <textarea type={"text"} name="body5" 
                    placeholder="blog" onChange={onChangeFields}></textarea>

                    <h3>Blog 6</h3>
                    <input type={"text"} name="title6" 
                    placeholder="title" onChange={onChangeFields}></input>

                    <textarea type={"text"} name="body6" 
                    placeholder="blog" onChange={onChangeFields}></textarea>

                    <h3>Blog 7</h3>
                    <input type={"text"} name="title7" 
                    placeholder="title" onChange={onChangeFields}></input>

                    <textarea type={"text"} name="body7" 
                    placeholder="blog" onChange={onChangeFields}></textarea>

                    <button className={`Add-new_blog-form-${buttonText}`}>{buttonText}</button>
                </form>
            </div>
        </>
    )
}

export default AddNewBlog;
