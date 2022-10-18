import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { utils, read } from "xlsx";
import AdminNavBar from "../userProfile/AdminNavBar";
import Footer from "../Footer/footer";
import { useDispatch, useSelector } from "react-redux";
import { postUniversities } from "../../Store/Slice/ExcelToJson";
import { userProfileData } from "../../Store/Slice/UserprofilePageSlice";
import { postProgramme } from "../../Store/Slice/postProgramme";
import { useNavigate } from "react-router-dom";
import "./exceltojson.css";

window.Buffer = window.Buffer || require("buffer").Buffer;

const PostUniversity = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const locationState = useLocation().state;
  const [message, setMessage] = useState();
  const [fileName, setFileName] = useState("");
  const [selectedOpt, setselectedOpt] = useState();
  const { userData, loading } = useSelector((state) => state.userProfileInfo);
  const { postUniversitiesData } = useSelector(
    (state) => state.postUniversitiesInfo
  );
  useEffect(() => {
    dispatch(userProfileData(locationState));
  }, []);
  const options = [
    "Select any",
    "Universities",
    "Programme",
    "Quiz",
    "Topics",
    "Events",
  ];

  const readUploadFile = (e) => {
    e.preventDefault();
    if (e?.target?.files[0] && selectedOpt) {
      const reader = new FileReader();
      setFileName(e.target.files[0].name);
      reader.onload = (e) => {
        const result = e.target.result;
        const workbook = read(result, { type: "array" });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const json = utils.sheet_to_json(worksheet);
        if (selectedOpt === "Universities") {
          dispatch(postUniversities(json));
        }
        if (selectedOpt === "Programme") {
          dispatch(postProgramme(json));
        }
        setMessage("dashboard");
      };
      reader.readAsArrayBuffer(e.target.files[0]);
    } else {
      console.log("select drop down");
    }
  };

  const selectOption = (e) => {
    setselectedOpt(e.target.value);
  };

  return (
    <>
      <AdminNavBar profileInfo={userData.data} />
      <div className="admin-container">
        <select onChange={selectOption} className="admin-select">
          {options.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>
        <form className="upload-form-container">
          <label className="file-label">
            <input
              type="file"
              name="upload"
              id="upload"
              onChange={readUploadFile}
              className="admin-file-upload"
            />
          </label>
          <label>{fileName}</label>
        </form>
        {message && (
          <div className="success-snippets">
            <h2>
              File uploaded successfully, Goto{" "}
              <Link
                to="/admin/dashboard"
                className="success-file-msg"
                state={userData.data.userEmail}
              >
                {message}
              </Link>
            </h2>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};
export default PostUniversity;
