import React from 'react';

import Navbar from '../Navbar/navbar';
import Footer from '../Footer/footer';

import privacyImg from "./img/privacypolicy.png";

import "./Privacy.css";

const Privacy = () => {
  return (
    <>
        <Navbar/>
        <div className="allPrivacy_Policy-Container">
            <h2>Privacy Policy for LPP Learning Technology Solutions (P) Ltd</h2>
            <div className="Privacy_policy-Container">
                    <div className="left_privact-Policy">
                        <img src={privacyImg} alt="privacyImg" className="privacyImg_component"/>
                    </div>
                    <div className="right_privacy-Policy">
                        <h3>Who we are?</h3>
                        <div>
                            LPP Learning Technology Solutions Pvt. Ltd. is an educational service provider that offers guidance to students planning to join a college or university for graduation. Our website address is <a href='https://highereducationupdates.com' target='_blank'>https://highereducationupdates.com</a>
                        </div>

                        <h3>What personal data do we collect and why do we collect it?</h3>
                        <p><span>Comments:</span> When visitors leave comments on our site, we collect the data shown in the comment form, as well as the visitor's IP address and browser user agent string to help with spam detection.</p>

                        <p><span>Media:</span> If you upload images to the website, you should avoid uploading images with embedded location data (EXIF GPS) included.</p>

                        <p><span>Media:</span> When you fill out our contact form, we collect your name, email address, and message. We use this information to respond to your query.</p>

                        <p><span>Cookies:</span> We use cookies to personalize content and ads, provide social media features, and analyze our traffic. We also share information about your use of our site with our social media, advertising, and analytics partners.</p>

                        <p><span>Embedded content from other websites:</span> Articles on this site may include embedded content (e.g., videos, images, articles, etc.). Embedded content from other websites behaves in the same way as if the visitor had visited the other website.</p>

                        <p><span>Analytics:</span> We use Google Analytics to analyze the use of our website. Google Analytics gathers information about website use using cookies. The information gathered relating to our website is used to create reports about the use of our website.</p>

                        <h3>Who do we send or share your data with?</h3>
                        <p>We do not send or share your personal data with any third parties.</p>

                        <h3>How long do we retain your data?</h3>
                        <p>Running a holiday sale or weekly special? Definitely promote it here to get customers excited about getting a sweet deal.</p>

                        <h3>What rights do you have over your data?</h3>
                        <p>You have the right to request that we provide you with a copy of the personal data we hold about you. You also have the right to request that we correct any inaccuracies in your personal data or that we delete your personal data. </p>

                        <h3>Where we send your data?</h3>
                        <div>If you have any questions or concerns about our privacy policy or the way we handle your personal data, please contact us at <a href='rk.suresh@learnglobe.in' target='_blank'>rk.suresh@learnglobe.in.</a></div>
                    </div>
                </div>
            </div>
        <Footer/>
    </>
  )
}

export default Privacy;
