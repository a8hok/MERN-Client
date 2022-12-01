import React from 'react';
import "./ContactUs.css";
import Navbar from '../Navbar/navbar';

function ContactUs() {
  return (
    <div>
        <Navbar/>
        <form className="contact-form-Container">
    <h1>Contact Us</h1>
    <p>Please take a moment to get in touch, we will get back to you shortly.</p>

    <div className="column_Contact_Form">
        <label for="the-name">Your Name</label>
        <input type="text" name="name" id="the-name"/>

        <label for="the-email">Email Address</label>
        <input type="email" name="email" id="the-email"/>

        <label for="the-phone">Phone Number</label>
        <input type="tel" name="phone" id="the-phone"/>

        <label for="the-reason">How can we help you?</label>
        <select name="reason" id="the-reason">
        <option value="">Choose one</option>
        <option value="web">I need web design services</option>
        <option value="video">I need you to produce a video</option>
        <option value="3d">I need 3D polygon things</option>
    </select>
    </div>
    <div className="column_Contact_Form">
        <label for="the-message">Message</label>
        <textarea name="message" id="the-message"></textarea>
        <label>
        <input type="checkbox" name="newsletter" value="yes"/> Join our mailing list?
        </label>
        <input type="submit" value="Send Message" className="Contact-Submit_Button"/>
    </div>
</form>
    </div>
  )
}

export default ContactUs