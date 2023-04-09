import React, {useState, useEffect} from 'react';

import { useSelector } from "react-redux";

// import useAuth from './useAuth';

import { useLocation, Navigate, Outlet } from 'react-router-dom';

const PrivateRoutes = () => {
    // const {auth} = useAuth()

    const [Verified, setverified] = useState({token : true})

    const { userData } = useSelector((state) => state.userProfileInfo);

    const verified = userData?.data?.verified

    useEffect(() => {
      Verified.token = verified
    }, [])

    const location = useLocation()
  return (
    !!Verified.token ? <Outlet/> : <Navigate to="/login" state={{from: location}} replace/>
  )
}

export default PrivateRoutes