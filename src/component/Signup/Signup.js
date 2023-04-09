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
  const [verified, setVerified] = useState(false);
  const [disable, setDisable] = useState(false);
  const [affiliateValue, setAffiliateValue] = useState("")

  const rolseJson = [{
    value: 0,
    name: "",
    option: "Please select your type of affiliation"
  },
  {
    value: 0,
    name: "",
    option: "Student"
  },
  {
    value: "College",
    name: "",
    option: "College"
  },
  {
    value: "School",
    name: "",
    option: "School"
  },
  {
    value: "University",
    name: "",
    option: "University"
  },
  {
    value: "Industrial",
    name: "",
    option: "Industrial"
  }]

  useEffect(() => {
    if (
      signupData &&
      signupData.data &&
      signupData.data.response === "waiting"
    ) {
      setLoginStatus({
        status: 1,
        message: "Mail has been sent to the registered mail ID, please confirm",
      });
    }else if(
      signupData &&
      signupData.data &&
      signupData.data.response === "success"
      ){
        setLoginStatus({
          status: 1,
          message: "User created successfully!!",
        });
        
    }else if (signupData?.data?.response === "Email Exits") {
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

  const hanldeChange = (e) => {
    // console.log(e.target.value)
    if(e.target.value == 0){
      setVerified(true)
      setDisable(true)
    }else {
      setVerified(false)
      setDisable(false)
    }
  }

  const handleAffiliation = (e) => {
    setAffiliateValue(e.target.value)
  }

  const handleSignupData = (e) => {
    e.preventDefault();
    const ele = e.target.elements;
    const userFirstName = ele[0].value;
    const userLastName = ele[1].value;
    const userEmail = ele[2].value;
    const userAffiliationId = (disable ? "":ele[3].value);
    const userAffiliation = ele[4].value;
    const userPassword = ele[5].value;
    console.log(userAffiliation)
    ele[0].value = "";
    ele[1].value = "";
    ele[2].value = "";
    ele[3].value = "";
    ele[4].value = "";
    ele[5].value = "";
    dispatch(
      postSignupData({ userFirstName, userLastName, userEmail, userPassword, userAffiliationId, userAffiliation, verified })
    );
    // console.log({ userFirstName, userLastName, userEmail, userPassword, userAffiliationId, userAffiliation, verified })
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
                className="Email-input"
                placeholder="ID / College-ID / University_ID/ School_ID"
                type="text"
                onChange={handleAffiliation}
                value={disable ? "" : affiliateValue}
                disabled={disable}
              ></input>

              <select
                className="Email-input"
                onChange={hanldeChange}
                placeholder="ID *">
                  {rolseJson.map((e, index) => {
                    return<option value={e.value} key={index}>
                            {e.option}
                          </option>
                      }
                    )
                  }   
              </select>
              
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
