import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { postSignupData } from "../../Store/Slice/SignupSlice";
import Footer from "../Footer/footer";
import Loginlogo from "../Login/Images/Vector.svg";
import NavBar from "../Navbar/navbar";
import "./Signup.css";

const Signup = () => {
  const dispatch = useDispatch();
  const { signupData } = useSelector((state) => state.signupInfo);
  const [loginStatus, setLoginStatus] = useState({ status: 0, message: "" });

  useEffect(() => {
    if (
      signupData &&
      signupData.data &&
      signupData.data.response === "success"
    ) {
      setLoginStatus({
        status: 1,
        message: "Registered Successfully!!",
      });
  
    } else if (signupData?.data?.response === "Email Exits") {
      setLoginStatus({
        status: 2,
        message: "This email has been already taken!!",
      });
    
    } else if (signupData?.data?.response === "Inefficient") {
      setLoginStatus({
        status: 3,
        message: " Please check the details entered",
      });
    } 
  }, [signupData]);

  const handleSignupData = (e) => {
    e.preventDefault();
    const ele = e.target.elements;
    const userFirstName = ele[0].value;
    const userLastName = ele[1].value;
    const userEmail = ele[2].value;
    const userPassword = ele[3].value;
    ele[0].value = "";
    ele[1].value = "";
    ele[2].value = "";
    ele[3].value = "";
    dispatch(
      postSignupData({ userFirstName, userLastName, userEmail, userPassword })
    );
  };

  return (
    <div className="all-login-container">
      <NavBar />
      <div className="hidden-container">
        <div className="hidden"></div>
        <h1 className="hidden-pagename">signup</h1>
      </div>
      <div className="image">
        <div className="Signup-main">
          <form onSubmit={handleSignupData} className="form-signup">
            <div className="Signup-container">
              <div className="Loginlogo">
                <img src={Loginlogo} alt="no img found"></img>
              </div>
              <div className="Name-input-container">
                <input
                  className="fistname-input"
                  placeholder="First name *"
                  type="text"
                  required
                ></input>
                <input
                  className="LastName-input"
                  placeholder="Last name *"
                  type="text"
                  required
                ></input>
              </div>
              <input
                className="Email-input"
                placeholder="Email Address *"
                type="email"
                required
              ></input>
              <input
                className="password-input"
                type="password"
                placeholder="Password *"
                required
              ></input>
              <button className="Signup-btn">SIGNUP</button>
              {loginStatus.status === 1 ? (
                <div className="sign-success">
                  <span>{loginStatus.message}</span>
                  <Link to="/login" className="sign-success-link">
                    LOGIN
                  </Link>
                </div>
              ) : null}
              {loginStatus.status === 2 ? (
                <div className="sign-failure">{loginStatus.message}</div>
              ) : null}
              <div className="Signup-footer">
                <p>Already have an account? </p>
                <Link to="/login">LOGIN</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div>
        <Footer />
      </div>
      <div />
    </div>
  );
};

export default Signup;
