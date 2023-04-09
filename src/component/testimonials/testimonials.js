import React, {useRef, useState, useEffect} from 'react';
import "./testimonials.css";
import staff from "./Img/userAvatar.png";
import student1 from "./Img/userAvatar1.png";
import student2 from "./Img/userAvatar2.png";

const Testimonials = () => {

const [visible, setVisible] = useState(false);

const elementRef = useRef();

useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
        const entry = entries[0];
        setVisible(entry?.isIntersecting)
        console.log("Top", entry)
    })
    observer.observe(elementRef?.current)

    // return () => {
    //     observer?.unobserve(elementRef?.current);
    //   };
}, [])
  
  return (
    <div ref={elementRef} className="testimonials_banner-container">
        <div className={`${visible ? "testimonials_banner_1": "testimonials_banner_alternate"}`}>
            <div className="testimonials_text-para_container">
                <p>
                    I've been using this website for a few months now and it has been a game-changer for me. 
                    As someone who was struggling to figure out what career path to take, 
                    the platform's guidance and curated courses have helped me gain clarity 
                    and confidence in my choices. The best part is that universities 
                    can also enroll and provide information about their programs,
                    so I feel like I have access to a wealth of information and opportunities 
                    that I wouldn't have otherwise. Thank you so much for creating such a 
                    useful resource!
                </p>
            </div>
            <div className="Testi-Userimage_Main-Container">
                <div className="Testi-Userimage-Container">
                    <img src={student1} alt="" />
                </div>
            </div>
        </div>
        <div className={`${visible ? "testimonials_banner_2": "testimonials_banner_alternate"}`}>
            <div className="Testi-Userimage_Main-Container">
                <div className="Testi-Userimage-Container">
                    <img src={student2} alt="" />
                </div>
            </div>
            <div className="testimonials_text-para_container">
                <p>
                    I was looking for a platform that could provide me 
                    with the best courses to help me excel in my chosen 
                    field, and I found this website. The user-friendly 
                    interface and easy navigation make it simple for me
                    to find what I am looking for. The website's offering 
                    of courses from top-rated institutions is really impressive, 
                    and it's great to see that universities can also provide 
                    information about their programs. Overall, I would highly 
                    recommend this website to any student looking for guidance 
                    and support in their career path.
                </p>
            </div>
        </div>
        <div className={`${visible ? "testimonials_banner_3": "testimonials_banner_alternate"}`}>
            <div className="testimonials_text-para_container">
                <p>
                    As a university administrator, I was looking for a way to 
                    reach potential students and provide them with information 
                    about our institution. This website not only allows us to do 
                    that, but it also provides a platform for students to find 
                    courses and get guidance on their career paths. I think this 
                    is an amazing resource for students, and it has been a great 
                    way for us to connect with potential applicants. I would 
                    highly recommend this website to any university or student 
                    looking for a comprehensive and user-friendly platform for 
                    career guidance and education.
                </p>
            </div>
            <div className="Testi-Userimage_Main-Container">
                <div className="Testi-Userimage-Container">
                    <img src={staff} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonials
