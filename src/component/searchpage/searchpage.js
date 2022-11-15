import React from 'react'
import Navbar from '../Navbar/navbar'
import Searchlogo from "../Login/Images/searchlogo.svg"
import "./search.css"
import readmorelogo from "../Login/Images/readmorelogo.svg"
import Footer from '../Footer/footer'

const SearchPage = () => {
  const mockdata = [
    {
      topic: "Engineering",
      discription:
        "Lörem ipsum kvasitropi svemester. Anaitet lall. Gåsade döloning. Syll bebel till kvasisens. Tres kos masade robotdräkt. Heteropp. Vönäna teraskap. Vande legga kadinera makrohet reatologi. Por hybridkrig och hypobun. Evöligt färade, därför att påns tilig. ",
    },
    {
      topic: "Engineering",
      discription:
        "Lörem ipsum kvasitropi svemester. Anaitet lall. Gåsade döloning. Syll bebel till kvasisens. Tres kos masade robotdräkt. Heteropp. Vönäna teraskap. Vande legga kadinera makrohet reatologi. Por hybridkrig och hypobun. Evöligt färade, därför att påns tilig. ",
    },
    {
      topic: "Engineering",
      discription:
        "Lörem ipsum kvasitropi svemester. Anaitet lall. Gåsade döloning. Syll bebel till kvasisens. Tres kos masade robotdräkt. Heteropp. Vönäna teraskap. Vande legga kadinera makrohet reatologi. Por hybridkrig och hypobun. Evöligt färade, därför att påns tilig. ",
    },
    {
      topic: "Engineering",
      discription:
        "Lörem ipsum kvasitropi svemester. Anaitet lall. Gåsade döloning. Syll bebel till kvasisens. Tres kos masade robotdräkt. Heteropp. Vönäna teraskap. Vande legga kadinera makrohet reatologi. Por hybridkrig och hypobun. Evöligt färade, därför att påns tilig. ",
    },
    {
      topic: "Engineering",
      discription:
        "Lörem ipsum kvasitropi svemester. Anaitet lall. Gåsade döloning. Syll bebel till kvasisens. Tres kos masade robotdräkt. Heteropp. Vönäna teraskap. Vande legga kadinera makrohet reatologi. Por hybridkrig och hypobun. Evöligt färade, därför att påns tilig. ",
    },
    {
      topic: "Engineering",
      discription:
        "Lörem ipsum kvasitropi svemester. Anaitet lall. Gåsade döloning. Syll bebel till kvasisens. Tres kos masade robotdräkt. Heteropp. Vönäna teraskap. Vande legga kadinera makrohet reatologi. Por hybridkrig och hypobun. Evöligt färade, därför att påns tilig. ",
    },
    {
      topic: "Engineering",
      discription:
        "Lörem ipsum kvasitropi svemester. Anaitet lall. Gåsade döloning. Syll bebel till kvasisens. Tres kos masade robotdräkt. Heteropp. Vönäna teraskap. Vande legga kadinera makrohet reatologi. Por hybridkrig och hypobun. Evöligt färade, därför att påns tilig. ",
    },
    {
      topic: "Engineering",
      discription:
        "Lörem ipsum kvasitropi svemester. Anaitet lall. Gåsade döloning. Syll bebel till kvasisens. Tres kos masade robotdräkt. Heteropp. Vönäna teraskap. Vande legga kadinera makrohet reatologi. Por hybridkrig och hypobun. Evöligt färade, därför att påns tilig. ",
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="search-container">
        <input
          className="search-input"
          type="text"
          placeholder="Search here"
        ></input>
        <div className="search-logo--container">
          <img src={Searchlogo}></img>
        </div>
      </div>
      <div className="search-suggestion--container">
        <p>Enginneering</p>
        <p>Electrical</p>
        <p>Communication</p>
        <p>Electronics</p>
        <p>Computer</p>
        <button className="search-seeall-btn">See all</button>
      </div>
      <div>
        <div className="search-header">
          <p>Search Results</p>
        </div>
        <div className="search-results--container">
          {mockdata.map((obj) => (
            <>
              <div className="cards">
                <h2>{obj.topic}</h2>
                <p>{obj.discription}</p>
                <div className="learnmore-container">
                  <img src={readmorelogo}></img>
                  <a href="#">Learn More</a>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
      <div></div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default SearchPage;
