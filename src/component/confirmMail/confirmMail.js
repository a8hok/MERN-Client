import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import successImage from "./img/checked-png-7.png";
import failure from "./img/failure.png";
import { axio } from '../../Config/Config';
import "./confirmMail.css";

const ConfirmMail = () => {
    const [verified, setVerified] = useState(false)
    // const {userEmail} = useParams();
    const param = useParams();

    useEffect(() => {
        const verifyEmailUrl = async() => {
            try{
                const {data} = axio.get(`/api/verifyuseremail/${param.userEmail}`)
                setVerified(true)
            }catch (err) {
                console.log(err)
            }
        }
        verifyEmailUrl()
    }, [param])

    

  return (
    <div className="verification_status_container">
        <img src={verified ? successImage: failure} alt={verified ? "success": "failure"} />
        <h1>{verified ? "success": "failure"}</h1>
        {verified && <a href="/login">Click here to go to login page</a>}
    </div>
  )
}

export default ConfirmMail
