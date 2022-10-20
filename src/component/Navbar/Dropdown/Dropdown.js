import { Link, useNavigate } from "react-router-dom";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postLoginUser } from "../../../Store/Slice/LoginSlice.js";
import Loginlogo from "../../Login/Images/Vector.svg";
import { PopupMenu } from "react-simple-widgets";
import "../Dropdown/Dropdown.css";
const Dropdown = ({ profileInfo }) => {

  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_Dropdown");
  };

  const navigate = useNavigate();
  const logout = (e) => {
    navigate("/", {
      state: {logout: true},
    });
  };
  return (
    <div id="">
      <div className="text-end">
        <div>
          <div className="Avatarlogo-container" onClick={showNavbar}>
            <img src={Loginlogo} alt="no img found" className="Avatarlogo"></img>
          </div>
          <div className="dropdown-all-Container" ref={navRef}>
            <div className="dropdown-container">
              <div
                id="circle-avatar"
              ></div>

              <h5 className="Dropdown_Profile-UserName">
                {profileInfo.userFirstName}
              </h5>
              <p className="Dropdown_Profile-UserEmail">
                {profileInfo.userEmail}
              </p>

              <hr className="dropdown-divider" />

              <div className="dropdown-options" id="">
                {profileInfo.superAdminStatus && (
                  <button className="dropdown-options-button">
                    <Link to="/admin" state={profileInfo.userEmail}
                    className="dropdown-options-link">
                      Excel Upload
                    </Link>
                  </button>
                )}
                {profileInfo.superAdminStatus && (
                  <button className="dropdown-options-button">
                    <Link to="/admin/dashboard"
                    className="dropdown-options-link"
                     state={profileInfo.userEmail}>
                      Dashboard
                    </Link>
                  </button>
                )}
                <button className="dropdown-options-button">
                  <Link to="/profile" state={profileInfo.userEmail}
                  className="dropdown-options-link">
                    Edit Profile
                  </Link>
                </button>
              </div>

              <hr className="dropdown-divider" />

              <div className="">
                <button className="dropdown-Logout_button" onClick={logout}>
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dropdown;
