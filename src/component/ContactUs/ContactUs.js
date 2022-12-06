import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./ContactUs.css";
import Navbar from '../Navbar/navbar';

function ContactUs() {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar />
      <div className="all-Contact_Container">
        <div className="contact-Top-Section-Divider">
        <div className="top-Section-ContactPage-Leftside">
          <h1>contact us</h1>
          <p>For more information, please write to:</p>
          <p>info@learnplusplus.com </p>
          <p>LPP Learning Technology Solutions Private Limited</p>
          <p>(Incorporated as a Private Limited Company under the Companies Act, 2013 (18 of 2013))</p>
          <p>Regd. Office:</p>
          <p>26 Badrakaliamman Koil Street No. 3</p>
          <p>Uppilipalayam</p>
          <p>Coimbatore – 641 015</p>
          <p>TamilNadu, India.</p>
        </div>
        <div className="top-Section-ContactPage-rightSide">
          <h1>Other contacts</h1>
          <p>The Chief Executive Officer: ceo@learnplusplus.com</p>
          <p>The Chief Technology Officer: cto@learnplusplus.com</p>
          <p>The Marketing Director: director@learnplusplus.com </p>
          <p>The System Administrator: sysadmin@learnplusplus.com</p>
        </div>
        {/* <div className="top-Section-ContactPage-rightSide">
          <h1>Other contacts</h1>
          <ul className="contact-Unordered_list">
            <li>The Chief Executive Officer: ceo@learnplusplus.com</li>
            <li>The Chief Technology Officer: cto@learnplusplus.com</li>
            <li>The Marketing Director: director@learnplusplus.com </li>
            <li>The System Administrator: sysadmin@learnplusplus.com</li>
          </ul>
        </div> */}
        </div>
        
        <div className="contact-image_Background">
          <div className="contact-Rightside-contents">
            <h1 className="contact-heading">contact us</h1>
            <p className="contact-content">
            LearnPlusPlus.com, a knowledge-based digital 
            technology platform offering educational products 
            and services to enable learners at all levels to 
            explore and craft their learning paths.
            </p>
            <button className="contact-Rightside-contents_Button" onClick={() => navigate("/about")}>
              learn more
            </button>
          </div>

          <form className="contact-form-Container">
            <div className="top-Section-Form_Contact">
              <div className="inside_Topsection">
                <label className="Contact-Input_Labels">Email Address</label>
                <input className="contact_Infield-Inputs" type="email" name="email" id="the-email" 
                placeholder="enter a valid email"/>
              </div>       
              <div className="inside_Topsection">
                <label className="Contact-Input_Labels">Your Name</label>
                <input className="contact_Infield-Inputs" type="text" name="name" id="the-name" 
                placeholder="enter your name"/>
              </div>       
            </div>
            <div className="inside_Midsection">
                <label className="Contact-Input_Labels">Email Address</label>
                <input className="contact_Outfield-Inputs" type="text"
                placeholder="Enter your address">
                </input>   
            </div>  
            <div className="inside_Midsection">
                <label className="Contact-Input_Labels">Message</label>
                <textarea className="contact_Textfield-Inputs" type="text"
                placeholder="Enter your address">
                </textarea>   
            </div>

            <button type="submit" className="Contact-Submit_Button">
              Submit
            </button>  
          </form>
        </div>
      </div>
      
    </div>
  )
}

export default ContactUs