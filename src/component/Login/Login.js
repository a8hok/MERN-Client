import React from "react";
import { useState, useEffect } from "react";
import NavBar from "../Navbar/navbar";
import { useDispatch, useSelector } from "react-redux";
import { postLoginUser } from "../../Store/Slice/LoginSlice";
import Loginlogo from "../Login/Images/Vector.svg";
import "./CSS/Login.css";
import Footer from "../Footer/footer.js";
import { Link, useNavigate, useLocation } from "react-router-dom";

import useAuth from "../CustomComponents/useAuth";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {setAuth} = useAuth();
  const { loginData, loading } = useSelector((state) => state.loginInfo);
  const location = useLocation()
  const locationState = location.state;
  const [message, setMessage] = useState("")

  const from = location?.state?.from?.pathname || "/"

  const HandleSubmit = (e) => {
    e.preventDefault();
    const element = e.target.elements;
    const userEmail = element[0].value;
    const userPassword = element[1].value;
    element[0].value = "";
    element[1].value = "";
    dispatch(postLoginUser({ userEmail, userPassword }));
  };

  useEffect(() => {
    if (!locationState?.logout) {
      if(loginData &&
        loginData.message === "Please verify your Mail ID"){
          setMessage(loginData.message)
      }else if (
        loginData &&
        loginData.message === "Login success" &&
        loginData.data.superAdminStatus &&
        loginData.data.verified
      ) {
        navigate("/admin/dashboard", {
          state: loginData.data.userEmail,
        });
      } else if (
        loginData &&
        loginData.message === "Login success" &&
        !loginData.data.superAdminStatus &&
        loginData.data.verified
      ) {
        navigate("/profile", { state: loginData.data.userEmail });
      } else if (loginData.error) {
        console.log("No user found");
      }
    }
  }, [loginData]);

  return (
    <>
      <div className="all-login-container">
        <NavBar />
        <div className="hidden-container">
          <div className="hidden"></div>
          <h1 className="hidden-pagename">log in</h1>
        </div>
        <div className="image">
          <div className="Login-main">
            <form onSubmit={HandleSubmit}>
              <div className="Login-container">
                <div className="Loginlogo">
                  <img src={Loginlogo} alt="no img found"></img>
                </div>
                <input
                  className="Emails-input"
                  placeholder="Email Address *"
                  type="text"
                  required
                ></input>
                <input
                  className="passwords-input"
                  type="password"
                  placeholder="Password *"
                  required
                ></input>
                <button className="login-btn">LOGIN</button>
                {loginData.error ? (
                  <div className="sign-failure">{loginData.error}</div>
                ) : null}
                {message != "" ? (
                  <div className="sign-failure">{message}</div>
                ) : null}
                <div className="login-footer">
                  <p>Don't have an account?</p>
                  <Link to="/Signup">SIGN UP</Link>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Login;
