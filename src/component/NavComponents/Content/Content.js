import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getContentInfo } from '../../../Store/Slice/getContentData';

import RightSideBar from '../RightSideBar';
import Navbar from '../../Navbar/navbar';
import Footer from '../../Footer/footer';

import "./Content.css";

const Content = () => {

  const dispatch = useDispatch();

  const [showData, setShowData] = useState();

  const {ContentData} = useSelector((state) => state.getContent);

  useEffect(() => {
    setShowData(ContentData)
  }, [ContentData])

  const catagory = [
    "K-12", 
    "Undergraduate-engineering", 
    "Undergraduate-commerce", 
    "Undergraduate-Business-Administration"
]
  return (
    <div>
        <Navbar/>
        <div className="category-options-container">
      {catagory.map((item) => {
        return (
          <button
            value={item}
            onClick={() => dispatch(getContentInfo(item))}
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
