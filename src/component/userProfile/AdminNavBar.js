import { Link } from "react-router-dom";
import "./adminNav.css";
import AcademyLogo from "../Login/Images/Academy.svg";
import Logo from "../About/img/Learn.svg";
import Dropdown from "../Navbar/Dropdown/Dropdown";

const AdminNavBar = ({ profileInfo }) => {
  return (
    <header className="admin-navs">
      <div className="mid-navs">
        <Link to="/landing" className="logo-img-contain">
          <img
            className="AcademyLogo"
            src={Logo}
            alt="Logo"
          ></img>
        </Link>
        <div>
          {profileInfo && <Dropdown profileInfo={profileInfo}></Dropdown>}
        </div>
      </div>
    </header>
  );
};

export default AdminNavBar;
