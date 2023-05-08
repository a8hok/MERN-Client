import React from 'react';

import Navbar from '../Navbar/navbar';
import Footer from '../Footer/footer';

import vPImg from "./img/VisionMission.png";
import QImg from "./img/Quality.png";

import "./Vision.css";

const Vision = () => {
    return (
        <>
            <Navbar/>
                <div className="VPQ_Container">
                    <div className="VandP_Container">
                        <h2>Vision and mission</h2>
                        <br/>
                        <img src={vPImg} alt="" className="VisionMissionImages" />
                        <div className="Vision_Container">
                            <h3>Vision Statement</h3>
                            <p>
                                Our vision is to establish ourselves as the most trusted and comprehensive online portal for higher education information and assistance, empowering all stakeholders to make informed decisions and achieve their full academic potential. We strive to maintain the highest academic standards in providing accurate, reliable, and up-to-date information to our users, to help them navigate the complex landscape of higher education.
                            </p>
                        </div>
                        <div className="Mission_Container">
                            <h3>Mission Statements</h3>
                            <ol>
                                <li>
                                    To develop and maintain a user-friendly web portal that offers accurate and comprehensive information on higher education opportunities, including schools, colleges, universities, and programs.
                                </li>
                                <li>
                                    To assist prospective students in finding suitable higher education opportunities based on their interests, preferences, and academic qualifications, while upholding the highest standards of academic integrity.
                                </li>
                                <li>
                                    To provide comprehensive and reliable information on quality educational institutions, based on various institutional rankings and user feedback, and to continuously improve our data collection and analysis methods.
                                </li>
                                <li>
                                    To offer assessment and guidance services to help learners prepare for entrance examinations for higher educational institutions, and to provide access to high-quality study materials and resources.
                                </li>
                                <li>
                                To assist educational institutions in promoting their programs to a wider audience and attracting promising leads, while ensuring that our recommendations are based on objective and transparent criteria.
                                </li>
                                <li>
                                To help employers find skilled learners for internships and job opportunities, and to provide learners with career guidance and resources to help them achieve their academic and professional goals.
                                </li>
                            </ol>
                        </div>
                    </div>

                    <div className="Quality_Container">
                        <h2>Quality policy</h2>
                        <br/>
                        <img src={QImg} alt="" className="VisionMissionImages" />
                        <p>
                            Our organization is committed to upholding the highest academic standards in providing educational information and assistance to our customers.
                        </p>
                        <br />
                        <p>
                            We will achieve this by ensuring the accuracy, reliability, and timeliness of our information, and by continuously improving our processes, procedures, and resources.
                        </p>
                        <br />
                        <p>
                            We will maintain strict standards of academic integrity in all our interactions with stakeholders, and comply with all applicable laws, regulations, and standards.
                        </p>
                        <br />
                        <p>
                            We will measure and monitor our performance regularly to identify areas for improvement and take appropriate corrective actions.
                        </p>
                        <br />
                        <p>
                            Our quality policy is an integral part of our vision and mission, and we are dedicated to fulfilling it in all aspects of our business.
                        </p>
                    </div>
                </div>
            <Footer/>
        </>
    )
}

export default Vision;
