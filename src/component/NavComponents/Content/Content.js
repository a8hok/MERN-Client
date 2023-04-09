import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getContentInfo } from '../../../Store/Slice/getContentData';
import { getContentSubjectInfo } from '../../../Store/Slice/getCOntentSubject';

import RightSideBar from '../RightSideBar';
import Navbar from '../../Navbar/navbar';
import Footer from '../../Footer/footer';

import "./Content.css";

const Content = () => {

  const dispatch = useDispatch();

  const [showData, setShowData] = useState();

  const [alternate, setAlternate] = useState();

  const {ContentData} = useSelector((state) => state.getContent);
  const {ContentSubjectData} = useSelector((state) => state.contentBySubject);

  useEffect(() => {
    if(alternate === 0){
      setShowData(ContentData)
    }else if (alternate === 1){
      setShowData(ContentSubjectData)
    }
  }, [ContentData, alternate, ContentSubjectData])

  const catagory = [
    "K-12", 
    "Undergraduate-engineering", 
    "Undergraduate-commerce", 
    "Undergraduate-Business-Administration"
  ]

  const Subjects = [
    "Physics",
    "Chemistry",
    "Biology",
    "Mathematics",
    "Computer-Science"
  ]

  const catagorySelector = (e) => {
    setAlternate(0)
    dispatch(getContentInfo(e.target.value))
  }

  const subjectSelector = (e) => {
    setAlternate(1)
    dispatch(getContentSubjectInfo(e.target.value))
  }

  return (
    <div>
        <Navbar/>
        <div className="floating_Selector-Container">
      {catagory.map((item) => {
        return (
          <button
            value={item}
            onClick={catagorySelector}
            className="category-options-tile"
          >
            {item}
          </button>
        );
      })}
        </div>
        <div className="floating_Selector-Container">
      {Subjects.map((item) => {
        return (
          <button
            value={item}
            onClick={subjectSelector}
            className="category-options-tile"
          >
            {item}
          </button>
        );
      })}
        </div>
        {showData && <div className="content-card_Container">
          {showData?.map((i) => {
            return <div className="content-Card">
              <div className="content-Card_Top">
                <h2>{i?.topic}</h2>
                <h2>{i?.subject}</h2>
              </div>
              <p>{i?.content}</p>
            </div>
          })}
        </div>}
        <Footer/>
    </div>
  )
}

export default Content;
