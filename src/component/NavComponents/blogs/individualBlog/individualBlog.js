import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { postQueryFromBlogPages } from '../../../../Store/Slice/UserQueryBlog';

import Navbar from '../../../Navbar/navbar';
import Footer from '../../../Footer/footer';

import "./individualBlog.css";

const IndividualBlog = () => {

  const navigate = useNavigate();

  const [individualBlog, setIndividualBlog] = useState({});

  const [showMessage, setShowMessage] = useState(false);

  const {selectedBlog} = useSelector((state) => state.choosenBlog);

  const {blogsentStatus} = useSelector((state) => state.queryBlog);

  const dispatch = useDispatch();

  const [query, setQuery] = useState({
    userEmail: "",
    userQuery: "",
    Domain: selectedBlog?.Domain
  });

  console.log(selectedBlog)

  useEffect(() => {
    if(Object.values(selectedBlog)?.length === 0){
      navigate("/blogs")
    }else {
      setIndividualBlog(selectedBlog)
    }
  }, [selectedBlog]);

  console.log(blogsentStatus)

  const onChangeQuery = (e) => {
    setQuery({...query, [e.target.name]: e.target.value})
    setShowMessage(false)
  }

  const submitQuery = (e) => {
    e.preventDefault()
    console.log(query)
    setShowMessage(true)
    dispatch(postQueryFromBlogPages(query))
  }

  return (
    <>
      <Navbar/>
        <div className="individual_blog-data_container">
          <div className="individual_blog-data">
            <div className="individual_blog-heading">
              <h3>{individualBlog?.Domain}</h3>
              <h3>{individualBlog?.subDomain}</h3>
            </div>
            <div className="blog_readableData-container">
                <h4>{individualBlog?.title1}</h4>
                <p>{individualBlog?.body1}</p>
            </div>
            <div className="blog_readableData-container">
                <h4>{individualBlog?.title2}</h4>
                <p>{individualBlog?.body2}</p>
            </div>
            <div className="blog_readableData-container">
                <h4>{individualBlog?.title3}</h4>
                <p>{individualBlog?.body3}</p>
            </div>
            <div className="blog_readableData-container">
                <h4>{individualBlog?.title4}</h4>
                <p>{individualBlog?.body4}</p>
            </div>
            <div className="blog_readableData-container">
                <h4>{individualBlog?.title5}</h4>
                <p>{individualBlog?.body5}</p>
            </div>
            <div className="blog_readableData-container">
                <h4>{individualBlog?.title6}</h4>
                <p>{individualBlog?.body6}</p>
            </div>
            <div className="blog_readableData-container">
                <h4>{individualBlog?.title7}</h4>
                <p>{individualBlog?.body7}</p>
            </div>
          </div>
        </div>
        <form className="review_form-section-FAQ" onSubmit={submitQuery}>
          {!!showMessage ? <div className={blogsentStatus?.message === "Please verify your mail" ? "review_message-status" : "review_message-recieved"}>{blogsentStatus?.message}</div>:null}
          <h4>Review/Comment's</h4>
          <input 
            type={"email"} 
            placeholder="Your Registered Mail Id"
            name="userEmail"
            onChange={onChangeQuery}></input>
          <textarea 
            placeholder="Your Answer for FAQ"
            name="userQuery"
            onChange={onChangeQuery}></textarea>
          <button>Submit</button>
        </form>
      <Footer/>
    </>
  )
}

export default IndividualBlog;
