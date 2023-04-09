import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editBlogData } from '../../Store/Slice/editBlogData';

const ManageBlogs = ({blogData, screenChange}) => {

  const dispatch = useDispatch();
  const [buttonText, setButtonText] = useState("save")
  const [bloggingData, setBloggingdata] = useState({});

  useEffect(() => {
    setBloggingdata(blogData)
  }, [])

  const handleSave = (e) => {
    e.preventDefault()
    if(blogData.title7 === bloggingData.title7 && blogData.body7 === bloggingData.body7){
      alert("no changes were made")
    }else {
      console.log(bloggingData)
      dispatch(editBlogData(bloggingData))
      setButtonText("saved")
      setTimeout(() => {
        screenChange()
      }, "2000")
    }
  }

  const onChangeFields = (e) => {
    setBloggingdata({...bloggingData, [e.target.name]: e.target.value})
  }

  return (
    <>
            <div className="Add-new_blog-form-container">
                <form className="Add-new_blog-form" onSubmit={handleSave}>
                    <h1>Update Blog</h1>

                    <input type={"text"} name="Domain" 
                    placeholder="Domain" 
                    value={bloggingData?.Domain}
                    disabled={true}></input>

                    <input type={"text"} name="subDomain" 
                    placeholder="sub Domain"
                    value={bloggingData?.subDomain}
                    disabled={true}></input>

                    <h3>Blog 1</h3>
                    <input type={"text"} name="title1" 
                    placeholder="title"
                    value={bloggingData?.title1}
                    disabled={true}></input>

                    <textarea type={"text"} name="body1" 
                    placeholder="blog"
                    value={bloggingData?.body1}
                    disabled={true}></textarea>

                    <h3>Blog 2</h3>
                    <input type={"text"} name="title2" 
                    placeholder="title"
                    value={bloggingData?.title2}
                    disabled={true}></input>

                    <textarea type={"text"} name="body2" 
                    placeholder="blog"
                    value={bloggingData?.body2}
                    disabled={true}></textarea>

                    <h3>Blog 3</h3>
                    <input type={"text"} name="title3" 
                    placeholder="title"
                    value={bloggingData?.title3}
                    disabled={true}></input>

                    <textarea type={"text"} name="body3" 
                    placeholder="blog"
                    value={bloggingData?.body3}
                    disabled={true}></textarea>

                    <h3>Blog 4</h3>
                    <input type={"text"} name="title4" 
                    placeholder="title"
                    value={bloggingData?.title4}
                    disabled={true}></input>

                    <textarea type={"text"} name="body4" 
                    placeholder="blog"
                    value={bloggingData?.body4}
                    disabled={true}></textarea>

                    <h3>Blog 5</h3>
                    <input type={"text"} name="title5" 
                    placeholder="title"
                    value={bloggingData?.title5}
                    disabled={true}></input>

                    <textarea type={"text"} name="body5" 
                    placeholder="blog"
                    value={bloggingData?.body5}
                    disabled={true}></textarea>

                    <h3>Blog 6</h3>
                    <input type={"text"} name="title6" 
                    placeholder="title"
                    value={bloggingData?.title6}
                    disabled={true}></input>

                    <textarea type={"text"} name="body6" 
                    placeholder="blog"
                    value={bloggingData?.body6}
                    disabled={true}></textarea>

                    <h3>Blog 7</h3>
                    <input type={"text"} name="title7" 
                    placeholder="title" 
                    onChange={onChangeFields}
                    value={bloggingData?.title7}></input>

                    <textarea type={"text"} name="body7" 
                    placeholder="blog" 
                    onChange={onChangeFields}
                    value={bloggingData?.body7}></textarea>

                    <button className={`Add-new_blog-form-${buttonText}`}>{buttonText}</button>
                </form>
            </div>
    </>
  )
}

export default ManageBlogs;
